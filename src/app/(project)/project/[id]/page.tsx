import React from 'react'

import { getPostByName, getPostMeta } from '@/lib/mdx/project-post'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { merge } from '@/lib/merge'
import getFormattedDate from '@/lib/mdx/formated-date'
import TimeAgoComponent from '@/components/ui/TimeAgo'
import { StyledLink, UnstyledLink } from '@/components/ui/link/Link'

import { GoBrowser } from 'react-icons/go'
import { BsGithub } from 'react-icons/bs'
import CurrentPage from '@/components/ui/CurrentPage'
import Article from '@/components/Article'
import PostContainer from '@/container/PostContainer'
import Button from '@/components/ui/button/Button'
import { AiOutlineMail } from 'react-icons/ai'

export const revalidate = 10

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props) {
    const post = await getPostByName(`/project/${id}.mdx`)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.postObj.meta.title,
    }
}

export async function generateStaticParams() {
    const posts = await getPostMeta()

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id,
    }))
}

const Page = async ({ params: { id } }: Props) => {
    const post = await getPostByName(`/project/${id}.mdx`)

    if (!post) notFound()

    const { meta, content } = post.postObj
    const date = getFormattedDate(meta.date)
    const setDate = new Date(meta.date)

    return (
        <PostContainer>
            <section
                className={merge('w-full border-b border-b-white/25 ', 'p-2.5 pt-20 md:p-10', 'flex flex-col gap-2.5')}
            >
                <CurrentPage />
                <div className="mx-auto w-full">
                    <Image
                        width={1000}
                        height={1000}
                        alt=""
                        src={`https://res.cloudinary.com/des4tnjej/image/upload${meta.thumbnail}`}
                        className="rounded border-2 border-white object-contain"
                    />
                </div>
                <div className="text-xl font-bold md:text-3xl">{meta.title}</div>
                <p>{meta.desc}</p>
                <div>
                    Created{' '}
                    <strong>
                        <TimeAgoComponent date={setDate} />
                    </strong>
                    , {date}
                </div>
                <div className="inline-flex items-center gap-5">
                    <div className="inline-flex items-center gap-2.5">
                        <BsGithub />
                        {meta.repo ? (
                            <StyledLink href={meta.repo as string}>Repository</StyledLink>
                        ) : (
                            <p>
                                <strong>Repository :</strong> -
                            </p>
                        )}
                    </div>
                    <div className="inline-flex items-center gap-2.5">
                        <GoBrowser />
                        <StyledLink href={meta.demo as string}>Live Demo</StyledLink>
                    </div>
                </div>
            </section>
            <Article content={content} node={post.headings} />
            <UnstyledLink href="/contact" className="mx-auto">
                <Button type="button" className="gap-2 px-3 py-2" color="second">
                    <span>Contact me</span>
                    <AiOutlineMail fontSize={16} />
                </Button>
            </UnstyledLink>
        </PostContainer>
    )
}

export default Page
