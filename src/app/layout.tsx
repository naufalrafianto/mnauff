import '@/styles/globals.css'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import * as React from 'react'
import NextTopLoader from 'nextjs-toploader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollbarProgress from '@/components/ScrollProgress'

const font = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
    title: {
        default: 'Home Page | MNR',
        template: '%s | MNR',
    },
    alternates: {
        canonical: 'https://mnauff.vercel.app',
    },
    description:
        'Personal website and blog by Muhammad Naufal Rafianto. Showcase of my projects, and some of my thoughts about technology.',
    icons: {
        icon: [
            {
                url: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon.ico',
                sizes: 'any',
            },
        ],
        apple: {
            url: '/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Muhammad Naufal Rafianto (mnauff)',
        siteName: 'Muhammad Naufal Rafianto (mnauff)',
        description:
            'Personal website and blog by Muhammad Naufal Rafianto. Showcase of my projects, and some of my thoughts about technology.',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <NextTopLoader
                    color="#2299DD"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    showSpinner={false}
                    crawl={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                <Header />
                {children}
                <ScrollbarProgress />
                <Footer />
            </body>
        </html>
    )
}
