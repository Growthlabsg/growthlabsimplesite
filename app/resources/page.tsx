'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Download, FileText, Video, BookOpen } from 'lucide-react'


const resources = [
  {
    name: 'Pitch Deck Template',
    type: 'Template',
    icon: FileText,
    description: 'Professional pitch deck template for fundraising',
  },
  {
    name: 'Business Plan Template',
    type: 'Template',
    icon: FileText,
    description: 'Comprehensive business plan template',
  },
  {
    name: 'Funding Guide',
    type: 'Guide',
    icon: BookOpen,
    description: 'Complete guide to raising funding for startups',
  },
  {
    name: 'Legal Documents',
    type: 'Templates',
    icon: FileText,
    description: 'Templates for agreements and contracts',
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Resources</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Free templates, guides, and tools to help you build your startup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.name}</h3>
                  <p className="text-slate-600 mb-4 font-light">{resource.description}</p>
                  <button 
                    onClick={() => {
                      // Download functionality
                      alert(`${resource.name} download will be available soon`)
                    }}
                    className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Download <Download size={18} />
                  </button>
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

