import { compileMDX } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

export async function getPostByName(filename: string): Promise<PostProps | undefined> {
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

        const { content } = await compileMDX<{
            id: string
            title: string
            desc: string
            repo: string | null
            demo: string | null
            tags: string[]
            date: Date
            thumbnail: string
            stack: string[]
        }>({
            source: rawMDX,
        })

        const serialized = await serialize(rawMDX, {
            parseFrontmatter: true,
        })
        const frontmatter = serialized.frontmatter as unknown as Meta

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

        return postObj
    } catch (error) {
        console.error(`Error fetching post "${filename}":`, error)
        return undefined
    }
}

export async function getPostMeta(): Promise<Meta[] | undefined> {
    try {
        const res = await fetch('https://api.github.com/repos/mnauff/mdx-for-mnauff/git/trees/main?recursive=1', {
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
                const { meta } = post
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
