'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Filter, Loader2 } from 'lucide-react'
import Link from 'next/link'
import type { TransformedEvent } from '@/lib/types/luma'

// Fallback events in case API fails or is not configured
const fallbackEvents: TransformedEvent[] = [
  {
    id: '0',
    title: 'ROOFTOP SUNSET MIXER – Startup Surge Kickoff',
    date: '2025-11-07',
    time: '6:30 PM - 9:00 PM',
    location: 'Skysuites@Anson – 72nd Floor Sky Terrace',
    type: 'Networking',
    attendees: 'Coming soon',
    description: 'Kick off Startup Surge Fridays with GrowthLab at Singapore\'s highest private rooftop mixer – panoramic CBD sunset, cold drinks, and real founders. BYOB. 72 floors above SG.',
    link: 'https://luma.com/am60bizs',
    imageUrl: null,
    featured: true,
  },
  {
    id: '1',
    title: 'GrowthLab Monthly Networking Mixer',
    date: '2025-12-05',
    time: '6:00 PM - 8:00 PM',
    location: 'Singapore • Hybrid',
    type: 'Networking',
    attendees: '50+',
    description: 'Join fellow founders, investors, and innovators for our monthly networking event.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: true,
  },
  {
    id: '2',
    title: 'AI Tools Workshop for Startups',
    date: '2025-12-12',
    time: '2:00 PM - 4:00 PM',
    location: 'Online',
    type: 'Workshop',
    attendees: '30+',
    description: 'Learn how to leverage AI tools to accelerate your startup journey.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: true,
  },
  {
    id: '3',
    title: 'Investor Pitch Practice Session',
    date: '2025-12-18',
    time: '10:00 AM - 12:00 PM',
    location: 'Singapore',
    type: 'Workshop',
    attendees: '25+',
    description: 'Practice your pitch and get feedback from experienced investors.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: false,
  },
  {
    id: '4',
    title: 'Founder Stories: Scaling Your Startup',
    date: '2026-01-10',
    time: '7:00 PM - 9:00 PM',
    location: 'Hybrid',
    type: 'Talk',
    attendees: '100+',
    description: 'Hear from successful founders about their scaling journey.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: false,
  },
  {
    id: '5',
    title: 'Student Entrepreneurship Bootcamp',
    date: '2026-01-20',
    time: '9:00 AM - 5:00 PM',
    location: 'Singapore',
    type: 'Program',
    attendees: '40+',
    description: 'A full-day bootcamp for student entrepreneurs to launch their ideas.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: false,
  },
  {
    id: '6',
    title: 'GrowthLab Conference 2026',
    date: '2026-02-15',
    time: 'All Day',
    location: 'Singapore',
    type: 'Conference',
    attendees: '500+',
    description: 'Our annual conference featuring 50+ speakers, workshops, and networking.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: true,
  },
  {
    id: '7',
    title: 'Q1 2026 Networking Mixer',
    date: '2026-03-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Singapore',
    type: 'Networking',
    attendees: '45+',
    description: 'First quarterly networking event of 2026.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: false,
  },
  {
    id: '8',
    title: 'Startup Fundraising Workshop',
    date: '2026-04-10',
    time: '2:00 PM - 4:00 PM',
    location: 'Online',
    type: 'Workshop',
    attendees: '35+',
    description: 'Learn the fundamentals of fundraising for startups.',
    link: 'https://lu.ma/growthlab.sg',
    imageUrl: null,
    featured: false,
  },
]

export function EventsPageClient() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Past'>('Upcoming')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [events, setEvents] = useState<TransformedEvent[]>(fallbackEvents)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch events from Luma API
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('/api/events')
        const data = await response.json()
        
        console.log('API response:', data)
        
        if (data.events && data.events.length > 0) {
          setEvents(data.events)
          console.log('Successfully loaded', data.events.length, 'events from Luma')
        } else if (data.error) {
          // Show error to user
          console.error('Luma API error:', data.error, data.debug)
          setError(data.error)
          setEvents(fallbackEvents)
        } else {
          setEvents(fallbackEvents)
        }
      } catch (err) {
        console.error('Error fetching events:', err)
        setError('Failed to load events. Check your console for details.')
        setEvents(fallbackEvents) // Use fallback on error
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

const eventTypeColors = {
  Networking: 'bg-blue-100 text-blue-700 border-blue-200',
  Workshop: 'bg-purple-100 text-purple-700 border-purple-200',
  Talk: 'bg-amber-100 text-amber-700 border-amber-200',
  Program: 'bg-green-100 text-green-700 border-green-200',
  Conference: 'bg-primary/10 text-primary border-primary/30',
}

const eventTypes = ['All', 'Networking', 'Workshop', 'Talk', 'Program', 'Conference']

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate >= today
  })

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate < today
  })

  const filteredEvents =
    activeTab === 'Upcoming'
      ? upcomingEvents.filter(
          (event) => selectedType === 'All' || event.type === selectedType
        )
      : pastEvents.filter(
          (event) => selectedType === 'All' || event.type === selectedType
        )

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-primary" size={32} />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Events
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
            Join our events, workshops, and networking sessions to connect, learn, and grow with the community.
          </p>
        </div>

        {/* Tabs - Luma Style */}
        <div className="mb-8">
          <div className="flex items-center gap-6 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('Upcoming')}
              className={`relative pb-4 px-1 text-base font-medium transition-colors ${
                activeTab === 'Upcoming'
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Upcoming
              {activeTab === 'Upcoming' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('Past')}
              className={`relative pb-4 px-1 text-base font-medium transition-colors ${
                activeTab === 'Past'
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Past
              {activeTab === 'Past' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Filter - Type Selection */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Filter size={16} />
            <span className="font-medium">Filter by:</span>
          </div>
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedType === type
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="animate-spin text-primary" size={32} />
            <span className="ml-3 text-slate-600 font-medium">Loading events...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <p className="text-amber-800 text-sm mb-4">{error}</p>
            <p className="text-amber-700 text-xs">
              <strong>Tip:</strong> Luma API now requires Luma Plus ($59/month). You can use the embed widget below for free, or manually manage events.
            </p>
          </div>
        )}

        {/* Luma Embed Widget - Free Alternative */}
        {error && error.includes('Luma API') && !loading && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              View All Events on Luma
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <iframe 
                src="https://lu.ma/embed-calendar/growthlab.sg"
                width="100%" 
                height="800" 
                frameBorder="0"
                className="w-full"
                title="GrowthLab Events Calendar"
              />
            </div>
          </div>
        )}

        {/* Events Grid */}
        {!loading && (
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
            <motion.div
              key={activeTab + selectedType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Event Type & Attendees */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          eventTypeColors[event.type as keyof typeof eventTypeColors]
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
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{event.title}</h3>
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
                      {activeTab === 'Upcoming' ? 'Register' : 'View Details'}
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <Calendar className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500 font-medium">
                No {selectedType !== 'All' ? selectedType.toLowerCase() : ''} events found.
              </p>
            </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 sm:p-12 border border-slate-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Host your event with GrowthLab
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto font-light">
              Want to host an event? Reach out to our team and we'll help you organize and promote it to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://lu.ma/growthlab.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold border-2 border-slate-300 rounded-lg hover:border-primary transition-all duration-300 min-h-[48px]"
              >
                View Full Calendar
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

