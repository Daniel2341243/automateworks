"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { trackCTAClick } from "@/lib/analytics";

const tiers = [
  {
    name: "Starter",
    setup: "1.500\u20AC",
    monthly: "200\u20AC/Monat",
    description: "Ideal für Solo-Kanzleien & Test-Projekte",
    features: [
      "1 Automatisierung (z.B. E-Mail-Intelligence)",
      "Setup in 1 Woche",
      "30 Tage Support",
      "DSGVO-konforme Datenverarbeitung",
    ],
    popular: false,
  },
  {
    name: "Professional",
    setup: "4.500\u20AC",
    monthly: "400\u20AC/Monat",
    description: "Ideal für Kanzleien mit 5-15 Mitarbeitern",
    features: [
      "3-4 Automatisierungen",
      "Integration mit bestehenden Systemen",
      "Team-Training (inkl. Dokumentation)",
      "Monatliches Monitoring & Reporting",
      "Dedizierter Ansprechpartner",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    setup: "Individuell",
    monthly: "Individuell",
    description: "Ideal für große Sozietäten & komplexe Anforderungen",
    features: [
      "Maßgeschneiderte Lösung",
      "Compliance-Audit",
      "Dedizierter Account Manager",
      "SLA-Garantien",
      "On-Premise Option verfügbar",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preise" className="py-20 sm:py-28 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            Faire Preise. Messbarer ROI.
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                tier.popular
                  ? "border-2 border-primary ring-1 ring-primary/20"
                  : "border border-neutral-200"
              }`}
            >
              {tier.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-bold">
                  BELIEBTESTE WAHL
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  {tier.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-extrabold text-neutral-800">
                      {tier.setup}
                    </span>
                    {tier.setup !== "Individuell" && (
                      <span className="text-sm text-neutral-500">
                        Setup (einmalig)
                      </span>
                    )}
                  </div>
                  {tier.monthly !== "Individuell" && (
                    <p className="text-lg font-semibold text-primary">
                      + {tier.monthly}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-neutral-600"
                    >
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://calendly.com/endlichunendlichkeit/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCTAClick(`pricing_${tier.name}`, "pricing")
                  }
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                    tier.popular
                      ? "bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  {tier.name === "Enterprise"
                    ? "Angebot anfordern"
                    : "Jetzt starten"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-6 py-4 shadow-sm">
            <span className="text-2xl">&#128176;</span>
            <p className="text-sm text-neutral-700">
              <strong>Geld-zurück-Garantie:</strong> Wenn Sie nach 30 Tagen
              nicht mindestens 5 Stunden/Woche sparen, erstatten wir 100%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
