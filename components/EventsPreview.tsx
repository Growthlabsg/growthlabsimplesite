"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import StructuredData from "./StructuredData";
import { getEventSchema } from "@/lib/seo/structuredData";

const upcomingEvents = [
  {
    title: "🌅 NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    date: "2026-01-29",
    type: "Networking",
  },
  {
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    date: "2026-01-30",
    type: "Talk",
  },
];

export default function EventsPreview() {
  // Generate Event schemas for SEO
  const eventSchemas = upcomingEvents.map((event) =>
    getEventSchema({
      title: event.title,
      description: `Join us for ${event.title} - ${event.type} event on ${event.date}`,
      date: event.date,
      location: "Singapore",
      link: "https://lu.ma/growthlab.sg",
    })
  );

  return (
    <>
      <StructuredData data={eventSchemas} />
      <section className="framer-motion-optimized relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ isolation: "isolate" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 relative"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">
                06
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
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-primary" size={28} />
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                  Upcoming Events
                </h2>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
                Join our events, workshops, and networking sessions to connect,
                learn, and grow with the community.
              </p>
            </motion.div>
          </div>

          {/* Events Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex flex-col items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                    <span className="text-xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-600 font-light">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                  })}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] group"
            >
              View All Events
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
