'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Sparkles, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Founder() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative z-10"
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">08</span>
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
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-primary" size={28} />
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                Meet the Founder
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
              The vision behind GrowthLab and the passion driving our global startup ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Image container - clean, no background */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src="/founder-arul-murugan.jpg"
                  alt="Arul Murugan - Founder of GrowthLab"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Founder & CEO</div>
                    <div className="text-xs text-slate-600">GrowthLab</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                Arul Murugan
              </h3>
              <p className="text-xl text-primary font-semibold mb-4">Founder & CEO, GrowthLab</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/arulmurugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-primary group-hover:text-white" size={20} />
                </a>
                <a
                  href="mailto:arul@growthlab.sg"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="text-primary group-hover:text-white" size={20} />
                </a>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-gradient-to-br from-primary/10 via-amber/5 to-primary/10 border-l-4 border-primary p-8 rounded-r-2xl"
            >
              <Quote className="absolute top-4 right-4 text-primary/20" size={48} />
              <p className="text-xl text-slate-700 font-light leading-relaxed relative z-10">
                "I founded GrowthLab with a simple vision: to bridge the gap between innovation and opportunity. 
                Every entrepreneur deserves access to the right network, resources, and support to turn their ideas into reality. 
                We're building more than a platform—we're creating an ecosystem where startups thrive."
              </p>
            </motion.div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                Arul Murugan is a passionate entrepreneur and startup ecosystem builder with a deep commitment to 
                empowering founders, investors, students, and innovators worldwide. Through GrowthLab, he has created 
                a comprehensive platform that combines community, education, funding, and technology to help early-stage 
                entrepreneurs succeed.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                With a vision to create "LinkedIn for startups," Arul has built GrowthLab into a vibrant global 
                ecosystem with 2,500+ members across 50+ countries. The platform facilitates networking, business 
                development, funding opportunities, and access to essential startup resources—all in one place.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                Beyond GrowthLab, Arul is dedicated to building communities and fostering innovation. He believes 
                in the power of connections and the transformative impact of bringing together passionate entrepreneurs 
                from around the world to collaborate, learn, and grow together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

