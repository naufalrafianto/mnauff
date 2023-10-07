import useHighlighted from '@/hook/useHighlighted'
import React from 'react'
const TOCLink: React.FC<TocNode> = ({ value }) => {
    const id = value.toLowerCase().replace(/\s+/g, '-')

    const [highlighted, setHighlighted] = useHighlighted(id)

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setHighlighted(id)
        const targetElement = document.getElementById(id)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            <a
                href={`#${id}`}
                className={`block py-1 text-gray-400 transition-all duration-150 hover:translate-x-2.5 hover:text-white hover:underline ${
                    highlighted ? 'text-white' : ''
                }`}
                onClick={handleLinkClick}
            >
                {value}
            </a>
        </>
    )
}

export default TOCLink
