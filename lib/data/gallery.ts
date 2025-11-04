// Gallery Event Data
// To add new events:
// 1. Add images to public/gallery/images/ folder
// 2. Name them: event-[date]-[number].jpg (e.g., event-2025-12-01-1.jpg)
// 3. Add entry below with image path and event details

export interface GalleryImage {
  id: number
  src: string // Path relative to public folder (e.g., '/gallery/images/event-2025-12-01-1.jpg')
  alt: string
  category: 'Events' | 'Workshops' | 'Networking'
  title: string
  description: string
  date?: string // Optional: Event date (YYYY-MM-DD)
  location?: string // Optional: Event location
  videoUrl?: string // Optional: YouTube/Vimeo URL for videos
}

export const galleryImages: GalleryImage[] = [
  // Events category - Replace these with your actual event images
  {
    id: 1,
    src: '/gallery/images/event-2025-12-01-1.jpg', // Place your image here
    alt: 'GrowthLab Conference',
    category: 'Events',
    title: 'Annual Conference',
    description: 'Keynote speakers and presentations',
    date: '2025-12-01',
    location: 'Singapore',
  },
  {
    id: 2,
    src: '/gallery/images/event-2025-12-01-2.jpg', // Place your image here
    alt: 'Startup Pitch Event',
    category: 'Events',
    title: 'Pitch Competition',
    description: 'Founders presenting their ideas',
    date: '2025-12-01',
    location: 'Singapore',
  },
  // Workshops category
  {
    id: 3,
    src: '/gallery/images/workshop-2025-12-01-1.jpg', // Place your image here
    alt: 'AI Tools Workshop',
    category: 'Workshops',
    title: 'AI Tools Workshop',
    description: 'Learning new technologies',
    date: '2025-12-01',
    location: 'Singapore',
  },
  // Networking category
  {
    id: 4,
    src: '/gallery/images/networking-2025-12-01-1.jpg', // Place your image here
    alt: 'Monthly Networking Mixer',
    category: 'Networking',
    title: 'Monthly Mixer',
    description: 'Connecting founders',
    date: '2025-12-01',
    location: 'Singapore',
  },
  // Add your actual event images here following the same pattern
]

// Helper function to get images by category
export function getImagesByCategory(category: string): GalleryImage[] {
  if (category === 'All') {
    return galleryImages
  }
  return galleryImages.filter(img => img.category === category)
}

// Helper function to get category counts
export function getCategoryCounts() {
  return {
    'All': galleryImages.length,
    'Events': galleryImages.filter(img => img.category === 'Events').length,
    'Workshops': galleryImages.filter(img => img.category === 'Workshops').length,
    'Networking': galleryImages.filter(img => img.category === 'Networking').length,
  }
}

