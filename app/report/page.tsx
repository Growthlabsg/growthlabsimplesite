'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { AlertTriangle, Send } from 'lucide-react'

export default function ReportPage() {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    contact: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:hello@growthlab.sg?subject=Report Issue&body=${encodeURIComponent(JSON.stringify(formData, null, 2))}`
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <AlertTriangle className="mx-auto mb-4 text-primary" size={48} />
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Report an Issue</h1>
            <p className="text-xl text-slate-600 font-light">
              Help us maintain a safe and respectful community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-slate-200 space-y-6">
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-slate-900 mb-2">
                Issue Type
              </label>
              <select
                id="type"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select an issue type</option>
                <option value="harassment">Harassment</option>
                <option value="spam">Spam</option>
                <option value="scam">Scam</option>
                <option value="inappropriate">Inappropriate Content</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                Description
              </label>
              <textarea
                id="description"
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Please provide as much detail as possible..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-semibold text-slate-900 mb-2">
                Your Email (Optional)
              </label>
              <input
                type="email"
                id="contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Submit Report <Send size={20} />
            </motion.button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

