'use client'
import Image from 'next/image'
import React from 'react'
import LottiePlayer from './Lottie'
import useSWR from 'swr'

import AnimationData from '~/assets/lottie/audio.json'
import SpotifyLottie from '~/assets/lottie/spotify.json'

interface SpotifyData {
    isPlaying: boolean
    title: string
    album: string
    artist: string
    albumImageUrl: string
    songUrl: string
}

export default function Spotify() {
    const fetcher = (url: string) => fetch(url).then((r) => r.json())

    const { data } = useSWR<SpotifyData>('/api/spotify', fetcher)

    return (
        <main className="mx-auto inline-flex items-center">
            <div className="h-16 w-16">
                <LottiePlayer AnimationData={SpotifyLottie} isPlay={!data?.isPlaying} />
            </div>
            {data?.isPlaying ? (
                <section className="mx-auto inline-flex items-center gap-5">
                    <div>
                        <Image
                            width={40}
                            height={40}
                            src={data?.albumImageUrl || ''}
                            alt="spotify album "
                            className="rounded border border-white"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="inline-flex items-center gap-2.5">
                            <div className="h-5 w-5">
                                <LottiePlayer AnimationData={AnimationData} />
                            </div>
                            <strong>{data?.title}</strong>
                        </div>
                        <p className="text-sm opacity-50">{data?.artist}</p>
                    </div>
                </section>
            ) : (
                <span>
                    Not playing - <span className="opacity-50"> Spotify </span>
                </span>
            )}
        </main>
    )
}
