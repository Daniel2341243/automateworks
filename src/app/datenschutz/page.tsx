import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Automate Works",
  description:
    "Datenschutzerklärung von Automate Works. Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
        Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG).
      </p>
      <p>
        Diese Datenschutzerklärung informiert Sie darüber, welche
        personenbezogenen Daten wir auf dieser Website erheben und wie wir
        sie verwenden.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser
        Website ist:
      </p>
      <p>
        Next Level Education GmbH
        <br />
        Gottlob-Schneider-Straße 37
        <br />
        76275 Ettlingen
      </p>
      <p>
        E-Mail:{" "}
        <a href="mailto:mail@danielhanke.com">mail@danielhanke.com</a>
      </p>
      <p>Geschäftsführer: Daniel Hanke</p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person,
        die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten entscheidet.
      </p>

      <h2>
        3. Erhebung und Speicherung personenbezogener Daten beim Besuch der
        Website
      </h2>
      <p>
        Beim Besuch dieser Website werden automatisch Informationen durch den
        Browser Ihres Endgeräts an unseren Server übermittelt und temporär in
        sogenannten Server-Logfiles gespeichert.
      </p>
      <p>Dabei werden folgende Daten erfasst:</p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite bzw. Datei</li>
        <li>Referrer-URL (zuvor besuchte Seite)</li>
        <li>verwendeter Browser und Betriebssystem</li>
      </ul>
      <p>
        <strong>Zweck der Verarbeitung:</strong>
        <br />
        Gewährleistung eines stabilen und sicheren Betriebs der Website.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong>
        <br />
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
      </p>

      <h2>4. Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (z.&thinsp;B.
        Name, E-Mail-Adresse und Inhalt der Nachricht) gespeichert, um Ihre
        Anfrage zu bearbeiten.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong>
        <br />
        Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen oder
        Vertragserfüllung)
      </p>

      <h2>5. Terminbuchung über Calendly</h2>
      <p>
        Auf unserer Website bieten wir die Möglichkeit, Termine über den
        Dienst Calendly zu buchen.
      </p>
      <p>
        <strong>Anbieter:</strong>
        <br />
        Calendly LLC
        <br />
        1315 Peachtree St NE
        <br />
        Atlanta, GA 30309, USA
      </p>
      <p>
        Bei der Nutzung von Calendly werden personenbezogene Daten wie Name,
        E-Mail-Adresse sowie Terminwünsche verarbeitet.
      </p>
      <p>
        Calendly kann Daten in die USA übertragen. Der Anbieter verwendet
        Standardvertragsklauseln der EU-Kommission zur Sicherstellung eines
        angemessenen Datenschutzniveaus.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://calendly.com/privacy
        </a>
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong>
        <br />
        Art. 6 Abs. 1 lit. b DSGVO (Terminvereinbarung)
        <br />
        sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        effizienter Terminorganisation)
      </p>

      <h2>6. Videokonferenzen über Zoom</h2>
      <p>Für Online-Meetings nutzen wir den Dienst Zoom.</p>
      <p>
        <strong>Anbieter:</strong>
        <br />
        Zoom Video Communications Inc.
        <br />
        55 Almaden Boulevard
        <br />
        San Jose, CA 95113, USA
      </p>
      <p>
        Bei der Teilnahme an einem Zoom-Meeting können folgende Daten
        verarbeitet werden:
      </p>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Meeting-Metadaten (Datum, Dauer, Teilnehmer)</li>
        <li>ggf. Audio-/Videodaten</li>
      </ul>
      <p>
        Zoom kann Daten in die USA übertragen. Auch hier werden
        Standardvertragsklauseln eingesetzt.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://explore.zoom.us/de/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://explore.zoom.us/de/privacy/
        </a>
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong>
        <br />
        Art. 6 Abs. 1 lit. b DSGVO (Durchführung von Beratungsgesprächen)
      </p>

      <h2>7. Cookies</h2>
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies,
        die für den Betrieb und die Darstellung erforderlich sind.
      </p>
      <p>Es findet kein Tracking und keine Analyse statt.</p>
      <p>
        <strong>Rechtsgrundlage:</strong>
        <br />
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
      </p>

      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Anfragen richten Sie bitte an:{" "}
        <a href="mailto:mail@danielhanke.com">mail@danielhanke.com</a>
      </p>

      <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
        beschweren.
      </p>
      <p>Zuständig ist z.&thinsp;B.:</p>
      <p>
        Der Landesbeauftragte für Datenschutz Baden-Württemberg
        <br />
        <a
          href="https://www.baden-wuerttemberg.datenschutz.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.baden-wuerttemberg.datenschutz.de/
        </a>
      </p>

      <h2>10. Aktualität und Änderungen</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:
      </p>
      <p>
        <strong>Februar 2026</strong>
      </p>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
        sich rechtliche Anforderungen oder unsere Leistungen ändern.
      </p>
    </LegalLayout>
  );
}
