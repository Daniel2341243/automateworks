"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-gradient-to-br from-white via-primary-light/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-light rounded-full text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Spezialisiert auf Professional Services
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-neutral-800 leading-tight tracking-tight mb-6">
              Arbeiten Sie 60&nbsp;Stunden,{" "}
              <span className="text-primary">schaffen aber nur&nbsp;40?</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl">
              KI-Automatisierung für Steuerberater, Rechtsanwälte, Recruiter
              &amp; Berater, die ihre Zeit mit Mandanten verbringen wollen
              &ndash; nicht mit E-Mails und Dokumenten.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <CalendlyButton
                source="hero"
                className="cta-pulse inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                Kostenlose Prozess-Analyse buchen
              </CalendlyButton>
              <a
                href="#ergebnisse"
                className="inline-flex items-center justify-center px-6 py-4 text-primary text-lg font-semibold hover:bg-primary-light rounded-xl transition-colors"
              >
                Erst Case Studies ansehen &darr;
              </a>
            </div>

            {/* Micro-copy */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-success" />
                15 Minuten
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-success" />
                Kein Verkaufsgespräch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-success" />
                Konkrete Potenzial-Analyse
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                <span>DSGVO-konform</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" />
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="text-base">🇩🇪</span>
                <span>Made in Germany</span>
              </div>
              <div className="w-px h-4 bg-neutral-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                <span>ISO 27001</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual - Before/After Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                  VORHER
                </div>
                <div className="space-y-4 mt-2">
                  {/* Clock showing late */}
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-8 h-8 text-red-400" />
                    <span className="text-2xl font-bold text-red-500">22:00</span>
                  </div>
                  {/* Stress indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-red-400">&#9679;</span>
                      247 ungelesene E-Mails
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-red-400">&#9679;</span>
                      12h Admin-Arbeit / Tag
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-red-400">&#9679;</span>
                      3 verpasste Fristen
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-red-400">&#9679;</span>
                      Keine Work-Life-Balance
                    </div>
                  </div>
                  {/* Placeholder for illustration */}
                  <div className="w-full h-24 bg-red-50 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">😰</span>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-white rounded-2xl border-2 border-success/30 p-6 shadow-md relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-success-light text-success text-xs font-bold rounded-full">
                  NACHHER
                </div>
                <div className="space-y-4 mt-2">
                  {/* Clock showing reasonable time */}
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-8 h-8 text-success" />
                    <span className="text-2xl font-bold text-success">17:00</span>
                  </div>
                  {/* Success indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-success">&#10003;</span>
                      Inbox unter Kontrolle
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-success">&#10003;</span>
                      2h Admin-Arbeit / Tag
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-success">&#10003;</span>
                      Null verpasste Fristen
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-success">&#10003;</span>
                      Fokus auf Mandanten
                    </div>
                  </div>
                  {/* Placeholder for illustration */}
                  <div className="w-full h-24 bg-success-light rounded-lg flex items-center justify-center">
                    <span className="text-4xl">😊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-4 bg-primary text-white rounded-xl p-4 text-center shadow-lg"
            >
              <p className="text-sm font-medium opacity-80">Durchschnittliche Veränderung</p>
              <p className="text-xl font-extrabold">Von 12h Admin-Arbeit auf 2h reduziert</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
