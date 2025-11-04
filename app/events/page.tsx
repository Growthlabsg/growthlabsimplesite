import type { Metadata } from 'next'
import { EventsPageClient } from './client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Events | GrowthLab',
  description: 'Join our events, workshops, and networking sessions to connect, learn, and grow with the community. Monthly networking mixers, startup workshops, investor pitch sessions, and conferences in Singapore and online.',
  keywords: ['startup events', 'networking events Singapore', 'entrepreneurship workshops', 'startup conferences', 'founder meetups', 'investor events'],
  openGraph: {
    title: 'Events | GrowthLab',
    description: 'Join our events, workshops, and networking sessions to connect, learn, and grow with the community.',
    type: 'website',
    images: [{ url: 'https://www.growthlab.sg/growthlab-logo.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.growthlab.sg/events',
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EventsPageClient />
      <Footer />
    </main>
  )
}

