import Image from 'next/image'
import React from 'react'

type CloudImg = {
    src: string
    width?: number | undefined
    height?: number | undefined
    alt: string
    className?: string
} & React.PropsWithChildren

const CloudImg: React.FC<CloudImg> = ({ height, width, alt, src, className }) => {
    return (
        <>
            <Image
                src={`https://res.cloudinary.com/des4tnjej/image/upload${src}`}
                alt={alt}
                sizes=""
                height={height}
                width={width}
                className={className}
            />
        </>
    )
}

export default CloudImg
