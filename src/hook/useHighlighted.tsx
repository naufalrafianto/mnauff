import React, { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce' // Import lodash debounce function

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
            rootMargin: '0% 0% -10% 0px',
        })

        const elements = document.querySelectorAll('h2, h3, h4')
        elements.forEach((elem) => observer.current?.observe(elem))

        // Debounce setActiveId to make it more sensitive
        const debouncedSetActiveId = debounce((newActiveId: string) => {
            setActiveId(newActiveId)
        }, 100) // Adjust the debounce delay as needed

        return () => {
            observer.current?.disconnect()
            debouncedSetActiveId.cancel() // Cancel debouncedSetActiveId when unmounting
        }
    }, [])

    return [activeId === id, setActiveId]
}
