# GrowthLab - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

## 📁 Project Overview

This is a professional, modern website for GrowthLab - a startup community platform. The site features:

### **Landing Page Sections:**
- **Hero Section**: Eye-catching animated hero with CTA buttons
- **Features**: 6 key features with icons and descriptions
- **Community**: Community types (Startups, Enterprises, Founders, Investors)
- **Benefits**: List of platform benefits with testimonials
- **About**: Mission, values, and impact statistics
- **Footer**: Complete footer with links and social media

### **Authentication Pages:**
- `/login` - User login page
- `/register` - User registration with role selection

### **Design Features:**
- ✅ Brand color `#0f7377` (teal) used throughout
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Professional, minimalistic UI
- ✅ SEO optimized with metadata
- ✅ Analytics hooks ready

## 🎨 Brand Colors

- **Primary**: `#0f7377` (Teal) - Used for buttons, links, accents
- **Gradients**: Applied to hero and about sections
- **Custom scrollbar**: Styled with primary color

## 🔧 Key Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## 📝 Next Steps

1. **Authentication Setup**: Configure NextAuth.js with your preferred providers
2. **Database**: Set up Prisma or your preferred database
3. **Analytics**: Connect Google Analytics or your analytics provider
4. **Content**: Update copy, add real testimonials, add logo images
5. **Features**: Implement feed, jobs board, marketplace sections

## 🎯 Modular Architecture

All components are modular and can be easily extended:

- `components/Navbar.tsx` - Navigation bar
- `components/Hero.tsx` - Hero section
- `components/Features.tsx` - Features grid
- `components/Community.tsx` - Community types
- `components/Benefits.tsx` - Benefits and testimonials
- `components/About.tsx` - About section
- `components/Footer.tsx` - Footer

Each component is self-contained and can be modified independently.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📊 Analytics

The `components/Analytics.tsx` file has hooks ready for:
- Google Analytics
- Plausible Analytics
- Custom analytics solutions

Update the component with your analytics provider.

## 🔐 Authentication

Authentication structure is ready in:
- `app/login/page.tsx` - Login page
- `app/register/page.tsx` - Registration page
- `lib/auth/config.ts` - Auth configuration structure

Connect NextAuth.js to complete the authentication flow.

## ✨ Customization

### Update Colors
Edit `tailwind.config.js` to change the primary color scheme.

### Update Content
All content is in component files - edit directly to update text, stats, etc.

### Add Sections
Create new components in `components/` and add to `app/page.tsx`.

## 🐛 Troubleshooting

If you encounter build issues:
1. Delete `node_modules` and `.next` folder
2. Run `npm install` again
3. Try `npm run dev` first to test

## 📞 Support

For questions or issues, check the main README.md file.

---

Built with ❤️ for GrowthLab

