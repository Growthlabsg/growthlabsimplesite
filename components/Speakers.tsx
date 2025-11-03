'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const speakers = [
  {
    name: 'Vitalik Buterin',
    title: 'Ethereum Founder',
    company: 'Ethereum Foundation',
    category: 'Technology',
  },
  {
    name: 'Bryan Johnson',
    title: 'Founder',
    company: "Don't Die",
    category: 'Longevity',
  },
  {
    name: 'Ryan Petersen',
    title: 'CEO & Founder',
    company: 'Flexport',
    category: 'Logistics',
  },
  {
    name: 'Shailesh Lakhani',
    title: 'Managing Director',
    company: 'Sequoia India',
    category: 'Venture Capital',
  },
  {
    name: 'Sarah Chen',
    title: 'Co-Founder',
    company: 'The Billion Dollar Fund',
    category: 'Investment',
  },
  {
    name: 'Marcus Tan',
    title: 'Founder',
    company: 'Carousell',
    category: 'E-commerce',
  },
]

export default function Speakers() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-100">05</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-10"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              GrowthLab Speakers
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl font-light">
              Speakers at GrowthLab events, workshops, and the annual GrowthLab Conference.
            </p>
          </motion.div>
        </div>

        {/* Speakers Grid - Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                y: -8,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-lg p-8 border border-slate-200 hover:border-primary/50 transition-all duration-500 hover:shadow-xl cursor-pointer overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10 flex items-start space-x-5 mb-6">
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Award className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-semibold text-slate-900 mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {speaker.name}
                  </motion.h3>
                  <p className="text-slate-600 font-light">{speaker.title}</p>
                </div>
              </div>
              <div className="space-y-2 pt-6 border-t border-slate-100 relative z-10">
                <p className="text-sm text-slate-700 font-medium">{speaker.company}</p>
                <p className="text-sm text-slate-500 font-light">{speaker.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6 font-light text-lg">
            Past speakers include founders and investors from leading companies worldwide.
          </p>
          <motion.a
            href="/events"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 border-b-2 border-primary/30 hover:border-primary min-h-[44px] flex items-center"
          >
            View All Events →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
