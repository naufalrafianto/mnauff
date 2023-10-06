import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'
import { Metadata } from 'next'
import { getPostMeta } from '@/lib/mdx/project-post'
import ProjectCard from '@/components/ui/ProjectCard'
import { merge } from '@/lib/merge'

export const metadata: Metadata = {
    title: 'Project',
}
const Page = async () => {
    const posts = await getPostMeta()

    return (
        <StarsContainer className="h-screen">
            <Content size="default" className="pt-20">
                <h1 className={merge('rounded bg-blue-700/30 p-2.5 text-blue-500', 'text-start font-black uppercase')}>
                    Project
                </h1>
                <div className="flex flex-col items-center gap-5 p-5 md:flex-row md:flex-wrap">
                    <ProjectCard posts={posts} />
                </div>
            </Content>
        </StarsContainer>
    )
}

export default Page
