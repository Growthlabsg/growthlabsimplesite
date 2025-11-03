import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - GrowthLab',
  description: 'Latest insights, tips, and news from the startup ecosystem.',
}

const blogPosts = [
  {
    title: '10 Essential Tools Every Startup Founder Needs in 2024',
    excerpt: 'Discover the must-have tools that will help you scale your startup faster and smarter.',
    date: 'Sep 28, 2024',
    category: 'Tools',
    href: '/blog/essential-tools-2024',
  },
  {
    title: 'How to Pitch Investors: A Complete Guide',
    excerpt: 'Learn the secrets of successful fundraising from seasoned entrepreneurs and investors.',
    date: 'Sep 25, 2024',
    category: 'Fundraising',
    href: '/blog/how-to-pitch-investors',
  },
  {
    title: 'Building a Remote-First Startup Culture',
    excerpt: 'Best practices for creating a strong culture when your team is distributed across the globe.',
    date: 'Sep 22, 2024',
    category: 'Culture',
    href: '/blog/remote-first-culture',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">GrowthLab Blog</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Insights, tips, and stories from the startup ecosystem
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="block bg-white rounded-xl p-8 border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4 font-light">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4 font-light">More articles coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

