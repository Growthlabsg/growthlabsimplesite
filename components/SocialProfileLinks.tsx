'use client'

import { Linkedin, Instagram, X, Video, MessageSquare, Send, Calendar, Globe, Youtube, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface SocialProfileLinksProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact' | 'minimal'
}

const socialProfiles = [
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/company/growthlab-sg', 
    label: 'LinkedIn',
    color: 'hover:bg-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/growthlab.sg', 
    label: 'Instagram',
    color: 'hover:bg-pink-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
  { 
    icon: X, 
    href: 'https://x.com/Growthlabsg', 
    label: 'X (Twitter)',
    color: 'hover:bg-slate-700',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-700',
  },
  { 
    icon: Video, 
    href: 'https://www.tiktok.com/@growthlab.sg', 
    label: 'TikTok',
    color: 'hover:bg-black',
    bgColor: 'bg-black/10',
    textColor: 'text-black',
  },
  { 
    icon: MessageSquare, 
    href: 'https://whatsapp.com/channel/0029Vb708tt4yltRmesgcE3c', 
    label: 'WhatsApp Channel',
    color: 'hover:bg-green-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  { 
    icon: Send, 
    href: 'https://t.me/+lBbyU9K4QcRmNWE1', 
    label: 'Telegram',
    color: 'hover:bg-blue-400',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-500',
  },
  { 
    icon: Calendar, 
    href: 'https://lu.ma/growthlab.sg', 
    label: 'Events Calendar',
    color: 'hover:bg-purple-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  { 
    icon: Globe, 
    href: 'https://www.growthlab.sg', 
    label: 'Website',
    color: 'hover:bg-primary',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
]

export default function SocialProfileLinks({ 
  className = '', 
  size = 'md',
  variant = 'default'
}: SocialProfileLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socialProfiles.slice(0, 4).map((social) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="me noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${sizeClasses[size]} ${social.bgColor} ${social.textColor} rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
              aria-label={social.label}
              title={social.label}
            >
              <Icon size={iconSizes[size]} />
            </motion.a>
          )
        })}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {socialProfiles.map((social) => {
          const Icon = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="me noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-3 py-2 ${social.bgColor} ${social.textColor} rounded-lg hover:${social.color.replace('hover:', '')} hover:text-white transition-colors duration-300 text-sm font-medium`}
              aria-label={social.label}
              title={social.label}
            >
              <Icon size={16} />
              <span>{social.label}</span>
            </motion.a>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-4 gap-3 ${className}`}>
      {socialProfiles.map((social) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="me noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`${sizeClasses[size]} ${social.bgColor} ${social.textColor} rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color} group`}
            aria-label={social.label}
            title={social.label}
          >
            <Icon size={iconSizes[size]} className="group-hover:scale-110 transition-transform" />
          </motion.a>
        )
      })}
    </div>
  )
}

