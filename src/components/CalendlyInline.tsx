"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/endlichunendlichkeit/new-meeting";

export default function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calendly widget auto-initializes elements with the class
    // but we trigger a re-init if the script loaded before this component
    if (window.Calendly && containerRef.current) {
      // The widget.js script auto-detects .calendly-inline-widget divs
      // A small timeout ensures the DOM is ready
      const timer = setTimeout(() => {
        if (containerRef.current && !containerRef.current.querySelector("iframe")) {
          // Force re-scan by Calendly
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
