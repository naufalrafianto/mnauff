import { merge } from '@/lib/merge'
import React from 'react'
import { Righteous } from 'next/font/google'
const headline = Righteous({ subsets: ['latin'], weight: ['400'] })

export const Heading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <h1 className={merge('text-xl font-bold uppercase', className, headline.className)}>{children}</h1>
}
