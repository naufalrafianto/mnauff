'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LottiePlayer from 'lottie-react'
import AnimationData from '../../public/assets/lottie/astronout/astronout.json'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Heading } from '@/components/ui/Heading'
import { UnstyledLink } from '@/components/ui/link/Link'
import { AiOutlineCode, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

const LinktreeContainer = () => {
    const data = [
        {
            name: 'My Personal Website',
            link: 'http://mnr.vercel.app/',
            icon: <AiOutlineUser />,
        },
        {
            name: 'My Project',
            link: 'http://mnr.vercel.app/project',
            icon: <AiOutlineCode />,
        },
        {
            name: 'Contact Me',
            link: 'http://mnr.vercel.app/contact',
            icon: <AiOutlineMail />,
        },
    ]
    return (
        <div
            className="min-h-screen w-screen"
            style={{
                backgroundImage: `linear-gradient(
                    25deg,
                    hsl(240, 15%, 13%) 0%,
                    hsl(233, 22%, 15%) 11%,
                    hsl(226, 30%, 17%) 23%,
                    hsl(221, 40%, 18%) 36%,
                    hsl(215, 52%, 19%) 48%,
                    hsl(221, 62%, 26%) 61%,
                    hsl(238, 46%, 36%) 74%,
                    hsl(264, 54%, 40%) 87%,
                    hsl(287, 84%, 36%) 100%
                )`,
            }}
        >
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 0, y: 100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="mx-auto flex min-h-screen max-w-[700px]  flex-col items-center gap-20 pt-20 backdrop-blur-[2px] max-md:pt-28"
                >
                    <section className="flex flex-col items-center gap-5">
                        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-black max-md:mx-auto max-md:h-[7.4rem] max-md:w-[7.5rem]">
                            <Image
                                src="https://vetveqguvymvlvhnmlzw.supabase.co/storage/v1/object/sign/profile%20pic/2f6e0998-002a-45f7-9732-0631f2156746.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHBpYy8yZjZlMDk5OC0wMDJhLTQ1ZjctOTczMi0wNjMxZjIxNTY3NDYuanBnIiwiaWF0IjoxNjg0Njc3MDA4LCJleHAiOjE3MTYyMTMwMDh9.1_Bp7MIu69qze5b9czkwNLj-ouZWhqmNMP9MrXc0Sow&t=2023-05-21T13%3A50%3A08.218Z"
                                alt="profile image"
                                width={128}
                                height={128}
                                className="absolute h-full w-full object-fill"
                            />
                            <LottiePlayer animationData={AnimationData} />
                        </div>
                        <div className="text-center">
                            <Heading className="text-2xl md:text-3xl">Naufal Rafianto</Heading>
                            <p>Frontend Developer | Computer Engineering Student</p>
                        </div>
                    </section>

                    <div className="flex w-full flex-col gap-3  max-md:items-center">
                        {data.map((item) => {
                            return (
                                <UnstyledLink
                                    key={item.name}
                                    href={item.link}
                                    className="flex w-4/5 items-center rounded bg-white p-2 pl-10 text-lg text-black shadow duration-100 hover:scale-110 md:h-10 md:w-full"
                                >
                                    <div className="inline-flex justify-center gap-3">
                                        <span className="mt-1 text-xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                </UnstyledLink>
                            )
                        })}
                    </div>
                    <Footer />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default LinktreeContainer
