import LottiePlayer from '@/components/Lottie'
import React from 'react'
import AnimationData from '../../public/assets/lottie/loading/loading.json'

const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="mb-20 h-1/2 w-1/2">
                <LottiePlayer AnimationData={AnimationData} />
            </div>
        </div>
    )
}

export default loading
