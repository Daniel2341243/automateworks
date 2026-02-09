"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { trackCTAClick } from "@/lib/analytics";

const navLinks = [
  { href: "#probleme", label: "Probleme" },
  { href: "#loesungen", label: "Lösungen" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#branchen", label: "Branchen", hasDropdown: true },
  { href: "#faq", label: "FAQ" },
  { href: "#preise", label: "Preise" },
];

const branchenLinks = [
  { href: "/steuerberater", label: "Steuerberater" },
  { href: "/rechtsanwaelte", label: "Rechtsanwälte" },
  { href: "/immobilienmakler", label: "Immobilienmakler" },
  { href: "/recruiting", label: "Recruiting-Agenturen" },
  { href: "/unternehmensberater", label: "Unternehmensberater" },
  { href: "/architekten", label: "Architekten" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchenOpen, setIsBranchenOpen] = useState(false);
  const [isMobileBranchenOpen, setIsMobileBranchenOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    trackCTAClick("nav_cta", "navigation");
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsBranchenOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsBranchenOpen(false);
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AW</span>
            </div>
            <span className="font-bold text-lg text-neutral-800">
              Automate<span className="text-primary">Works</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                /* Branchen with dropdown */
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isBranchenOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>

                  <AnimatePresence>
                    {isBranchenOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-white rounded-xl border border-neutral-200 shadow-lg py-2 min-w-[220px]">
                          {branchenLinks.map((bl) => (
                            <a
                              key={bl.href}
                              href={bl.href}
                              className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-primary hover:bg-primary-light/50 transition-colors"
                            >
                              {bl.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="https://calendly.com/endlichunendlichkeit/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-dark transition-colors shadow-sm"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-800"
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    {/* Branchen toggle + anchor */}
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 py-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                      <button
                        onClick={() =>
                          setIsMobileBranchenOpen(!isMobileBranchenOpen)
                        }
                        className="p-2 text-neutral-400 hover:text-primary"
                        aria-label="Branchen-Untermenü öffnen"
                      >
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileBranchenOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {isMobileBranchenOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary-light ml-2">
                            {branchenLinks.map((bl) => (
                              <a
                                key={bl.href}
                                href={bl.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-1.5 text-sm text-neutral-500 hover:text-primary transition-colors"
                              >
                                {bl.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://calendly.com/endlichunendlichkeit/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleCTAClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center px-5 py-3 mt-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                Termin buchen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
