import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col my-5 mx-[25rem] font-aileron">
      <div className="flex flex-col text-sm justify-center items-center mt-5">
        {/* Andere Inhalte hier */}
      </div>

      <div className="font-normal text-lg mt-5">
        {/* Andere Inhalte hier */}
      </div>

      <footer className="mt-10 text-sm">
        <section className="px-4 md:px-"id="impressum">
          <h2 className="font-bold text-3xl text-colors-black text-center mt-8">Impressum</h2>
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            <strong>FUSE Robotics e.V.</strong><br />
            Technische Universität Berlin<br />
            Straße des 17. Juni 135<br />
            10623 Berlin, Deutschland
          </p>
          <p>Vertreten durch:</p>
          <p>Vorstand: Woraphon Choaywong</p>
          <p><strong>Kontakt:</strong></p>
          <p>
            E-Mail: <a href="mailto:robotechfuse@gmail.com">robotechfuse@gmail.com</a>
          </p>
          <p><strong>Registereintrag:</strong></p>
          <p>
            Eintragung im Vereinsregister.<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: VR [Vereinsregisternummer einfügen]
          </p>
          <p><strong>Haftungsausschluss:</strong></p>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <p><strong>Datenschutz</strong></p>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
            Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) 
            erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche 
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte 
            ist nicht möglich.
          </p>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von 
            nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. 
            Die Betreiber der Seiten behalten sich rechtliche Schritte im Falle der unverlangten Zusendung 
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </section>
      </footer>
    </div>
  );
}
