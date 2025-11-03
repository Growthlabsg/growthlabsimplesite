import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

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
  openGraph: {
    title: 'GrowthLab - Build. Connect. Scale.',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders.',
    url: 'https://www.growthlab.sg',
    siteName: 'GrowthLab',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthLab - Build. Connect. Scale.',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders.',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}

