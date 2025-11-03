import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Guidelines - GrowthLab',
  description: 'Community guidelines and code of conduct for GrowthLab members.',
}

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Community Guidelines</h1>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Our Values</h2>
            <p className="leading-relaxed font-light">
              GrowthLab is built on respect, collaboration, and mutual support. We expect all members to uphold these values in all interactions.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Code of Conduct</h2>
            <ul className="list-disc pl-6 space-y-3 font-light">
              <li>Be respectful and professional in all communications</li>
              <li>Respect intellectual property and confidentiality</li>
              <li>Provide constructive feedback and support</li>
              <li>No harassment, discrimination, or hate speech</li>
              <li>No spam, scams, or misleading information</li>
              <li>Maintain confidentiality of shared information</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Enforcement</h2>
            <p className="leading-relaxed font-light">
              Violations of these guidelines may result in warnings, temporary suspension, or permanent removal from the platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

