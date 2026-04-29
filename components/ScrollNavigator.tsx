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
    // Only enable wheel-based navigation on non-touch (desktop) devices
    const isTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice()) return; // Skip entirely on mobile/tablet

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

      // Scrolling Down — only navigate when at the bottom of the page
      if (e.deltaY > 30) {
        if (
          window.innerHeight + Math.round(window.scrollY) >=
          document.body.offsetHeight - 5
        ) {
          navigateTo("next");
        }
      }
      // Scrolling Up — only navigate when at the very top
      else if (e.deltaY < -30) {
        if (window.scrollY <= 5) {
          navigateTo("prev");
        }
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pathname, isNavigating, router]);

  return null;
}
