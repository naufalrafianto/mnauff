import '@/styles/globals.css'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import * as React from 'react'

const font = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
    title: {
        default: 'Home Page | MNR',
        template: '%s | MNR',
    },
    description: 'Home page',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
