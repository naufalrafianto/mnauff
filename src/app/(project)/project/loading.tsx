import LottiePlayer from '@/components/Lottie'
import React from 'react'
import AnimationData from '~/assets/lottie/loading/loading.json'
import StarsContainer from '@/container/StarsContainer'

const Loading = () => {
    return (
        <StarsContainer className="flex h-screen items-center justify-center">
            <div className="mb-20 h-1/2 w-1/2">
                <LottiePlayer AnimationData={AnimationData} />
            </div>
        </StarsContainer>
    )
}

export default Loading
