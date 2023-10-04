import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const merge = (...classes: ClassValue[]) => {
    return twMerge(clsx(...classes))
}
