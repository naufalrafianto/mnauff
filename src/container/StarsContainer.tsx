/* eslint-disable react/no-unknown-property */
'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { merge } from '@/lib/merge'
import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.cjs'
import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollbarProgress from '@/components/ScrollProgress'

function Star({ ...props }) {
    const ref = React.useRef<THREE.Points>(null)
    const [sphere] = React.useState(() => Float32Array.from(random.inSphere(new Float32Array(2500), { radius: 1.2 })))
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

export default function StarsContainer({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <main className={merge('min-h-screen w-screen', className)}>
            <div className="absolute -z-10 h-full w-full">
                <Canvas camera={{ position: [0, 0, 1] }} style={{ width: '100%' }}>
                    <Star />
                </Canvas>
            </div>
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    initial={{ opacity: 0, x: 0, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 0, y: 100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="mx-auto min-h-screen max-w-4xl shadow backdrop-blur-lg"
                >
                    <ScrollbarProgress />
                    <Header />
                    <>{children}</>
                    <Footer />
                </motion.div>
            </AnimatePresence>
        </main>
    )
}
