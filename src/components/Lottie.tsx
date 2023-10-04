/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import Lottie from 'lottie-react'

const LottiePlayer = ({ AnimationData }: { AnimationData: any }) => {
    return <Lottie animationData={AnimationData} />
}

export default LottiePlayer
