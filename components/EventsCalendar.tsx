"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "ROOFTOP SUNSET MIXER – Startup Surge Kickoff",
    date: "2025-11-07",
    time: "6:30 PM - 9:00 PM",
    location: "Skysuites@Anson – 72nd Floor Sky Terrace",
    type: "Networking",
    attendees: "Coming soon",
    description:
      "Kick off Startup Surge Fridays with GrowthLab at Singapore's highest private rooftop mixer – panoramic CBD sunset, cold drinks, and real founders. BYOB. 72 floors above SG.",
    link: "https://luma.com/am60bizs",
    featured: true,
  },
  {
    title: "GrowthLab Monthly Networking Mixer",
    date: "2025-12-05",
    time: "6:00 PM - 8:00 PM",
    location: "Singapore • Hybrid",
    type: "Networking",
    attendees: "50+",
    description:
      "Join fellow founders, investors, and innovators for our monthly networking event.",
    link: "https://lu.ma/growthlab.sg",
    featured: true,
  },
  {
    title: "AI Tools Workshop for Startups",
    date: "2025-12-12",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    type: "Workshop",
    attendees: "30+",
    description:
      "Learn how to leverage AI tools to accelerate your startup journey.",
    link: "https://lu.ma/growthlab.sg",
    featured: true,
  },
  {
    title: "Investor Pitch Practice Session",
    date: "2025-12-18",
    time: "10:00 AM - 12:00 PM",
    location: "Singapore",
    type: "Workshop",
    attendees: "25+",
    description:
      "Practice your pitch and get feedback from experienced investors.",
    link: "https://lu.ma/growthlab.sg",
  },
  {
    title: "Founder Stories: Scaling Your Startup",
    date: "2026-01-10",
    time: "7:00 PM - 9:00 PM",
    location: "Hybrid",
    type: "Talk",
    attendees: "100+",
    description: "Hear from successful founders about their scaling journey.",
    link: "https://lu.ma/growthlab.sg",
  },
  {
    title: "Student Entrepreneurship Bootcamp",
    date: "2026-01-20",
    time: "9:00 AM - 5:00 PM",
    location: "Singapore",
    type: "Program",
    attendees: "40+",
    description:
      "A full-day bootcamp for student entrepreneurs to launch their ideas.",
    link: "https://lu.ma/growthlab.sg",
  },
  {
    title: "GrowthLab Conference 2025",
    date: "2025-02-15",
    time: "All Day",
    location: "Singapore",
    type: "Conference",
    attendees: "500+",
    description:
      "Our annual conference featuring 50+ speakers, workshops, and networking.",
    link: "https://lu.ma/growthlab.sg",
    featured: true,
  },
];

const eventTypeColors = {
  Networking: "bg-blue-100 text-blue-700 border-blue-200",
  Workshop: "bg-purple-100 text-purple-700 border-purple-200",
  Talk: "bg-amber-100 text-amber-700 border-amber-200",
  Program: "bg-green-100 text-green-700 border-green-200",
  Conference: "bg-primary/10 text-primary border-primary/30",
};

export default function EventsCalendar() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
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
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">
              05
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

        {/* Featured Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents
            .filter((event) => event.featured)
            .slice(0, 2)
            .map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-500 hover:shadow-xl overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  {/* Event Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                        eventTypeColors[
                          event.type as keyof typeof eventTypeColors
                        ]
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Users size={12} />
                      {event.attendees}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                      <span className="text-2xl font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                        <Clock size={12} />
                        {event.time}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {event.description}
                  </p>

                  {/* Location & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    >
                      Register
                      <ExternalLink
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents
            .filter((event) => !event.featured)
            .map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Event Type & Attendees */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                        eventTypeColors[
                          event.type as keyof typeof eventTypeColors
                        ]
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Users size={10} />
                      {event.attendees}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <span className="text-lg font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-[10px] font-medium text-primary">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock size={10} />
                        {event.time}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin size={10} />
                        {event.location}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary font-medium hover:gap-2 inline-flex items-center gap-1.5 transition-all"
                  >
                    View Details
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://lu.ma/growthlab.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px]"
          >
            View All Events on Calendar
            <Calendar size={18} />
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
