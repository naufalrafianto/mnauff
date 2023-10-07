/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactElement } from 'react'

interface ArticleProps {
    content: ReactElement<any, any>
}

const Article: React.FC<ArticleProps> = ({ content }) => {
    return (
        <div className="relative ">
            <article className="mdx prose prose-invert prose-h2:font-black">{content}</article>
        </div>
    )
}

export default Article
