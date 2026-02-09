"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { trackCTAClick } from "@/lib/analytics";
import Footer from "./Footer";

interface Benefit {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

interface NichePageProps {
  /** Page headline e.g. "Für Steuerberater" */
  headline: string;
  /** Subtitle describing the core value */
  subtitle: string;
  /** Intro paragraph */
  intro: string;
  /** Pain points specific to this niche */
  painPoints: string[];
  /** Key benefits / what we automate */
  benefits: Benefit[];
  /** Concrete use cases */
  useCases: UseCase[];
  /** Testimonial quote */
  testimonialQuote: string;
  /** Testimonial author */
  testimonialAuthor: string;
  /** Testimonial role */
  testimonialRole: string;
  /** Key stat headline e.g. "73%" */
  statValue: string;
  /** Stat description e.g. "weniger Admin-Aufwand" */
  statLabel: string;
}

const CALENDLY_URL = "https://calendly.com/endlichunendlichkeit/new-meeting";

export default function NicheLayout({
  headline,
  subtitle,
  intro,
  painPoints,
  benefits,
  useCases,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
  statValue,
  statLabel,
}: NichePageProps) {
  return (
    <>
      {/* Sticky minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">AW</span>
              </div>
              <span className="font-bold text-lg text-neutral-800">
                Automate<span className="text-primary">Works</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Zur Startseite
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("niche_nav_cta", "niche_nav")}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-dark transition-colors shadow-sm"
              >
                Termin buchen
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-primary-light/30 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/"
                className="sm:hidden inline-flex items-center gap-1.5 text-sm font-medium text-primary mb-6 hover:underline"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Zur Startseite
              </a>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 leading-tight tracking-tight mb-6">
                {headline}
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-8">
                {intro}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("niche_hero_cta", "niche_hero")}
                className="cta-pulse inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Kostenlose Prozess-Analyse buchen
              </a>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 mt-4">
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
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 sm:py-24 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-10 text-center">
                Kennen Sie das?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white rounded-xl border border-neutral-200 p-5 flex items-start gap-3"
                  >
                    <span className="text-red-400 text-lg mt-0.5">&#10007;</span>
                    <p className="text-neutral-700 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Stat */}
        <section className="py-12 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-5xl sm:text-6xl font-extrabold text-white mb-2">
                {statValue}
              </p>
              <p className="text-lg text-white/80">{statLabel}</p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4 text-center">
                So automatisieren wir Ihre Prozesse
              </h2>
              <p className="text-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
                Keine komplette System-Migration. Wir integrieren uns in Ihre bestehenden Tools.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6"
                  >
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                      <CheckCircleIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-24 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-12 text-center">
                Konkrete Anwendungsfälle
              </h2>
              <div className="space-y-6">
                {useCases.map((uc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
                  >
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-neutral-800 mb-4">
                        {uc.title}
                      </h3>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">
                            Problem
                          </p>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {uc.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                            Lösung
                          </p>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {uc.solution}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-success uppercase tracking-wide mb-1">
                            Ergebnis
                          </p>
                          <p className="text-sm font-semibold text-success leading-relaxed">
                            {uc.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 sm:p-10 text-center"
            >
              <svg
                className="w-10 h-10 text-primary/20 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-lg sm:text-xl text-neutral-700 italic leading-relaxed mb-6">
                &ldquo;{testimonialQuote}&rdquo;
              </blockquote>
              <p className="font-bold text-neutral-800">{testimonialAuthor}</p>
              <p className="text-sm text-neutral-500">{testimonialRole}</p>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-10 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                DSGVO-konform
              </div>
              <div className="flex items-center gap-2">
                <span>🇩🇪</span>
                Made in Germany
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
                ISO 27001
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-success" />
                30 Tage Geld-zurück-Garantie
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Bereit, Ihre Prozesse zu automatisieren?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                In einem 15-minütigen Gespräch analysieren wir Ihre größten
                Zeitfresser und zeigen Ihnen konkret, wie viel Sie einsparen
                können.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("niche_final_cta", "niche_final")}
                className="cta-pulse inline-flex items-center justify-center px-10 sm:px-14 py-5 bg-secondary text-white text-xl font-extrabold rounded-2xl hover:bg-secondary-dark transition-all duration-200 shadow-2xl hover:scale-[1.03]"
              >
                Jetzt Termin buchen
              </a>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+491707978879"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <PhoneIcon className="w-4 h-4" />
                  +49 170 79 78879
                </a>
                <span className="hidden sm:block w-px h-4 bg-white/30" />
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  Zurück zur Startseite
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
