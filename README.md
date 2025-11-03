# GrowthLab - Startup Community Platform

A modern, professional website for GrowthLab, a global community-driven platform for entrepreneurs, founders, and builders.

## Features

- 🎨 **Modern Design**: Clean, minimalistic UI with professional aesthetics
- 🎯 **Interactive Landing Page**: Engaging hero section with animations
- 🔐 **Authentication Ready**: Login and registration pages with role assignment
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Fast loading times and SEO-friendly
- 🎭 **Modular Architecture**: Scalable component structure
- 📊 **Analytics Ready**: Hooks for tracking and analytics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: NextAuth.js (ready for setup)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
growthlab/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── login/              # Login page
│   ├── register/           # Registration page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── Community.tsx       # Community section
│   ├── Benefits.tsx        # Benefits section
│   ├── About.tsx           # About section
│   ├── Footer.tsx          # Footer
│   └── Analytics.tsx       # Analytics component
├── lib/
│   └── auth/               # Authentication configuration
└── public/                 # Static assets
```

## Brand Colors

- **Primary**: `#0f7377` (Teal)
- Used throughout the site for buttons, links, highlights, and accents

## Features to Implement

- [ ] Complete authentication with NextAuth.js
- [ ] User dashboard
- [ ] Innovation feed
- [ ] Job board
- [ ] Marketplace
- [ ] Business pages
- [ ] Analytics integration
- [ ] Database setup

## SEO & Performance

- Optimized metadata and Open Graph tags
- Semantic HTML structure
- Fast page loads with Next.js optimization
- Accessible components

## License

© 2024 GrowthLab. All rights reserved.

