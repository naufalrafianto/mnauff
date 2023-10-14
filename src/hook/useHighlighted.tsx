import React, { useEffect, useRef, useState } from 'react'
import throttle from 'lodash/throttle' // Import lodash throttle function

type UseHighlightedReturnType = [boolean, React.Dispatch<React.SetStateAction<string>>]

export default function useHighlighted(id: string): UseHighlightedReturnType {
    const observer = useRef<IntersectionObserver | null>(null)
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: '0% 0% -50% 0px',
        })

        const elements = document.querySelectorAll('h2, h3, h4')
        elements.forEach((elem) => observer.current?.observe(elem))

        // Replace lodash debounce with lodash throttle
        const throttledSetActiveId = throttle((newActiveId: string) => {
            setActiveId(newActiveId)
        }, 0) // Adjust the throttle delay as needed

        return () => {
            observer.current?.disconnect()
            throttledSetActiveId.cancel() // Cancel throttledSetActiveId when unmounting
        }
    }, [])

    return [activeId === id, setActiveId]
}
