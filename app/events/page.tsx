import type { Metadata } from 'next'
import { EventsPageClient } from './client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Events | GrowthLab',
  description: 'Join our events, workshops, and networking sessions to connect, learn, and grow with the community.',
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

