"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced touch device detection - check immediately
    const checkTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(pointer: coarse)").matches) ||
        (typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(hover: none)").matches)
      );
    };

    const touchDevice = checkTouchDevice();
    setIsTouchDevice(touchDevice);

    // Only add mouse event listeners on non-touch devices
    if (touchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      // Direct DOM manipulation for zero-latency cursor following
      const x = e.clientX;
      const y = e.clientY;

      // Instant inner cursor update
      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = `translate3d(${x - 8}px, ${
          y - 8
        }px, 0)`;
      }

      // Slightly delayed outer cursor for smooth trailing effect
      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = `translate3d(${x - 20}px, ${
          y - 20
        }px, 0)`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Use passive listeners for better performance
    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render cursor follower on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner cursor - instant following with direct DOM manipulation */}
      <div
        ref={innerCursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference top-0 left-0"
        style={{
          transform: "translate3d(-8px, -8px, 0)",
          willChange: "transform",
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>

      {/* Outer cursor - smooth scaling with Framer Motion, position via CSS */}
      <motion.div
        ref={outerCursorRef}
        className="fixed pointer-events-none z-[9998] mix-blend-difference top-0 left-0"
        style={{
          transform: "translate3d(-20px, -20px, 0)",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div className="w-10 h-10 border-2 border-white/30 rounded-full" />
      </motion.div>
    </>
  );
}
