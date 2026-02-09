import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Automate Works",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von Automate Works für Automatisierungsdienstleistungen.",
};

export default function AGBPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
        für alle Verträge zwischen Automate Works, Daniel Hanke,
        Gottlob-Schneider-Straße 37, 76275 Ettlingen (nachfolgend
        „Auftragnehmer") und dem Kunden (nachfolgend „Auftraggeber") über die
        Erbringung von Automatisierungs- und Beratungsdienstleistungen.
      </p>
      <p>
        (2) Abweichende, entgegenstehende oder ergänzende Allgemeine
        Geschäftsbedingungen des Auftraggebers werden nicht Vertragsbestandteil,
        es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich
        schriftlich zu.
      </p>
      <p>
        (3) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne
        von § 14 BGB.
      </p>

      <h2>§ 2 Vertragsgegenstand</h2>
      <p>
        (1) Der Auftragnehmer erbringt Dienstleistungen im Bereich der
        Prozessautomatisierung mittels KI-Technologie (insbesondere MCP – Model
        Context Protocol), einschließlich aber nicht beschränkt auf:
      </p>
      <ul>
        <li>Analyse bestehender Geschäftsprozesse</li>
        <li>Konzeption und Implementierung von Automatisierungslösungen</li>
        <li>Integration in bestehende IT-Systeme des Auftraggebers</li>
        <li>Schulung der Mitarbeiter des Auftraggebers</li>
        <li>Laufende Wartung und Optimierung der Automatisierungen</li>
      </ul>
      <p>
        (2) Der genaue Leistungsumfang ergibt sich aus dem individuellen
        Angebot bzw. der Leistungsbeschreibung, die Bestandteil des jeweiligen
        Vertrages ist.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich.
      </p>
      <p>
        (2) Der Vertrag kommt durch die schriftliche Auftragsbestätigung des
        Auftragnehmers oder durch tatsächliche Leistungserbringung zustande.
      </p>
      <p>
        (3) Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen
        des Vertrages bedürfen der Schriftform. Dies gilt auch für die
        Aufhebung des Schriftformerfordernisses.
      </p>

      <h2>§ 4 Leistungserbringung</h2>
      <p>
        (1) Der Auftragnehmer erbringt seine Leistungen nach den anerkannten
        Regeln der Technik und mit der gebotenen Sorgfalt.
      </p>
      <p>
        (2) Leistungstermine und -fristen sind nur verbindlich, wenn sie vom
        Auftragnehmer ausdrücklich als verbindlich bestätigt werden.
      </p>
      <p>
        (3) Der Auftragnehmer ist berechtigt, zur Leistungserbringung
        qualifizierte Dritte (Subunternehmer) einzusetzen. Die Verantwortung
        gegenüber dem Auftraggeber verbleibt beim Auftragnehmer.
      </p>
      <p>
        (4) Der Auftraggeber stellt dem Auftragnehmer die für die
        Leistungserbringung notwendigen Informationen, Zugänge und
        Mitwirkungsleistungen rechtzeitig und vollständig zur Verfügung.
      </p>

      <h2>§ 5 Vergütung und Zahlungsbedingungen</h2>
      <p>
        (1) Die Vergütung richtet sich nach dem individuellen Angebot. Sofern
        nicht anders vereinbart, gliedern sich die Kosten in:
      </p>
      <ul>
        <li>Einmalige Setup-Gebühr für die Implementierung</li>
        <li>Monatliche Nutzungsgebühr für laufende Automatisierungen</li>
      </ul>
      <p>
        (2) Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen
        Umsatzsteuer.
      </p>
      <p>
        (3) Die einmalige Setup-Gebühr ist nach Abnahme der Implementierung
        fällig. Die monatliche Nutzungsgebühr ist jeweils zum Monatsersten im
        Voraus fällig.
      </p>
      <p>
        (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung
        ohne Abzug zahlbar.
      </p>
      <p>
        (5) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen
        in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu berechnen.
      </p>

      <h2>§ 6 Testphase und Geld-zurück-Garantie</h2>
      <p>
        (1) Der Auftraggeber hat ab Bereitstellung der Automatisierung eine
        Testphase von 30 Tagen.
      </p>
      <p>
        (2) Ist der Auftraggeber innerhalb der Testphase mit der Leistung
        nicht zufrieden und kann eine Zeitersparnis von mindestens 5 Stunden
        pro Woche nicht nachgewiesen werden, erstattet der Auftragnehmer die
        bereits gezahlte monatliche Nutzungsgebühr vollständig zurück.
      </p>
      <p>
        (3) Die Erstattung der einmaligen Setup-Gebühr ist von der
        Geld-zurück-Garantie ausgenommen.
      </p>
      <p>
        (4) Die Geld-zurück-Garantie setzt voraus, dass der Auftraggeber die
        Automatisierung während der Testphase bestimmungsgemäß eingesetzt und
        die vereinbarten Mitwirkungspflichten erfüllt hat.
      </p>

      <h2>§ 7 Laufzeit und Kündigung</h2>
      <p>
        (1) Die monatliche Nutzungsgebühr wird auf unbestimmte Zeit
        vereinbart und kann von beiden Parteien mit einer Frist von 30 Tagen
        zum Monatsende gekündigt werden.
      </p>
      <p>
        (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
        bleibt unberührt.
      </p>
      <p>
        (3) Nach Beendigung des Vertrages stellt der Auftragnehmer dem
        Auftraggeber alle Daten in einem gängigen Format zur Verfügung.
        Personenbezogene Daten werden nach den gesetzlichen Vorgaben gelöscht.
      </p>

      <h2>§ 8 Datenschutz und Vertraulichkeit</h2>
      <p>
        (1) Der Auftragnehmer verpflichtet sich, alle ihm im Rahmen der
        Vertragserfüllung bekannt werdenden Geschäftsgeheimnisse und
        vertraulichen Informationen des Auftraggebers vertraulich zu
        behandeln.
      </p>
      <p>
        (2) Soweit der Auftragnehmer personenbezogene Daten im Auftrag des
        Auftraggebers verarbeitet, schließen die Parteien einen gesonderten
        Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.
      </p>
      <p>
        (3) Die Datenverarbeitung erfolgt ausschließlich auf Servern
        innerhalb der Europäischen Union bzw. des Europäischen
        Wirtschaftsraums.
      </p>
      <p>
        (4) Der Auftragnehmer verwendet die Daten des Auftraggebers nicht
        zum Training von KI-Modellen.
      </p>

      <h2>§ 9 Haftung</h2>
      <p>
        (1) Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober
        Fahrlässigkeit.
      </p>
      <p>
        (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei
        Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In
        diesem Fall ist die Haftung auf den vertragstypischen,
        vorhersehbaren Schaden begrenzt.
      </p>
      <p>
        (3) Die Haftung für Schäden, die auf Fehler der Automatisierung
        zurückzuführen sind, ist auf 100.000 Euro pro Schadensfall begrenzt,
        sofern der Auftragnehmer den Fehler zu vertreten hat.
      </p>
      <p>
        (4) Die vorstehenden Haftungsbeschränkungen gelten nicht für Schäden
        aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie
        für Ansprüche nach dem Produkthaftungsgesetz.
      </p>

      <h2>§ 10 Gewährleistung</h2>
      <p>
        (1) Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen
        der vereinbarten Beschaffenheit entsprechen.
      </p>
      <p>
        (2) Mängelansprüche des Auftraggebers setzen voraus, dass dieser
        Mängel unverzüglich schriftlich anzeigt.
      </p>
      <p>
        (3) Bei berechtigten Mängelrügen hat der Auftragnehmer das Recht zur
        Nachbesserung. Schlägt die Nachbesserung nach zwei Versuchen fehl,
        kann der Auftraggeber Minderung oder Rücktritt verlangen.
      </p>

      <h2>§ 11 Nutzungsrechte</h2>
      <p>
        (1) Der Auftragnehmer räumt dem Auftraggeber für die Dauer des
        Vertrages ein einfaches, nicht übertragbares Nutzungsrecht an den
        erstellten Automatisierungen ein.
      </p>
      <p>
        (2) Individuelle Konfigurationen und Anpassungen, die speziell für
        den Auftraggeber erstellt wurden, verbleiben bei Vertragsende beim
        Auftraggeber.
      </p>
      <p>
        (3) Die zugrunde liegende Technologie und allgemeine Methoden des
        Auftragnehmers bleiben dessen geistiges Eigentum.
      </p>

      <h2>§ 12 Höhere Gewalt</h2>
      <p>
        Ereignisse höherer Gewalt, die die Leistungserbringung wesentlich
        erschweren oder unmöglich machen (z.&thinsp;B. Naturkatastrophen,
        Pandemien, Krieg, Streik, behördliche Anordnungen), berechtigen
        beide Parteien, die Leistung für die Dauer der Behinderung
        auszusetzen. Beide Parteien werden sich über das Ereignis
        unverzüglich informieren.
      </p>

      <h2>§ 13 Schlussbestimmungen</h2>
      <p>
        (1) Es gilt das Recht der Bundesrepublik Deutschland.
      </p>
      <p>
        (2) Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang
        mit diesem Vertrag ist Karlsruhe, sofern der Auftraggeber Kaufmann
        ist.
      </p>
      <p>
        (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
        werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon
        unberührt.
      </p>

      <p className="mt-10 text-sm text-neutral-500">
        Stand: Februar 2025
      </p>
    </LegalLayout>
  );
}
