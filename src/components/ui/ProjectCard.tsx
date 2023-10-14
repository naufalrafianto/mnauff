'use client'
import React from 'react'
import { UnstyledLink } from './link/Link'
import { merge } from '@/lib/merge'
import TechStackIcon from '../TechStackIcon'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import CloudImg from './CloudImg'

type CardProps = {
    posts: Meta[] | undefined
}

const ProjectCard: React.FC<CardProps> = ({ posts }) => {
    return (
        <>
            {posts?.map((item, i) => {
                return (
                    <UnstyledLink
                        href={`/${item.id}`}
                        key={i}
                        className="group min-w-[200px] max-w-sm overflow-hidden rounded transition-all duration-200  hover:scale-110"
                    >
                        <div
                            className={merge(
                                'h-full w-full',
                                'rounded border-2 border-white bg-black/70 text-white shadow-lg backdrop-blur group-hover:border-blue-500',
                                'relative flex flex-col justify-between '
                            )}
                        >
                            <div className="w-full">
                                <CloudImg
                                    className="rounded-t object-contain"
                                    src={item.thumbnail}
                                    alt="Card image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div
                                className={merge(
                                    'inline-flex w-full justify-between p-2.5 text-base',
                                    'bg-white text-black'
                                )}
                            >
                                <h4 className="text-xl">{item.title}</h4>
                                <TechStackIcon
                                    color="text-black hover:text-blue-500"
                                    key={i}
                                    Tech={item.stack}
                                    IconSize="text-xl"
                                    showTooltip={false}
                                />
                            </div>

                            <p className="border-b border-dashed border-b-white p-2.5 text-base">{item.desc}</p>

                            <div className="inline-flex items-center gap-2.5 p-2.5 group-hover:text-blue-500 group-hover:underline">
                                <span>See more</span>
                                <HiOutlineArrowNarrowRight />
                            </div>
                        </div>
                    </UnstyledLink>
                )
            })}
        </>
    )
}

export default ProjectCard
