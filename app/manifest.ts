import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GrowthLab - Build. Connect. Scale.',
    short_name: 'GrowthLab',
    description: 'A global community-driven platform for entrepreneurs, founders, and builders. Scale your startup, connect with innovators, and grow anywhere.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f7377',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/growthlab-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/growthlab-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/growthlab-logo.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'social', 'networking', 'productivity'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
  }
}

