'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import StructuredData from './StructuredData'
import { getReviewSchema, getAggregateRatingSchema } from '@/lib/seo/structuredData'

const testimonials = [
  {
    quote: "GrowthLab connected me with investors and partners I never would have found on my own. The community support is incredible! Within 6 months, I secured Series A funding and expanded to 3 new markets.",
    author: "Jane Doe",
    role: "Founder & CEO",
    company: "TechStart",
    location: "Singapore",
    initials: "JD",
    rating: 5,
    verified: true,
  },
  {
    quote: "The quality of startups on GrowthLab is exceptional. I've found several investment opportunities here that turned into successful exits. The platform's curation is top-notch.",
    author: "Mike Smith",
    role: "Angel Investor",
    company: "Smith Capital Partners",
    location: "United States",
    initials: "MS",
    rating: 5,
    verified: true,
  },
  {
    quote: "A platform like GrowthLab will not only benefit founders but also investors who want to contribute to creating a better world. The networking events are unparalleled, and I've built lasting relationships.",
    author: "Sarah Chen",
    role: "VC Partner",
    company: "Horizon Ventures",
    location: "Hong Kong",
    initials: "SC",
    rating: 5,
    verified: true,
  },
  {
    quote: "We are really looking forward to share our ideas and innovations and be able to connect to other forward-thinking people. The mentorship program helped us pivot successfully and double our revenue.",
    author: "David Kim",
    role: "Co-Founder",
    company: "InnovateLab",
    location: "South Korea",
    initials: "DK",
    rating: 5,
    verified: true,
  },
]

export default function Testimonials() {
  // Generate structured data for reviews and aggregate rating
  const reviewSchemas = testimonials.map(review => getReviewSchema(review))
  const aggregateRating = getAggregateRatingSchema(5, testimonials.length)
  const allSchemas = [...reviewSchemas, aggregateRating]

  return (
    <>
      <StructuredData data={allSchemas} />
      <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative"
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">10</span>
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
              Testimonials
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 font-light mb-2">
              Hear from our community members around the world
            </p>
            <p className="text-lg text-slate-500 font-light">
              Join 2,500+ entrepreneurs who are building the future
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 border border-slate-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Quote icon */}
              <Quote className="text-primary/20 mb-6 relative z-10" size={48} />
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber fill-amber" size={16} />
                ))}
              </div>

              <div className="relative z-10">
                <p className="text-slate-700 leading-relaxed text-lg font-light mb-8">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-semibold text-lg">{testimonial.initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-semibold text-slate-900 text-lg">{testimonial.author}</div>
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{testimonial.role}</div>
                    <div className="text-sm text-slate-500 font-light">{testimonial.company}</div>
                    <div className="text-xs text-slate-400 font-light mt-1">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-12 py-8 border border-slate-200 shadow-lg">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">4.9/5</div>
              <div className="text-sm text-slate-600 font-light">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">2,500+</div>
              <div className="text-sm text-slate-600 font-light">Happy Members</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
              <div className="text-sm text-slate-600 font-light">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}
