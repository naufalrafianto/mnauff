/* eslint-disable react/no-unknown-property */
'use client'
import { merge } from '@/lib/merge'
import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.cjs'
import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Star({ ...props }) {
    const ref = React.useRef<THREE.Points>(null)
    const [sphere] = React.useState(() => Float32Array.from(random.inSphere(new Float32Array(5000), { radius: 1.2 })))
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta / 5
            ref.current.rotation.x -= delta / 5
            ref.current.rotation.z -= delta / 5
        }
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

export default function StarsContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <main className={merge('relative min-h-screen w-screen', className)}>
            <Canvas
                camera={{ position: [0, 0, 1] }}
                style={{ width: '100%', height: '100%', zIndex: -10, position: 'absolute' }}
            >
                <Star />
            </Canvas>
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 0, y: 100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="mx-auto min-h-screen max-w-4xl bg-transparent backdrop-blur-sm"
                >
                    <>{children}</>
                </motion.div>
            </AnimatePresence>
        </main>
    )
}
