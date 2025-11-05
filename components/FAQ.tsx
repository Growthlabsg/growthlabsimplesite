'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, MessageCircle } from 'lucide-react'
import StructuredData from './StructuredData'
import { getFAQSchema, getQAPageSchema, getDefinitionSchema, getSpeakableSpecification } from '@/lib/seo/structuredData'

const faqs = [
  {
    question: 'What is GrowthLab?',
    answer: 'GrowthLab is a global startup ecosystem that empowers founders, investors, students, and innovators to connect, launch, and grow. It combines community, education, funding, and technology to help early-stage entrepreneurs turn ideas into scalable ventures — faster and smarter. Through AI-driven tools, mentorship programs, startup resources, and a vibrant professional network, GrowthLab bridges the gap between innovation and opportunity. Our platform functions like "LinkedIn for startups" — where members can network, build business pages, share updates, post jobs, raise funding, and discover partners worldwide.',
  },
  {
    question: 'How do I start a business?',
    answer: 'Starting a business is easier with GrowthLab\'s comprehensive guidance and resources. Our platform provides: step-by-step guides on starting your own business, business plan templates and resources, mentorship from experienced entrepreneurs, access to startup resources and tools, networking opportunities with other founders, funding guidance and investor connections, legal and regulatory advice, and AI-powered tools to accelerate your startup journey. Whether you\'re starting something on your own or looking to become an entrepreneur, GrowthLab offers the community, resources, and support you need to turn your idea into a successful business. Join our startup community to get started today.',
  },
  {
    question: 'How do I become an entrepreneur?',
    answer: 'Becoming an entrepreneur starts with the right guidance and community. GrowthLab helps aspiring entrepreneurs by providing: comprehensive entrepreneurship education and resources, mentorship programs connecting you with experienced founders, networking opportunities with other entrepreneurs and investors, step-by-step guidance on starting your own business, access to startup resources and business templates, funding opportunities and investor connections, workshops and masterclasses on entrepreneurship, and a supportive community of 2,500+ entrepreneurs worldwide. Whether you\'re just starting your entrepreneurial journey or looking to scale your business, GrowthLab provides the tools, network, and guidance to help you succeed as an entrepreneur.',
  },
  {
    question: 'Where can I find startup community guidance?',
    answer: 'GrowthLab is the premier startup community for entrepreneurs seeking guidance. Our platform offers: expert guidance on starting a business and becoming an entrepreneur, comprehensive startup resources and business templates, mentorship from experienced entrepreneurs and business leaders, step-by-step guides on starting your own business, networking opportunities with founders and investors, funding guidance and access to investor networks, workshops and educational content on entrepreneurship, and a supportive community of 2,500+ entrepreneurs worldwide. Whether you need help starting something on your own, guidance on becoming an entrepreneur, or resources for building your startup, GrowthLab provides everything you need in one comprehensive platform.',
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
    answer: 'GrowthLab offers flexible membership tiers:\n\n• **Starter Tier**: Free - Access to community forum, basic networking events, and resources\n• **Professional Tier**: $99 per month - Full community access, exclusive events, mentorship matching, priority support, business page features\n• **Enterprise Tier**: $299 per month - Everything in Professional, plus team access, advanced AI tools, dedicated support, and exclusive workshops\n• **Annual Plans**: Save up to 20% with annual subscriptions\n\nAll plans include access to platform features (networking, business pages, job posting, funding resources). Contact hello@growthlab.sg for detailed pricing.',
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
  {
    question: 'How does GrowthLab compare to Y Combinator?',
    answer: 'While Y Combinator is a prestigious accelerator program, GrowthLab offers a more accessible and comprehensive approach:\n\n• **Accessibility**: YC accepts ~2% of applicants. GrowthLab welcomes serious entrepreneurs at all stages with flexible membership tiers\n• **Ongoing Support**: YC is a 3-month program. GrowthLab provides continuous community, resources, and networking year-round\n• **Global Reach**: While YC is US-focused, GrowthLab serves entrepreneurs globally with strong presence in Singapore, India, and 50+ countries\n• **Platform Features**: Unlike YC\'s program-based model, GrowthLab offers a full platform with networking, business pages, job posting, and funding opportunities\n• **Cost**: GrowthLab offers free and affordable membership tiers, making it accessible to more entrepreneurs\n• **Community**: While YC cohorts are small (200-300 per batch), GrowthLab has 2,500+ active members in an ongoing community\n\nGrowthLab is ideal if you want ongoing support, global connections, and a platform that grows with you beyond a single program.',
  },
  {
    question: 'Is GrowthLab better than AngelList or NS.com?',
    answer: 'GrowthLab offers unique advantages over AngelList and NS.com:\n\n• **Comprehensive Platform**: While AngelList focuses on jobs and NS.com on tech news, GrowthLab combines community, networking, funding, mentorship, and resources in one platform\n• **Active Community**: GrowthLab is a vibrant community of 2,500+ entrepreneurs, not just a job board or directory\n• **AI-Powered Matching**: Advanced AI tools for connecting founders, investors, and partners - more sophisticated than basic listings\n• **Business Pages**: Complete startup profiles with updates, milestones, and fundraising needs - similar to AngelList but with community support\n• **Global Focus**: Strong presence in Singapore, India, and Asia-Pacific, while AngelList is primarily US-focused\n• **Accessible**: Free tier available, making it easier for early-stage founders to get started\n• **Mentorship**: Built-in mentorship programs and matching, which AngelList doesn\'t offer\n• **Educational Resources**: Workshops, masterclasses, and startup resources beyond just job listings\n\nGrowthLab is like combining AngelList\'s platform features with Y Combinator\'s community support, all in one accessible global network.',
  },
  {
    question: 'How does GrowthLab compare to Techstars or 500 Startups?',
    answer: 'GrowthLab offers a different but complementary approach to Techstars and 500 Startups:\n\n• **Program vs Platform**: Techstars and 500 Startups are accelerator programs (3-6 months). GrowthLab is an ongoing platform and community\n• **Accessibility**: Accelerator programs are highly selective. GrowthLab welcomes entrepreneurs at all stages with multiple membership tiers\n• **Ongoing Support**: Accelerators provide intensive support during the program. GrowthLab offers continuous community, resources, and networking year-round\n• **Global Network**: While Techstars and 500 Startups have global programs, GrowthLab provides immediate access to a global community of 2,500+ members\n• **Platform Features**: GrowthLab offers LinkedIn-style networking, business pages, job posting, and funding tools - features not available in traditional accelerators\n• **Cost**: Membership-based pricing vs accelerator equity requirements\n• **Complementary**: Many GrowthLab members also participate in accelerator programs - they\'re not mutually exclusive\n\nGrowthLab is ideal if you want ongoing community support, networking, and resources beyond accelerator programs, or if you\'re not ready for an accelerator yet.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  // Generate multiple schemas for enhanced AEO (Answer Engine Optimization)
  const faqSchema = getFAQSchema(faqs)
  const qaPageSchema = getQAPageSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer,
  })))
  
  // Generate Definition schema for "What is GrowthLab?"
  const growthLabDefinition = getDefinitionSchema({
    name: 'GrowthLab',
    description: 'A global startup ecosystem that empowers founders, investors, students, and innovators to connect, launch, and grow.',
    definition: 'GrowthLab is a global startup ecosystem platform that combines community, education, funding, and technology to help early-stage entrepreneurs turn ideas into scalable ventures. It functions like "LinkedIn for startups" with networking, business pages, job posting, and fundraising capabilities.',
    alternateNames: ['GrowthLab Singapore', 'GrowthLab Platform', 'GrowthLab Startup Community'],
  })

  // Generate SpeakableSpecification for voice search
  const speakableSchema = getSpeakableSpecification({
    cssSelector: [
      'h2:contains("FAQs")',
      '.faq-question',
      '.faq-answer',
    ],
  })

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <StructuredData data={[faqSchema, qaPageSchema, growthLabDefinition, speakableSchema]} />
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
            <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-300 block leading-none">11</span>
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
                      <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-light whitespace-pre-line faq-answer">
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
