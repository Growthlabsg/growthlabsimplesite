import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Providers from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GrowthLab - Build. Connect. Scale.',
  description: 'A global community-driven platform for entrepreneurs, founders, and builders. Scale your startup, connect with innovators, and grow anywhere.',
  keywords: ['startup', 'entrepreneurship', 'community', 'networking', 'innovation', 'growth'],
  authors: [{ name: 'GrowthLab' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/growthlab-logo.png', sizes: 'any' },
      { url: '/growthlab-logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/growthlab-logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/growthlab-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/growthlab-logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GrowthLab',
    startupImage: '/growthlab-logo.png',
  },
  openGraph: {
    title: 'GrowthLab - Build. Connect. Scale.',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders.',
    url: 'https://www.growthlab.sg',
    siteName: 'GrowthLab',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.growthlab.sg/growthlab-logo.png',
        width: 1200,
        height: 630,
        alt: 'GrowthLab Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthLab - Build. Connect. Scale.',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders.',
    images: ['https://www.growthlab.sg/growthlab-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

