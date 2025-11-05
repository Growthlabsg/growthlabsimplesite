// Structured Data (JSON-LD) generators for SEO, GEO, SMO, and AEO

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string | {
    '@type': string
    url: string
    width?: number
    height?: number
  }
  image?: string
  description: string
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    email: string
    areaServed: string | string[]
    availableLanguage: string | string[]
  }
  sameAs: string[]
  address: {
    '@type': string
    addressCountry: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    streetAddress?: string
  } | Array<{
    '@type': string
    addressCountry: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    streetAddress?: string
  }>
  foundingDate: string
  numberOfEmployees?: {
    '@type': string
    value: string
  }
  founder: {
    '@type': string
    name: string
    url: string
  }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  image: string
  '@id': string
  url: string
  telephone: string
  priceRange: string
  address: {
    '@type': string
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  geo?: {
    '@type': string
    latitude?: string
    longitude?: string
  }
  openingHoursSpecification?: {
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }
  areaServed: {
    '@type': string
    name: string
  }[]
}

export interface FAQSchema {
  '@context': string
  '@type': string
  mainEntity: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }[]
}

export interface WebsiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  potentialAction: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

// Generate Organization Schema
export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GrowthLab',
    url: 'https://www.growthlab.sg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.growthlab.sg/growthlab-logo.png',
      width: 516,
      height: 484,
    },
    image: 'https://www.growthlab.sg/growthlab-logo.png',
    description: 'GrowthLab is the #1 startup community for entrepreneurs, founders, and business builders. Get guidance on starting a business, becoming an entrepreneur, and building your startup. Join 2,500+ entrepreneurs, access funding, mentorship, and resources.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+65-9737-1722',
      contactType: 'Customer Service',
      email: 'hello@growthlab.sg',
      areaServed: ['SG', 'IN', 'US', 'GB', 'AU'],
      availableLanguage: ['en', 'en-SG'],
    },
    sameAs: [
      'https://www.linkedin.com/company/growthlab-sg',
      'https://www.instagram.com/growthlab.sg',
      'https://x.com/Growthlabsg',
      'https://www.tiktok.com/@growthlab.sg',
      'https://lu.ma/growthlab.sg',
      'https://www.facebook.com/growthlabsg',
      'https://www.youtube.com/@growthlab',
      'https://www.pinterest.com/growthlabsg',
      'https://reddit.com/r/growthlab',
      'https://t.me/growthlab',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'SG',
        addressLocality: 'Singapore',
        addressRegion: 'Singapore',
        postalCode: '018956',
        streetAddress: 'Singapore',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'India',
        addressRegion: 'Multiple Cities',
      },
    ],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50',
    },
    founder: {
      '@type': 'Person',
      name: 'Arul Murugan',
      url: 'https://www.walkwitharul.com',
    },
  }
}

// Generate Local Business Schema (GEO optimization)
export function getLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GrowthLab',
    image: 'https://www.growthlab.sg/growthlab-logo.png',
    '@id': 'https://www.growthlab.sg',
    url: 'https://www.growthlab.sg',
    telephone: '+65-9737-1722',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressRegion: 'Singapore',
      addressCountry: 'SG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '1.3521',
      longitude: '103.8198',
    },
    areaServed: [
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Thailand' },
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Country', name: 'Vietnam' },
      { '@type': 'Country', name: 'Hong Kong' },
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Country', name: 'South Korea' },
      { '@type': 'Country', name: 'China' },
      { '@type': 'Country', name: 'Taiwan' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

// Generate Place Schema for Singapore
export function getPlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'GrowthLab Singapore',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressRegion: 'Singapore',
      postalCode: '018956',
      addressCountry: 'SG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '1.3521',
      longitude: '103.8198',
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Singapore',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SG',
      },
    },
  }
}

