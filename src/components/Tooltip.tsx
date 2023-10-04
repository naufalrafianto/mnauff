'use client'
import React, { useState } from 'react'

const Tooltip: React.FC<{ content: React.ReactNode; children: React.ReactNode }> = ({ content, children }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)

    const showTooltip = () => {
        setIsTooltipVisible(true)
    }

    const hideTooltip = () => {
        setIsTooltipVisible(false)
    }

    return (
        <div className="relative inline-block">
            <div className="group relative" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                {children}
                {isTooltipVisible && (
                    <div className="absolute left-1/2 top-[-8px] z-10 -translate-x-1/2 transform rounded-md bg-gray-500 p-2 text-white">
                        {content}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tooltip
