'use client'
import React from 'react'

import TimeAgo from 'react-timeago'

const TimeAgoComponent = ({ date }: { date: Date }) => <TimeAgo date={date} />

export default TimeAgoComponent
