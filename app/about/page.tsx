import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - GrowthLab',
  description: 'Learn about GrowthLab, a global startup ecosystem empowering founders, investors, students, and innovators.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">About GrowthLab</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-xl leading-relaxed font-light">
              GrowthLab is a global startup ecosystem that empowers founders, investors, students, and innovators to connect, launch, and grow.
            </p>
            <p className="leading-relaxed font-light">
              We combine community, education, funding, and technology to help early-stage entrepreneurs turn ideas into scalable ventures — faster and smarter.
            </p>
            <p className="leading-relaxed font-light">
              Through AI-driven tools, mentorship programs, startup resources, and a vibrant professional network, GrowthLab bridges the gap between innovation and opportunity.
            </p>
            <p className="leading-relaxed font-light">
              Our platform functions like "LinkedIn for startups" — where members can network, build business pages, share updates, post jobs, raise funding, and discover partners worldwide.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Our Mission</h2>
            <p className="leading-relaxed font-light">
              To create the world's most connected startup ecosystem, where every entrepreneur has access to the network, resources, and support needed to succeed.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Our Vision</h2>
            <p className="leading-relaxed font-light">
              A global platform where innovation meets opportunity, and where startups from Singapore to Silicon Valley can connect, collaborate, and grow together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

