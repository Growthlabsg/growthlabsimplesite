import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - GrowthLab',
  description: 'Choose the right plan for your startup journey with GrowthLab.',
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'month',
    description: 'Perfect for students and early-stage founders',
    features: [
      'Access to community feed',
      'Basic networking features',
      'Event listings',
      'Basic resources',
      'Limited AI tools',
    ],
    cta: 'Get Started',
    href: '/register',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    description: 'For serious entrepreneurs ready to grow',
    features: [
      'Everything in Free',
      'Advanced AI matching',
      'Priority support',
      'Business page features',
      'Job posting (5/month)',
      'Investor access',
      'Workshop discounts',
    ],
    cta: 'Start Pro',
    href: '/register?plan=pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team collaboration tools',
      'Dedicated account manager',
      'Custom integrations',
      'Unlimited job postings',
      'Advanced analytics',
      'White-label options',
    ],
    cta: 'Contact Sales',
    href: '/contact',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Simple Pricing</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Choose the plan that fits your startup journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? 'border-primary shadow-xl scale-105'
                    : 'border-slate-200 hover:border-primary/50'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 ml-2">/{plan.period}</span>}
                </div>
                <p className="text-slate-600 mb-6 font-light">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

