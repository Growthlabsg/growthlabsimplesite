import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GrowthLab',
  description: 'Privacy policy for GrowthLab platform.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg font-light">Last updated: September 2024</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Information We Collect</h2>
            <p className="leading-relaxed font-light">
              We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed font-light">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and protect our users.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Data Security</h2>
            <p className="leading-relaxed font-light">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Contact Us</h2>
            <p className="leading-relaxed font-light">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@growthlab.sg" className="text-primary font-semibold">hello@growthlab.sg</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

