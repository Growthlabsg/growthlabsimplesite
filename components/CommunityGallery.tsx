"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Rocket,
  Globe,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import {
  galleryImages,
  getUniqueEventCounts,
  getUniqueEvents,
  getImagesByEventTitle,
  getEventImageCount,
} from "@/lib/data/gallery";

// Get unique event counts dynamically
const eventCounts = getUniqueEventCounts();
const galleryCategories = [
  { name: "All", count: eventCounts.All },
  { name: "Events", count: eventCounts.Events },
  { name: "Workshops", count: eventCounts.Workshops },
  { name: "Networking", count: eventCounts.Networking },
];

// Use gallery data from lib/data/gallery.ts
const communityImages = galleryImages;

export default function CommunityGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Get unique events (one thumbnail per event)
  const uniqueEvents = getUniqueEvents(
    activeCategory === "All" ? undefined : activeCategory
  );

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

  return (
    <section
      id="community"
      className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
    >
      {/* Background Video - Subtle */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          style={{ filter: "brightness(1.1) contrast(1.05)" }}
        >
          <source src="/gallery-background.mp4" type="video/mp4" />
          <source src="/gallery-background.webm" type="video/webm" />
        </video>
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">
              04
            </span>
            <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-amber" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-10"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-12"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {galleryCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === category.name
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Enhanced Interactive Image Grid - One thumbnail per event */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode="wait">
            {uniqueEvents.map((event, index) => {
              const imageCount = getEventImageCount(event.title);
              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  onClick={() => handleEventClick(event.title)}
                  className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer group rounded-xl shadow-lg transition-all duration-300"
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
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                    loading={index < 4 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AzjT9W1G0s4ra3vpooI12xxpIQqj9A6FWE+t6lLLI7X1yWdizHz5OSeTSlKljMxgTp0s/c/k//9k="
                    quality={85}
                  />

                  {/* Gradient overlay - always visible at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 rounded-full text-xs font-semibold text-slate-900">
                      {event.category}
                    </span>
                  </div>

                  {/* Photo count badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                      <ImageIcon size={12} />
                      {imageCount} {imageCount === 1 ? "photo" : "photos"}
                    </span>
                  </div>

                  {/* Content - always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-base font-bold mb-1 line-clamp-2">
                      {event.title}
                    </h4>
                    <p className="text-xs text-white/80">
                      {event.date} • {event.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {[
            { icon: Users, value: "2,500+", label: "Active Members" },
            { icon: TrendingUp, value: "1,200+", label: "Startups" },
            { icon: Rocket, value: "50+", label: "Events Monthly" },
            { icon: Globe, value: "50+", label: "Countries" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                <Icon className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-light">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <div className="relative inline-block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 sm:p-16 shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-amber/10 to-primary/20 opacity-50" />

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to Join the Ecosystem?
              </h3>
              <p className="text-white/90 mb-10 text-lg sm:text-xl font-light max-w-md mx-auto">
                Connect with founders, investors, and innovators. Launch your
                startup faster.
              </p>
              <div className="transition-transform duration-300 hover:scale-105">
                <Link
                  href="https://app.growthlab.sg/signup"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-lg font-semibold transition-all duration-300 min-h-[56px] shadow-xl"
                >
                  Join GrowthLab Now
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
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
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-3 sm:mb-4">
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
    </section>
  );
}
