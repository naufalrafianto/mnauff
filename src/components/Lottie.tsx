/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import Lottie from 'lottie-react'

const LottiePlayer = ({ AnimationData, isPlay }: { AnimationData: any; isPlay?: boolean | undefined }) => {
    return <Lottie animationData={AnimationData} disabled={isPlay} />
}

export default LottiePlayer
