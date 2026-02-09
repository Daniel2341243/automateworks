import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Steuerberater | Automate Works",
  description:
    "Automatisieren Sie Mandantenanfragen, Fristenmanagement und Dokumentenverarbeitung in Ihrer Steuerkanzlei. DATEV-kompatibel. DSGVO-konform.",
};

export default function SteuerberaterPage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Steuerberater"
      subtitle="Mehr Zeit für Beratung. Weniger Zeit für Administration."
      intro="Als Steuerberater verbringen Sie bis zu 40% Ihrer Arbeitszeit mit administrativen Aufgaben: Mandantenanfragen beantworten, Belege sortieren, Fristen tracken. Wir automatisieren diese Prozesse, damit Sie sich auf das konzentrieren können, wofür Ihre Mandanten Sie bezahlen – Ihre steuerliche Expertise."
      painPoints={[
        "Hunderte Mandantenanfragen pro Woche, die meisten zu Standardthemen wie Abgabefristen oder Belegeinreichung",
        "Manuelles Sortieren und Zuordnen von Belegen zu den richtigen Mandantenakten",
        "Fristen für Steuererklärungen, Voranmeldungen und Bescheide manuell im Blick behalten",
        "Monatsabschlüsse bedeuten jedes Mal Überstunden für das gesamte Team",
        "Neue Mandanten aufnehmen erfordert stundenlanges Setup in DATEV, Vollmachten, Stammdaten",
        "Fachkräftemangel: Keine qualifizierten Steuerfachangestellten auf dem Arbeitsmarkt",
      ]}
      benefits={[
        {
          title: "E-Mail-Intelligence für Kanzleien",
          description:
            "Mandantenanfragen werden automatisch kategorisiert und priorisiert. Standardanfragen (Fristverlängerung, Belegstatus, Terminbestätigung) werden mit vordefinierten Antworten bearbeitet. Dringende Anfragen landen sofort bei Ihnen.",
        },
        {
          title: "Automatisches Fristenmanagement",
          description:
            "Fristen aus Bescheiden und Mandaten werden automatisch extrahiert und getrackt. Proaktive Erinnerungen an Ihr Team und bei Bedarf an Mandanten. Eskalation bei kritischen Deadlines. Vollständige Compliance-Dokumentation.",
        },
        {
          title: "Belegverarbeitung & Zuordnung",
          description:
            "Eingehende Belege werden automatisch erkannt, klassifiziert und der richtigen Mandantenakte zugeordnet. OCR-Extraktion relevanter Daten. Direkte Integration in DATEV und andere Buchhaltungssysteme.",
        },
        {
          title: "Mandanten-Onboarding",
          description:
            "Neue Mandanten werden automatisch angelegt: Vollmachten anfordern, Stammdaten erfassen, DATEV-Mandant erstellen, Willkommens-E-Mail versenden – alles in einem automatisierten Workflow.",
        },
      ]}
      useCases={[
        {
          title: "Umsatzsteuer-Voranmeldungen",
          problem:
            "Monatliche USt-VA für 200+ Mandanten: Belege sammeln, prüfen, buchen und termingerecht abgeben.",
          solution:
            "Automatische Belegerfassung, Plausibilitätsprüfung und Fristenverwaltung. Ihr Team prüft nur noch Ausnahmen.",
          result:
            "60% weniger Bearbeitungszeit pro Voranmeldung. Null verpasste Fristen.",
        },
        {
          title: "Mandantenanfragen-Triage",
          problem:
            "200+ E-Mails pro Tag. 70% sind Standardanfragen, die trotzdem individuell beantwortet werden.",
          solution:
            "KI-basierte Kategorisierung und automatische Beantwortung von Routine-Anfragen mit kanzleispezifischen Vorlagen.",
          result:
            "Response-Zeit von 3 Tagen auf 4 Stunden reduziert. 80% weniger manuelle E-Mail-Bearbeitung.",
        },
        {
          title: "Jahresabschluss-Vorbereitung",
          problem:
            "Fehlende Unterlagen von Mandanten manuell nachfordern. Wochen des Hin und Her per E-Mail.",
          solution:
            "Automatisierte Unterlagen-Checkliste pro Mandant. Automatische Erinnerungen bei fehlenden Dokumenten. Status-Tracking in Echtzeit.",
          result:
            "50% schnellere Jahresabschlüsse. Weniger Überstunden in der Abschluss-Saison.",
        },
      ]}
      testimonialQuote="Wir haben endlich wieder Zeit für Beratung. Das war der Grund, warum ich Steuerberater geworden bin. Die Automatisierung hat uns nicht nur Zeit gespart, sondern auch die Zufriedenheit im Team massiv erhöht."
      testimonialAuthor="Dr. Thomas K."
      testimonialRole="Kanzleiinhaber, Steuerkanzlei mit 12 Mitarbeitern"
      statValue="73%"
      statLabel="weniger Admin-Aufwand bei unseren Steuerkanzlei-Kunden"
    />
  );
}
