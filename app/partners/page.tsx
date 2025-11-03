import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Briefcase, Handshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Directory - GrowthLab',
  description: 'Connect with our trusted partners and service providers.',
}

const partners = [
  { name: 'Legal Services', category: 'Legal', description: 'Corporate law and IP services' },
  { name: 'Accounting Firms', category: 'Finance', description: 'Bookkeeping and tax services' },
  { name: 'Marketing Agencies', category: 'Marketing', description: 'Digital marketing and branding' },
  { name: 'Tech Services', category: 'Technology', description: 'Software development and cloud solutions' },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Partner Directory</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Connect with trusted service providers and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                <p className="text-slate-600 font-light">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-slate-50 rounded-xl p-8">
            <Handshake className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Become a Partner</h2>
            <p className="text-slate-600 mb-6 font-light">
              Are you a service provider? Join our partner network and reach thousands of startups.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

