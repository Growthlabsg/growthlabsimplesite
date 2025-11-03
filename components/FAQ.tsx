'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is GrowthLab?',
    answer: 'GrowthLab is a global startup ecosystem that empowers founders, investors, students, and innovators to connect, launch, and grow. It combines community, education, funding, and technology to help early-stage entrepreneurs turn ideas into scalable ventures — faster and smarter. Through AI-driven tools, mentorship programs, startup resources, and a vibrant professional network, GrowthLab bridges the gap between innovation and opportunity. Our platform functions like "LinkedIn for startups" — where members can network, build business pages, share updates, post jobs, raise funding, and discover partners worldwide.',
  },
  {
    question: 'How do I apply to GrowthLab?',
    answer: 'Applying to GrowthLab is simple! Visit our registration page at /register and fill out the application form. You\'ll need to provide information about yourself, your background, and why you\'re interested in joining. You\'ll receive a confirmation email within 24 hours acknowledging your application. Our team reviews applications on a rolling basis and will reach out within 2-3 business days with next steps. Acceptance is based on alignment with our community values and potential for meaningful contribution to the ecosystem.',
  },
  {
    question: 'What\'s the community like at GrowthLab?',
    answer: 'GrowthLab brings together a diverse, vibrant community of founders, investors, students, and innovators from around the world. Our 2,500+ members include: startup founders building innovative solutions, established enterprises seeking partnerships and growth, visionary leaders driving change in their industries, investors looking for opportunities, and students aspiring to build their own ventures. Members come from 50+ countries with strong presence in Singapore and India, as well as the United States, United Kingdom, Australia, and many more. It\'s a supportive, forward-thinking community where collaboration and knowledge sharing are at the core.',
  },
  {
    question: 'How much does it cost to join GrowthLab?',
    answer: 'We offer flexible membership tiers to suit different needs and budgets:\n\n• **Starter Tier (Free)**: Access to community forum, basic networking events, and resources\n• **Professional Tier ($99/month)**: Full community access, exclusive events, mentorship matching, priority support, business page features\n• **Enterprise Tier ($299/month)**: Everything in Professional, plus team access, advanced AI tools, dedicated support, and exclusive workshops\n• **Annual Plans**: Save up to 20% with annual subscriptions\n\nAll plans include access to our platform features (networking, business pages, job posting, funding resources) with member discounts. Contact us at hello@growthlab.sg for detailed pricing and corporate packages.',
  },
  {
    question: 'What is included in the membership?',
    answer: 'Your GrowthLab membership includes comprehensive benefits:\n\n• **Platform Access**: LinkedIn-style networking, business pages, updates sharing, job posting, funding opportunities\n• **Networking**: Access to our global network of 2,500+ members across 50+ countries\n• **Events**: Exclusive networking events, workshops, talks from industry leaders (both online and in-person)\n• **Mentorship**: Matching with experienced mentors in your industry\n• **AI Tools**: Access to AI-driven tools and resources to accelerate your startup\n• **Education**: Workshops, masterclasses, and educational content\n• **Funding**: Investor network, funding resources, and pitch opportunities\n• **Talent**: Job board access and talent discovery tools\n• **Business Resources**: Startup templates, guides, legal resources, and more\n• **Community Support**: Access to industry-specific groups and forums',
  },
  {
    question: 'How does the "LinkedIn for startups" platform work?',
    answer: 'GrowthLab\'s platform functions like LinkedIn but specifically designed for the startup ecosystem:\n\n• **Profile & Business Pages**: Create your founder profile and startup business page to showcase your venture\n• **Network**: Connect with founders, investors, students, and innovators worldwide\n• **Share Updates**: Post milestones, news, fundraising rounds, and company updates\n• **Post Jobs**: List job openings and discover talent from our global network\n• **Raise Funding**: Share fundraising needs, connect with investors, and access funding opportunities\n• **Discover Partners**: Find strategic partners, co-founders, and collaborators\n• **AI Matching**: Our AI-powered system suggests relevant connections, opportunities, and resources\n• **Groups & Communities**: Join industry-specific groups, startup cohorts, and interest-based communities\n\nAll features are designed to help you connect, launch, fund, and grow your startup faster.',
  },
  {
    question: 'What kind of AI-driven tools do you offer?',
    answer: 'GrowthLab provides AI-powered tools to accelerate your startup journey:\n\n• **AI Matching**: Smart suggestions for connections, investors, partners, and opportunities\n• **Analytics Dashboard**: AI-powered insights on your startup\'s growth, network strength, and engagement\n• **Content Recommendations**: Personalized content and resource suggestions based on your needs\n• **Automation Tools**: Automate networking, follow-ups, and engagement tasks\n• **Smart Search**: AI-enhanced search for finding the right people, opportunities, and resources\n• **Predictive Analytics**: Get insights on fundraising success probability, market trends, and growth opportunities\n\nThese tools help you make data-driven decisions and save time so you can focus on building your venture.',
  },
  {
    question: 'Can students join GrowthLab?',
    answer: 'Yes! Students are a key part of our ecosystem. We offer:\n\n• **Student Tier**: Special discounted pricing for verified students\n• **Student Programs**: Dedicated mentorship and educational programs for aspiring entrepreneurs\n• **Early Access**: Students get early access to events, workshops, and networking opportunities\n• **Resources**: Access to startup resources, templates, and guides to help you launch\n• **Community**: Connect with other student entrepreneurs and experienced founders\n• **Internship Opportunities**: Access to startup internships and job opportunities\n\nWhether you\'re in university, graduate school, or just starting your entrepreneurial journey, GrowthLab provides the resources and network to turn your ideas into reality.',
  },
  {
    question: 'How do I raise funding through GrowthLab?',
    answer: 'GrowthLab provides multiple pathways to funding:\n\n• **Investor Network**: Access our curated network of investors looking for opportunities\n• **Fundraising Posts**: Share your fundraising needs on your business page and in relevant groups\n• **AI Matching**: Get matched with investors based on your industry, stage, and needs\n• **Pitch Opportunities**: Access pitch events, demo days, and investor showcases\n• **Funding Resources**: Access guides, templates, and resources for fundraising\n• **Due Diligence Support**: Get help with investor relations and due diligence preparation\n\nOur platform makes it easy to connect with the right investors and present your opportunity professionally.',
  },
  {
    question: 'How do I connect with other members?',
    answer: 'Connecting with other GrowthLab members is easy through multiple channels:\n\n• **Member Directory**: Search for members by industry, location, expertise, or interests\n• **Direct Messaging**: Message members directly through the platform\n• **Interest Groups**: Join industry-specific or topic-based groups\n• **Events**: Connect at networking events, workshops, and conferences\n• **AI Matching**: Our AI-powered system suggests potential collaborators, co-founders, or partners based on your profile\n• **Business Pages**: Discover and connect with startups that align with your interests\n• **Community Forum**: Participate in discussions, ask questions, share insights\n• **Virtual Meetups**: Join scheduled virtual coffee chats and networking sessions\n\nAll connections are mutually opt-in, ensuring respectful and meaningful interactions.',
  },
  {
    question: 'What makes GrowthLab different from other communities?',
    answer: 'GrowthLab stands out through:\n\n• **Complete Ecosystem**: Not just networking - combines community, education, funding, and technology\n• **Platform Approach**: LinkedIn-style platform specifically for startups with business pages, updates, jobs, and funding\n• **AI-Powered**: Leverage AI tools to accelerate your startup journey\n• **Global Reach**: 2,500+ members across 50+ countries with strong presence in Singapore and India\n• **Inclusive**: Welcomes founders, investors, students, and innovators at all stages\n• **Proven Results**: $500M+ in total funding raised by members, 1,200+ startups launched\n• **Long-term Focus**: Average member retention of 85%+ - we build lasting relationships\n• **Practical Resources**: Real tools, services, and support, not just talking\n• **Accessible Pricing**: Options from free to premium, ensuring anyone serious can join\n\nWe\'re not just a community - we\'re a complete ecosystem for building and growing your startup.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Numbered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative"
          >
            <span className="text-7xl sm:text-8xl font-bold text-slate-300 block leading-none">11</span>
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
            className="lg:col-span-10 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 lg:mb-8">
              <HelpCircle className="text-primary" size={32} />
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              FAQs
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 font-light mb-2">
              Everything you need to know about GrowthLab
            </p>
            <p className="text-base text-slate-500 font-light">
              Can't find what you're looking for? Contact us below.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-primary bg-primary/5 shadow-lg'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-6 text-left flex items-center justify-between group min-h-[44px]"
              >
                <span className={`text-lg sm:text-xl font-semibold pr-4 transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180 text-primary' : 'text-slate-400'
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-light whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 to-amber/10 rounded-2xl p-10 border border-primary/20">
            <MessageCircle className="text-primary mx-auto mb-4" size={48} />
            <p className="text-xl text-slate-900 font-semibold mb-2">Still have questions?</p>
            <p className="text-slate-600 font-light mb-6">Our team is here to help you get started.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@growthlab.sg"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 min-h-[48px] shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                hello@growthlab.sg
              </a>
              <a
                href="tel:+6597371722"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold border-2 border-slate-300 rounded-lg hover:border-primary transition-all duration-300 min-h-[48px]"
              >
                +65 9737 1722
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
