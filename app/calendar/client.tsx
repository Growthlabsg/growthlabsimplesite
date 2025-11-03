'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Users,
  Plus,
  Filter,
  Search
} from 'lucide-react'
import Link from 'next/link'

// Sample events data
const sampleEvents = [
  {
    id: 1,
    title: 'GrowthLab Monthly Networking Mixer',
    date: new Date(2024, 3, 5), // April 5, 2024
    time: '6:00 PM - 8:00 PM',
    location: 'Singapore • Hybrid',
    type: 'Networking',
    attendees: '50+',
    description: 'Join fellow founders, investors, and innovators for our monthly networking event.',
    link: 'https://lu.ma/growthlab.sg',
  },
  {
    id: 2,
    title: 'AI Tools Workshop for Startups',
    date: new Date(2024, 3, 12), // April 12, 2024
    time: '2:00 PM - 4:00 PM',
    location: 'Online',
    type: 'Workshop',
    attendees: '30+',
    description: 'Learn how to leverage AI tools to accelerate your startup journey.',
    link: 'https://lu.ma/growthlab.sg',
  },
  {
    id: 3,
    title: 'Investor Pitch Practice Session',
    date: new Date(2024, 3, 18), // April 18, 2024
    time: '10:00 AM - 12:00 PM',
    location: 'Singapore',
    type: 'Workshop',
    attendees: '25+',
    description: 'Practice your pitch and get feedback from experienced investors.',
    link: 'https://lu.ma/growthlab.sg',
  },
  {
    id: 4,
    title: 'Founder Stories: Scaling Your Startup',
    date: new Date(2024, 3, 25), // April 25, 2024
    time: '7:00 PM - 9:00 PM',
    location: 'Hybrid',
    type: 'Talk',
    attendees: '100+',
    description: 'Hear from successful founders about their scaling journey.',
    link: 'https://lu.ma/growthlab.sg',
  },
  {
    id: 5,
    title: 'Student Entrepreneurship Bootcamp',
    date: new Date(2024, 4, 2), // May 2, 2024
    time: '9:00 AM - 5:00 PM',
    location: 'Singapore',
    type: 'Program',
    attendees: '40+',
    description: 'A full-day bootcamp for student entrepreneurs to launch their ideas.',
    link: 'https://lu.ma/growthlab.sg',
  },
]

