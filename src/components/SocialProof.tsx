"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CalendlyButton from "./CalendlyButton";

const caseStudies = [
  {
    company: "NORD Consulting",
    location: "Kiel",
    industry: "Recruiting-Agentur",
    challenge:
      "Wir hatten 300-500 Bewerbungen pro Woche. Unser Team verbrachte 25 Stunden nur mit CV-Screening \u2013 Zeit, die für Kandidatengespräche fehlte.",
    solution:
      "Dokumenten-Analyse-MCP implementiert. CVs werden automatisch nach Skills, Erfahrung und Cultural-Fit analysiert.",
    metrics: [
      { icon: "\u23F1\uFE0F", label: "Zeit", value: "25h \u2192 4h/Woche", detail: "-84%" },
      { icon: "\uD83D\uDCC8", label: "Placements", value: "+35%", detail: "mehr Qualitätsgespräche" },
      { icon: "\uD83D\uDCB0", label: "ROI", value: "6 Wochen", detail: "bis Break-Even" },
    ],
    quote:
      "Ich war skeptisch. Nach 2 Wochen wollte ich nie wieder zurück zum alten Prozess.",
    author: "Sarah M.",
    role: "Geschäftsführerin",
  },
  {
    company: "TaxBridge",
    location: "Regensburg",
    industry: "Steuerberatung",
    challenge:
      "Monatsabschlüsse bedeuteten jedes Mal Überstunden. Unser Team war chronisch überlastet, Mandanten warteten Wochen auf Rückmeldung.",
    solution:
      "E-Mail-Intelligence + Fristenmanagement-MCP. Mandanten-Anfragen werden triaged, Fristen automatisch getrackt.",
    metrics: [
      { icon: "\u23F1\uFE0F", label: "Admin-Zeit", value: "45h \u2192 12h/Monat", detail: "-73%" },
      { icon: "\uD83D\uDCE7", label: "Response-Zeit", value: "3 Tage \u2192 4h", detail: "" },
      { icon: "\uD83D\uDE0A", label: "Zufriedenheit", value: "+65%", detail: "Mitarbeiter-Survey" },
    ],
    quote:
      "Wir haben endlich wieder Zeit für Beratung. Das war der Grund, warum ich Steuerberater geworden bin.",
    author: "Dr. Thomas K.",
    role: "Kanzleiinhaber",
  },
  {
    company: "Kanzlei Dr. Hoffmann & Kollegen",
    location: "Berlin",
    industry: "Rechtsanwaltskanzlei",
    challenge:
      "Vertragsprüfungen dauerten Stunden. Manuelle Fehlersuche, Klausel-Checks \u2013 alles händisch.",
    solution:
      "Dokumenten-Analyse-MCP für Vertrags-Review. Automatische Extraktion kritischer Klauseln, Abweichungen vom Standard.",
    metrics: [
      { icon: "\u23F1\uFE0F", label: "Review-Zeit", value: "3h \u2192 45min", detail: "-75% pro Vertrag" },
      { icon: "\u2713", label: "Fehlerrate", value: "-90%", detail: "Konsistenz-Checks" },
      { icon: "\uD83D\uDCBC", label: "Kapazität", value: "+40%", detail: "mehr Mandate" },
    ],
    quote:
      "Die Technologie erledigt die monotone Arbeit. Ich konzentriere mich auf strategische Beratung.",
    author: "RA Lisa W.",
    role: "Partnerin",
  },
];

function CaseStudyCard({
  study,
  index,
  isInView,
}: {
  study: (typeof caseStudies)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-neutral-800">{study.company}</h3>
            <p className="text-sm text-neutral-500">
              {study.industry} &middot; {study.location}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Challenge */}
        <div className="mb-4">
          <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">
            Herausforderung
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {study.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
            Lösung
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {study.solution}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-success-light rounded-lg p-3 text-center"
            >
              <p className="text-lg mb-0.5">{metric.icon}</p>
              <p className="text-sm font-bold text-success">{metric.value}</p>
              <p className="text-xs text-neutral-500 mt-0.5">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="border-l-3 border-primary pl-4 py-2">
          <p className="text-sm text-neutral-700 italic leading-relaxed">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-2 text-sm font-semibold text-neutral-800">
            {study.author},{" "}
            <span className="font-normal text-neutral-500">{study.role}</span>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ergebnisse" className="py-20 sm:py-28 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            Ergebnisse aus der Praxis
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Keine Versprechen. Messbare Resultate bei Kanzleien und Agenturen
            wie der Ihren.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.company}
              study={study}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Highlight Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary rounded-2xl p-8 sm:p-10 text-center text-white shadow-lg max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium opacity-80 mb-2">
            Durchschnittliche Zeitersparnis über alle Kunden
          </p>
          <p className="text-5xl sm:text-6xl font-extrabold mb-2">
            18 Stunden
          </p>
          <p className="text-lg font-medium opacity-90">pro Woche</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <CalendlyButton
            source="social_proof"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            Ähnliche Ergebnisse für mein Unternehmen
          </CalendlyButton>
        </motion.div>
      </div>
    </section>
  );
}
