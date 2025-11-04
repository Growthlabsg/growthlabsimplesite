import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Providers from './providers'
import StructuredData from '@/components/StructuredData'
import { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema, getSoftwareApplicationSchema, getPlaceSchema, getServiceAreaSchema, getKnowledgeGraphSchema } from '@/lib/seo/structuredData'
import HreflangTags from './hreflang'
import SocialMediaMeta from '@/components/SocialMediaMeta'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growthlab.sg'),
  title: {
    default: 'GrowthLab - Build. Connect. Scale.',
    template: '%s | GrowthLab',
  },
  description: 'A global community-driven platform for entrepreneurs, founders, and builders. Based in Singapore, serving Southeast Asia and beyond. Scale your startup, connect with innovators, and grow anywhere. Join 2,500+ members across 50+ countries.',
  keywords: [
    'startup',
    'entrepreneurship',
    'community',
    'networking',
    'innovation',
    'growth',
    'Singapore startup',
    'founder community',
    'investor network',
    'startup ecosystem',
    'business networking',
    'startup resources',
    'fundraising',
    'venture capital',
    'startup accelerator',
    'entrepreneur platform',
    'startup community Singapore',
    'India startup',
    'global startup network',
  ],
  authors: [{ name: 'GrowthLab', url: 'https://www.growthlab.sg' }],
  creator: 'GrowthLab',
  publisher: 'GrowthLab',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.growthlab.sg',
  },
  category: 'Business',
  classification: 'Business Networking Platform',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: 'https://www.growthlab.sg/growthlab-logo.png', sizes: 'any' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '16x16' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '32x32' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '48x48' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '72x72' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '96x96' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '144x144' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '192x192' },
      { url: 'https://www.growthlab.sg/growthlab-logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: 'https://www.growthlab.sg/growthlab-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: 'https://www.growthlab.sg/growthlab-logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GrowthLab',
    startupImage: '/growthlab-logo.png',
  },
  openGraph: {
    title: 'GrowthLab - Build. Connect. Scale. | Singapore Startup Community',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders. Based in Singapore, serving 2,500+ members across 50+ countries. Connect, launch, fund, and grow your startup.',
    url: 'https://www.growthlab.sg',
    siteName: 'GrowthLab',
    locale: 'en_SG',
    alternateLocale: ['en_US', 'en_IN', 'en_GB', 'en_AU', 'en_MY', 'en_TH', 'en_ID', 'en_PH', 'en_VN', 'en_HK', 'en_JP', 'en_KR', 'en_CN', 'en_TW'],
    type: 'website',
    images: [
      {
        url: 'https://www.growthlab.sg/growthlab-logo.png',
        width: 1200,
        height: 630,
        alt: 'GrowthLab - Singapore Startup Community Platform',
        type: 'image/png',
        secureUrl: 'https://www.growthlab.sg/growthlab-logo.png',
      },
      {
        url: 'https://www.growthlab.sg/growthlab-logo.png',
        width: 600,
        height: 315,
        alt: 'GrowthLab Logo',
        type: 'image/png',
      },
    ],
    emails: ['hello@growthlab.sg'],
    phoneNumbers: ['+65-9737-1722'],
    countryName: 'Singapore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthLab - Build. Connect. Scale. | Singapore Startup Community',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders. Based in Singapore, serving 2,500+ members across 50+ countries. Join us!',
    images: [
      {
        url: 'https://www.growthlab.sg/growthlab-logo.png',
        alt: 'GrowthLab - Singapore Startup Community',
      },
    ],
    creator: '@Growthlabsg',
    site: '@Growthlabsg',
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    // Geographic metadata (GEO optimization)
    'geo.region': 'SG-SG',
    'geo.placename': 'Singapore',
    'geo.position': '1.3521;103.8198',
    'ICBM': '1.3521, 103.8198',
    'DC.title': 'GrowthLab - Singapore Startup Community',
    'DC.coverage': 'Singapore, India, Global',
    'DC.subject': 'Startup Ecosystem, Entrepreneurship, Singapore',
    // Region targeting
    'distribution': 'global',
    'target': 'all',
    'audience': 'startup founders, investors, entrepreneurs',
    // Geographic targeting
    'coverage': 'Singapore, India, Southeast Asia, Global',
    'spatial': 'Singapore (1.3521°N, 103.8198°E)',
    // LinkedIn specific tags
    'linkedin:owner': 'growthlab-sg',
    'linkedin:site': 'growthlab-sg',
    'linkedin:company': 'growthlab',
    // Facebook specific tags
    'fb:app_id': '', // Add when available
    'fb:admins': '', // Add when available
    'fb:pages': '', // Add when available
    // Pinterest
    'pinterest': 'nohover',
    'pinterest:site': '@growthlabsg',
    'pinterest:description': 'GrowthLab - Singapore Startup Community Platform',
    // Instagram
    'instagram:creator': '@growthlab.sg',
    // WhatsApp Business
    'whatsapp:business': '+6597371722',
    'whatsapp:channel': '0029Vb708tt4yltRmesgcE3c',
    // Telegram
    'telegram:channel': '@growthlab',
    // TikTok
    'tiktok:creator': '@growthlab.sg',
    // Reddit
    'reddit:subreddit': 'r/growthlab',
    // Twitter app properties
    'twitter:app:name:iphone': 'GrowthLab',
    'twitter:app:name:ipad': 'GrowthLab',
    'twitter:app:name:googleplay': 'GrowthLab',
    'twitter:app:id:iphone': 'growthlab-sg',
    'twitter:app:id:ipad': 'growthlab-sg',
    'twitter:app:id:googleplay': 'sg.growthlab.app',
    'twitter:app:url:iphone': 'growthlab://',
    'twitter:app:url:ipad': 'growthlab://',
    'twitter:app:url:googleplay': 'growthlab://',
    // Additional social platforms
    'youtube:channel': '', // Add when available
    'discord:server': '', // Add when available
    // Open Graph additional properties
    'og:determiner': 'the',
    'og:section': 'Business',
    'og:tag': 'startup, entrepreneurship, Singapore, networking, community',
    'article:published_time': '2020-01-01T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'https://www.linkedin.com/company/growthlab-sg',
    'article:publisher': 'https://www.linkedin.com/company/growthlab-sg',
    // Additional SEO
    'application-name': 'GrowthLab',
    'msapplication-TileColor': '#0f7377',
    'theme-color': '#0f7377',
    // Timezone
    'timezone': 'Asia/Singapore',
    'X-UA-Compatible': 'IE=edge',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate structured data for SEO, GEO, SMO, AEO, and GSO (Generative Search Optimization)
  const organizationSchema = getOrganizationSchema()
  const localBusinessSchema = getLocalBusinessSchema()
  const websiteSchema = getWebsiteSchema()
  const softwareAppSchema = getSoftwareApplicationSchema()
  const placeSchema = getPlaceSchema()
  const serviceAreaSchema = getServiceAreaSchema()
  const knowledgeGraphSchema = getKnowledgeGraphSchema()

  return (
    <html lang="en-SG" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Favicon for Google Search - must be first */}
        <link rel="icon" href="https://www.growthlab.sg/growthlab-logo.png" type="image/png" />
        <link rel="icon" href="/growthlab-logo.png" type="image/png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/growthlab-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/growthlab-logo.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/growthlab-logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/growthlab-logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/growthlab-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/growthlab-logo.png" />
        <link rel="shortcut icon" href="https://www.growthlab.sg/growthlab-logo.png" type="image/png" />
        {/* Favicon for legacy browsers and Google Search */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="https://www.growthlab.sg/growthlab-logo.png" sizes="any" />
        <HreflangTags />
        <SocialMediaMeta />
        <StructuredData data={[organizationSchema, localBusinessSchema, websiteSchema, softwareAppSchema, placeSchema, serviceAreaSchema, knowledgeGraphSchema]} />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

