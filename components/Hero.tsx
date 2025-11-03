'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Users, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const { scrollYProgress } = useScroll()
  // Only use transforms on desktop to reduce mobile lag
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const springY = useSpring(y, springConfig)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white pt-20 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Gradient orbs - simplified animation on mobile */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"
          animate={isMobile ? {
            opacity: [0.5, 0.7, 0.5],
          } : {
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={isMobile ? {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          } : {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-amber/10 via-amber/5 to-transparent rounded-full blur-3xl"
          animate={isMobile ? {
            opacity: [0.5, 0.7, 0.5],
          } : {
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={isMobile ? {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          } : {
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Floating icon particles - disabled on mobile */}
        {!isMobile && [
          { Icon: TrendingUp, x: '10%', y: '20%', delay: 0 },
          { Icon: Users, x: '85%', y: '30%', delay: 0.5 },
          { Icon: Globe, x: '20%', y: '70%', delay: 1 },
          { Icon: Sparkles, x: '75%', y: '75%', delay: 1.5 },
        ].map((item, i) => {
          const Icon = item.Icon
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
            >
              <Icon className="text-primary/20" size={32} />
            </motion.div>
          )
        })}
      </div>

      <motion.div
        style={isMobile ? {} : { opacity, scale, y: springY }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      >
        <div className="text-center">
          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-3 text-sm font-semibold text-slate-600 uppercase tracking-[0.2em]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={16} className="text-primary" />
              </motion.div>
              A Startup Community
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={16} className="text-amber" />
              </motion.div>
            </motion.span>
          </motion.div>

          {/* Enhanced Large Heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-[1.05] tracking-tight px-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent"
            >
              Growth
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-primary via-amber to-primary bg-clip-text text-transparent ml-2"
            >
              Lab
            </motion.span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-700 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            GrowthLab is a global startup ecosystem that empowers founders, investors, students, and innovators to{' '}
            <motion.span
              className="font-semibold text-slate-900 inline-block relative"
              whileHover={{ scale: 1.05 }}
            >
              connect, launch, and grow
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-amber to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto font-light px-4"
          >
            Turn ideas into scalable ventures — faster and smarter. Think of us as your{' '}
            <span className="font-semibold text-primary">"LinkedIn for startups."</span>
          </motion.p>

          {/* Enhanced Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
                <Link
                  href="/register"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 flex items-center space-x-2 min-h-[48px] sm:min-h-[56px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl"
                >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-amber to-primary opacity-0 group-hover:opacity-20"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Building</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#about"
                className="px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-sm text-slate-900 text-sm sm:text-base font-semibold border-2 border-slate-300 hover:border-primary transition-all duration-300 min-h-[48px] sm:min-h-[56px] flex items-center rounded-lg shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4"
          >
            {[
              { value: '2,500+', label: 'Members' },
              { value: '1,200+', label: 'Startups' },
              { value: '$500M+', label: 'Funding' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-medium"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.div>
          <div className="w-8 h-12 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 mx-auto relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
