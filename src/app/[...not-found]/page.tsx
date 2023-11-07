import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'
import AnimationData from '../../../public/assets/lottie/404/page_not_found.json'
import { StyledLink } from '@/components/ui/link/Link'
import { Metadata } from 'next'
import LottiePlayer from '@/components/Lottie'
export const metadata: Metadata = {
    title: 'Page not Found',
}
const Page = () => {
    return (
        <StarsContainer>
            <Content size="default">
                <LottiePlayer AnimationData={AnimationData} />
                <div className="text-center">
                    <h1>The page that you access is not found</h1>
                    <StyledLink href="/">Please back on track</StyledLink>
                </div>
            </Content>
        </StarsContainer>
    )
}

export default Page
