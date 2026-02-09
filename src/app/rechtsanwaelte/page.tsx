import type { Metadata } from "next";
import NicheLayout from "@/components/NicheLayout";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Rechtsanwälte | Automate Works",
  description:
    "Automatisieren Sie Vertragsprüfung, Fristenmanagement und Mandantenkommunikation in Ihrer Kanzlei. Compliance-konform. DSGVO-sicher.",
};

export default function RechtsanwaeltePage() {
  return (
    <NicheLayout
      headline="KI-Automatisierung für Rechtsanwälte"
      subtitle="Strategische Beratung statt monotoner Dokumentenarbeit."
      intro="In einer Anwaltskanzlei zählt jede Stunde – buchstäblich. Doch ein erheblicher Teil Ihrer abrechenbaren Zeit geht für Vertragsprüfung, Fristenverwaltung und Mandantenkommunikation verloren. Wir automatisieren die repetitiven Prozesse, damit Sie sich auf anspruchsvolle juristische Arbeit konzentrieren können."
      painPoints={[
        "Vertragsprüfungen dauern Stunden: Klauseln vergleichen, Abweichungen finden, Konsistenz prüfen – alles manuell",
        "Fristenmanagement über Excel oder im Kopf: Ein vergessener Fristablauf kann existenzbedrohend sein",
        "Mandanten warten tagelang auf Rückmeldung bei Standardanfragen zum Verfahrensstand",
        "Neue Mandate erfordern umfangreiche Dokumentation: Vollmachten, Konfliktprüfung, Aktenanlage",
        "Due-Diligence-Prüfungen verschlingen hunderte Stunden für Dokumentensichtung",
        "Knappe Personalressourcen: Gute Rechtsanwaltsfachangestellte sind kaum zu finden",
      ]}
      benefits={[
        {
          title: "Intelligente Vertragsprüfung",
          description:
            "Verträge werden automatisch auf kritische Klauseln, Abweichungen vom Standard und potenzielle Risiken geprüft. Die KI markiert relevante Stellen und erstellt eine strukturierte Zusammenfassung. Sie prüfen nur noch die Highlights.",
        },
        {
          title: "Compliance-sicheres Fristenmanagement",
          description:
            "Fristen werden automatisch aus Schriftsätzen, Bescheiden und Verträgen extrahiert. Mehrstufige Erinnerungen an alle Beteiligten. Eskalation bei kritischen Deadlines. Lückenlose Audit-Dokumentation für Ihre Haftpflicht.",
        },
        {
          title: "Mandantenkommunikation automatisieren",
          description:
            "Statusanfragen zum Verfahrensstand, Terminbestätigungen und Dokumentenanforderungen werden automatisch bearbeitet. Ihre Mandanten erhalten schnelle, professionelle Antworten – ohne dass ein Anwalt dafür E-Mails schreiben muss.",
        },
        {
          title: "Dokumentenanalyse & Due Diligence",
          description:
            "Große Dokumentenmengen systematisch durchsuchen, relevante Informationen extrahieren und strukturiert aufbereiten. Ideal für Due-Diligence-Prüfungen, Aktenanalysen und Beweissicherung.",
        },
      ]}
      useCases={[
        {
          title: "Vertrags-Review bei M&A-Transaktionen",
          problem:
            "500+ Verträge im Datenraum sichten. Jeder Vertrag muss auf kritische Klauseln, Change-of-Control und Haftungsrisiken geprüft werden.",
          solution:
            "Automatische Extraktion und Klassifizierung aller relevanten Klauseln. Abweichungsanalyse gegen Ihre Standard-Templates. Priorisierung nach Risikolevel.",
          result:
            "Review-Zeit von 3 Stunden auf 45 Minuten pro Vertrag reduziert. 90% weniger übersehene Klauseln.",
        },
        {
          title: "Fristenüberwachung im Prozessrecht",
          problem:
            "Dutzende laufende Verfahren mit unterschiedlichen Fristen. Ein Versäumnis kann zu Präklusion oder Fristablauf führen.",
          solution:
            "Automatische Fristenextraktion aus gerichtlichen Schreiben. Mehrstufige Erinnerungen. Vertretungsregelung bei Abwesenheit.",
          result:
            "Null verpasste Fristen seit Implementierung. 95% weniger manuelle Fristeneintragungen.",
        },
        {
          title: "Mandanten-Onboarding & Konfliktprüfung",
          problem:
            "Neues Mandat bedeutet: Vollmacht einholen, Interessenkonflikt prüfen, Akte anlegen, Team informieren – 2+ Stunden pro Mandat.",
          solution:
            "Automatisierter Onboarding-Workflow: Digitale Vollmacht, automatische Konfliktprüfung gegen Mandantendatenbank, Aktenanlage und Teambenachrichtigung.",
          result:
            "Onboarding-Zeit von 2 Stunden auf 15 Minuten. Keine vergessenen Konfliktprüfungen mehr.",
        },
      ]}
      testimonialQuote="Die Technologie erledigt die monotone Arbeit. Ich konzentriere mich auf strategische Beratung. Meine Mandanten profitieren davon, dass ich mehr Zeit für ihre Fälle habe – nicht für Verwaltung."
      testimonialAuthor="RA Lisa W."
      testimonialRole="Partnerin, Anwaltssozietät mit 8 Anwälten"
      statValue="75%"
      statLabel="weniger Zeit für Vertragsprüfungen bei unseren Kanzlei-Kunden"
    />
  );
}
