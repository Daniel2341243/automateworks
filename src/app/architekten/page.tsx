import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Architekturbüros | Automate Works",
  description:
    "Automatisieren Sie Projektdokumentation, Fristenmanagement und Ausschreibungen in Ihrem Architekturbüro. Mehr Zeit für Entwurf und Planung.",
};

export default function ArchitektenPage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Architekturbüros"
      subtitle="Mehr Zeit für Entwurf und Planung. Weniger Verwaltung."
      intro="Architektur ist Kreativarbeit – doch im Alltag verbringen Sie und Ihr Team einen Großteil der Zeit mit Projektdokumentation, Ausschreibungstexten, Behördenkorrespondenz und Fristenverwaltung. Wir automatisieren die administrativen Prozesse in Ihrem Büro, damit Sie sich auf das konzentrieren können, was Sie am besten können: Entwerfen und Planen."
      painPoints={[
        "Leistungsverzeichnisse und Ausschreibungstexte erstellen: Stunden repetitiver Textarbeit für jedes Projekt",
        "Genehmigungsfristen, Einreichungsfristen und Bautermine manuell im Blick behalten",
        "Projektdokumentation nach HOAI: Jede Leistungsphase sauber dokumentieren ist zeitintensiv",
        "Nachträge und Änderungen im Bauablauf erfordern umfangreiche Korrespondenz mit allen Beteiligten",
        "Bauherren-Kommunikation: Ständige Rückfragen zu Kosten, Zeitplänen und Materialentscheidungen",
        "Rechnungsprüfung: Eingehende Rechnungen von Fachplanern und Handwerkern gegen Leistungsverzeichnisse prüfen",
      ]}
      benefits={[
        {
          title: "Ausschreibungs-Automatisierung",
          description:
            "Leistungsverzeichnisse werden auf Basis Ihrer Planungsdaten und früherer Projekte automatisch erstellt. Die KI schlägt passende Positionen vor, ergänzt aktuelle Preisspiegel und formatiert alles nach GAEB-Standard. Sie prüfen und passen an.",
        },
        {
          title: "HOAI-konformes Fristenmanagement",
          description:
            "Alle projektrelevanten Fristen werden automatisch erfasst und überwacht: Genehmigungsfristen, Einreichungstermine, Ausführungsfristen und Gewährleistungen. Mehrstufige Erinnerungen an Ihr Team und bei Bedarf an Bauherren und Fachplaner.",
        },
        {
          title: "Projektdokumentation automatisieren",
          description:
            "Planungsstände, Besprechungsprotokolle und Entscheidungen werden automatisch dokumentiert und den richtigen Leistungsphasen zugeordnet. Audit-sicher und jederzeit abrufbar.",
        },
        {
          title: "Bauherren-Kommunikation",
          description:
            "Standardanfragen zu Projektstatus, Kostenentwicklung und nächsten Schritten werden automatisch beantwortet. Bauherren erhalten proaktive Updates – ohne dass Sie jede E-Mail selbst schreiben müssen.",
        },
      ]}
      useCases={[
        {
          title: "Leistungsverzeichnisse erstellen",
          problem:
            "Pro Ausschreibung 15-20 Stunden für die Erstellung des Leistungsverzeichnisses. Bei 8 Gewerken pro Projekt sind das 120+ Stunden.",
          solution:
            "KI erstellt LV-Entwürfe basierend auf Planungsdaten und ähnlichen früheren Projekten. Automatische Positionsvorschläge mit aktuellen Preisen. GAEB-Export auf Knopfdruck.",
          result:
            "LV-Erstellung um 70% beschleunigt. Konsistentere Qualität über alle Gewerke.",
        },
        {
          title: "Rechnungsprüfung & Nachtragsverwaltung",
          problem:
            "Eingehende Rechnungen manuell gegen Auftragsummen und Leistungsverzeichnisse prüfen. Nachträge dokumentieren und genehmigen. Pro Projekt dutzende Prüfvorgänge.",
          solution:
            "Automatischer Abgleich von Rechnungen mit beauftragten Leistungen. Abweichungen werden markiert. Nachträge werden strukturiert erfasst und zur Genehmigung vorgelegt.",
          result:
            "Rechnungsprüfung 60% schneller. Keine übersehenen Abweichungen mehr.",
        },
        {
          title: "Behördenkorrespondenz & Genehmigungsverfahren",
          problem:
            "Bauanträge, Nachreichungen und Behördenkorrespondenz erfordern formatierte Schreiben, Fristenverwaltung und Nachverfolgung.",
          solution:
            "Automatische Erstellung von Standardschreiben basierend auf Vorlagen und Projektdaten. Fristenüberwachung für alle Genehmigungsverfahren. Automatische Erinnerung bei ausstehenden Rückmeldungen.",
          result:
            "50% weniger Zeitaufwand für Behördenkommunikation. Keine verpassten Einreichungsfristen.",
        },
      ]}
      testimonialQuote="Wir haben drei Projekte mehr pro Jahr angenommen – nicht weil wir mehr Mitarbeiter haben, sondern weil die Verwaltung endlich nicht mehr unseren gesamten Tag frisst. Die Automatisierung hat sich in 5 Wochen amortisiert."
      testimonialAuthor="Dipl.-Ing. Andreas B."
      testimonialRole="Büroleiter, Architekturbüro mit 9 Mitarbeitern"
      statValue="70%"
      statLabel="weniger Zeit für Leistungsverzeichnisse bei unseren Architektur-Kunden"
    />
  );
}
