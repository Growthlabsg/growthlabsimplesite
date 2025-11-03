'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface GrowthLabLogoProps {
  size?: number
  className?: string
}

export default function GrowthLabLogo({ size = 40, className = '' }: GrowthLabLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/growthlab-logo.png"
        alt="GrowthLab Logo"
        fill
        className="object-contain"
        priority
        sizes={`${size}px`}
      />
    </motion.div>
  )
}

