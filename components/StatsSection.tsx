'use client'

import { motion } from 'framer-motion'
import { Users, Globe, TrendingUp, Sparkles } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: '+',
    label: 'Community Members',
    description: 'Active entrepreneurs and builders',
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Countries Connected',
    description: 'Global network spanning continents',
  },
  {
    icon: TrendingUp,
    value: 500,
    suffix: '+',
    label: 'Active Projects',
    description: 'Innovations in progress',
  },
  {
    icon: Sparkles,
    value: 200,
    suffix: '+',
    label: 'Investors',
    description: 'VCs and angel investors',
  },
]

export default function StatsSection() {
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
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-300 block leading-none">07</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              GrowthLab in Numbers
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 max-w-3xl leading-relaxed font-light">
              Real-time metrics from our global community
            </p>
          </motion.div>
        </div>

        {/* Stats Grid - Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-lg p-6 sm:p-8 lg:p-10 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Icon - Animated */}
                <motion.div
                  className="mb-4 sm:mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} style={{ width: 'clamp(24px, 6vw, 32px)', height: 'clamp(24px, 6vw, 32px)' }} />
                  </div>
                </motion.div>

                {/* Animated Value */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight relative z-10">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 font-light relative z-10">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
