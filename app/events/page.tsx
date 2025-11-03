import EventsCalendar from '@/components/EventsCalendar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EventsCalendar />
      <Footer />
    </main>
  )
}

