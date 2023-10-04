'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { StyledLink } from './ui/link/Link'
import { FaGithub } from 'react-icons/fa'
import { merge } from '@/lib/merge'

const HEADER_MENU = [
    { label: 'Home', href: '/' },
    { label: 'Project', href: '/project' },
    { label: 'Blog', href: '/blog' },
]

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="fixed z-30 flex w-full items-center justify-start bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md max-md:gap-16">
            <div className="inline-flex items-center gap-4">
                {HEADER_MENU.map((item, i) => {
                    return (
                        <StyledLink
                            key={i}
                            href={item.href}
                            className={merge(
                                pathname == item.href
                                    ? 'rounded border-0 bg-blue-700 bg-opacity-30 px-2 py-1 text-blue-500 after:bg-blue-500 after:hover:w-0'
                                    : ''
                            )}
                        >
                            {item.label}
                        </StyledLink>
                    )
                })}
                <div className={'inline-flex items-center gap-2'}>
                    <StyledLink href="https://github.com/NaufalRafianto/mnr" className="after:bg-blue-500">
                        Source
                    </StyledLink>
                    <FaGithub />
                </div>
            </div>
        </header>
    )
}
