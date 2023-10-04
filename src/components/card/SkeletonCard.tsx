'use client'
import React from 'react'
import { merge } from '@/lib/merge'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <div className={merge(' h-80 min-w-[150px] max-w-xs rounded', 'bg-white', 'flex flex-col gap-5 p-5')}>
            <div className="h-1/2 w-full animate-pulse rounded bg-gray-200" />

            <div className="h-1/5 w-1/2 animate-pulse  rounded bg-gray-200" />
            <div className="h-1/5 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>
    )
}

export default SkeletonCard
