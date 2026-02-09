"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { trackFAQToggle } from "@/lib/analytics";

const faqs = [
  {
    question: "Ist das nicht zu komplex für unsere Kanzlei?",
    answer:
      "Genau das Gegenteil. Wir arbeiten MIT Ihren bestehenden Tools (Outlook, DATEV, etc.), nicht gegen sie. Sie müssen nichts Neues lernen. Die Automatisierung passiert im Hintergrund.",
  },
  {
    question: "Was kostet das wirklich?",
    answer: null,
    richAnswer: true,
  },
  {
    question:
      "Was ist mit Datenschutz? Wir haben sensible Mandantendaten.",
    answer: null,
    richAnswer: true,
  },
  {
    question: "Was, wenn die Technologie Fehler macht?",
    answer: null,
    richAnswer: true,
  },
  {
    question: "Wie lange sind wir gebunden?",
    answer:
      "Monatlich kündbar. Kein Risiko. Setup-Kosten sind einmalig, laufende Kosten monatlich kündbar. Ihre Daten gehören Ihnen (Export jederzeit möglich). Warum? Wir wollen, dass Sie bleiben, weil es funktioniert \u2013 nicht weil Sie müssen.",
  },
  {
    question:
      "Was unterscheidet Sie von anderen Automatisierungs-Anbietern?",
    answer: null,
    richAnswer: true,
  },
];

function PricingAnswer() {
  return (
    <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
      <p>Transparente Preise, keine versteckten Kosten:</p>
      <ul className="space-y-1.5 ml-1">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8250;</span>
          <span>
            <strong>Setup:</strong> 1.500-4.500\u20AC einmalig (abhängig von
            Komplexität)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8250;</span>
          <span>
            <strong>Laufend:</strong> 150-400\u20AC/Monat pro Automatisierung
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8250;</span>
          <span>
            <strong>ROI:</strong> Durchschnittlich 4-8 Wochen bis Break-Even
          </span>
        </li>
      </ul>
      <div className="bg-primary-light rounded-lg p-3 mt-3">
        <p className="text-primary text-sm">
          <strong>Beispiel:</strong> Eine Automatisierung spart Ihnen
          10h/Monat. Bei 150\u20AC/h Opportunitätskosten = 1.500\u20AC Wert.
          Unser Preis: 300\u20AC/Monat. Sie gewinnen{" "}
          <strong>1.200\u20AC/Monat</strong>.
        </p>
      </div>
    </div>
  );
}

function PrivacyAnswer() {
  return (
    <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
      <p>Datenschutz ist bei uns nicht optional:</p>
      <ul className="space-y-2">
        {[
          "Alle Daten bleiben in Deutschland (DSGVO-konform)",
          "Verschlüsselte Übertragung & Speicherung",
          "Kein Training von KI-Modellen mit Ihren Daten",
          "ISO 27001 zertifizierte Prozesse",
          "AVV (Auftragsverarbeitungs-Vertrag) Standard",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-success">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-neutral-700 font-medium mt-2">
        Wir arbeiten mit Anwälten und Steuerberatern &ndash; wir verstehen
        Compliance.
      </p>
    </div>
  );
}

function ErrorAnswer() {
  return (
    <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
      <p>Wichtiger Punkt. Deshalb:</p>
      <ol className="space-y-2 list-decimal list-inside">
        <li>
          Automatisierung läuft <strong>immer</strong> mit menschlichem
          Review-Schritt bei kritischen Entscheidungen
        </li>
        <li>
          <strong>Audit-Logs:</strong> Jede Aktion ist nachvollziehbar
        </li>
        <li>
          Wir garantieren: Bei Fehlern, die auf unsere Automatisierung
          zurückgehen, übernehmen wir die{" "}
          <strong>Haftung (bis 100.000\u20AC)</strong>
        </li>
        <li>
          <strong>30-Tage-Testphase</strong> mit Geld-zurück-Garantie
        </li>
      </ol>
    </div>
  );
}

function DifferentiatorAnswer() {
  return (
    <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
      <p>3 Dinge:</p>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Spezialisierung:</strong> Wir kennen Professional Services.
          Ihre Prozesse, Ihre Compliance-Anforderungen, Ihre Sprache.
        </li>
        <li>
          <strong>MCP-Technologie:</strong> Modernste AI-Integration (nicht
          nur einfache If-This-Then-That-Regeln)
        </li>
        <li>
          <strong>Partnerschaft:</strong> Wir verkaufen nicht nur Software.
          Wir optimieren kontinuierlich mit Ihnen zusammen.
        </li>
      </ol>
    </div>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const renderAnswer = () => {
    if (faq.answer) {
      return (
        <p className="text-sm text-neutral-600 leading-relaxed">
          {faq.answer}
        </p>
      );
    }
    if (faq.question.includes("kostet")) return <PricingAnswer />;
    if (faq.question.includes("Datenschutz")) return <PrivacyAnswer />;
    if (faq.question.includes("Fehler")) return <ErrorAnswer />;
    if (faq.question.includes("unterscheidet")) return <DifferentiatorAnswer />;
    return null;
  };

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={() => {
          onToggle();
          trackFAQToggle(faq.question);
        }}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-neutral-800 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5">{renderAnswer()}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-4">
            Häufige Fragen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-50 rounded-2xl border border-neutral-200 px-6 sm:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
