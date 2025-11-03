import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDPR Compliance - GrowthLab',
  description: 'GDPR compliance information for GrowthLab.',
}

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">GDPR Compliance</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg font-light">Last updated: September 2024</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Your Rights</h2>
            <p className="leading-relaxed font-light">
              Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Data Processing</h2>
            <p className="leading-relaxed font-light">
              We process your personal data in accordance with GDPR requirements and only for the purposes stated in our Privacy Policy.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Us</h2>
            <p className="leading-relaxed font-light">
              To exercise your GDPR rights, contact us at{' '}
              <a href="mailto:hello@growthlab.sg" className="text-primary font-semibold">hello@growthlab.sg</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

