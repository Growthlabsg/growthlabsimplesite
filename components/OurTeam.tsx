'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Sparkles, Users, Globe, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import GrowthLabLogo from './GrowthLabLogo'

interface Venture {
  name: string
  url: string
  logo?: string
  icon?: React.ReactNode
}

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string[]
  quote: string
  image: string
  linkedin?: string
  email?: string
  portfolio?: string
  ventures?: Venture[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Arul Murugan',
    role: 'Founder & CEO',
    bio: [
      'Arul Murugan is a passionate entrepreneur and startup ecosystem builder with a deep commitment to empowering founders, investors, students, and innovators worldwide. Through GrowthLab, he has created a comprehensive platform that combines community, education, funding, and technology to help early-stage entrepreneurs succeed.',
      'With a vision to create "LinkedIn for startups," Arul has built GrowthLab into a vibrant global ecosystem with 2,500+ members across 50+ countries. The platform facilitates networking, business development, funding opportunities, and access to essential startup resources—all in one place.',
      'Beyond GrowthLab, Arul is dedicated to building communities and fostering innovation. He believes in the power of connections and the transformative impact of bringing together passionate entrepreneurs from around the world to collaborate, learn, and grow together.',
    ],
    quote: 'I founded GrowthLab with a simple vision: to bridge the gap between innovation and opportunity. Every entrepreneur deserves access to the right network, resources, and support to turn their ideas into reality. We\'re building more than a platform—we\'re creating an ecosystem where startups thrive.',
    image: '/founder-arul-murugan.jpg',
    linkedin: 'https://www.linkedin.com/in/arul-murugan-525b321a7/',
    email: 'arul@growthlab.sg',
    portfolio: 'https://www.walkwitharul.com',
    ventures: [
      {
        name: 'GrowthLab',
        url: 'https://www.growthlab.sg',
        icon: <GrowthLabLogo size={20} />,
      },
      {
        name: 'VELANTEC',
        url: 'https://www.velantec.com',
        icon: <Globe className="text-primary" size={20} />,
      },
      {
        name: 'MrAssistant.Ai',
        url: 'https://www.mrassistant.ai',
        icon: <Globe className="text-primary" size={20} />,
      },
      {
        name: 'ONESTOPSG',
        url: 'https://www.onestopsg.com',
        icon: <Globe className="text-primary" size={20} />,
      },
      {
        name: 'Aval.sg',
        url: 'https://www.aval.sg',
        icon: <Globe className="text-primary" size={20} />,
      },
      {
        name: 'Avan.sg',
        url: 'https://www.avan.sg',
        icon: <Globe className="text-primary" size={20} />,
      },
      {
        name: 'BuzzzBuzzz',
        url: 'https://www.buzzzbuzzz.com',
        icon: <Globe className="text-primary" size={20} />,
      },
    ],
  },
  {
    id: 2,
    name: 'Ansh Garg',
    role: 'Chief Technology Officer',
    bio: [
      'Ansh Garg is a visionary technologist and engineering leader with a passion for building scalable platforms that empower entrepreneurs. As GrowthLab\'s Chief Technology Officer, he leads the development of innovative solutions that power the "LinkedIn for startups" platform, enabling 2,500+ members to connect, launch, fund, and grow their ventures.',
      'With extensive expertise in software architecture, AI-driven systems, and cloud infrastructure, Ansh oversees the technical strategy that makes GrowthLab a seamless, intelligent platform. He is responsible for developing cutting-edge features including AI-powered matching, analytics dashboards, and automation tools that help startups accelerate their growth journey.',
      'Ansh believes that technology should be an enabler, not a barrier. His focus on creating intuitive, powerful tools ensures that founders can spend less time navigating complex systems and more time building their businesses. Under his leadership, GrowthLab continues to evolve as a platform that combines cutting-edge technology with user-centric design to deliver exceptional value to the global startup community.',
    ],
    quote: 'Technology at its best is invisible—it works seamlessly in the background so entrepreneurs can focus on what matters most: building, connecting, and growing. At GrowthLab, we\'re not just building a platform; we\'re creating the technological foundation for the next generation of startups.',
    image: '/team-ansh-garg.jpg',
    linkedin: 'https://www.linkedin.com/in/ansh-garg-877785136',
    email: 'anshgarg@growthlab.sg',
  },
  {
    id: 3,
    name: 'Iniya Sundararajan',
    role: 'Community Advisor',
    bio: [
      'Iniya Sundararajan is a dedicated community builder and advisor with a passion for fostering meaningful connections and empowering entrepreneurs. As GrowthLab\'s Community Advisor, she plays a pivotal role in nurturing the vibrant ecosystem of 2,500+ members across 50+ countries.',
      'With a deep understanding of community dynamics and startup ecosystems, Iniya works closely with founders, investors, and innovators to create inclusive spaces where ideas flourish and relationships thrive. Her expertise in community engagement, event coordination, and member support has been instrumental in building GrowthLab into a trusted platform for startup professionals worldwide.',
      'Iniya believes that strong communities are the foundation of successful startups. She focuses on creating authentic connections, facilitating knowledge sharing, and ensuring every member feels valued and supported in their entrepreneurial journey. Through her work, she helps transform GrowthLab from a platform into a true ecosystem where collaboration and growth go hand in hand.',
    ],
    quote: 'Community is not just about bringing people together—it\'s about creating an environment where every member can thrive, learn, and grow. At GrowthLab, we\'re building something more than a network; we\'re cultivating a movement of entrepreneurs who support and uplift each other.',
    image: '/team-iniya-sundararajan.jpg',
    linkedin: 'https://www.linkedin.com/in/iniya-sundararajan-54523a120',
    email: 'iniya@growthlab.sg',
  },
  // Add more team members here in the future
]

