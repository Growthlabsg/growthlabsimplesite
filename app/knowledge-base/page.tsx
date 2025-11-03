import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Search, Book, FileText, Video, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Knowledge Base - GrowthLab',
  description: 'Helpful resources and guides for startup founders.',
}

const categories = [
  {
    name: 'Getting Started',
    icon: Book,
    articles: ['How to create your profile', 'Setting up your business page', 'Navigating the platform'],
  },
  {
    name: 'Networking',
    icon: HelpCircle,
    articles: ['Connecting with other founders', 'Joining communities', 'Using AI matching'],
  },
  {
    name: 'Fundraising',
    icon: FileText,
    articles: ['How to raise funding', 'Preparing your pitch deck', 'Finding investors'],
  },
  {
    name: 'Resources',
    icon: Video,
    articles: ['Using AI tools', 'Posting jobs', 'Event management'],
  },
]

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Knowledge Base</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-8">
              Find answers and learn how to make the most of GrowthLab
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-lg focus:border-primary focus:outline-none text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-slate-600 text-sm font-light">
                        • {article}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

