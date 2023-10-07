import TechStackIcon from '@/components/TechStackIcon'
import CloudImg from '@/components/ui/CloudImg'

import { compileMDX } from 'next-mdx-remote/rsc'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

function generateTableOfContents(headings: Heading[]): TocNode[] {
    const toc: TocNode[] = []
    let currentLevel = 2 // Assuming the initial level is 2 (h2).

    const pushToToc = (node: TocNode) => {
        const lastNode = toc.length > 0 ? toc[toc.length - 1] : null
        if (lastNode === null || node.depth <= lastNode.depth) {
            // If the current heading depth is less than or equal to the last one, push to the root.
            toc.push(node)
        } else {
            // Otherwise, push as a child of the last heading.
            if (lastNode && !lastNode.children) {
                lastNode.children = []
            }
            if (lastNode) {
                lastNode.children?.push(node)
            }
        }
    }

    for (const heading of headings) {
        const depth = parseInt(heading.heading.substring(1), 10)
        const node: TocNode = {
            value: heading.content,
            depth,
            data: { hProperties: { id: `heading-${toc.length + 1}` } },
        }

        if (depth === currentLevel) {
            // Same level as the current, add to the root.
            pushToToc(node)
        } else if (depth > currentLevel) {
            // Nested level, add as a child of the last heading.
            if (toc.length > 0) {
                const lastNode = toc[toc.length - 1]
                if (!lastNode.children) {
                    lastNode.children = []
                }
                lastNode.children.push(node)
            }
        } else {
            // Lower level, find the proper parent and add as a child.
            while (toc.length > 0 && depth <= toc[toc.length - 1].depth) {
                toc.pop()
            }
            if (toc.length > 0) {
                const lastNode = toc[toc.length - 1]
                if (!lastNode.children) {
                    lastNode.children = []
                }
                lastNode.children.push(node)
            } else {
                // If toc is empty, add to the root.
                toc.push(node)
            }
        }

        currentLevel = depth
    }

    return toc
}
export async function getPostByName(
    filename: string
): Promise<{ postObj: PostProps; headings: TocNode[] } | undefined> {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/mnauff/mdx-for-mnauff/main/${filename}`, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
                'X-GitHub-ApiVersion': '2022-11-28',
            },
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const rawMDX = await res.text()
        if (rawMDX === '404: Not Found') {
            throw new Error('File not found')
        }

        const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g
        const heading = Array.from(rawMDX.matchAll(regXHeader)).map((match) => {
            const groups = match.groups as { flag: string; content: string }
            return {
                heading: `h${groups.flag.length}`,
                content: groups.content,
            }
        })

        const headings = generateTableOfContents(heading)

        const { frontmatter, content } = await compileMDX<{
            id: string
            title: string
            desc: string
            repo: string | null
            demo: string | null
            tags: string
            date: string
            thumbnail: string
            stack: string[]
        }>({
            source: rawMDX,
            components: { TechStackIcon, CloudImg },
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        rehypeSlug,
                        [
                            rehypeAutolinkHeadings,
                            {
                                behavior: 'wrap',
                            },
                        ],
                    ],
                },
            },
        })

        const id = filename.replace(/\.mdx$/, '')

        const postObj: PostProps = {
            meta: {
                id,
                title: frontmatter.title,
                desc: frontmatter.desc,
                date: frontmatter.date,
                demo: frontmatter.demo,
                tags: frontmatter.tags,
                repo: frontmatter.repo,
                thumbnail: frontmatter.thumbnail,
                stack: frontmatter.stack,
            },
            content,
        }

        return { postObj, headings }
    } catch (error) {
        console.error(`Error fetching post "${filename}":`, error)
        return undefined
    }
}

export async function getPostMeta(): Promise<Meta[] | undefined> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_API_URL as string, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
                'X-GitHub-ApiVersion': '2022-11-28',
            },
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const repoFile: GithubRoot = await res.json()

        const filesArray = repoFile.tree.map((obj) => obj.path).filter((path) => path.endsWith('.mdx'))

        const posts: Meta[] = []

        for (const file of filesArray) {
            const post = await getPostByName(file)
            if (post) {
                const { meta } = post.postObj
                posts.push(meta)
            }
        }

        return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    } catch (error) {
        console.error('Error fetching post metadata:', error)
        return undefined
    }
}

export async function getFeaturedPosts(): Promise<Meta[] | undefined> {
    try {
        const posts = await getPostMeta()

        if (!posts) {
            return undefined
        }

        const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1))

        const featuredPosts = sortedPosts.slice(0, 3)

        return featuredPosts
    } catch (error) {
        console.error('Error fetching featured posts:', error)
        return undefined
    }
}
