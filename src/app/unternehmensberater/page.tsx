import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Unternehmensberater | Automate Works",
  description:
    "Automatisieren Sie Research, Reporting und Projektverwaltung in Ihrer Beratung. Mehr billable Hours durch weniger internen Overhead.",
};

export default function UnternehmensberaterPage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Unternehmensberater"
      subtitle="Mehr Billable Hours. Weniger interner Overhead."
      intro="In der Unternehmensberatung ist Zeit direkt umsatzrelevant: Jede Stunde, die Sie mit internem Reporting, Research-Zusammenfassungen oder Projektkoordination verbringen, ist eine Stunde weniger beim Kunden. Wir automatisieren die nicht-wertschöpfenden Prozesse, damit Ihre Berater dort sind, wo sie Wert schaffen – beim Klienten."
      painPoints={[
        "Stundenlange Recherche und Zusammenfassung von Marktdaten, Branchenberichten und Wettbewerbsanalysen",
        "Wöchentliche Status-Reports für jeden Kunden manuell erstellen – Daten aus 5 verschiedenen Quellen zusammentragen",
        "Projektstaffing und Ressourcenplanung über Excel: Wer ist wann verfügbar? Welche Skills werden gebraucht?",
        "Proposals und Angebote erstellen: Jedes Mal bei Null anfangen trotz ähnlicher Projekttypen",
        "Reisekostenabrechnung und Zeiterfassung: Berater hassen es, trotzdem muss es gemacht werden",
        "Knowledge Management: Projekterfahrungen gehen verloren, weil niemand Zeit hat, sie aufzuschreiben",
      ]}
      benefits={[
        {
          title: "Automatisiertes Research & Briefing",
          description:
            "Marktdaten, Branchenberichte und Wettbewerbsinformationen werden automatisch zusammengetragen und in einem strukturierten Briefing-Dokument aufbereitet. Ihre Berater starten jedes Projekt mit einer soliden Faktenbasis – ohne tagelange Recherche.",
        },
        {
          title: "Intelligentes Projekt-Reporting",
          description:
            "Status-Reports werden automatisch aus Ihren Projektmanagement-Tools, Zeiterfassung und Budgetdaten generiert. Professionell formatiert, auf Knopfdruck bereit. Kunden-spezifisches Branding inklusive.",
        },
        {
          title: "Proposal-Automatisierung",
          description:
            "Basierend auf Ihren bisherigen Proposals und dem aktuellen Briefing erstellt die KI einen Entwurf: Projektansatz, Methodik, Timeline und Budgetrahmen. Sie verfeinern und personalisieren – statt bei Null zu starten.",
        },
        {
          title: "Knowledge-Management-System",
          description:
            "Projekterfahrungen, Best Practices und Lessons Learned werden automatisch aus Projektdokumenten extrahiert und in Ihre Wissensdatenbank eingespeist. Neue Projekte profitieren von der gesamten Erfahrung Ihres Teams.",
        },
      ]}
      useCases={[
        {
          title: "Wöchentliches Client-Reporting",
          problem:
            "5 aktive Projekte, jedes mit wöchentlichem Status-Report. Pro Report: 2 Stunden Daten sammeln, aufbereiten und formatieren. 10 Stunden/Woche nur für Reporting.",
          solution:
            "Automatische Aggregation aller Projektdaten. KI erstellt Report-Entwurf mit Highlights, Risiken und nächsten Schritten. Berater reviewen und ergänzen in 15 Minuten.",
          result:
            "Reporting-Zeit von 10 auf 2 Stunden pro Woche. Reports sind konsistenter und professioneller.",
        },
        {
          title: "Angebotserstellung für neue Projekte",
          problem:
            "Jedes Angebot erfordert 8-15 Stunden: Briefing analysieren, Ansatz entwickeln, Methodik beschreiben, Team zusammenstellen, Pricing kalkulieren.",
          solution:
            "KI analysiert das Briefing, schlägt passende Ansätze aus früheren Projekten vor und erstellt einen Proposal-Entwurf. Berater verfeinern und passen an.",
          result:
            "Angebotszeit um 60% reduziert. Mehr Angebote pro Monat, höhere Win-Rate durch schnellere Reaktion.",
        },
        {
          title: "Staffing & Ressourcenplanung",
          problem:
            "Neues Projekt gewonnen: Wer hat wann Kapazität? Welche Skills werden gebraucht? Manueller Abgleich über Excel und E-Mails.",
          solution:
            "Automatischer Abgleich von Projektanforderungen mit Berater-Profilen und Verfügbarkeiten. Vorschläge für optimale Teamzusammenstellung.",
          result:
            "Staffing-Entscheidungen in Minuten statt Tagen. Bessere Skill-Auslastung im Team.",
        },
      ]}
      testimonialQuote="Wir haben unsere Billable-Hours-Quote um 20% gesteigert – nicht weil unsere Berater mehr arbeiten, sondern weil sie weniger Zeit mit internem Overhead verbringen. Die ROI-Rechnung war in 3 Wochen positiv."
      testimonialAuthor="Markus S."
      testimonialRole="Managing Partner, Boutique-Beratung mit 15 Beratern"
      statValue="20%"
      statLabel="mehr Billable Hours bei unseren Beratungs-Kunden"
    />
  );
}
