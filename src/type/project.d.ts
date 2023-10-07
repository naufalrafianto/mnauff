/* eslint-disable @typescript-eslint/no-explicit-any */
interface Project {
    id: string
    type: string
    title: string
    detail: string
    thumbnail: string
    link: string
    stack: string
    gallery: string[]
}

interface Meta {
    id: string
    title: string
    desc: string
    repo: string | null
    demo: string | null
    tags: string
    stack: string[]
    date: string
    thumbnail: string
}

interface GithubRoot {
    sha: string
    url: string
    tree: GithubTree[]
    truncated: boolean
}

interface GithubTree {
    path: string
    mode: string
    type: string
    sha: string
    url: string
    size?: number
}

interface PostProps {
    meta: Meta
    content: ReactElement<any, string | JSXElementConstructor<any>>
}

interface Heading {
    heading: string
    content: string
}

interface TocNode {
    value: string
    depth: number
    data: { hProperties: { id: string } }
    children?: TocNode[]
}

interface TocProps {
    node: TocNode[]
}
