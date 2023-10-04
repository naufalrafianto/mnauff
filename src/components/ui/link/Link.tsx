'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { merge } from '@/lib/merge'
import Link from 'next/link'

interface LinkProps extends React.ComponentPropsWithoutRef<'a'>, React.PropsWithChildren {
    href: string
}

export const UnstyledLink: React.FC<LinkProps> = ({ href, rel, target, children, className }) => {
    const router = useRouter()
    const isInternalLink = href.startsWith('/') || href.startsWith('#')

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (isInternalLink) {
            router.push(href)
        } else {
            window.open(href, target ?? '_blank', rel)
        }
    }
    return (
        <Link className={merge(className)} href={href} onClick={handleClick}>
            {children}
        </Link>
    )
}

export const StyledLink: React.FC<LinkProps> = ({ className, href, children }) => {
    return (
        <UnstyledLink
            className={merge(
                'relative border-b border-dotted after:absolute after:bottom-[-1.5px] after:left-0 after:h-[.125rem] after:w-0 after:bg-blue-500 after:duration-100 after:hover:w-full',
                className
            )}
            href={href}
        >
            {children}
        </UnstyledLink>
    )
}
