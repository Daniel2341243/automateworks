"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { trackCTAClick } from "@/lib/analytics";

const trustItems = [
  "Über 50 Kanzleien vertrauen uns",
  "Durchschnittlich 18h Zeitersparnis/Woche",
  "DSGVO-konform & Made in Germany",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Arbeiten Sie nächsten Monat schon 15&nbsp;Stunden weniger?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Buchen Sie jetzt Ihre kostenlose Prozess-Analyse. In 15 Minuten
            wissen Sie, wie viel Zeit und Geld Sie mit Automatisierung sparen
            können.
          </p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://calendly.com/endlichunendlichkeit/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("final_cta", "final_section")}
              className="cta-pulse inline-flex items-center justify-center px-10 sm:px-14 py-5 bg-secondary text-white text-xl font-extrabold rounded-2xl hover:bg-secondary-dark transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-[1.03]"
            >
              Jetzt Termin buchen
            </a>
          </motion.div>

          {/* Calendly embed placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-xl mx-auto"
          >
            <p className="text-white/60 text-sm mb-4">
              Verfügbare Termine diese Woche:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Mo 10:00", "Di 14:00", "Mi 11:00", "Do 15:00"].map(
                (slot) => (
                  <a
                    key={slot}
                    href="https://calendly.com/endlichunendlichkeit/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-3 px-4 text-white text-sm font-medium transition-colors text-center"
                  >
                    {slot}
                  </a>
                )
              )}
            </div>
            <p className="text-white/40 text-xs mt-4">
              Calendly-Integration &ndash; weitere Termine verfügbar nach Klick
            </p>
          </motion.div>

          {/* Phone alternative */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="tel:+491707978879"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              Oder rufen Sie direkt an: +49 170 79 78879
            </a>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <CheckCircleIcon className="w-4 h-4 text-success" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
