import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import * as React from 'react'
import { StyledLink, UnstyledLink } from '@/components/ui/link/Link'
import Button from '@/components/ui/button/Button'
import { merge } from '@/lib/merge'
import TechStackIcon from '@/components/TechStackIcon'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { SiLinkedin } from 'react-icons/si'
import LatestProject from '@/container/latest/LatestProject'
import DotContainer from '@/components/dot/DotContainer'

export default async function Home() {
    return (
        <StarsContainer className="flex flex-col">
            <Content
                size="large"
                className={merge('my-20 flex  flex-col items-center justify-center gap-10', 'md:flex-row')}
            >
                <DotContainer />
                <div className={merge('mx-auto md:mx-0', 'text-center md:text-start')}>
                    <p className=" z-50 ">Wassup, I&apos;m</p>
                    <h1 className="z-50 text-8xl font-black text-white">Naufal</h1>
                    <p className="z-50 max-md:text-sm">Fullstack Developer (Website / Mobile)</p>
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
                <React.Suspense fallback={<p>Loading feed...</p>}>
                    {/* @ts-expect-error Server Component */}
                    <LatestProject />
                </React.Suspense>
                <UnstyledLink href="/project" className="px-10">
                    <Button type="button" className="gap-2 px-3 py-2" color="second">
                        <span>Discover more</span>
                        <HiOutlineArrowNarrowRight fontSize={24} />
                    </Button>
                </UnstyledLink>
            </section>
        </StarsContainer>
    )
}
