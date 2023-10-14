/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactElement } from 'react'
import TableOfContents from './toc/TableOfContent'

interface ArticleProps {
    content: ReactElement<any, any>
    node: TocNode[]
}

const Article: React.FC<ArticleProps> = ({ content, node }) => {
    return (
        <>
            <div className="relative inline-flex w-full">
                <div className="w-full p-2.5 md:w-2/3 md:p-10 ">
                    <article className="mdx prose prose-invert prose-h2:font-black">{content}</article>
                </div>
                <aside className="mx-auto my-10 w-1/3 max-md:hidden">
                    <TableOfContents node={node} />
                </aside>
            </div>
        </>
    )
}

export default Article
