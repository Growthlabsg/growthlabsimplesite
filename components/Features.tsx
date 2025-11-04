'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Network, Rocket, DollarSign, Users, ArrowUpRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import StructuredData from './StructuredData'
import { getItemListSchema } from '@/lib/seo/structuredData'

const features = [
  {
    icon: Network,
    title: 'Connect',
    subtitle: 'Network & Build Relationships',
    description: 'Connect with founders, investors, students, and innovators worldwide. Build meaningful relationships through our LinkedIn-style networking platform with AI-powered matching.',
    gradient: 'from-blue-500/20 via-primary/10 to-blue-500/20',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    href: '/connect',
  },
  {
    icon: Rocket,
    title: 'Launch',
    subtitle: 'Build & Share Your Startup',
    description: 'Create business pages, share startup updates, and showcase your venture. Access AI-driven tools, mentorship programs, and startup resources to accelerate your launch.',
    gradient: 'from-purple-500/20 via-primary/10 to-purple-500/20',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    href: '/launch',
  },
  {
    icon: DollarSign,
    title: 'Fund',
    subtitle: 'Raise Capital & Discover Partners',
    description: 'Access funding opportunities, connect with investors, and discover strategic partners. Post fundraising needs and get matched with interested investors worldwide.',
    gradient: 'from-green-500/20 via-primary/10 to-green-500/20',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    href: '/fund',
  },
  {
    icon: Users,
    title: 'Grow',
    subtitle: 'Scale Your Venture',
    description: 'Post jobs, discover talent, access mentorship programs, and leverage our vibrant professional network. Turn your idea into a scalable venture — faster and smarter.',
    gradient: 'from-amber/20 via-primary/10 to-amber/20',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    href: '/grow',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const Icon = feature.icon

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <Link href={feature.href}>
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 40, rotateX: isMobile ? 0 : -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: isMobile ? '-200px' : '-50px' }}
        transition={{ 
          duration: isMobile ? 0.2 : 0.6, 
          delay: isMobile ? 0 : index * 0.1, 
          ease: 'easeOut' 
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={isMobile ? {} : {
          x: springX,
          y: springY,
          perspective: '1000px'
        }}
        whileHover={isMobile ? {} : { 
          y: -12,
          transition: { duration: 0.3 }
        }}
        whileTap={isMobile ? { scale: 0.98 } : {}}
        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden"
      >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-30"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          transform: 'translateX(-100%) rotate(45deg)',
        }}
        animate={{
          x: isHovered ? '200%' : '-100%',
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon - Enhanced */}
      <div className="relative z-10 mb-6 flex justify-center">
        <motion.div
          className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
          whileHover={{ rotate: 5 }}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <Icon className={`${feature.iconColor} relative z-10 group-hover:scale-110 transition-transform duration-300`} size={40} />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 text-center tracking-tight">
        {feature.title}
      </h3>

      {/* Subtitle */}
      <h4 className="relative z-10 text-sm sm:text-base font-semibold text-slate-600 mb-3 sm:mb-4 text-center">
        {feature.subtitle}
      </h4>

      {/* Description */}
      <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed text-center font-light mb-4 sm:mb-6">
        {feature.description}
      </p>

      {/* Learn More Link */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-sm">Learn more</span>
        <ArrowUpRight size={16} />
      </motion.div>
      </motion.div>
    </Link>
  )
}

export default function Features() {
  // Generate ItemList schema for Generative Engine Optimization
  const featuresListSchema = getItemListSchema({
    name: 'GrowthLab Platform Features',
    description: 'Comprehensive list of features available on the GrowthLab startup ecosystem platform',
    items: features.map(feature => ({
      name: feature.title,
      description: feature.description,
      url: `https://www.growthlab.sg${feature.href}`,
    })),
  })

  const platformFeaturesListSchema = getItemListSchema({
    name: 'GrowthLab Platform Capabilities',
    description: 'Key platform capabilities and tools for startup founders',
    items: [
      { name: 'Professional Network', description: 'Connect with founders, investors & innovators' },
      { name: 'Business Pages', description: 'Build & showcase your startup profile' },
      { name: 'Share Updates', description: 'Post milestones, news & announcements' },
      { name: 'Raise Funding', description: 'Access investors & funding opportunities' },
      { name: 'Post Jobs', description: 'Discover talent & build your team' },
      { name: 'Mentorship', description: 'Get guidance from experienced founders' },
      { name: 'AI Tools', description: 'Leverage AI-driven startup resources' },
      { name: 'Find Partners', description: 'Discover strategic partnerships' },
    ],
  })

  return (
    <>
      <StructuredData data={[featuresListSchema, platformFeaturesListSchema]} />
      <section id="features" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative"
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-100 block">02</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Why join GrowthLab?
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 max-w-3xl leading-relaxed font-light mb-3 sm:mb-4">
              Connect. Launch. Fund. Grow.
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-light">
              Everything you need to turn your idea into a scalable venture — all in one platform.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Enhanced 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Key Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Platform Features
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Everything you need to build and grow your startup
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Network, title: 'Professional Network', desc: 'Connect with founders, investors & innovators' },
              { icon: Briefcase, title: 'Business Pages', desc: 'Build & showcase your startup profile' },
              { icon: Sparkles, title: 'Share Updates', desc: 'Post milestones, news & announcements' },
              { icon: DollarSign, title: 'Raise Funding', desc: 'Access investors & funding opportunities' },
              { icon: Users, title: 'Post Jobs', desc: 'Discover talent & build your team' },
              { icon: GraduationCap, title: 'Mentorship', desc: 'Get guidance from experienced founders' },
              { icon: Rocket, title: 'AI Tools', desc: 'Leverage AI-driven startup resources' },
              { icon: Network, title: 'Find Partners', desc: 'Discover strategic partnerships' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}
