"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  EnvelopeOpenIcon,
  DocumentMagnifyingGlassIcon,
  UserPlusIcon,
  BellAlertIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import CalendlyButton from "./CalendlyButton";

const solutions = [
  {
    icon: EnvelopeOpenIcon,
    title: "E-Mail-Intelligence",
    audience: "Alle Branchen",
    features: [
      "Eingehende E-Mails automatisch kategorisieren",
      "Routine-Anfragen mit vorgefertigten Antworten beantworten",
      "Dringende Nachrichten priorisieren",
      "Follow-Ups automatisch versenden",
    ],
    result: "Von 90 Minuten E-Mail-Bearbeitung auf 20 Minuten",
    price: "ab 200\u20AC/Monat",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Dokumenten-Analyse",
    audience: "Recruiter, Steuerberater, Anwälte",
    features: [
      "CVs, Verträge, Steuerdokumente automatisch analysieren",
      "Relevante Daten extrahieren und in Ihr System eintragen",
      "Inkonsistenzen und Fehler erkennen",
      "Dokumente nach Relevanz sortieren",
    ],
    result: "100 CVs in 10 Minuten statt 4 Stunden gescreent",
    price: "ab 300\u20AC/Monat",
  },
  {
    icon: UserPlusIcon,
    title: "Client-Onboarding",
    audience: "Alle Branchen",
    features: [
      "Neue Mandanten/Klienten automatisch anlegen",
      "Dokumente anfordern und verarbeiten",
      "Onboarding-Checklisten abarbeiten",
      "Stakeholder automatisch informieren",
    ],
    result: "Von 2h manuellem Setup auf 15 Minuten reduziert",
    price: "ab 150\u20AC/Monat",
  },
  {
    icon: BellAlertIcon,
    title: "Fristenmanagement",
    audience: "Steuerberater, Anwälte, Architekten",
    features: [
      "Fristen automatisch aus Dokumenten extrahieren",
      "Proaktive Erinnerungen an alle Beteiligten",
      "Eskalationen bei kritischen Deadlines",
      "Dokumentation aller Fristen-Aktivitäten (Compliance)",
    ],
    result: "Nie wieder Fristen verpassen \u2013 garantiert",
    price: "ab 250\u20AC/Monat",
  },
];

function SolutionCard({
  solution,
  index,
  isInView,
}: {
  solution: (typeof solutions)[0];
  index: number;
  isInView: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
            <solution.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-800">
              {solution.title}
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Für: {solution.audience}
            </p>
          </div>
        </div>

        {/* Expandable Features */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          <span>Funktionen anzeigen</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 pb-4">
            {solution.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-neutral-600"
              >
                <span className="text-success mt-0.5">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Result */}
        <div className="bg-success-light rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-success flex items-center gap-2">
            <span className="text-lg">&#9889;</span>
            {solution.result}
          </p>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-neutral-800">{solution.price}</p>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="loesungen" ref={ref}>
      {/* Transition Element */}
      <div className="bg-gradient-to-b from-neutral-50 to-white py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-primary"
        >
          Es geht auch anders &darr;
        </motion.p>
      </div>

      <div className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
              Automatisierung, die funktioniert &ndash; ohne IT-Chaos
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Wir nutzen MCP-Technologie (Model Context Protocol), um Ihre
              bestehenden Tools intelligent zu verbinden. Keine komplette
              System-Migration. Keine monatelange Implementierung.
            </p>
          </motion.div>

          {/* Solution Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <CalendlyButton
              source="solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-secondary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              Welche Automatisierung passt zu mir?
            </CalendlyButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
