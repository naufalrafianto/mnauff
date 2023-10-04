'use client'
import { TECH_LINK, TECH_STACK } from '@/constants'
import React from 'react'
import { Tooltip } from 'react-tooltip'
import { StyledLink } from './ui/link/Link'
import { merge } from '@/lib/merge'

type TechStackItem = {
    Tech: string[]
    IconSize: string
    color: string
    showTooltip: boolean
}

export default function TechStackIcon(props: TechStackItem) {
    return (
        <div className="flex gap-2.5">
            {TECH_STACK.map((item) => {
                const Icon = item.icon
                if (props.Tech?.includes(item.id)) {
                    return (
                        <div key={item.id} className="w-fit">
                            <Icon id={item.id} className={merge('cursor-pointer', props.color, props.IconSize)} />
                            {props.showTooltip ? (
                                <Tooltip
                                    style={{ fontSize: '14px', zIndex: 50 }}
                                    anchorSelect={`#${item.id}`}
                                    clickable
                                    opacity={100}
                                >
                                    <div className="marker:text-accent w-80 space-y-2.5">
                                        <h3>{item.label}</h3>
                                        <p>{item.desc}</p>
                                        <ul className="pl-5">
                                            {TECH_LINK.find((linkItem) => linkItem.id === item.id)?.link.map((link) => (
                                                <li key={link.label} className="list-disc">
                                                    <StyledLink href={link.href}>{link.label}</StyledLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Tooltip>
                            ) : null}
                        </div>
                    )
                }

                return null // Don't render if not in techChoice
            })}
        </div>
    )
}
