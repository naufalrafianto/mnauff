'use client'
import React from 'react'
import Image from 'next/image'
import { UnstyledLink } from './link/Link'
import { merge } from '@/lib/merge'
import TechStackIcon from '../TechStackIcon'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

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
                                <Image
                                    width={500}
                                    height={500}
                                    alt=""
                                    src={`https://res.cloudinary.com/des4tnjej/image/upload${item.thumbnail}`}
                                    className="rounded-t object-contain"
                                />
                            </div>
                            <div
                                className={merge(
                                    'inline-flex w-full justify-between p-2.5 text-base',
                                    'bg-white text-black'
                                )}
                            >
                                <h4 className="text-lg">{item.title}</h4>
                                <TechStackIcon
                                    color="text-black hover:text-blue-500"
                                    key={i}
                                    Tech={item.stack}
                                    IconSize="text-xl"
                                    showTooltip={false}
                                />
                            </div>

                            <p className="border-b border-dashed border-b-white p-2.5 text-sm">{item.desc}</p>
                            <div className="hover:text-custom-orange inline-flex items-center gap-2.5 p-2.5 group-hover:text-blue-500 group-hover:underline">
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

// 'use client'
// import merge from '@/utils/merge'
// import Image, { StaticImageData } from 'next/image'
// import React from 'react'
// import TechStackIcon from '../icon/tech-stack-item'
// import { motion } from 'framer-motion'
// import CustomLink from '../custom-link'
// import { ArrowRightIcon } from '@radix-ui/react-icons'

// interface CardProps {
//     children?: React.ReactNode
//     type: string
//     href: string
//     image: StaticImageData | string
//     title: string
//     icon: string[]
// }

// export default function Card(props: CardProps) {
//     return (
//         <CustomLink href={props.href} className="relative max-h-[500px] min-h-[250px] min-w-[500px] max-w-sm">
//             <motion.div
//                 whileHover={{ x: 10, y: -10 }}
//                 className={merge(
//                     'h-full w-full',
//                     'rounded bg-white font-mono text-black shadow-lg',
//                     'relative flex flex-col justify-between '
//                 )}
//             >
//                 <div
//                     className={merge(
//                         'inline-flex w-full justify-between rounded-t p-2.5 text-sm',
//                         props.type.toLocaleLowerCase() === 'website' ? 'bg-yellow-100' : 'bg-red-100'
//                     )}
//                 >
//                     <p className="capitalize tracking-widest">{props.type}</p>
//                     {props.type.toLocaleLowerCase() === 'website' ? (
//                         <CgWebsite className="text-xl" />
//                     ) : (
//                         <CiMobile1 className="text-xl" />
//                     )}
//                 </div>
//                 <div className="w-full flex-1">
//                     <Image width={200} height={300} alt="" src={props.image} className="h-full w-full object-cover" />
//                 </div>
//                 <div className="mx-5 flex items-center justify-between border-b border-dashed border-b-black p-2.5">
//                     <p>{props.title}</p>
//                     <div className="flex flex-wrap justify-center gap-2.5 ">
//                         <TechStackIcon Tech={props.icon} IconSize="text-xl" />
//                     </div>
//                 </div>
//                 <div className="hover:text-custom-orange mx-2.5 inline-flex items-center gap-2.5 p-2.5">
//                     See more
//                     <ArrowRightIcon />
//                 </div>
//             </motion.div>
//             <div className="absolute left-0 top-0 -z-10 h-full w-full rounded bg-black" />
//         </CustomLink>
//     )
// }
