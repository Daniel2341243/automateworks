"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  EnvelopeIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const problems = [
  {
    icon: EnvelopeIcon,
    title: "E-Mail-Flut",
    description:
      "200+ E-Mails täglich. 60% davon Routine-Anfragen, die trotzdem manuell bearbeitet werden müssen.",
  },
  {
    icon: DocumentDuplicateIcon,
    title: "Dokumenten-Chaos",
    description:
      "Stunden mit Copy-Paste zwischen Systemen. Informationen manuell aus PDFs extrahieren. Keine Zeit für wertschöpfende Arbeit.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Fristenstress",
    description:
      'Deadlines manuell tracken. Panische E-Mails am Freitag Abend. "Haben wir nicht vergessen...?"',
  },
];

const pieData = [
  { label: "Administrative Tätigkeiten", percentage: 40, color: "#EF4444" },
  { label: "Mandantenarbeit", percentage: 35, color: "#28A745" },
  { label: "Meetings & Koordination", percentage: 15, color: "#F59E0B" },
  { label: "Akquise & Strategie", percentage: 10, color: "#0066CC" },
];

function PieChartVisual() {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-neutral-800 mb-6 text-center">
        Wo geht Ihre Zeit hin?
      </h3>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        {/* Simple CSS pie chart */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {/* Red - 40% */}
            <circle
              cx="18" cy="18" r="15.9"
              fill="transparent"
              stroke="#EF4444"
              strokeWidth="3.8"
              strokeDasharray="40 60"
              strokeDashoffset="0"
            />
            {/* Green - 35% */}
            <circle
              cx="18" cy="18" r="15.9"
              fill="transparent"
              stroke="#28A745"
              strokeWidth="3.8"
              strokeDasharray="35 65"
              strokeDashoffset="-40"
            />
            {/* Yellow - 15% */}
            <circle
              cx="18" cy="18" r="15.9"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="3.8"
              strokeDasharray="15 85"
              strokeDashoffset="-75"
            />
            {/* Blue - 10% */}
            <circle
              cx="18" cy="18" r="15.9"
              fill="transparent"
              stroke="#0066CC"
              strokeWidth="3.8"
              strokeDasharray="10 90"
              strokeDashoffset="-90"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-2xl font-extrabold text-red-500">40%</span>
              <br />
              <span className="text-xs text-neutral-500">Admin</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {pieData.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-neutral-600 flex-1">
                {item.label}
              </span>
              <span
                className="text-sm font-bold"
                style={{ color: item.color }}
              >
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-sm font-semibold text-primary bg-primary-light rounded-lg p-3">
        Was wäre, wenn die 40% auf 10% schrumpfen?
      </p>
    </div>
  );
}

export default function ProblemAgitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="probleme" className="py-20 sm:py-28 bg-neutral-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            Kommt Ihnen das bekannt vor?
          </h2>
        </motion.div>

        {/* 3 Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong>Das Ergebnis?</strong> Sie arbeiten 60+ Stunden, davon 40%
            mit Aufgaben, die keine Ihrer Qualifikationen benötigen. Und neue
            Mitarbeiter finden Sie trotzdem nicht.
          </p>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <PieChartVisual />
        </motion.div>
      </div>
    </section>
  );
}
