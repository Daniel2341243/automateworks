import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | Automate Works",
  description: "Impressum und Anbieterkennzeichnung von Automate Works.",
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Automate Works
        <br />
        (Angebot der Next Level Education GmbH)
      </p>
      <p>
        Next Level Education GmbH
        <br />
        Gottlob-Schneider-Straße 37
        <br />
        76275 Ettlingen
        <br />
        Deutschland
      </p>
      <p>
        Website:{" "}
        <a href="https://automateworks.de" target="_blank" rel="noopener noreferrer">
          https://automateworks.de
        </a>
      </p>

      <h2>Handelsregister</h2>
      <p>
        Handelsregister: HRB 700221
        <br />
        Registergericht: Amtsgericht Mannheim
      </p>

      <h2>Vertreten durch</h2>
      <p>Geschäftsführer: Daniel Hanke</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:mail@danielhanke.com">mail@danielhanke.com</a>
      </p>

      <h2>Postadresse</h2>
      <p>
        Daniel Hanke
        <br />
        Postfach 100609
        <br />
        76260 Ettlingen
        <br />
        Deutschland
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE814634983
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>Daniel Hanke</p>

      <h2>Hinweis zur Social Media Präsenz</h2>
      <p>
        Automate Works unterhält derzeit keine offiziellen
        Social-Media-Profile. Externe Verlinkungen oder Einbindungen zu
        sozialen Netzwerken finden aktuell nicht statt.
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

      <h2>
        Verbraucherstreitbeilegung / Universalschlichtungsstelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen.
      </p>
      <p>
        Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
        fremden Inhalte keine Gewähr übernehmen.
      </p>
      <p>
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien
        dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
        gestattet.
      </p>
      <p>
        Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2>Stand</h2>
      <p>Februar 2026</p>
    </LegalLayout>
  );
}
