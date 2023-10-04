import { merge } from '@/lib/merge'
import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string
    className?: string
}

const Input = ({ label, className, ...props }: InputProps) => {
    return (
        <div className={merge(' flex flex-col justify-between', className)}>
            <label>{label}</label>
            <input
                className="w-full  rounded-t border-b-2 border-white bg-white bg-opacity-10 p-3 outline-none focus:border-cyan-500"
                {...props}
            />
        </div>
    )
}

export default Input
