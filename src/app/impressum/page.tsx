import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum \u2013 Digitalermacher",
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-24 md:pb-32 md:pt-40">
      <div className="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6">
        <h1>Impressum</h1>

        <p>
          Markus Schilaski
          <br />
          Digitalermacher
          <br />
          Josef-Ponten-Stra&szlig;e 21
          <br />
          40595 D&uuml;sseldorf
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 0172 2766071
          <br />
          E-Mail: info@digitalermacher.de
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect;&nbsp;27&nbsp;a
          Umsatzsteuergesetz:
          <br />
          DE 210778700
        </p>

        <h2>Angaben zur Berufshaftpflichtversicherung</h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong>
          <br />
          VHV Allgemeine Versicherung AG
          <br />
          VHV-Platz 1<br />
          30177 Hannover
        </p>
        <p>
          <strong>Geltungsraum der Versicherung:</strong> D-A-CH
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="text-sm text-neutral-400">Quelle: e-recht24.de</p>
      </div>
    </section>
  );
}
