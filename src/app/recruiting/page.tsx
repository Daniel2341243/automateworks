import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Recruiting-Agenturen | Automate Works",
  description:
    "Automatisieren Sie CV-Screening, Kandidatenkommunikation und Kunden-Reporting. Mehr Placements durch weniger Verwaltung.",
};

export default function RecruitingPage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Recruiting-Agenturen"
      subtitle="Mehr Placements. Bessere Kandidaten. Weniger Screening-Zeit."
      intro="Im Recruiting entscheidet Geschwindigkeit: Wer den besten Kandidaten zuerst präsentiert, macht das Placement. Doch Ihr Team verbringt Stunden mit CV-Screening, Terminkoordination und Reporting – statt mit dem, was wirklich zählt: Kandidaten- und Kundengespräche. Wir automatisieren den administrativen Overhead, damit Sie schneller und besser vermitteln."
      painPoints={[
        "300-500 Bewerbungen pro Woche manuell sichten – 80% passen nicht auf die Stelle",
        "Stundenlange Terminkoordination zwischen Kandidaten, Kunden und Ihrem Team",
        "Kandidaten-Status manuell pflegen: Wo steht wer im Prozess? Wer braucht Follow-Up?",
        "Kunden erwarten wöchentliche Reports – manuell aus verschiedenen Quellen zusammengestellt",
        "Gute Kandidaten springen ab, weil die Rückmeldung zu lange dauert",
        "Jede neue Stellenausschreibung erfordert aufwendige Recherche und Texterstellung",
      ]}
      benefits={[
        {
          title: "Intelligentes CV-Screening",
          description:
            "CVs werden automatisch analysiert: Skills, Erfahrung, Gehaltsvorstellungen und Cultural-Fit werden gegen Ihre Stellenanforderungen gematcht. Sie erhalten eine priorisierte Shortlist mit Matching-Score statt eines Berges unstrukturierter Bewerbungen.",
        },
        {
          title: "Automatisierte Kandidatenkommunikation",
          description:
            "Eingangsbestätigungen, Absagen, Terminvorschläge und Follow-Ups werden automatisch versendet – personalisiert und in Ihrem Ton. Kein Kandidat wartet länger als nötig auf eine Rückmeldung.",
        },
        {
          title: "Interview-Koordination",
          description:
            "Terminvorschläge automatisch an Kandidaten und Kunden senden. Kalenderabgleich in Echtzeit. Automatische Erinnerungen vor dem Gespräch. Nach dem Interview: automatische Feedback-Anforderung.",
        },
        {
          title: "Kunden-Reporting auf Knopfdruck",
          description:
            "Wöchentliche oder monatliche Reports werden automatisch generiert: Pipeline-Status, Aktivitäten, KPIs und nächste Schritte. Professionell formatiert und bereit zum Versand.",
        },
      ]}
      useCases={[
        {
          title: "Massenscreening für Volume-Recruiting",
          problem:
            "Kunde sucht 20 Softwareentwickler. 500 Bewerbungen in 2 Wochen. Team verbringt 25+ Stunden nur mit CV-Sichtung.",
          solution:
            "Automatische CV-Analyse nach technischen Skills, Erfahrungsjahren und Standort-Präferenz. KI erstellt Shortlist mit Top-50 Kandidaten und Matching-Begründung.",
          result:
            "Screening-Zeit von 25 Stunden auf 4 Stunden. 35% mehr Placements durch schnellere Kandidatenpräsentation.",
        },
        {
          title: "Kandidaten-Nurturing in der Talent-Pipeline",
          problem:
            "Hunderte guter Kandidaten in der Datenbank, aber kein System für regelmäßigen Kontakt. Leads werden kalt.",
          solution:
            "Automatisierte Nurturing-Sequenzen basierend auf Kandidatenprofil und Marktsituation. Personalisierte Updates zu passenden Stellen.",
          result:
            "60% mehr Reaktivierungen aus der bestehenden Datenbank. Weniger Cold-Sourcing nötig.",
        },
        {
          title: "End-to-End Prozessmanagement",
          problem:
            "Vom Briefing bis zum Placement: Status manuell in CRM pflegen, Kunden informieren, interne Übergaben koordinieren.",
          solution:
            "Automatische Status-Updates bei Prozessschritten. Kunden erhalten proaktive Updates. Interne Übergaben werden automatisch angestoßen.",
          result:
            "Time-to-Fill um 40% reduziert. Kundenzufriedenheit +50% durch proaktive Kommunikation.",
        },
      ]}
      testimonialQuote="Ich war skeptisch. Nach 2 Wochen wollte ich nie wieder zurück zum alten Prozess. Wir platzieren jetzt mehr Kandidaten mit weniger Aufwand – und unsere Kandidaten loben die schnelle Kommunikation."
      testimonialAuthor="Sarah M."
      testimonialRole="Geschäftsführerin, Personalberatung mit 6 Consultants"
      statValue="84%"
      statLabel="weniger Zeit für CV-Screening bei unseren Recruiting-Kunden"
    />
  );
}
