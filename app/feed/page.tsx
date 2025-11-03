import CommunityFeed from '@/components/CommunityFeed'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CommunityFeed />
      <Footer />
    </main>
  )
}

