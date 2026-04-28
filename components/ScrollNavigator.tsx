"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const pages = ["/", "/about", "/projects", "/contact"];

export default function ScrollNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // Reset navigation lock when the route successfully changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  useEffect(() => {
    let touchStartY = 0;
    
    // Global lock to prevent multiple rapid scroll events
    let globalLock = false;

    const navigateTo = (direction: "next" | "prev") => {
      if (isNavigating || globalLock) return;

      const currentIndex = pages.indexOf(pathname);
      if (currentIndex === -1) return;

      if (direction === "next" && currentIndex < pages.length - 1) {
        setIsNavigating(true);
        globalLock = true;
        router.push(pages[currentIndex + 1]);
      } else if (direction === "prev" && currentIndex > 0) {
        setIsNavigating(true);
        globalLock = true;
        router.push(pages[currentIndex - 1]);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isNavigating || globalLock) return;

      // Scrolling Down
      if (e.deltaY > 30) {
        // Only navigate if user has scrolled to the bottom of the current page
        if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 5) {
          navigateTo("next");
        }
      } 
      // Scrolling Up
      else if (e.deltaY < -30) {
        // Only navigate if user is at the very top of the current page
        if (window.scrollY <= 5) {
          navigateTo("prev");
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isNavigating || globalLock) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // Swiping up (Scrolling down)
      if (deltaY > 50) {
        if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 5) {
          navigateTo("next");
        }
      } 
      // Swiping down (Scrolling up)
      else if (deltaY < -50) {
        if (window.scrollY <= 5) {
          navigateTo("prev");
        }
      }
    };

    // Use { passive: false } if we wanted to e.preventDefault() but here we just listen
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, isNavigating, router]);

  return null;
}
