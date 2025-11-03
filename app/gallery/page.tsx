import CommunityGallery from '@/components/CommunityGallery'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CommunityGallery />
      <Footer />
    </main>
  )
}

