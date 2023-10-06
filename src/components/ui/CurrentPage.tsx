'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { StyledLink, UnstyledLink } from './link/Link'
import { GoChevronRight } from 'react-icons/go'
import { AiFillHome } from 'react-icons/ai'

const CurrentPage = () => {
    const pathname = usePathname()
    const splitPath = pathname ? pathname.split('/') : []
    const words = splitPath[2].split('-')
    const title = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return (
        <div className="my-5 inline-flex w-fit items-center gap-2.5 rounded-xl bg-blue-700/30 p-2.5">
            <UnstyledLink href={`/`} className="text-xl font-bold capitalize text-blue-500 hover:text-white">
                <AiFillHome />
            </UnstyledLink>
            <GoChevronRight />
            <StyledLink
                href={`/${splitPath[1]}`}
                className="font-bold capitalize text-blue-500 hover:text-white hover:after:bg-white"
            >
                {splitPath[1]}
            </StyledLink>
            <GoChevronRight />
            <p>{title}</p>
        </div>
    )
}

export default CurrentPage
