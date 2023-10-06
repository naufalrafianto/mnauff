import LottiePlayer from '@/components/Lottie'
import React from 'react'
import AnimationData from '~/assets/lottie/loading/loading.json'

const Loading = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <LottiePlayer AnimationData={AnimationData} />
        </div>
    )
}

export default Loading
