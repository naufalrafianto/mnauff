import ProjectCard from '@/components/ui/ProjectCard'
import { getFeaturedPosts } from '@/lib/mdx/project-post'
import React from 'react'

const LatestProject = async () => {
    const latestPosts = await getFeaturedPosts()

    return (
        <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
            <ProjectCard posts={latestPosts} />
        </div>
    )
}

export default LatestProject
