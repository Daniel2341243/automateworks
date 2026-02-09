import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Immobilienmakler | Automate Works",
  description:
    "Automatisieren Sie Exposé-Erstellung, Lead-Qualifizierung und Objektverwaltung. Mehr Abschlüsse durch weniger Administration.",
};

export default function ImmobilienmaklerPage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Immobilienmakler"
      subtitle="Mehr Besichtigungen. Mehr Abschlüsse. Weniger Papierkram."
      intro="Als Immobilienmakler ist Ihre Zeit am wertvollsten, wenn Sie vor Ort sind: Besichtigungen durchführen, Verhandlungen führen, Abschlüsse erzielen. Doch ein Großteil Ihres Tages geht für Exposé-Erstellung, Anfragen-Management und Dokumentenkoordination drauf. Wir automatisieren den administrativen Overhead, damit Sie mehr Zeit für Ihr Kerngeschäft haben."
      painPoints={[
        "Hunderte Anfragen pro Objekt – die meisten unqualifiziert. Trotzdem muss jede beantwortet werden",
        "Exposé-Erstellung für jedes Objekt: Fotos bearbeiten, Texte schreiben, auf Portale hochladen – stundenlange Arbeit",
        "Besichtigungstermine koordinieren zwischen Eigentümern, Interessenten und dem eigenen Kalender",
        "Unterlagen von Eigentümern einsammeln: Grundbuchauszug, Energieausweis, Teilungserklärung – ständiges Nachhaken",
        "Nach der Besichtigung: Follow-Ups vergessen, heiße Leads werden kalt",
        "Marktanalysen und Preiseinschätzungen manuell zusammenstellen für jeden Akquise-Termin",
      ]}
      benefits={[
        {
          title: "Intelligente Lead-Qualifizierung",
          description:
            "Eingehende Anfragen werden automatisch analysiert und nach Kaufbereitschaft, Budget und Ernsthaftigkeit bewertet. Qualifizierte Leads erhalten sofort relevante Informationen und Terminvorschläge. Unqualifizierte Anfragen werden höflich beantwortet, ohne Ihre Zeit zu beanspruchen.",
        },
        {
          title: "Automatische Exposé-Erstellung",
          description:
            "Laden Sie Fotos und Eckdaten hoch – die KI erstellt professionelle Exposé-Texte, optimiert für die jeweilige Zielgruppe. Automatischer Upload auf ImmoScout24, Immowelt und Ihre Website. Bei Preisänderungen wird alles synchron aktualisiert.",
        },
        {
          title: "Besichtigungs- & Follow-Up-Management",
          description:
            "Terminvorschläge automatisch an Interessenten senden. Nach der Besichtigung: Automatisches Follow-Up mit Feedback-Anfrage. Kein Lead geht mehr verloren durch vergessene Nachfassaktionen.",
        },
        {
          title: "Eigentümer-Dokumenten-Management",
          description:
            "Automatische Anforderung aller notwendigen Unterlagen beim Eigentümer. Erinnerungen bei fehlenden Dokumenten. Status-Übersicht: Was fehlt noch? Alles komplett für den Notar-Termin.",
        },
      ]}
      useCases={[
        {
          title: "Anfragen-Management bei Neuobjekten",
          problem:
            "Neues Objekt online: 200+ Anfragen in 48 Stunden. Jede manuell beantworten und qualifizieren dauert Tage.",
          solution:
            "Automatische Erstantwort mit Exposé-Link. KI-basierte Lead-Bewertung. Top-Leads erhalten sofort Besichtigungsvorschläge, Rest wird automatisch nachgefasst.",
          result:
            "Antwortzeit von 2 Tagen auf 5 Minuten. 40% mehr qualifizierte Besichtigungen pro Woche.",
        },
        {
          title: "Exposé-Erstellung & Portal-Management",
          problem:
            "Pro Objekt 2-3 Stunden für Exposé-Text, Bildbearbeitung und Upload auf 4+ Portale. Bei 10 Objekten/Monat ein ganzer Arbeitstag pro Woche.",
          solution:
            "Automatische Texterstellung aus Eckdaten und Fotos. Ein-Klick-Veröffentlichung auf allen Portalen. Automatische Aktualisierung bei Änderungen.",
          result:
            "Exposé-Erstellung von 3 Stunden auf 20 Minuten. Konsistente Qualität über alle Portale.",
        },
        {
          title: "Verkaufsabwicklung bis zum Notar",
          problem:
            "Nach der Kaufzusage: Finanzierungsbestätigung einholen, Notar koordinieren, Unterlagen zusammenstellen – wochenlange Koordination.",
          solution:
            "Automatisierter Workflow: Checkliste der benötigten Unterlagen, automatische Erinnerungen an alle Beteiligten, Status-Dashboard für Sie und den Verkäufer.",
          result:
            "30% kürzere Zeit vom Angebot bis zur Beurkundung. Kein Dokument mehr vergessen.",
        },
      ]}
      testimonialQuote="Früher habe ich 60% meiner Zeit am Schreibtisch verbracht. Jetzt bin ich dort, wo ich hingehöre: bei Besichtigungen und Verhandlungen. Meine Abschlussquote ist um 35% gestiegen."
      testimonialAuthor="Michael R."
      testimonialRole="Inhaber, Immobilienbüro mit 4 Maklern"
      statValue="35%"
      statLabel="mehr Abschlüsse durch weniger Administration"
    />
  );
}
