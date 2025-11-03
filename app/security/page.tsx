import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Shield, Lock, Eye, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security - GrowthLab',
  description: 'Security measures and practices at GrowthLab.',
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <Shield className="mx-auto mb-4 text-primary" size={48} />
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Security</h1>
            <p className="text-xl text-slate-600 font-light">
              Your data security is our top priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Lock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Encryption</h3>
              <p className="text-slate-600 font-light">All data is encrypted in transit and at rest.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Eye className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy</h3>
              <p className="text-slate-600 font-light">We respect your privacy and protect your data.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Key className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Access Control</h3>
              <p className="text-slate-600 font-light">Secure authentication and authorization.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance</h3>
              <p className="text-slate-600 font-light">GDPR and industry-standard compliance.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

