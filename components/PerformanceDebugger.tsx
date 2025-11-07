// Performance Test - Add this temporarily to debug
"use client";

import { useEffect } from "react";

export function PerformanceDebugger() {
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    function measureFPS() {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        console.log(
          `🎯 FPS: ${Math.round(
            (frameCount * 1000) / (currentTime - lastTime)
          )}`
        );
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    }

    requestAnimationFrame(measureFPS);

    // Log animation conflicts
    const framerElements = document.querySelectorAll("[data-framer-name]");
    const elementsWithTransitions = document.querySelectorAll(
      '[style*="transition"]'
    );

    console.log("🔍 Debug Info:");
    console.log(`📊 Framer Motion elements: ${framerElements.length}`);
    console.log(
      `⚠️ Elements with CSS transitions: ${elementsWithTransitions.length}`
    );

    // Check for conflicting styles
    framerElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.transition !== "none") {
        console.warn("🚨 CSS transition conflict detected:", el);
      }
    });
  }, []);

  return null;
}
