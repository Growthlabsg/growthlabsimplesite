// Gallery Event Data
// To add new events:
// 1. Add images to public/gallery/images/ folder
// 2. Name them: event-[date]-[number].jpg (e.g., event-2025-12-01-1.jpg)
// 3. Add entry below with image path and event details

export interface GalleryImage {
  id: number;
  src: string; // Path relative to public folder (e.g., '/gallery/images/event-2025-12-01-1.jpg')
  alt: string;
  category: "Events" | "Workshops" | "Networking";
  title: string;
  description: string;
  date?: string; // Optional: Event date (YYYY-MM-DD)
  location?: string; // Optional: Event location
  videoUrl?: string; // Optional: YouTube/Vimeo URL for videos
}

export const galleryImages: GalleryImage[] = [
  // NEW YEAR EDITION MIXER – Startup Surge Kickoff (29 Jan 2026)
  {
    id: 36,
    src: "/gallery/images/mixer-2026-01-29-1.jpeg",
    alt: "Founders networking at GrowthLab New Year Edition Mixer Startup Surge Kickoff",
    category: "Networking",
    title: "NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    description:
      "Riverside Clarke Quay vibes, cold drinks, real founders, and fresh connections to power 2026",
    date: "2026-01-29",
    location: "Minami, Singapore",
  },
  {
    id: 38,
    src: "/gallery/images/mixer-2026-01-29-2.jpeg",
    alt: "Startup founders connecting at New Year Mixer event Singapore",
    category: "Networking",
    title: "NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    description:
      "Riverside Clarke Quay vibes, cold drinks, real founders, and fresh connections to power 2026",
    date: "2026-01-29",
    location: "Minami, Singapore",
  },
  {
    id: 39,
    src: "/gallery/images/mixer-2026-01-29-3.jpeg",
    alt: "Entrepreneurs at GrowthLab Startup Surge Kickoff riverside mixer",
    category: "Networking",
    title: "NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    description:
      "Riverside Clarke Quay vibes, cold drinks, real founders, and fresh connections to power 2026",
    date: "2026-01-29",
    location: "Minami, Singapore",
  },
  {
    id: 40,
    src: "/gallery/images/mixer-2026-01-29-4.jpeg",
    alt: "Community networking at New Year Edition Mixer Clarke Quay",
    category: "Networking",
    title: "NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    description:
      "Riverside Clarke Quay vibes, cold drinks, real founders, and fresh connections to power 2026",
    date: "2026-01-29",
    location: "Minami, Singapore",
  },
  {
    id: 41,
    src: "/gallery/images/mixer-2026-01-29-5.jpeg",
    alt: "GrowthLab members celebrating New Year Startup Surge event",
    category: "Networking",
    title: "NEW YEAR EDITION MIXER – Startup Surge Kickoff",
    description:
      "Riverside Clarke Quay vibes, cold drinks, real founders, and fresh connections to power 2026",
    date: "2026-01-29",
    location: "Minami, Singapore",
  },

  // SPEAK LIKE A CEO — Leadership Fireside Chats - S1 (30 Jan 2026)
  {
    id: 37,
    src: "/gallery/images/speak-ceo-2026-01-30-1.jpeg",
    alt: "Leadership fireside chats at GrowthLab Speak Like a CEO event with SGInnovate",
    category: "Events",
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    description:
      "Raw, unfiltered leadership conversations with powerhouse founders and executives at SGInnovate",
    date: "2026-01-30",
    location: "SGInnovate, Singapore",
  },
  {
    id: 43,
    src: "/gallery/images/speak-ceo-2026-01-30-2.jpeg",
    alt: "Founders sharing leadership insights at Speak Like a CEO event",
    category: "Events",
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    description:
      "Raw, unfiltered leadership conversations with powerhouse founders and executives at SGInnovate",
    date: "2026-01-30",
    location: "SGInnovate, Singapore",
  },
  {
    id: 44,
    src: "/gallery/images/speak-ceo-2026-01-30-3.jpeg",
    alt: "Audience engaged at GrowthLab CEO fireside chat session",
    category: "Events",
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    description:
      "Raw, unfiltered leadership conversations with powerhouse founders and executives at SGInnovate",
    date: "2026-01-30",
    location: "SGInnovate, Singapore",
  },
  {
    id: 45,
    src: "/gallery/images/speak-ceo-2026-01-30-4.jpeg",
    alt: "Panel discussion at Speak Like a CEO leadership event SGInnovate",
    category: "Events",
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    description:
      "Raw, unfiltered leadership conversations with powerhouse founders and executives at SGInnovate",
    date: "2026-01-30",
    location: "SGInnovate, Singapore",
  },
  {
    id: 46,
    src: "/gallery/images/speak-ceo-2026-01-30-5.jpeg",
    alt: "Networking after Speak Like a CEO fireside chats at SGInnovate",
    category: "Events",
    title: "SPEAK LIKE A CEO — Leadership Fireside Chats - S1",
    description:
      "Raw, unfiltered leadership conversations with powerhouse founders and executives at SGInnovate",
    date: "2026-01-30",
    location: "SGInnovate, Singapore",
  },

  // ROOFTOP CHRISTMAS MIXER - All event photos
  {
    id: 6,
    src: "/gallery/images/JH2_2893.jpg",
    alt: "Founders networking at GrowthLab Rooftop Christmas Mixer in Singapore",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 15,
    src: "/gallery/images/JH2_2922.jpg",
    alt: "Entrepreneurs mingling at rooftop networking event Singapore",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 1,
    src: "/gallery/images/JH2_2873.jpg",
    alt: "Startup founders connecting at Christmas networking mixer",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 2,
    src: "/gallery/images/JH2_2875.jpg",
    alt: "Business professionals at exclusive rooftop event Singapore",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 3,
    src: "/gallery/images/JH2_2877.jpg",
    alt: "GrowthLab community members at festive networking event",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 4,
    src: "/gallery/images/JH2_2884.jpg",
    alt: "Entrepreneurs exchanging ideas at holiday mixer event",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 5,
    src: "/gallery/images/JH2_2885.jpg",
    alt: "Singapore startup community at rooftop Christmas celebration",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },

  {
    id: 9,
    src: "/gallery/images/JH2_2905.jpg",
    alt: "Professional networking at GrowthLab holiday gathering",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 10,
    src: "/gallery/images/JH2_2907.jpg",
    alt: "Founders building connections at Christmas mixer Singapore",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 11,
    src: "/gallery/images/JH2_2912.jpg",
    alt: "Startup ecosystem networking at private rooftop venue",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },

  {
    id: 13,
    src: "/gallery/images/JH2_2916.jpg",
    alt: "GrowthLab members networking with city skyline backdrop",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },
  {
    id: 14,
    src: "/gallery/images/JH2_2918.jpg",
    alt: "Entrepreneurs at festive rooftop networking event Singapore",
    category: "Networking",
    title: "ROOFTOP CHRISTMAS MIXER",
    description: "Connecting founders at Singapore's highest private rooftop",
    date: "2025-11-07",
    location: "Singapore",
  },

  // Events category - Replace these with your actual event images
  {
    id: 19,
    src: "/gallery/images/2_2.jpg", // Place your image here
    alt: "Speaker presenting health strategies for entrepreneurs at GrowthLab conference",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 20,
    src: "/gallery/images/2_1.jpg", // Place your image here
    alt: "Keynote speaker on entrepreneurial wellness and productivity",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 21,
    src: "/gallery/images/2_3.jpg", // Place your image here
    alt: "Audience engaged at health tactics workshop for startup founders",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 22,
    src: "/gallery/images/2_4.jpg", // Place your image here
    alt: "Panel discussion on work-life balance for entrepreneurs",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 23,
    src: "/gallery/images/2_5.jpg", // Place your image here
    alt: "Interactive session on sustainable hustle practices",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 24,
    src: "/gallery/images/2_6.jpg", // Place your image here
    alt: "GrowthLab annual conference on entrepreneurial health strategies",
    category: "Events",
    title: "Annual Conference",
    description: "Keynote speakers and presentations",
    date: "2025-08-20",
    location: "Singapore",
  },
  {
    id: 25,
    src: "/gallery/images/3_2.jpg", // Place your image here
    alt: "Workshop participants learning about AI tools for inclusive workplaces",
    category: "Workshops",
    title:
      "𝐓𝐞𝐚 & 𝐉𝐚𝐦: 𝐀𝐈 𝐟𝐨𝐫 𝐀𝐥𝐥 - 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐈𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐖𝐨𝐫𝐤𝐩𝐥𝐚𝐜𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐀𝐠𝐞 𝐨𝐟 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 ",
    description: "Founders presenting their ideas",
    date: "2025-11-14",
    location: "Singapore",
  },
  {
    id: 26,
    src: "/gallery/images/3_1.jpg", // Place your image here
    alt: "Tea and Jam workshop exploring AI for workplace inclusivity",
    category: "Workshops",
    title:
      "𝐓𝐞𝐚 & 𝐉𝐚𝐦: 𝐀𝐈 𝐟𝐨𝐫 𝐀𝐥𝐥 - 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐈𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐖𝐨𝐫𝐤𝐩𝐥𝐚𝐜𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐀𝐠𝐞 𝐨𝐟 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 ",
    description: "Founders presenting their ideas",
    date: "2025-11-14",
    location: "Singapore",
  },
  {
    id: 27,
    src: "/gallery/images/3_3.jpg", // Place your image here
    alt: "Attendees collaborating at AI for All inclusive workplace workshop",
    category: "Workshops",
    title:
      "𝐓𝐞𝐚 & 𝐉𝐚𝐦: 𝐀𝐈 𝐟𝐨𝐫 𝐀𝐥𝐥 - 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐈𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐖𝐨𝐫𝐤𝐩𝐥𝐚𝐜𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐀𝐠𝐞 𝐨𝐟 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 ",
    description: "Founders presenting their ideas",
    date: "2025-11-14",
    location: "Singapore",
  },
  {
    id: 28,
    src: "/gallery/images/3_4.jpg", // Place your image here
    alt: "GrowthLab Tea and Jam session on building inclusive AI workplaces",
    category: "Workshops",
    title:
      "𝐓𝐞𝐚 & 𝐉𝐚𝐦: 𝐀𝐈 𝐟𝐨𝐫 𝐀𝐥𝐥 - 𝐁𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐈𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐖𝐨𝐫𝐤𝐩𝐥𝐚𝐜𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐀𝐠𝐞 𝐨𝐟 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 ",
    description: "Founders presenting their ideas",
    date: "2025-11-14",
    location: "Singapore",
  },
  // Workshops category
  {
    id: 29,
    src: "/gallery/images/4_1.jpg", // Place your image here
    alt: "Founders networking at Tech and Tonic Friday social event",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 30,
    src: "/gallery/images/4_2.jpg", // Place your image here
    alt: "Tech entrepreneurs connecting at casual Friday networking event",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 31,
    src: "/gallery/images/4_3.jpg", // Place your image here
    alt: "GrowthLab community at Tech and Tonic Friday social gathering",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 32,
    src: "/gallery/images/4_4.jpg", // Place your image here
    alt: "Startup founders enjoying drinks and discussions at tech social",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 33,
    src: "/gallery/images/4_5.jpg", // Place your image here
    alt: "Entrepreneurs building connections at Tech and Tonic networking",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 34,
    src: "/gallery/images/4_6.jpg", // Place your image here
    alt: "Professional networking at GrowthLab Tech and Tonic Friday event",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  {
    id: 35,
    src: "/gallery/images/4_7.jpg", // Place your image here
    alt: "Singapore tech community at informal Friday networking social",
    category: "Events",
    title: "Tech & Tonic Friday",
    description: "Learning new technologies",
    date: "2025-08-01",
    location: "Singapore",
  },
  // Networking category

  // Add your actual event images here following the same pattern
];

// Helper function to get images by category
export function getImagesByCategory(category: string): GalleryImage[] {
  if (category === "All") {
    return galleryImages;
  }
  return galleryImages.filter((img) => img.category === category);
}

// Helper function to get unique events (one image per event title)
export function getUniqueEvents(category?: string): GalleryImage[] {
  const images =
    category && category !== "All"
      ? galleryImages.filter((img) => img.category === category)
      : galleryImages;

  const seenTitles = new Set<string>();
  return images.filter((img) => {
    if (seenTitles.has(img.title)) {
      return false;
    }
    seenTitles.add(img.title);
    return true;
  });
}

// Helper function to get all images for a specific event (by title)
export function getImagesByEventTitle(title: string): GalleryImage[] {
  return galleryImages.filter((img) => img.title === title);
}

// Helper function to get image count for an event
export function getEventImageCount(title: string): number {
  return galleryImages.filter((img) => img.title === title).length;
}

// Helper function to get category counts
export function getCategoryCounts() {
  return {
    All: galleryImages.length,
    Events: galleryImages.filter((img) => img.category === "Events").length,
    Workshops: galleryImages.filter((img) => img.category === "Workshops")
      .length,
    Networking: galleryImages.filter((img) => img.category === "Networking")
      .length,
  };
}

// Helper function to get unique event counts per category
export function getUniqueEventCounts() {
  return {
    All: getUniqueEvents().length,
    Events: getUniqueEvents("Events").length,
    Workshops: getUniqueEvents("Workshops").length,
    Networking: getUniqueEvents("Networking").length,
  };
}
