'use client'

import { motion } from 'framer-motion'
import { Network, Users, TrendingUp, MessageSquare, Shield, Zap, CheckCircle2, Briefcase, Globe, Award, GraduationCap, DollarSign, Rocket } from 'lucide-react'

const benefits = [
  {
    icon: Network,
    title: 'Professional Networking',
    description: 'Connect with founders, investors, students, and innovators worldwide. Build meaningful relationships through our LinkedIn-style platform with AI-powered matching.',
    details: 'Global network, AI matching, industry groups, virtual meetups',
  },
  {
    icon: GraduationCap,
    title: 'Education & Mentorship',
    description: 'Access exclusive talks, workshops, and mentorship programs from industry leaders. Learn best practices and gain insights to accelerate your growth.',
    details: 'Expert talks, workshops, 1:1 mentorship, knowledge base',
  },
  {
    icon: DollarSign,
    title: 'Funding Opportunities',
    description: 'Connect with angel investors, VCs, and grant programs. Our platform facilitates funding rounds and helps you find the right financial partners for your growth.',
    details: 'Investor network, grant programs, pitch events, funding tools',
  },
  {
    icon: Rocket,
    title: 'Startup Resources',
    description: 'Access comprehensive startup resources including business templates, legal guides, marketing tools, and more.',
    details: 'Resource library, templates, guides, tools',
  },
  {
    icon: Globe,
    title: 'AI-Driven Tools',
    description: 'Leverage AI-powered tools for market analysis, business plan generation, investor matching, and personalized growth recommendations.',
    details: 'AI market analysis, business plan builder, investor matching',
  },
  {
    icon: Briefcase,
    title: 'Talent & Jobs',
    description: 'Find top talent for your startup or discover new opportunities within the GrowthLab ecosystem. Post jobs, find co-founders, and build your dream team.',
    details: 'Job board, co-founder matching, talent pool, hiring resources',
  },
]

const businessInBox = [
  { name: 'Company Setup & Corp-Sec', description: 'Incorporation, corporate secretarial services, business registration.' },
  { name: 'Compliance & Filings', description: 'ACRA/IRAS filings, annual returns, regulatory compliance.' },
  { name: 'Accounting & Tax', description: 'Bookkeeping, tax planning, financial reporting.' },
  { name: 'Banking & Payments', description: 'Business account setup, multi-currency accounts, payment solutions.' },
  { name: 'HR & Legal Support', description: 'Staff augmentation, payroll, work pass applications, legal consultation.' },
  { name: 'Intellectual Property', description: 'Trademark registration, patent filing, IP protection.' },
  { name: 'Marketing & Growth', description: 'Digital marketing, brand strategy, content creation.' },
  { name: 'Tech & Development', description: 'Software development, cloud infrastructure, cybersecurity.' },
  { name: 'Virtual Office & Admin', description: 'Virtual address, administrative support, mail handling.' },
]

export default function Benefits() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-slate-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        >
          <source src="/benefits-background.mp4" type="video/mp4" />
          <source src="/benefits-background.webm" type="video/webm" />
        </video>
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 opacity-90 z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative z-10"
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-800 block leading-none">09</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Your GrowthLab Advantage
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              GrowthLab empowers founders, investors, students, and innovators to connect, launch, and grow their ventures faster and smarter.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light mb-4">{benefit.description}</p>
                  <p className="text-sm text-gray-400 font-medium">
                    <span className="text-primary">Includes:</span> {benefit.details}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Business in a Box */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-br from-gray-800 to-slate-800 rounded-3xl p-12 sm:p-16 shadow-2xl border border-gray-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Business in a Box</h3>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              All the essential services and resources you need to launch and scale your startup, all in one place with exclusive member discounts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessInBox.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className="flex flex-col items-start space-y-2 bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-white font-medium text-lg">{service.name}</span>
                </div>
                <p className="text-gray-400 text-sm font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