// Generate Service Area Schema
export function getServiceAreaSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GrowthLab Startup Ecosystem Services',
    provider: {
      '@type': 'Organization',
      name: 'GrowthLab',
      url: 'https://www.growthlab.sg',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Singapore',
        containedInPlace: {
          '@type': 'Country',
          name: 'Singapore',
        },
      },
      {
        '@type': 'City',
        name: 'Mumbai',
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'City',
        name: 'Bangalore',
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'City',
        name: 'Delhi',
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'City',
        name: 'San Francisco',
        containedInPlace: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'City',
        name: 'New York',
        containedInPlace: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'City',
        name: 'London',
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      {
        '@type': 'City',
        name: 'Sydney',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia',
        },
      },
      {
        '@type': 'City',
        name: 'Melbourne',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia',
        },
      },
      {
        '@type': 'City',
        name: 'Kuala Lumpur',
        containedInPlace: {
          '@type': 'Country',
          name: 'Malaysia',
        },
      },
      {
        '@type': 'City',
        name: 'Bangkok',
        containedInPlace: {
          '@type': 'Country',
          name: 'Thailand',
        },
      },
      {
        '@type': 'City',
        name: 'Jakarta',
        containedInPlace: {
          '@type': 'Country',
          name: 'Indonesia',
        },
      },
      {
        '@type': 'City',
        name: 'Manila',
        containedInPlace: {
          '@type': 'Country',
          name: 'Philippines',
        },
      },
      {
        '@type': 'City',
        name: 'Ho Chi Minh City',
        containedInPlace: {
          '@type': 'Country',
          name: 'Vietnam',
        },
      },
      {
        '@type': 'City',
        name: 'Hong Kong',
        containedInPlace: {
          '@type': 'Country',
          name: 'Hong Kong',
        },
      },
      {
        '@type': 'City',
        name: 'Tokyo',
        containedInPlace: {
          '@type': 'Country',
          name: 'Japan',
        },
      },
      {
        '@type': 'City',
        name: 'Seoul',
        containedInPlace: {
          '@type': 'Country',
          name: 'South Korea',
        },
      },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.growthlab.sg',
      serviceType: 'Online',
    },
  }
}

// Generate FAQ Schema (AEO optimization)
export function getFAQSchema(faqs: { question: string; answer: string }[]): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Website Schema
export function getWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GrowthLab',
    url: 'https://www.growthlab.sg',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.growthlab.sg/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// Generate Breadcrumb Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Event Schema Interface
export interface EventSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  startDate: string
  endDate?: string
  eventAttendanceMode: string
  eventStatus: string
  location: {
    '@type': string
    name: string
    address?: {
      '@type': string
      addressLocality: string
      addressCountry: string
    }
  }
  image?: string
  organizer: {
    '@type': string
    name: string
    url: string
  }
  offers?: {
    '@type': string
    url: string
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

// Review Schema Interface
export interface ReviewSchema {
  '@context': string
  '@type': string
  itemReviewed: {
    '@type': string
    name: string
  }
  reviewRating: {
    '@type': string
    ratingValue: string
    bestRating: string
  }
  author: {
    '@type': string
    name: string
  }
  reviewBody: string
}

// Aggregate Rating Schema
export interface AggregateRatingSchema {
  '@context': string
  '@type': string
  itemReviewed: {
    '@type': string
    name: string
  }
  ratingValue: string
  reviewCount: string
  bestRating: string
  worstRating: string
}

// Service Schema Interface
export interface ServiceSchema {
  '@context': string
  '@type': string
  serviceType: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  areaServed: {
    '@type': string
    name: string
  }[]
  description: string
  name: string
}

// SoftwareApplication Schema
export interface SoftwareApplicationSchema {
  '@context': string
  '@type': string
  name: string
  applicationCategory: string
  operatingSystem: string[]
  offers: {
    '@type': string
    price: string
    priceCurrency: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: string
    reviewCount: string
  }
  description: string
  url: string
}

// Person Schema
export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  url: string
  image?: string
  sameAs: string[]
  worksFor: {
    '@type': string
    name: string
  }
  knowsAbout: string[]
}

// Generate Event Schema
export function getEventSchema(event: {
  title: string
  description: string
  date: string
  time?: string
  location: string
  link?: string
  imageUrl?: string | null
}): EventSchema {
  const startDate = new Date(event.date)
  const endDate = new Date(startDate)
  endDate.setHours(endDate.getHours() + 2) // Default 2-hour event

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    eventAttendanceMode: event.location.includes('Online') || event.location.includes('Hybrid')
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': event.location.includes('Online') ? 'VirtualLocation' : 'Place',
      name: event.location,
      ...(event.location.includes('Singapore') && {
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Singapore',
          addressCountry: 'SG',
        },
      }),
    },
    ...(event.imageUrl && { image: event.imageUrl }),
    organizer: {
      '@type': 'Organization',
      name: 'GrowthLab',
      url: 'https://www.growthlab.sg',
    },
    ...(event.link && {
      offers: {
        '@type': 'Offer',
        url: event.link,
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}

// Generate Review Schema
export function getReviewSchema(review: {
  quote: string
  author: string
  rating: number
  company?: string
}): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'GrowthLab',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.quote,
  }
}

// Generate Aggregate Rating Schema
export function getAggregateRatingSchema(rating: number, reviewCount: number): AggregateRatingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: 'GrowthLab',
    },
    ratingValue: rating.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
  }
}

