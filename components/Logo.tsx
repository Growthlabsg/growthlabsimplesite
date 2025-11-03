'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: number
  animated?: boolean
}

export default function Logo({ className = '', size = 40, animated = false }: LogoProps) {
  return (
    <motion.div
      className={className}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.3 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Larger teal hand */}
        <motion.path
          d="M50 10 L45 25 L40 35 L38 45 L40 55 L45 60 L50 65 L55 60 L60 55 L62 45 L60 35 L55 25 Z"
          fill="#0F7377"
          initial={animated ? { pathLength: 0 } : {}}
          animate={animated ? { pathLength: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        {/* Smaller black hand nested */}
        <motion.path
          d="M50 35 L47 42 L45 48 L44 52 L45 56 L47 58 L50 60 L53 58 L55 56 L56 52 L55 48 L53 42 Z"
          fill="#000000"
          initial={animated ? { pathLength: 0, opacity: 0 } : {}}
          animate={animated ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}

