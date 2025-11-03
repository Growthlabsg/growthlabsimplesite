'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, MapPin, ArrowRight, Target, Zap } from 'lucide-react'
import Link from 'next/link'

const sportsClubFeatures = [
  {
    icon: Users,
    title: 'Community of Athletes',
    description: 'Connect with like-minded individuals who share a passion for sports and entrepreneurship.',
  },
  {
    icon: Trophy,
    title: 'Regular Tournaments',
    description: 'Participate in friendly competitions and tournaments across various sports activities.',
  },
  {
    icon: Calendar,
    title: 'Weekly Activities',
    description: 'Join our regular sports sessions including football, basketball, badminton, and more.',
  },
  {
    icon: Target,
    title: 'Fitness Goals',
    description: 'Stay active and healthy while building your startup—balance is key to success.',
  },
]

const upcomingSportsEvents = [
  {
    sport: 'Football',
    date: '2024-04-07',
    time: '6:00 PM',
    location: 'Singapore Sports Hub',
    attendees: '20+',
  },
  {
    sport: 'Basketball',
    date: '2024-04-14',
    time: '7:00 PM',
    location: 'Community Center',
    attendees: '15+',
  },
  {
    sport: 'Badminton',
    date: '2024-04-21',
    time: '5:00 PM',
    location: 'Sports Complex',
    attendees: '12+',
  },
]

export default function FounderSportsClub() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl -ml-48 -mb-48" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative z-10"
          >
            <span className="text-7xl sm:text-8xl font-bold text-gray-800 block leading-none">09</span>
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
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-primary" size={28} />
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Founder Sports Club
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light mb-4">
              Where entrepreneurship meets athletics. Join our sports community for networking, fitness, and fun.
            </p>
            <p className="text-lg text-gray-400 font-light">
              Founded by Arul Murugan, the Founder Sports Club brings together entrepreneurs and athletes 
              for regular sports activities, tournaments, and networking events.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sportsClubFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Upcoming Sports Events */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"
          >
            Upcoming Sports Activities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingSportsEvents.map((event, index) => (
              <motion.div
                key={event.sport}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-gray-800 to-slate-800 rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{event.sport}</span>
                  <Zap className="text-amber" size={20} />
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      weekday: 'short',
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
                    <Users size={14} className="text-primary" />
                    {event.attendees} attending
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-gray-800 to-slate-800 rounded-3xl p-12 sm:p-16 shadow-2xl border border-gray-700 max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Join the Founder Sports Club
            </h3>
            <p className="text-gray-300 mb-8 text-lg font-light max-w-md mx-auto">
              Stay active, network with fellow entrepreneurs, and have fun through sports. 
              Open to all GrowthLab members.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/sports-club"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px]"
              >
                Join Sports Club
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