// Generate Service Schema
export function getServiceSchema(service: {
  name: string
  description: string
  type: string
}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.type,
    provider: {
      '@type': 'Organization',
      name: 'GrowthLab',
      url: 'https://www.growthlab.sg',
    },
    areaServed: [
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Australia' },
    ],
    description: service.description,
    name: service.name,
  }
}

// Generate SoftwareApplication Schema
export function getSoftwareApplicationSchema(): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GrowthLab Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: ['Web Browser', 'iOS', 'Android'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
    },
    description: 'A global community-driven platform for entrepreneurs, founders, and builders. Connect, launch, fund, and grow your startup.',
    url: 'https://www.growthlab.sg',
  }
}

// Generate Person Schema (Founder)
export function getPersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arul Murugan',
    jobTitle: 'Founder & CEO',
    url: 'https://www.walkwitharul.com',
    sameAs: [
      'https://www.linkedin.com/in/arulmurugan',
      'https://www.walkwitharul.com',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'GrowthLab',
    },
    knowsAbout: [
      'Entrepreneurship',
      'Startups',
      'Venture Capital',
      'Business Strategy',
      'Technology',
      'Innovation',
    ],
  }
}

// HowTo Schema Interface (for Generative Engine Optimization)
export interface HowToSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  step: {
    '@type': string
    position: number
    name: string
    text: string
    itemListElement?: {
      '@type': string
      text: string
    }[]
  }[]
  totalTime?: string
}

// Article Schema Interface
export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
    url?: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
}

// ItemList Schema Interface
export interface ItemListSchema {
  '@context': string
  '@type': string
  name: string
  description?: string
  itemListElement: {
    '@type': string
    position: number
    name: string
    description?: string
    url?: string
  }[]
}

// Course Schema Interface
export interface CourseSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  courseCode?: string
  educationalLevel?: string
  teaches: string[]
}

// Generate HowTo Schema (GEO - Generative Engine Optimization)
export function getHowToSchema(steps: {
  title: string
  description: string
  features?: string[]
}[]): HowToSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Started with GrowthLab',
    description: 'A step-by-step guide to joining and using GrowthLab, the LinkedIn for startups platform.',
    totalTime: 'PT30M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      ...(step.features && step.features.length > 0 && {
        itemListElement: step.features.map((feature) => ({
          '@type': 'HowToTip',
          text: feature,
        })),
      }),
    })),
  }
}

// Generate Article Schema (for Knowledge Base, Blog)
export function getArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  imageUrl?: string
  author?: string
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    ...(article.imageUrl && { image: article.imageUrl }),
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author || 'GrowthLab',
      ...(article.author === 'Arul Murugan' && {
        url: 'https://www.walkwitharul.com',
      }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'GrowthLab',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.growthlab.sg/growthlab-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

// Generate ItemList Schema (for Resources, Features, etc.)
export function getItemListSchema(list: {
  name: string
  description?: string
  items: {
    name: string
    description?: string
    url?: string
  }[]
}): ItemListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: list.name,
    ...(list.description && { description: list.description }),
    itemListElement: list.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.url && { url: item.url }),
    })),
  }
}

// Generate Course Schema (for Educational Resources)
export function getCourseSchema(course: {
  name: string
  description: string
  teaches: string[]
  level?: string
}): CourseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'GrowthLab',
      url: 'https://www.growthlab.sg',
    },
    educationalLevel: course.level || 'Beginner',
    teaches: course.teaches,
  }
}

// Generate Knowledge Graph Entity Relationships
export function getKnowledgeGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'GrowthLab Knowledge Graph',
    description: 'Comprehensive knowledge graph of GrowthLab startup ecosystem, including entities, relationships, and facts.',
    creator: {
      '@type': 'Organization',
      name: 'GrowthLab',
      url: 'https://www.growthlab.sg',
    },
    keywords: [
      'startup ecosystem',
      'entrepreneurship',
      'venture capital',
      'startup community',
      'founder network',
      'investor network',
      'Singapore startups',
      'startup platform',
      'business networking',
      'startup resources',
    ],
    about: [
      {
        '@type': 'Thing',
        name: 'Startup Ecosystem',
        description: 'A network of startups, investors, mentors, and resources',
      },
      {
        '@type': 'Thing',
        name: 'Entrepreneurship',
        description: 'The activity of setting up a business or businesses',
      },
      {
        '@type': 'Thing',
        name: 'Venture Capital',
        description: 'Funding provided to startups and small businesses',
      },
    ],
    mentions: [
      {
        '@type': 'Organization',
        name: 'GrowthLab',
        url: 'https://www.growthlab.sg',
      },
      {
        '@type': 'Person',
        name: 'Arul Murugan',
        jobTitle: 'Founder & CEO',
      },
    ],
  }
}

