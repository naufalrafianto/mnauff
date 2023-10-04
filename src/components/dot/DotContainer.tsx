'use client'
import { motion, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const BIG_SIZE = 40 // Reduce the maximum dot size
const SMALL_SIZE = 6 // Reduce the minimum dot size
const PER_PX = 0.5 // Reduce the responsiveness factor

const Dot = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
    const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 })
    const dotRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!dotRef.current) return
        const { x, y } = mousePos
        const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect()

        const distance = Math.sqrt(Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2))

        size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE))
    }, [mousePos])

    return (
        <div ref={dotRef} className="relative">
            <motion.div
                className="absolute rounded-full bg-blue-500 md:-translate-x-1/2 md:-translate-y-1/2"
                style={{ width: size, height: size }}
            />
        </div>
    )
}

const DotContainer = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handler)

        return () => {
            window.removeEventListener('mousemove', handler)
        }
    }, [])

    return (
        <div className="absolute bottom-0 left-0 right-0 -z-10 mx-auto flex w-full -translate-y-10 flex-wrap gap-8 opacity-50">
            {Array.from({ length: 493 }, (_, i) => (
                <Dot key={i} mousePos={mousePos}></Dot>
            ))}
        </div>
    )
}

export default DotContainer
