"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth, trackSectionView } from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 90];
const SECTION_IDS = [
  "probleme",
  "loesungen",
  "ergebnisse",
  "ablauf",
  "faq",
  "preise",
];

export default function ScrollTracker() {
  const trackedDepths = useRef(new Set<number>());
  const trackedSections = useRef(new Set<string>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      // Track scroll depth milestones
      for (const threshold of SCROLL_THRESHOLDS) {
        if (
          scrollPercentage >= threshold &&
          !trackedDepths.current.has(threshold)
        ) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }

      // Track section visibility
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && !trackedSections.current.has(id)) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5) {
            trackedSections.current.add(id);
            trackSectionView(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
