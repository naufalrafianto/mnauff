import Content from '@/container/ContentContainer'
import * as React from 'react'
import { StyledLink, UnstyledLink } from '@/components/ui/link/Link'
import Button from '@/components/ui/button/Button'
import { merge } from '@/lib/merge'
import TechStackIcon from '@/components/TechStackIcon'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiLinkedin } from 'react-icons/si'
import Spotify from '@/components/Spotify'
import ProjectCard from '@/components/ui/ProjectCard'
import { getPostMeta } from '@/lib/mdx/project-post'
import { Main } from '@/container/Main'
import Tes from '@/components/tes'

function getLatestPost(posts: Meta[] | undefined) {
    return posts?.slice(0, 3)
}

export default async function Home() {
    const latestPosts = await getPostMeta()
    getLatestPost(latestPosts)

    // console.log('Tes fetch api', tes)

    return (
        <Main className="flex flex-col">
            <Tes />
            <Content
                size="large"
                className={merge('flex flex-col items-center justify-center gap-2.5', 'md:my-20 md:flex-row md:gap-10')}
            >
                <div className="md:hidden">
                    <Spotify />
                </div>
                <div className={merge('mx-auto md:mx-0', 'text-center md:text-start')}>
                    <p className=" z-50 ">Wassup, I&apos;m</p>
                    <h1 className="z-50 text-8xl font-black text-white">Naufal</h1>
                    <p className="z-50 max-md:text-sm">Fullstack Developer Website.</p>
                </div>
            </Content>
            <Content size="default" className=" my-20">
                <div className="flex flex-col gap-10">
                    <h1
                        className={merge(
                            'rounded bg-blue-700/30 p-2.5 text-blue-500',
                            'text-start font-black uppercase'
                        )}
                    >
                        Get to know
                    </h1>
                    <p className="text-center md:text-start">
                        Currently, I prefer to work within the{' '}
                        <StyledLink href="https://www.imaginarycloud.com/blog/a-javascript-ecosystem-overview/">
                            <strong>JavaScript</strong> ecosystem
                        </StyledLink>
                        , and I enhance the type safety with <strong> TypeScript</strong> while developing modern web
                        applications. I use <strong>Next.js</strong>, which is basically a React-based frontend
                        framework, and I use <strong>Nest.js</strong> or <strong>Node.js</strong> for the backend.
                    </p>
                    <h4 className="text-center">Current Favorite Tech Stack</h4>
                    <div className="mx-auto">
                        <TechStackIcon
                            color="text-white hover:text-blue-500"
                            Tech={['react', 'next', 'tailwind', 'node', 'nest']}
                            IconSize="text-5xl"
                            showTooltip={true}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center py-5">
                    <UnstyledLink href="https://www.linkedin.com/in/naufal-rafianto-4159a8206/">
                        <Button type="button" className="gap-2 px-3 py-2" color="second">
                            <span>Check out my LinkedIn</span>
                            <SiLinkedin fontSize={16} />
                        </Button>
                    </UnstyledLink>
                </div>
            </Content>
            <section className="my-20 flex min-h-screen max-w-4xl flex-col justify-center  gap-10">
                <h1 className={merge('rounded bg-blue-700/30 p-2.5 text-blue-500', 'text-start font-black uppercase')}>
                    Recent Projects
                </h1>
                <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2">
                    <React.Suspense fallback={<p>Loading feed...</p>}>
                        <ProjectCard posts={latestPosts} />
                    </React.Suspense>
                </div>
                <UnstyledLink href="/project" className="px-10">
                    <Button type="button" className="gap-2 px-3 py-2" color="second">
                        <span>Discover more</span>
                        <HiOutlineArrowNarrowRight fontSize={24} />
                    </Button>
                </UnstyledLink>
            </section>
        </Main>
    )
}
