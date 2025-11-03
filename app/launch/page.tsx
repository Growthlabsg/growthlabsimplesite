'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Rocket, FileText, Sparkles, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FileText,
    title: 'Business Pages',
    description: 'Create and customize your startup business page. Showcase your product, team, milestones, and updates. Build credibility and attract investors, partners, and customers.',
  },
  {
    icon: Rocket,
    title: 'Startup Resources',
    description: 'Access comprehensive startup resources including business templates, legal guides, marketing tools, pitch deck templates, and operational checklists to accelerate your launch.',
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Tools',
    description: 'Leverage AI-powered tools for market analysis, business plan generation, competitive research, and personalized growth recommendations tailored to your startup.',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship Programs',
    description: 'Connect with experienced founders and industry experts through our mentorship matching program. Get guidance on product development, fundraising, and scaling strategies.',
  },
  {
    icon: Briefcase,
    title: 'Share Updates',
    description: 'Keep your network informed with regular updates about your progress, milestones, partnerships, and achievements. Build anticipation and attract opportunities.',
  },
  {
    icon: Rocket,
    title: 'Launch Support',
    description: 'Access launch checklists, go-to-market strategies, beta testing platforms, and marketing resources to ensure a successful product launch.',
  },
]

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-primary/5 py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
              >
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-semibold">Launch</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Build & Share Your Startup
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 mb-8 leading-relaxed font-light">
                Create business pages, share startup updates, and showcase your venture. Access AI-driven tools, mentorship programs, and startup resources to accelerate your launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors min-h-[48px]"
                >
                  Start Building
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold border-2 border-slate-300 rounded-lg hover:border-primary transition-colors min-h-[48px]"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Everything You Need to Launch
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light">
                Comprehensive tools and resources to turn your idea into a launched startup
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Join thousands of founders building and launching their ventures on GrowthLab.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors min-h-[56px]"
            >
              Create Your Startup Page
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

