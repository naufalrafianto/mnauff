import React from 'react'

import { Metadata } from 'next'
import LinktreeContainer from '@/container/LinktreeContainer'

export const metadata: Metadata = {
    title: 'Linktree',
}

const Page = () => {
    return <LinktreeContainer />
}

export default Page
