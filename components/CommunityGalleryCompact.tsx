"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import {
  galleryImages,
  getUniqueEvents,
  getImagesByEventTitle,
  getEventImageCount,
} from "@/lib/data/gallery";

// Use gallery data from lib/data/gallery.ts
const communityImages = galleryImages;

// Get unique events for display
const uniqueEvents = getUniqueEvents();

export default function CommunityGalleryCompact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Track component mount for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle event click - open modal with all images from that event
  const handleEventClick = (eventTitle: string) => {
    setSelectedEventTitle(eventTitle);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  // Get images for modal (all images from selected event)
  const modalImages = selectedEventTitle
    ? getImagesByEventTitle(selectedEventTitle)
    : [];

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => {
      if (modalImages.length === 0) return 0;
      return prev === 0 ? modalImages.length - 1 : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => {
      if (modalImages.length === 0) return 0;
      return prev === modalImages.length - 1 ? 0 : prev + 1;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen || modalImages.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? modalImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          prev === modalImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, modalImages.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Modal content to be rendered via portal
  const modalContent = (
    <AnimatePresence>
      {isModalOpen && modalImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm min-h-[44px] min-w-[44px]"
            aria-label="Close"
          >
            <X className="text-white" size={20} />
          </button>

          {/* Navigation Arrows */}
          {modalImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 sm:left-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm min-h-[44px] min-w-[44px]"
                aria-label="Previous"
              >
                <ChevronLeft className="text-white" size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm min-h-[44px] min-w-[44px]"
                aria-label="Next"
              >
                <ChevronRight className="text-white" size={20} />
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
            <div className="text-center text-white mb-3 sm:mb-4 px-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                {modalImages[currentImageIndex].title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-2">
                {modalImages[currentImageIndex].description}
              </p>
              <span className="inline-block px-2 sm:px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold">
                {modalImages[currentImageIndex].category}
              </span>
            </div>

            {/* Thumbnail Navigation */}
            {modalImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full px-2">
                {modalImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all min-h-[44px] min-w-[44px] ${
                      idx === currentImageIndex
                        ? "border-primary scale-110"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, 80px"
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
  );

  return (
    <>
      <section
        id="community"
        className="framer-motion-optimized relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 relative z-10"
            >
              <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">
                04
              </span>
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-10"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
                Community Gallery
              </h2>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light mb-4">
                Join 2,500+ founders, investors, students, and innovators from
                around the world.
              </p>
              <p className="text-lg text-slate-500 font-light">
                See our community in action through events, workshops, and
                networking sessions.
              </p>
            </motion.div>
          </div>

          {/* Preview Image Grid - Shows unique events */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {uniqueEvents.map((event, index) => {
              const imageCount = getEventImageCount(event.title);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  onClick={() => handleEventClick(event.title)}
                  className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer group rounded-xl shadow-lg"
                  style={{
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                >
                  <Image
                    src={event.src}
                    alt={event.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                    loading={index < 4 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AzjT9W1G0s4ra3vpooI12xxpIQqj9A6FWE+t6lLLI7X1yWdizHz5OSeTSlKljMxgTp0s/c/k//9k="
                    quality={85}
                  />

                  {/* Gradient overlay - always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                      {event.category}
                    </span>
                  </div>

                  {/* Photo count badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                      <ImageIcon size={12} />
                      {imageCount}
                    </span>
                  </div>

                  {/* Content - always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-sm font-bold mb-1 line-clamp-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-white/80">{event.date}</p>
                  </div>
                </motion.div>
              );
            })}
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
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Render modal via portal to document.body for fullscreen */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