// Generate ClaimReview Schema (for Factual Statements)
export function getClaimReviewSchema(claim: {
  claim: string
  reviewRating: {
    ratingValue: number
    bestRating: number
  }
  author: string
}): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed: claim.claim,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: claim.reviewRating.ratingValue,
      bestRating: claim.reviewRating.bestRating,
    },
    author: {
      '@type': 'Organization',
      name: claim.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GrowthLab',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.growthlab.sg/growthlab-logo.png',
      },
    },
  }
}

// QAPage Schema Interface (Enhanced AEO - Answer Engine Optimization)
export interface QAPageSchema {
  '@context': string
  '@type': string
  mainEntity: {
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
    suggestedAnswer?: {
      '@type': string
      text: string
    }[]
  }[]
}

// Definition Schema Interface
export interface DefinitionSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  def?: string
  alternateName?: string[]
}

// StatisticalPopulation Schema Interface
export interface StatisticalPopulationSchema {
  '@context': string
  '@type': string
  name: string
  populationType: string
  numConstraints?: {
    '@type': string
    name: string
    value?: string | number
  }[]
}

// Table Schema Interface
export interface TableSchema {
  '@context': string
  '@type': string
  about: {
    '@type': string
    name: string
  }
  table: {
    '@type': string
    name: string
    column?: {
      '@type': string
      name: string
    }[]
    row?: {
      '@type': string
      name: string
    }[]
  }
}

// SpeakableSpecification Interface (for Voice Search)
export interface SpeakableSpecification {
  '@context': string
  '@type': string
  cssSelector?: string[]
  xpath?: string[]
}

// Generate QAPage Schema (Enhanced AEO)
export function getQAPageSchema(questions: {
  question: string
  answer: string
  suggestedAnswers?: string[]
}[]): QAPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
      ...(qa.suggestedAnswers && qa.suggestedAnswers.length > 0 && {
        suggestedAnswer: qa.suggestedAnswers.map((answer) => ({
          '@type': 'Answer',
          text: answer,
        })),
      }),
    })),
  }
}

// Generate Definition Schema (AEO - for "What is..." queries)
export function getDefinitionSchema(term: {
  name: string
  description: string
  definition?: string
  alternateNames?: string[]
}): DefinitionSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: term.name,
    description: term.description,
    ...(term.definition && { def: term.definition }),
    ...(term.alternateNames && term.alternateNames.length > 0 && {
      alternateName: term.alternateNames,
    }),
  }
}

// Generate StatisticalPopulation Schema (AEO - for stats in answers)
export function getStatisticalPopulationSchema(stats: {
  name: string
  populationType: string
  constraints?: {
    name: string
    value?: string | number
  }[]
}): StatisticalPopulationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'StatisticalPopulation',
    name: stats.name,
    populationType: stats.populationType,
    ...(stats.constraints && stats.constraints.length > 0 && {
      numConstraints: stats.constraints.map((constraint) => ({
        '@type': 'PropertyValueSpecification',
        name: constraint.name,
        ...(constraint.value && { value: constraint.value }),
      })),
    }),
  }
}

// Generate Table Schema (AEO - for pricing/comparison tables)
export function getTableSchema(table: {
  name: string
  about: string
  columns: string[]
  rows?: {
    name: string
    values?: string[]
  }[]
}): TableSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Table',
    about: {
      '@type': 'Thing',
      name: table.about,
    },
    table: {
      '@type': 'Table',
      name: table.name,
      ...(table.columns && table.columns.length > 0 && {
        column: table.columns.map((col) => ({
          '@type': 'TableColumn',
          name: col,
        })),
      }),
      ...(table.rows && table.rows.length > 0 && {
        row: table.rows.map((row) => ({
          '@type': 'TableRow',
          name: row.name,
        })),
      }),
    },
  }
}

// Generate SpeakableSpecification (AEO - Voice Search Optimization)
export function getSpeakableSpecification(selectors: {
  cssSelector?: string[]
  xpath?: string[]
}): SpeakableSpecification {
  return {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    ...(selectors.cssSelector && selectors.cssSelector.length > 0 && {
      cssSelector: selectors.cssSelector,
    }),
    ...(selectors.xpath && selectors.xpath.length > 0 && {
      xpath: selectors.xpath,
    }),
  }
}

