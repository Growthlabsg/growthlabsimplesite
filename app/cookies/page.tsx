import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - GrowthLab',
  description: 'Cookie policy for GrowthLab platform.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg font-light">Last updated: September 2024</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">What Are Cookies</h2>
            <p className="leading-relaxed font-light">
              Cookies are small text files stored on your device when you visit our website.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">How We Use Cookies</h2>
            <p className="leading-relaxed font-light">
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Managing Cookies</h2>
            <p className="leading-relaxed font-light">
              You can control and manage cookies through your browser settings.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

