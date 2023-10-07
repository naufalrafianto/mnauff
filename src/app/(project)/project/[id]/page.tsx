import React from 'react'

import { getPostByName, getPostMeta } from '@/lib/mdx/project-post'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { merge } from '@/lib/merge'
import getFormattedDate from '@/lib/mdx/formated-date'
import TimeAgoComponent from '@/components/ui/TimeAgo'
import { StyledLink } from '@/components/ui/link/Link'

import { GoBrowser } from 'react-icons/go'
import { BsGithub } from 'react-icons/bs'
import CurrentPage from '@/components/ui/CurrentPage'
import StarsContainer from '@/container/StarsContainer'
import Article from '@/components/Article'

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
        <StarsContainer className="">
            <section className={merge('w-full border-b border-b-white/25 p-10 pt-20', 'flex flex-col gap-2.5')}>
                <CurrentPage />
                <div className="w-full ">
                    <Image
                        width={1000}
                        height={1000}
                        alt=""
                        src={`https://res.cloudinary.com/des4tnjej/image/upload${meta.thumbnail}`}
                        className="rounded border-2 border-white object-contain"
                    />
                </div>
                <h3>{meta.title}</h3>
                <p>{meta.desc}</p>
                <div>
                    <span>Created </span>
                    <TimeAgoComponent date={setDate} />
                    <span>
                        , <strong>{date}</strong>
                    </span>
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
            <Article content={content} />
            {/* <aside className="fixed right-0 top-80 -translate-y-1/2 bg-red-500">
                <TableOfContents node={post.headings} />
            </aside> */}
        </StarsContainer>
    )
}

export default Page