const eventTypeColors = {
  Networking: 'bg-blue-100 text-blue-700 border-blue-200',
  Workshop: 'bg-purple-100 text-purple-700 border-purple-200',
  Talk: 'bg-amber-100 text-amber-700 border-amber-200',
  Program: 'bg-green-100 text-green-700 border-green-200',
  Conference: 'bg-primary/10 text-primary border-primary/30',
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function CalendarPageClient() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month')

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return sampleEvents.filter(event => {
      return (
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      )
    })
  }

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const goToToday = () => {
    const today = new Date()
    setCurrentDate(today)
    setSelectedDate(today)
  }

  // Generate calendar days
  const calendarDays = []
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentYear, currentMonth, day))
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: Date) => {
    if (!selectedDate) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : []

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-amber/5 py-12 sm:py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-primary" size={28} />
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                    My Calendar
                  </h1>
                </div>
                <p className="text-base sm:text-lg text-slate-600 font-light">
                  Manage your schedule, events, and appointments in one place.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={goToToday}
                  className="px-4 py-2 bg-white border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-primary transition-colors min-h-[44px] text-sm sm:text-base"
                >
                  Today
                </button>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors min-h-[44px] text-sm sm:text-base"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Add Event</span>
                  <span className="sm:hidden">Add</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calendar View */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  {/* Calendar Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-amber/10 p-4 sm:p-6 border-b border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={goToPreviousMonth}
                        className="p-2 hover:bg-white/50 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label="Previous month"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {months[currentMonth]} {currentYear}
                      </h2>
                      <button
                        onClick={goToNextMonth}
                        className="p-2 hover:bg-white/50 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label="Next month"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="p-4 sm:p-6">
                    {/* Week day headers */}
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {weekDays.map(day => (
                        <div
                          key={day}
                          className="text-center text-xs sm:text-sm font-semibold text-slate-600 py-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar days */}
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((date, index) => {
                        if (!date) {
                          return <div key={index} className="aspect-square" />
                        }

                        const dayEvents = getEventsForDate(date)
                        const isTodayDate = isToday(date)
                        const isSelectedDate = isSelected(date)

                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedDate(date)}
                            className={`
                              aspect-square rounded-lg border-2 transition-all duration-200
                              ${isSelectedDate 
                                ? 'border-primary bg-primary/10' 
                                : isTodayDate 
                                ? 'border-primary/50 bg-primary/5' 
                                : 'border-slate-200 hover:border-primary/30 hover:bg-slate-50'
                              }
                              ${dayEvents.length > 0 ? 'font-semibold' : 'font-normal'}
                            `}
                          >
                            <div className="flex flex-col items-center justify-center h-full p-1">
                              <span className={`text-sm sm:text-base ${isTodayDate ? 'text-primary' : 'text-slate-700'}`}>
                                {date.getDate()}
                              </span>
                              {dayEvents.length > 0 && (
                                <div className="flex gap-0.5 mt-1">
                                  {dayEvents.slice(0, 3).map((event, i) => (
                                    <div
                                      key={i}
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        eventTypeColors[event.type as keyof typeof eventTypeColors]?.split(' ')[0] || 'bg-primary'
                                      }`}
                                    />
                                  ))}
                                  {dayEvents.length > 3 && (
                                    <span className="text-[10px] text-slate-500">+{dayEvents.length - 3}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Events Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 sticky top-24">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                    {selectedDate
                      ? selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Select a date'}
                  </h3>

                  {selectedDate ? (
                    <div className="space-y-3">
                      {selectedDateEvents.length > 0 ? (
                        selectedDateEvents.map(event => {
                          const eventTypeColor = eventTypeColors[event.type as keyof typeof eventTypeColors] || 'bg-slate-100 text-slate-700 border-slate-200'
                          return (
                            <motion.div
                              key={event.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 rounded-lg border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-slate-900 text-sm sm:text-base flex-1">
                                  {event.title}
                                </h4>
                                <span className={`text-xs px-2 py-1 rounded-full border ${eventTypeColor} whitespace-nowrap ml-2`}>
                                  {event.type}
                                </span>
                              </div>
                              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                                <div className="flex items-center gap-2">
                                  <Clock size={14} className="text-primary flex-shrink-0" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin size={14} className="text-primary flex-shrink-0" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users size={14} className="text-primary flex-shrink-0" />
                                  <span>{event.attendees} attending</span>
                                </div>
                              </div>
                              {event.description && (
                                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light line-clamp-2">
                                  {event.description}
                                </p>
                              )}
                              {event.link && (
                                <a
                                  href={event.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline mt-3 font-medium"
                                >
                                  View Event
                                </a>
                              )}
                            </motion.div>
                          )
                        })
                      ) : (
                        <div className="text-center py-8 text-slate-500">
                          <Calendar className="mx-auto mb-2 text-slate-400" size={32} />
                          <p className="text-sm font-light">No events scheduled</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-500">
                      <Calendar className="mx-auto mb-2 text-slate-400" size={32} />
                      <p className="text-sm font-light">Select a date to view events</p>
                    </div>
                  )}

                  {/* Upcoming Events */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Upcoming Events</h4>
                    <div className="space-y-2">
                      {sampleEvents
                        .filter(event => event.date >= new Date())
                        .sort((a, b) => a.date.getTime() - b.date.getTime())
                        .slice(0, 5)
                        .map(event => {
                          const eventTypeColor = eventTypeColors[event.type as keyof typeof eventTypeColors] || 'bg-slate-100 text-slate-700 border-slate-200'
                          return (
                            <button
                              key={event.id}
                              onClick={() => setSelectedDate(event.date)}
                              className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:bg-slate-50"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-medium text-slate-500">
                                  {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${eventTypeColor}`}>
                                  {event.type}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-medium text-slate-900 line-clamp-1">
                                {event.title}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">{event.time}</p>
                            </button>
                          )
                        })}
                    </div>
                    <Link
                      href="/events"
                      className="block text-center text-sm text-primary hover:underline mt-4 font-medium"
                    >
                      View all events
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

