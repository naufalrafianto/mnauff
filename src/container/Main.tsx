'use client'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from './StarsContainer'
import { merge } from 'lodash'

interface MainProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'main'> {}

export const Main: React.FC<MainProps> = ({ children, className }) => {
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
