'use client'
import React from 'react'

type PostContainerProps = React.PropsWithChildren

const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
    return (
        <main className="relative min-h-screen w-screen">
            <>{children}</>
        </main>
    )
}

export default PostContainer
