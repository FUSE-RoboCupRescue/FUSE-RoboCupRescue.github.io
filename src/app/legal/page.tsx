import type { Metadata } from "next";
import { contactEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Legal() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="display">Impressum</h1>
          <p className="lead">Angaben gemäß § 5 TMG</p>
        </div>
      </header>

      <section className="section" lang="de">
        <div className="container legal">
          <h2>Anbieter</h2>
          <p>
            <strong>FUSE e.V.</strong>
            <br />
            Technische Universität Berlin
            <br />
            Straße des 17. Juni 135
            <br />
            10623 Berlin, Deutschland
          </p>
          <p>Vertreten durch: Vorstand Woraphon Choaywong</p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Vereinsregister.
            <br />
            Registergericht: Amtsgericht Berlin-Charlottenburg
            <br />
            Registernummer: VR 41220 B
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
            Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h2>Datenschutz</h2>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
            Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
            ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
            Seiten behalten sich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-Mails, vor.
          </p>
        </div>
      </section>
    </>
  );
}
