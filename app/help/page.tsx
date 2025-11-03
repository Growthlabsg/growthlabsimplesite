import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { MessageSquare, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - GrowthLab',
  description: 'Get help and support from GrowthLab.',
}

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Help Center</h1>
            <p className="text-xl text-slate-600 font-light">How can we help you today?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all">
              <MessageSquare className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Live Chat</h3>
              <p className="text-slate-600 font-light mb-4">Chat with our support team</p>
              <button className="text-primary font-semibold">Start Chat</button>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all">
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
              <p className="text-slate-600 font-light mb-4">Send us an email</p>
              <a href="mailto:hello@growthlab.sg" className="text-primary font-semibold">
                hello@growthlab.sg
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all">
              <Phone className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Support</h3>
              <p className="text-slate-600 font-light mb-4">Call us directly</p>
              <a href="tel:+6597371722" className="text-primary font-semibold">
                +65 9737 1722
              </a>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need More Help?</h2>
            <p className="text-slate-600 mb-6 font-light">
              Visit our <a href="/knowledge-base" className="text-primary font-semibold">Knowledge Base</a> for detailed guides and tutorials.
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

