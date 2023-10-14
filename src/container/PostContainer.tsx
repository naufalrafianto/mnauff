'use client'
import React from 'react'

type PostContainerProps = React.PropsWithChildren

const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
    return (
        <main className="relative flex min-h-screen w-screen flex-col items-center">
            <>{children}</>
        </main>
    )
}

export default PostContainer
