import FounderSportsClub from '@/components/FounderSportsClub'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function SportsClubPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FounderSportsClub />
      <Footer />
    </main>
  )
}

