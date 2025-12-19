"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import GrowthLabLogo from "./GrowthLabLogo";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.95)"]
  );
  const blur = useTransform(scrollY, [0, 50], ["blur(8px)", "blur(12px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling on page load and navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash && pathname === "/") {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    // Handle on mount and path changes
    handleHashScroll();

    // Handle browser back/forward with hash
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false);
      }
    };
    if (isMoreMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreMenuOpen]);

  // Helper function to handle navigation
  const handleNavigation = (href: string, event?: React.MouseEvent) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);

    // Handle hash links (anchor links)
    if (href.startsWith("/#")) {
      const hash = href.substring(2); // Remove '/#'

      // If we're already on the home page, just scroll and update URL
      if (pathname === "/" || window.location.pathname === "/") {
        if (event) {
          event.preventDefault();
        }
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update URL to show hash
          window.history.pushState(null, "", `/#${hash}`);
        }
      } else {
        // For cross-page navigation, let Next.js handle it naturally
        // The hash will be in the URL and browser will scroll automatically
        if (event) {
          event.preventDefault();
        }
        // Navigate with hash in URL
        router.push(`/#${hash}`);
      }
    } else {
      // Regular route navigation
      if (event) {
        event.preventDefault();
      }
      router.push(href);
    }
  };

  // Essential navigation items - kept in main nav
  const mainNavItems = [
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Gallery", href: "/gallery" },
    { name: "Feed", href: "/feed" },
    { name: "Events", href: "/events" },
  ];

  // Secondary items - moved to dropdown
  const moreItems = [
    { name: "Our Team", href: "/founder" },
    { name: "Sports Club", href: "/sports-club" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: blur }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with animation */}
            <Link
              href="/"
              className="flex items-center space-x-3 group min-h-[44px]"
            >
              <GrowthLabLogo size={56} />
              <motion.span
                className="text-xl font-semibold text-slate-900 tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                GrowthLab
              </motion.span>
            </Link>

            {/* Desktop Navigation - Clean & Essential */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={(e) => handleNavigation(item.href, e)}
                    className="relative text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 min-h-[44px] flex items-center group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>
              ))}

              {/* More Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 min-h-[44px] group"
                >
                  More
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isMoreMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMoreMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50"
                    >
                      {moreItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={(e) => handleNavigation(item.href, e)}
                          className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-5 w-px bg-slate-300 mx-2" />

              <Link
                href="https://app.growthlab.sg/login"
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 min-h-[44px] flex items-center"
              >
                Log In
              </Link>
            </div>

            {/* CTA Button - Interactive */}
            <div className="hidden lg:flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://app.growthlab.sg/signup"
                  className="relative px-6 py-2.5 bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-slate-800 transition-all duration-300 min-h-[44px] flex items-center overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-amber opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Start Building</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Animated */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-1">
                {mainNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={(e) => handleNavigation(item.href, e)}
                      className="w-full text-left text-slate-700 font-medium hover:text-slate-900 transition-colors py-3 min-h-[44px] flex items-center"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                <div className="pt-2 pb-2 border-t border-slate-200 mt-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1 py-2">
                    More
                  </div>
                  {moreItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (mainNavItems.length + index) * 0.05,
                      }}
                    >
                      <button
                        onClick={(e) => handleNavigation(item.href, e)}
                        className="w-full text-left text-slate-600 font-normal hover:text-slate-900 transition-colors py-2.5 min-h-[44px] flex items-center pl-4"
                      >
                        {item.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-4 space-y-3 border-t border-slate-200 mt-2">
                  <Link
                    href="https://app.growthlab.sg/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-700 font-medium hover:text-slate-900 transition-colors py-3 min-h-[44px] flex items-center"
                  >
                    Log In
                  </Link>
                  <Link
                    href="https://app.growthlab.sg/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors min-h-[44px] flex items-center justify-center rounded-lg"
                  >
                    Start Building
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
