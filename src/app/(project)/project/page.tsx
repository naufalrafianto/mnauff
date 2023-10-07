import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'
import { Metadata } from 'next'
import { getPostMeta } from '@/lib/mdx/project-post'
import ProjectCard from '@/components/ui/ProjectCard'
import { merge } from '@/lib/merge'
import Loading from '@/app/loading'

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
                <div className="grid grid-cols-2 gap-5 p-5 md:flex-row md:flex-wrap">
                    <React.Suspense fallback={<Loading />}>
                        <ProjectCard posts={posts} />
                    </React.Suspense>
                </div>
            </Content>
        </StarsContainer>
    )
}

export default Page
