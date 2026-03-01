"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, X } from "lucide-react";
import { createPortal } from "react-dom";

const APP_STORE_URL =
  "https://apps.apple.com/sg/app/growth-lab-sg/id6757107558";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.growthlab.app&hl=en";
const WEB_SIGNUP_URL = "https://app.growthlab.sg/signup";

interface StartBuildingDropdownProps {
  /** The button/trigger element content */
  children: React.ReactNode;
  /** Additional class for the wrapper div */
  className?: string;
  /** Where the dropdown appears relative to the trigger */
  align?: "center" | "left" | "right";
  /** Whether dropdown opens upward */
  openUp?: boolean;
  /** Callback when dropdown opens/closes */
  onToggle?: (isOpen: boolean) => void;
}

function DropdownContent({ onClose }: { onClose: () => void }) {
  return (
    <>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group/item"
      >
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 384 512" className="w-5 h-5 fill-white">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 group-hover/item:text-primary transition-colors">
            Download for iOS
          </div>
          <div className="text-xs text-slate-500">App Store</div>
        </div>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group/item"
      >
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 group-hover/item:text-primary transition-colors">
            Download for Android
          </div>
          <div className="text-xs text-slate-500">Google Play</div>
        </div>
      </a>
      <div className="border-t border-slate-100 my-1" />
      <a
        href={WEB_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group/item"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-amber rounded-lg flex items-center justify-center flex-shrink-0">
          <Monitor size={20} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 group-hover/item:text-primary transition-colors">
            Continue to Web
          </div>
          <div className="text-xs text-slate-500">app.growthlab.sg</div>
        </div>
      </a>
    </>
  );
}

export default function StartBuildingDropdown({
  children,
  className = "",
  align = "center",
  openUp = false,
  onToggle,
}: StartBuildingDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobileView(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        onToggle?.(false);
      }
    };
    if (isOpen && !isMobileView) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobileView, onToggle]);

  // Prevent body scroll when mobile modal is open
  useEffect(() => {
    if (isOpen && isMobileView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobileView]);

  const toggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    onToggle?.(next);
  };

  const close = () => {
    setIsOpen(false);
    onToggle?.(false);
  };

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "right"
        ? "right-0"
        : "left-0";

  const positionClass = openUp ? "bottom-full mb-3" : "top-full mt-3";

  const animationProps = openUp
    ? {
        initial: { opacity: 0, y: -10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
      }
    : {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.95 },
      };

  // Mobile: render a full-screen bottom sheet via portal
  const mobileModal =
    mounted && isMobileView && isOpen
      ? createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-end justify-center bg-black/50 backdrop-blur-sm"
              onClick={close}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-lg bg-white rounded-t-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Handle bar */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-slate-300 rounded-full" />
                </div>
                {/* Header */}
                <div className="flex items-center justify-between px-5 pb-2 pt-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Get Started
                  </h3>
                  <button
                    onClick={close}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} className="text-slate-500" />
                  </button>
                </div>
                {/* Options */}
                <div className="px-3 pb-6">
                  <DropdownContent onClose={close} />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <div className={`relative ${className}`} ref={ref}>
      <div onClick={toggle} className="cursor-pointer">
        {children}
      </div>

      {/* Desktop dropdown */}
      {!isMobileView && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              {...animationProps}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute ${positionClass} ${alignClass} w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-[99999]`}
            >
              <div className="p-2">
                <DropdownContent onClose={close} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile bottom sheet */}
      {mobileModal}
    </div>
  );
}
