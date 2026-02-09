"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "aw_cookie_consent";

type ConsentValue = "accepted" | "declined";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setIsVisible(false);

    if (value === "accepted") {
      console.log("[Cookie] Technisch notwendige Cookies akzeptiert");
    } else {
      console.log("[Cookie] Cookies abgelehnt – nur essenzielle Funktionen");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Text */}
              <div className="flex-1">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Diese Website verwendet ausschließlich{" "}
                  <strong>technisch notwendige Cookies</strong>, die für den
                  Betrieb der Seite erforderlich sind. Es findet kein Tracking
                  statt.{" "}
                  <a
                    href="/datenschutz"
                    className="text-primary hover:underline font-medium"
                  >
                    Mehr erfahren
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => handleConsent("declined")}
                  className="px-4 py-2.5 text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                >
                  Ablehnen
                </button>
                <button
                  onClick={() => handleConsent("accepted")}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow-sm"
                >
                  Verstanden
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
