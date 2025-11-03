import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Success Stories - GrowthLab',
  description: 'Read inspiring success stories from GrowthLab members.',
}

const stories = [
  {
    title: 'From Idea to $2M Seed Round in 6 Months',
    company: 'TechFlow',
    founder: 'Sarah Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    excerpt: 'GrowthLab connected us with the perfect investors and helped us refine our pitch.',
    quote: 'Without GrowthLab, we would still be struggling to find the right network. The platform made everything seamless.',
  },
  {
    title: 'Found My Co-Founder Through GrowthLab',
    company: 'DataSync',
    founder: 'Mike Rodriguez',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Met my technical co-founder through GrowthLab\'s matching algorithm.',
    quote: 'The AI matching feature is incredible. It connected me with someone who perfectly complemented my skills.',
  },
  {
    title: 'Scaling from 0 to 50 Employees',
    company: 'CloudVentures',
    founder: 'Rajanshee',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Used GrowthLab\'s job board and talent pool to build our dream team.',
    quote: 'GrowthLab\'s talent network helped us find amazing people who share our vision.',
  },
]

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Success Stories</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Real stories from real founders who built their startups with GrowthLab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{story.company}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{story.title}</h3>
                  <p className="text-slate-600 mb-4 font-light">{story.excerpt}</p>
                  <div className="border-l-4 border-primary pl-4 mb-4">
                    <p className="text-slate-700 italic font-light">"{story.quote}"</p>
                  </div>
                  <div className="text-sm text-slate-500">
                    — {story.founder}, {story.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

