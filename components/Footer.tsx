"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  X,
  MessageSquare,
  Video,
  Calendar,
  Globe,
  Send,
} from "lucide-react";
import GrowthLabLogo from "./GrowthLabLogo";

const footerLinks = {
  platform: [
    { name: "About Us", href: "/about", external: false },
    { name: "How It Works", href: "#how-it-works", external: false },
    { name: "Features", href: "#features", external: false },
    { name: "Pricing", href: "/pricing", external: false },
    { name: "Success Stories", href: "/stories", external: false },
  ],
  resources: [
    { name: "Blog", href: "/blog", external: false },
    { name: "Knowledge Base", href: "/knowledge-base", external: false },
    { name: "Events", href: "/events", external: true },
    { name: "Resources", href: "/resources", external: false },
    { name: "Partner Directory", href: "/partners", external: false },
  ],
  support: [
    { name: "Help Center", href: "/help", external: false },
    { name: "Contact Us", href: "/contact", external: false },
    { name: "FAQ", href: "#faq", external: false },
    { name: "Community Guidelines", href: "/guidelines", external: false },
    { name: "Report an Issue", href: "/report", external: false },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", external: false },
    { name: "Terms of Service", href: "/terms", external: false },
    { name: "Cookie Policy", href: "/cookies", external: false },
    { name: "Security", href: "/security", external: false },
    { name: "GDPR Compliance", href: "/gdpr", external: false },
  ],
};

const socialLinks = [
  {
    icon: Globe,
    href: "https://www.growthlab.sg",
    label: "Website",
    color: "hover:bg-blue-500",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/growthlab-sg",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/growthlab.sg",
    label: "Instagram",
    color: "hover:bg-pink-500",
  },
  {
    icon: X,
    href: "https://x.com/Growthlabsg",
    label: "X (Twitter)",
    color: "hover:bg-slate-700",
  },
  {
    icon: Video,
    href: "https://www.tiktok.com/@growthlab.sg",
    label: "TikTok",
    color: "hover:bg-black",
  },
  {
    icon: MessageSquare,
    href: "https://whatsapp.com/channel/0029Vb708tt4yltRmesgcE3c",
    label: "WhatsApp Channel",
    color: "hover:bg-green-500",
  },
  {
    icon: Send,
    href: "https://t.me/+lBbyU9K4QcRmNWE1",
    label: "Telegram",
    color: "hover:bg-blue-400",
  },
  {
    icon: Calendar,
    href: "https://lu.ma/growthlab.sg",
    label: "Events Calendar",
    color: "hover:bg-purple-500",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <GrowthLabLogo size={56} />
              <span className="text-xl font-semibold text-white tracking-tight">
                GrowthLab
              </span>
            </Link>
            <p className="text-gray-300 font-light mb-6 leading-relaxed text-sm">
              A global startup ecosystem helping founders, investors, students,
              and innovators connect, launch, and grow. LinkedIn for startups.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@growthlab.sg"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group text-sm"
              >
                <Mail
                  size={16}
                  className="text-primary group-hover:scale-110 transition-transform flex-shrink-0"
                />
                <span className="font-light">hello@growthlab.sg</span>
              </a>
              <a
                href="tel:+6597371722"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group text-sm"
              >
                <Phone
                  size={16}
                  className="text-primary group-hover:scale-110 transition-transform flex-shrink-0"
                />
                <span className="font-light">+65 9737 1722</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin
                  size={16}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="font-light">Singapore • India</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300 group ${social.color}`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Download App */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-4">
                Get the App
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/sg/app/growth-lab-sg/id6757107558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors duration-300 group"
                  aria-label="Download on the App Store"
                >
                  <svg
                    viewBox="0 0 384 512"
                    className="w-5 h-5 fill-white flex-shrink-0"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-400 leading-none">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold text-white leading-tight">
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.growthlab.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors duration-300 group"
                  aria-label="Get it on Google Play"
                >
                  <svg
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-white flex-shrink-0"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-400 leading-none">
                      Get it on
                    </div>
                    <div className="text-sm font-semibold text-white leading-tight">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-5 text-base">
              Platform
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-5 text-base">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-5 text-base">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-5 text-base">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-light text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-center">
              Stay Updated
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-light mb-6 text-center">
              Get the latest updates, events, and insights delivered to your
              inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email") as string;
                if (email) {
                  // Newsletter subscription logic
                  alert(`Thank you! We'll send updates to ${email}`);
                  e.currentTarget.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base min-h-[44px]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg whitespace-nowrap min-h-[44px] text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 font-light text-sm text-center md:text-left">
              © {new Date().getFullYear()} GrowthLab. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 font-light flex-wrap justify-center md:justify-end">
              <span>Built with ❤️ in Singapore</span>
              <span className="hidden sm:inline">•</span>
              <span>2,500+ Members</span>
              <span className="hidden sm:inline">•</span>
              <span>50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
