'use client'

import { motion } from 'framer-motion'

interface LogoHandsProps {
  className?: string
  size?: number
  animated?: boolean
}

export default function LogoHands({ className = '', size = 40, animated = false }: LogoHandsProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Larger teal hand - open palm upward */}
        <motion.path
          d="M60 15 
             L55 30 L50 40 L48 50 L50 60 
             L55 65 L60 70 
             L65 65 L70 60 L72 50 L70 40 L65 30 Z"
          fill="#0F7377"
          stroke="#0F7377"
          strokeWidth="1"
          initial={animated ? { pathLength: 0, opacity: 0 } : {}}
          animate={animated ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        
        {/* Individual fingers for larger hand */}
        <motion.path
          d="M50 40 L48 30 M55 40 L53 33 M60 40 L60 33 M65 40 L67 33 M70 40 L72 30"
          stroke="#0F7377"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        
        {/* Smaller black hand nested in the palm */}
        <motion.path
          d="M60 45 
             L57 52 L55 58 L54 62 L55 66 
             L57 68 L60 70 
             L63 68 L65 66 L66 62 L65 58 L63 52 Z"
          fill="#000000"
          initial={animated ? { pathLength: 0, opacity: 0, scale: 0 } : {}}
          animate={animated ? { pathLength: 1, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut', type: 'spring' }}
        />
        
        {/* Fingers of smaller hand */}
        <motion.path
          d="M55 58 L54 52 M60 58 L60 52 M65 58 L66 52"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
      </svg>
    </motion.div>
  )
}
