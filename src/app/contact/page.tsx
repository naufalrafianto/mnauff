import React from 'react'

import { Metadata } from 'next'
import ContactContainer from '@/container/ContactContainer'

export const metadata: Metadata = {
    title: 'Contact Page',
}

const Page = () => {
    return <ContactContainer />
}

export default Page
