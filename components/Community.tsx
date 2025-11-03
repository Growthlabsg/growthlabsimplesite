'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Rocket, Briefcase } from 'lucide-react'

const communityTypes = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Early-stage companies building innovative solutions',
    count: '1,200+',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Established companies seeking innovation partnerships',
    count: '300+',
  },
  {
    icon: Users,
    title: 'Founders',
    description: 'Visionary leaders driving change and innovation',
    count: '800+',
  },
  {
    icon: Briefcase,
    title: 'Investors',
    description: 'Venture capitalists and angels looking for opportunities',
    count: '200+',
  },
]

export default function Community() {
  return (
    <section id="community" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Join a Thriving{' '}
            <span className="text-primary">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded individuals who share your passion for innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <type.icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-3xl font-bold text-primary">{type.count}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the Community?
            </h3>
            <p className="text-white/90 mb-6">
              Start connecting with innovators and entrepreneurs today.
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

