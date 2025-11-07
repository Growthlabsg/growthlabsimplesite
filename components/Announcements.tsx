"use client";

import { motion } from "framer-motion";
import { Megaphone, Calendar, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const announcements = [
  {
    type: "new",
    title: "GrowthLab Platform 3.0 Launch",
    description:
      "Introducing AI-powered matching, enhanced business pages, and improved networking features.",
    date: "2025-12-10",
    category: "Platform Update",
    link: "/updates/platform-3.0",
    featured: true,
  },
  {
    type: "announcement",
    title: "GrowthLab Conference 2026",
    description:
      "Join us for our annual conference featuring 50+ speakers, workshops, and networking sessions.",
    date: "2026-01-25",
    category: "Event",
    link: "https://lu.ma/growthlab.sg",
    featured: true,
  },
  {
    type: "announcement",
    title: "New Partnership: Business in a Box",
    description:
      "Exclusive discounts on startup services including legal, accounting, and marketing support.",
    date: "2025-12-08",
    category: "Partnership",
    link: "/partners",
  },
  {
    type: "new",
    title: "Student Program Launch",
    description:
      "Special student membership tier with discounted pricing and exclusive mentorship programs.",
    date: "2026-01-15",
    category: "Program",
    link: "/students",
  },
];

export default function Announcements() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden framer-motion-optimized">
      {/* Background decoration - simple gradients without blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 relative z-10"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-300 block leading-none">
              03
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
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Megaphone
                className="text-primary"
                size={24}
                style={{
                  width: "clamp(20px, 5vw, 28px)",
                  height: "clamp(20px, 5vw, 28px)",
                }}
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight">
                News & Announcements
              </h2>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
              Stay updated with the latest platform features, events,
              partnerships, and community updates.
            </p>
          </motion.div>
        </div>

        {/* Featured Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {announcements
            .filter((item) => item.featured)
            .map((announcement, index) => (
              <motion.div
                key={announcement.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg overflow-hidden group"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        announcement.type === "new"
                          ? "bg-primary/10 text-primary"
                          : "bg-amber/10 text-amber"
                      }`}
                    >
                      {announcement.type === "new" ? (
                        <>
                          <Sparkles size={12} />
                          New
                        </>
                      ) : (
                        <>
                          <Megaphone size={12} />
                          Announcement
                        </>
                      )}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {announcement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                    {announcement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {announcement.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 font-medium flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(announcement.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={announcement.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements
            .filter((item) => !item.featured)
            .map((announcement, index) => (
              <motion.div
                key={announcement.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative bg-white rounded-xl p-6 border border-slate-200 shadow-lg overflow-hidden group"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        announcement.type === "new"
                          ? "bg-primary/10 text-primary"
                          : "bg-amber/10 text-amber"
                      }`}
                    >
                      {announcement.type === "new" ? (
                        <>
                          <Sparkles size={10} />
                          New
                        </>
                      ) : (
                        <>
                          <Megaphone size={10} />
                          Announcement
                        </>
                      )}
                    </span>
                    <span className="text-xs text-slate-500">
                      {announcement.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {announcement.title}
                  </h4>
                  <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                    {announcement.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(announcement.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={announcement.link}
                      className="text-sm text-primary font-medium hover:gap-2 inline-flex items-center gap-1.5 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px]"
          >
            View All Announcements
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
