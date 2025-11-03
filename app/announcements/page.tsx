import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Announcements from '@/components/Announcements'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Announcements - GrowthLab',
  description: 'Stay updated with the latest news and announcements from GrowthLab.',
}

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Announcements />
      <Footer />
    </main>
  )
}

