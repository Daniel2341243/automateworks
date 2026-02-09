"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalculatorIcon,
  ScaleIcon,
  HomeModernIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const branchen = [
  {
    icon: CalculatorIcon,
    title: "Steuerberater",
    description:
      "Mandantenanfragen, Belegverarbeitung und Fristenmanagement automatisieren. Mehr Zeit für Beratung.",
    stat: "73% weniger Admin",
    href: "/steuerberater",
  },
  {
    icon: ScaleIcon,
    title: "Rechtsanwälte",
    description:
      "Vertragsprüfung, Fristenüberwachung und Mandantenkommunikation intelligent automatisieren.",
    stat: "75% schnellere Reviews",
    href: "/rechtsanwaelte",
  },
  {
    icon: HomeModernIcon,
    title: "Immobilienmakler",
    description:
      "Lead-Qualifizierung, Exposé-Erstellung und Besichtigungskoordination auf Autopilot.",
    stat: "35% mehr Abschlüsse",
    href: "/immobilienmakler",
  },
  {
    icon: UserGroupIcon,
    title: "Recruiting-Agenturen",
    description:
      "CV-Screening, Kandidatenkommunikation und Kunden-Reporting automatisieren.",
    stat: "84% weniger Screening-Zeit",
    href: "/recruiting",
  },
  {
    icon: BriefcaseIcon,
    title: "Unternehmensberater",
    description:
      "Research, Projekt-Reporting und Proposal-Erstellung beschleunigen. Mehr Billable Hours.",
    stat: "20% mehr Billable Hours",
    href: "/unternehmensberater",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Architekten",
    description:
      "Leistungsverzeichnisse, Fristenmanagement und Projektdokumentation automatisieren.",
    stat: "70% schnellere LVs",
    href: "/architekten",
  },
];

export default function Branchen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="branchen" className="py-20 sm:py-28 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            Spezialisiert auf Ihre Branche
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Wir kennen die Prozesse, Compliance-Anforderungen und
            Herausforderungen in Ihrer Branche &ndash; und wissen genau, wo
            Automatisierung den größten Hebel hat.
          </p>
        </motion.div>

        {/* Branchen Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branchen.map((branche, index) => (
            <motion.a
              key={branche.title}
              href={branche.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <branche.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <ArrowRightIcon className="w-5 h-5 text-neutral-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                {branche.title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {branche.description}
              </p>

              <div className="inline-flex items-center px-3 py-1.5 bg-success-light rounded-full">
                <span className="text-xs font-semibold text-success">
                  {branche.stat}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
