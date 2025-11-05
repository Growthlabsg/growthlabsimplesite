'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowRight, Zap, Network, Rocket, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative z-10"
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-300 block leading-none">01</span>
            <motion.div
              className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-amber"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-primary" size={24} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight">
                What is GrowthLab?
              </h2>
            </div>
            
            <div className="space-y-8 max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light"
              >
                GrowthLab is the leading <strong className="font-semibold text-slate-900 relative">
                  <span className="relative z-10">alternative to Y Combinator, AngelList, Techstars, and 500 Startups</span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-2 bg-primary/20 -z-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </strong>. We're the best startup community and entrepreneur network for anyone looking to start a business, become an entrepreneur, or build their startup. Unlike exclusive accelerators, we provide accessible, comprehensive guidance, resources, and support for your entrepreneurial journey.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light"
              >
                Whether you're <strong className="font-semibold text-slate-900">starting something on your own</strong>, need <strong className="font-semibold text-slate-900">business guidance</strong>, or want to <strong className="font-semibold text-slate-900">become an entrepreneur</strong>, GrowthLab combines community, education, funding, and technology to help you turn ideas into scalable ventures — faster and smarter.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light"
              >
                Through <strong className="font-semibold text-slate-900">AI-driven tools, mentorship programs, startup resources, business guidance, and a vibrant professional network of 2,500+ entrepreneurs</strong>, GrowthLab bridges the gap between innovation and opportunity, helping you start your own business and succeed as an entrepreneur.
              </motion.p>

              {/* Platform Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  { icon: Network, text: 'Network with founders, investors & innovators' },
                  { icon: Rocket, text: 'Build business pages & share startup updates' },
                  { icon: Zap, text: 'Post jobs & discover talent worldwide' },
                  { icon: GraduationCap, text: 'Raise funding & discover partners' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <span className="font-light">{item.text}</span>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Enhanced Callout Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative bg-gradient-to-br from-primary/10 via-amber/5 to-primary/10 border-l-4 border-primary p-10 sm:p-12 my-16 rounded-r-2xl shadow-lg overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center gap-2 mb-4"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="text-primary" size={20} />
                  </motion.div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                    LinkedIn for startups.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-light">
                    Where members network, build business pages, share updates, post jobs, raise funding, and discover partners worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/register"
                    className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-base font-semibold tracking-wide hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 transition-all duration-300 min-h-[56px] rounded-lg shadow-xl hover:shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10">JOIN GROWTHLAB</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="relative z-10" size={20} />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-amber to-primary opacity-0 group-hover:opacity-20"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
