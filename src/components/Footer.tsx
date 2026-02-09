"use client";

import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const nicheLinks = [
  { label: "Für Steuerberater", href: "/steuerberater" },
  { label: "Für Rechtsanwälte", href: "/rechtsanwaelte" },
  { label: "Für Immobilienmakler", href: "/immobilienmakler" },
  { label: "Für Recruiting-Agenturen", href: "/recruiting" },
  { label: "Für Unternehmensberater", href: "/unternehmensberater" },
  { label: "Für Architekten", href: "/architekten" },
];

const resourceLinks = [
  { label: "Case Studies", href: "/#ergebnisse" },
  { label: "Preise", href: "/#preise" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AW</span>
              </div>
              <span className="font-bold text-lg">
                Automate<span className="text-primary">Works</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Wir sind Automatisierungs-Experten mit Fokus auf Professional
              Services. Unser Ziel: Ihnen mehr Zeit für das zu geben, wofür
              Ihre Mandanten Sie schätzen &ndash; Ihre Expertise.
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href="mailto:kontakt@automateworks.de"
                  className="hover:text-white transition-colors"
                >
                  kontakt@automateworks.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+491707978879"
                  className="hover:text-white transition-colors"
                >
                  +49 170 79 78879
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/automateworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Branchen */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-400 mb-4">
              Branchen
            </h3>
            <ul className="space-y-3">
              {nicheLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ressourcen */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-400 mb-4">
              Ressourcen
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Rechtliches & Adresse */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide text-neutral-400 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-sm text-neutral-500">
              Automate Works
              <br />
              Gottlob-Schneider-Straße 37
              <br />
              76275 Ettlingen
              <br />
              Inhaber: Daniel Hanke
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Automate Works. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              ISO 27001 zertifiziert
            </span>
            <span className="w-px h-3 bg-neutral-700" />
            <span className="flex items-center gap-1">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              DSGVO-konform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
