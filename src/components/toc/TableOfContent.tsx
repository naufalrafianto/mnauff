'use client'
import React from 'react'
import TOCLink from './TocLink'

const TableOfContents: React.FC<TocProps> = ({ node }) => {
    return (
        <div className="max-md:none">
            <h2 className="text-xl font-semibold">Table of Contents</h2>
            <ul className="mt-2">
                <li className="mb-2">
                    {node.map((item, i) => (
                        <TOCLink
                            key={i}
                            value={item.value}
                            depth={0}
                            data={{
                                hProperties: {
                                    id: '',
                                },
                            }}
                        />
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default TableOfContents
