'use client'

import { Share2, Linkedin, Twitter, Facebook, Mail, Link as LinkIcon, Copy, Check, MessageCircle, Send, Share } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

export default function SocialShare({ 
  url = typeof window !== 'undefined' ? window.location.href : 'https://www.growthlab.sg',
  title = 'GrowthLab - Build. Connect. Scale.',
  description = 'A global community-driven platform for entrepreneurs, founders, and builders.',
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [hasNativeShare, setHasNativeShare] = useState(false)

  // Check if native share is available (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      setHasNativeShare('share' in navigator)
    }
  }, [])

  const shareData = {
    title,
    text: description,
    url,
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=Growthlabsg`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`,
  }

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      // Silently handle copy errors
    }
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled or error occurred - silently handle
      }
    }
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {hasNativeShare && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNativeShare}
          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
          aria-label="Share"
          title="Share"
        >
          <Share2 size={18} />
        </motion.button>
      )}
      
      <motion.a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
        aria-label="Share on Twitter"
        title="Share on Twitter"
      >
        <Twitter size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <Facebook size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <MessageCircle size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
        aria-label="Share on Telegram"
        title="Share on Telegram"
      >
        <Send size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.reddit}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
        aria-label="Share on Reddit"
        title="Share on Reddit"
      >
        <Share size={18} />
      </motion.a>

      <motion.a
        href={shareLinks.email}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
        aria-label="Share via Email"
        title="Share via Email"
      >
        <Mail size={18} />
      </motion.a>

      <motion.button
        onClick={handleCopyLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors relative"
        aria-label="Copy link"
        title="Copy link"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <Check size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="link"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
            >
              <LinkIcon size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

