'use client'
import React from 'react'

import { merge } from '@/lib/merge'

const ScrollbarProgress = () => {
    const [scrollTop, setScrollTop] = React.useState(0)

    const onScroll = () => {
        const windowScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (windowScroll / height) * 100
        setScrollTop(scrolled)
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={merge('fixed bottom-0 left-0 right-0 z-50 w-full ')}>
            <div className={merge('h-1 bg-white ')} style={{ width: `${scrollTop}%` }} />
        </div>
    )
}

export default ScrollbarProgress
