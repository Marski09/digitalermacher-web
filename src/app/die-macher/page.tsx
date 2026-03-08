import type { Metadata } from "next";
import Image from "next/image";
import KontaktFormular from "@/components/KontaktFormular";

export const metadata: Metadata = {
  title: "Die Macher – Digitalermacher",
  description:
    "Markus Schilaski & Alfred Schnitger: Die Brücke zwischen Business und Code. Zwei Macher, die Ihre Systeme auf das nächste Level heben.",
};

const MACHER = [
  {
    name: "Markus Schilaski",
    rolle: "Vorbereitung, Schulung & Betreuung",
    bild: "/images/markus.jpg",
    alt: "Porträt von Markus Schilaski – Schwarz-Weiß-Aufnahme in modernem Büro",
    intro:
      "Markus ist Ihr erster Ansprechpartner – und bleibt es. Er analysiert Ihre Ausgangslage, bereitet den Boden für die technische Umsetzung und sorgt dafür, dass Ihr Team die neuen Werkzeuge sicher beherrscht.",
    schwerpunkte: [
      "Potenzial-Check und Struktur-Scan: Wo liegt der größte Hebel in Ihrem Unternehmen?",
      "Schulung und Einarbeitung: Damit Ihr Team die neuen Prozesse vom ersten Tag an souverän nutzt.",
      "Laufende Betreuung: Ihr dauerhafter Draht zu uns – für Fragen, Optimierungen und die dynamische Weiterentwicklung Ihrer Systeme.",
    ],
  },
  {
    name: "Alfred Schnitger",
    rolle: "Technik & Umsetzung",
    bild: "/images/alfred.jpg",
    alt: "Porträt von Alfred Schnitger – Schwarz-Weiß-Aufnahme in modernem Büro",
    intro:
      "Alfred macht aus dem Plan ein funktionierendes System. Er entwickelt die Schnittstellen, Automationen und Anwendungen, die Ihre bestehende Infrastruktur zum Hochleistungswerkzeug erweitern.",
    schwerpunkte: [
      "Infrastruktur-Audit und Masterplan: Was ist technisch möglich – und was ist sinnvoll?",
      "Entwicklung maßgeschneiderter Schnittstellen, Apps, Automationen und individueller User-Interfaces.",
      "Technische Qualitätssicherung: Damit jedes System zuverlässig läuft – auch unter Last.",
    ],
  },
];

export default function DieMacherPage() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="bg-neutral-950 pt-32 pb-24 text-white md:pb-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            Die Macher
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Die Brücke zwischen
            <br />
            Business und Code
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Was uns verbindet: Wir sprechen Ihre Sprache und verstehen
            Digitalisierung nicht als Selbstzweck, sondern als Werkzeug für Ihr
            Tagesgeschäft. Was uns unterscheidet: die Aufgaben, in denen wir
            unsere jeweiligen Stärken ausspielen.
          </p>
        </div>
      </section>

      {/* ── Personen-Profile ── */}
      <section className="border-t-2 border-accent/60 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-32">
            {MACHER.map((m, i) => (
              <article
                key={m.name}
                className={`flex flex-col items-center gap-12 md:flex-row md:items-start ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Bild */}
                <div className="relative aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl md:w-2/5">
                  <Image
                    src={m.bild}
                    alt={m.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-[1.3rem] font-medium uppercase tracking-widest text-accent">
                    {m.rolle}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                    {m.name}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                    {m.intro}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {m.schwerpunkte.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="-mt-0.5 shrink-0 text-2xl font-bold leading-none text-accent">›</span>
                        <span className="leading-relaxed text-neutral-700">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gemeinsame Basis ── */}
      <section className="border-t-2 border-accent/60 bg-neutral-100 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Unterschiedliche Aufgaben,
            <br />
            gemeinsame Basis
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Egal ob Sie mit Markus oder Alfred sprechen – Sie reden immer mit
            jemandem, der sowohl Ihr Geschäft als auch die Technik dahinter
            versteht. Unsere Erfahrung in der Kundenkommunikation und im Umgang
            mit Digitalisierungsthemen überschneidet sich bewusst. So stellen
            wir sicher, dass Sie an jedem Punkt im Projekt einen kompetenten
            Ansprechpartner haben.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Unsere Stärken spielen wir dort aus, wo sie den größten Unterschied
            machen: Markus in der Vorbereitung, Schulung und Betreuung – Alfred 
            in der technischen Planung und Umsetzung. Das Ergebnis für Sie: ein lückenloser
            Prozess von der ersten Analyse bis zum laufenden Betrieb.
          </p>
        </div>
      </section>

      {/* ── Kontaktformular ── */}
      <section id="kontakt" className="border-t-2 border-accent/60 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Lassen Sie uns sprechen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Sie möchten wissen, was in Ihrem Unternehmen möglich ist?
            <br />
            Wir informieren Sie sehr gerne – unverbindlich und persönlich.
          </p>

          <div className="mt-12">
            <KontaktFormular buttonText="Jetzt Kontakt aufnehmen" />
          </div>
        </div>
      </section>
    </>
  );
}
