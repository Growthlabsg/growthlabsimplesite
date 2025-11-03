import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GrowthLab',
  description: 'Terms of service for GrowthLab platform.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg font-light">Last updated: September 2024</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Acceptance of Terms</h2>
            <p className="leading-relaxed font-light">
              By accessing and using GrowthLab, you accept and agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Use of Service</h2>
            <p className="leading-relaxed font-light">
              You agree to use GrowthLab only for lawful purposes and in accordance with these Terms and our Community Guidelines.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">User Accounts</h2>
            <p className="leading-relaxed font-light">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Us</h2>
            <p className="leading-relaxed font-light">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:hello@growthlab.sg" className="text-primary font-semibold">hello@growthlab.sg</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

