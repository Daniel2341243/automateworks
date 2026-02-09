"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MagnifyingGlassIcon,
  CogIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import CalendlyButton from "./CalendlyButton";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlassIcon,
    title: "Analyse",
    timeline: "Woche 1",
    subtitle: "Kostenlose Prozess-Analyse",
    details: [
      "15-Minuten-Gespräch: Wir verstehen Ihre größten Zeitfresser",
      "Wir identifizieren 3-5 Automatisierungs-Potenziale",
      "Sie erhalten konkretes Einsparungspotenzial (Stunden + \u20AC)",
    ],
    output: "Detaillierter Report mit ROI-Kalkulation",
  },
  {
    number: "02",
    icon: CogIcon,
    title: "Setup",
    timeline: "Woche 2-3",
    subtitle: "Implementierung & Integration",
    details: [
      "Wir verbinden unsere MCPs mit Ihren bestehenden Tools",
      "Kein System-Wechsel nötig (E-Mail, CRM, Dokumenten-Management)",
      "Team-Training (1 Stunde)",
      "Test-Phase mit Ihren echten Daten",
    ],
    output: "Funktionierende Automatisierung, Ready-to-use",
  },
  {
    number: "03",
    icon: ArrowTrendingUpIcon,
    title: "Optimierung",
    timeline: "Laufend",
    subtitle: "Monitoring & Verbesserung",
    details: [
      "Monatliche Check-Ins: Was funktioniert? Wo ist noch Potenzial?",
      "Kontinuierliche Anpassungen basierend auf Ihrem Feedback",
      "Neue Use Cases identifizieren",
      "Technologie-Updates automatisch eingespielt",
    ],
    output: "Immer optimaler werdende Prozesse",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ablauf" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            So einfach geht&rsquo;s
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Keine monatelange Implementierung. Keine IT-Migration. In 3
            Schritten zu mehr Zeit.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-200" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {step.timeline}
                    </p>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-neutral-800">
                      {step.subtitle}
                    </h4>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">
                          &#8250;
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Output */}
                  <div className="bg-white rounded-lg border border-neutral-200 p-3">
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-1">
                      Ergebnis
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {step.output}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stat + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-700 mb-6">
            Durchschnittliche Zeit bis zur vollen Produktivität:{" "}
            <strong className="text-primary">18 Tage</strong>
          </p>
          <CalendlyButton
            source="how_it_works"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            Prozess-Analyse jetzt buchen
          </CalendlyButton>
          <p className="mt-3 text-sm text-neutral-500">
            In 15 Minuten wissen Sie, ob Automatisierung für Sie sinnvoll ist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
