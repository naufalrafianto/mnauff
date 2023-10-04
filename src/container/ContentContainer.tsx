import { merge } from '@/lib/merge'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const WrapperVariants = cva(' relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-10 space-y-5', {
    variants: {
        size: {
            small: 'min-h-[12rem]',
            default: 'min-h-[24rem]',
            large: 'min-h-screen',
        },
        defaultVariants: {
            size: 'default',
        },
    },
})

interface WrapperProps
    extends React.PropsWithChildren,
        React.ComponentPropsWithoutRef<'button'>,
        VariantProps<typeof WrapperVariants> {}

const Wrapper: React.FC<WrapperProps> = ({ size, children, className }) => {
    return <section className={merge(WrapperVariants({ size, className }))}>{children}</section>
}

export default Wrapper
