'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const galleryCategories = [
  { name: 'All', count: 15 },
  { name: 'Events', count: 6 },
  { name: 'Workshops', count: 4 },
  { name: 'Networking', count: 5 },
]

// Different images for each category
const communityImages = [
  // Events category
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80', 
    alt: 'GrowthLab Conference',
    category: 'Events',
    title: 'Annual Conference',
    description: 'Keynote speakers and presentations',
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80', 
    alt: 'Startup Pitch Event',
    category: 'Events',
    title: 'Pitch Competition',
    description: 'Founders presenting their ideas',
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80', 
    alt: 'Award Ceremony',
    category: 'Events',
    title: 'Award Night',
    description: 'Celebrating achievements',
  },
  // Workshops category
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80', 
    alt: 'AI Tools Workshop',
    category: 'Workshops',
    title: 'AI Tools Workshop',
    description: 'Learning new technologies',
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80', 
    alt: 'Business Strategy Workshop',
    category: 'Workshops',
    title: 'Strategy Session',
    description: 'Planning for growth',
  },
  // Networking category
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80', 
    alt: 'Monthly Networking Mixer',
    category: 'Networking',
    title: 'Monthly Mixer',
    description: 'Connecting founders',
  },
  { 
    id: 7, 
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80', 
    alt: 'Community Gathering',
    category: 'Networking',
    title: 'Community Meetup',
    description: 'Building relationships',
  },
]

export default function CommunityGalleryCompact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle image click - open modal with category images
  const handleImageClick = (imageId: number, category: string) => {
    setSelectedImageId(imageId)
    const categoryImages = communityImages.filter(img => img.category === category)
    const index = categoryImages.findIndex(img => img.id === imageId)
    setCurrentImageIndex(index >= 0 ? index : 0)
    setIsModalOpen(true)
  }

  // Get images for modal (same category as selected image)
  const modalImages = selectedImageId
    ? communityImages.filter(img => {
        const selectedImage = communityImages.find(i => i.id === selectedImageId)
        return selectedImage && img.category === selectedImage.category
      })
    : []

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => {
      if (modalImages.length === 0) return 0
      return prev === 0 ? modalImages.length - 1 : prev - 1
    })
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => {
      if (modalImages.length === 0) return 0
      return prev === modalImages.length - 1 ? 0 : prev + 1
    })
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen || modalImages.length === 0) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1))
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, modalImages.length])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <section id="community" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative z-10"
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">04</span>
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
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Community Gallery
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light mb-4">
              Join 2,500+ founders, investors, students, and innovators from around the world.
            </p>
            <p className="text-lg text-slate-500 font-light">
              See our community in action through events, workshops, and networking sessions.
            </p>
          </motion.div>
        </div>

        {/* Preview Image Grid - Shows 6 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {communityImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleImageClick(image.id, image.category)}
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group rounded-xl hover:rounded-2xl hover:shadow-2xl transition-all duration-500"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                  {image.category}
                </span>
              </div>

              {/* Content on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-sm font-bold mb-1">{image.title}</h4>
                <p className="text-xs text-white/80">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Full Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] group"
          >
            View Full Gallery
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && modalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(false)
              }}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Navigation Arrows */}
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Previous"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Next"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <Image
                  src={modalImages[currentImageIndex].src}
                  alt={modalImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="text-center text-white mb-4">
                <h3 className="text-2xl font-bold mb-2">{modalImages[currentImageIndex].title}</h3>
                <p className="text-white/80 mb-2">{modalImages[currentImageIndex].description}</p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {modalImages[currentImageIndex].category}
                </span>
              </div>

              {/* Thumbnail Navigation */}
              {modalImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
                  {modalImages.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? 'border-primary scale-110'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image Counter */}
              {modalImages.length > 1 && (
                <div className="text-white/60 text-sm mt-2">
                  {currentImageIndex + 1} / {modalImages.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