export default function OurTeam() {
  return (
    <>
      <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Numbered Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-2 relative z-10"
            >
              <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">08</span>
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
                <Sparkles className="text-primary" size={28} />
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                  Our Team
                </h2>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">
                The passionate individuals behind GrowthLab, driving our mission to empower startups worldwide.
              </p>
            </motion.div>
          </div>

          {/* Team Members */}
          <div className="space-y-20 lg:space-y-24">
            {teamMembers.map((member, memberIndex) => (
              <div key={member.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center pb-8 lg:pb-12">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: memberIndex * 0.2, ease: 'easeOut' }}
                  className="relative w-full lg:w-auto"
                >
                  <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0">
                    {/* Image container - clean, no background */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={memberIndex === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    {/* Floating badge - adjusted positioning */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + memberIndex * 0.2 }}
                      className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl border border-slate-200 z-10"
                    >
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles className="text-primary" size={20} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs lg:text-sm font-semibold text-slate-900 truncate">{member.role}</div>
                          <div className="text-[10px] lg:text-xs text-slate-600">GrowthLab</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.2 + memberIndex * 0.2, ease: 'easeOut' }}
                  className="space-y-6 lg:space-y-8 w-full"
                >
                  {/* Name and Title */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 lg:mb-3 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-lg lg:text-xl text-primary font-semibold mb-4 lg:mb-6">{member.role}</p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3 mb-4 lg:mb-6">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:scale-110 flex-shrink-0"
                          aria-label="LinkedIn"
                          title="LinkedIn"
                        >
                          <Linkedin className="text-primary group-hover:text-white" size={20} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:scale-110 flex-shrink-0"
                          aria-label="Email"
                          title="Email"
                        >
                          <Mail className="text-primary group-hover:text-white" size={20} />
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300 group hover:scale-110 flex-shrink-0"
                          aria-label="Portfolio"
                          title="Personal Portfolio"
                        >
                          <Globe className="text-primary group-hover:text-white" size={20} />
                        </a>
                      )}
                    </div>

                    {/* Ventures */}
                    {member.ventures && member.ventures.length > 0 && (
                      <div className="mb-4 lg:mb-6">
                        <p className="text-xs lg:text-sm font-semibold text-slate-600 mb-2 lg:mb-3 uppercase tracking-wider">Ventures</p>
                        <div className="flex flex-wrap items-center gap-2 lg:gap-2.5">
                          {member.ventures.map((venture, vIndex) => (
                            <motion.a
                              key={vIndex}
                              href={venture.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="group relative inline-flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3 py-1.5 lg:py-2 bg-white border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300"
                              title={venture.name}
                            >
                              <div className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0">
                                {venture.icon || <Globe className="text-primary" size={14} />}
                              </div>
                              <span className="text-[10px] lg:text-xs font-semibold text-slate-700 group-hover:text-primary transition-colors whitespace-nowrap">
                                {venture.name}
                              </span>
                              <ExternalLink className="text-slate-400 group-hover:text-primary transition-colors flex-shrink-0" size={10} />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + memberIndex * 0.2 }}
                    className="relative bg-gradient-to-br from-primary/10 via-amber/5 to-primary/10 border-l-4 border-primary p-6 lg:p-8 rounded-r-2xl"
                  >
                    <p className="text-lg lg:text-xl text-slate-700 font-light leading-relaxed relative z-10">
                      "{member.quote}"
                    </p>
                  </motion.div>

                  {/* Bio */}
                  <div className="space-y-3 lg:space-y-4">
                    {member.bio.map((paragraph, index) => (
                      <p key={index} className="text-base lg:text-lg text-slate-700 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
              <Users className="text-primary" size={28} />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight">
                All Team Members
              </h2>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Meet everyone who makes GrowthLab possible
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-3 lg:p-4">
                    <h3 className="font-bold text-slate-900 mb-1 text-sm lg:text-base truncate" title={member.name}>
                      {member.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-primary font-semibold mb-2 truncate">{member.role}</p>
                    {member.ventures && member.ventures.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap mt-2 mb-2">
                        {member.ventures.slice(0, 3).map((venture, vIndex) => (
                          <div
                            key={vIndex}
                            className="w-4 h-4 lg:w-5 lg:h-5 bg-primary/10 rounded flex items-center justify-center flex-shrink-0"
                            title={venture.name}
                          >
                            {venture.icon ? (
                              <div className="scale-75 lg:scale-100">{venture.icon}</div>
                            ) : (
                              <Globe className="text-primary" size={10} />
                            )}
                          </div>
                        ))}
                        {member.ventures.length > 3 && (
                          <span className="text-[10px] lg:text-xs text-slate-500 ml-0.5">+{member.ventures.length - 3}</span>
                        )}
                      </div>
                    )}
                    <div className="flex items-center gap-2 lg:gap-3 mt-2 lg:mt-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                          title="LinkedIn"
                        >
                          <Linkedin size={12} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-400 hover:text-primary transition-colors flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                          title="Email"
                        >
                          <Mail size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Future Members Placeholder */}
          {teamMembers.length < 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12 lg:mt-16"
            >
              <div className="inline-block bg-slate-50 rounded-xl p-6 lg:p-8 border-2 border-dashed border-slate-300 max-w-md mx-auto">
                <Users className="mx-auto mb-3 lg:mb-4 text-slate-400" size={40} />
                <p className="text-sm lg:text-base text-slate-600 font-light">
                  More team members coming soon...
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

