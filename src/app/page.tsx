import Image from "next/image";
import KontaktFormular from "@/components/KontaktFormular";

const BENEFITS = [
  {
    title: "Kapazität gewinnen",
    text: "Ihr Unternehmen skaliert – ohne dass Sie neues Verwaltungspersonal einstellen müssen. Automatisierte Prozesse übernehmen, was bisher Arbeitskraft gebunden hat.",
  },
  {
    title: "Ihr Team entlasten",
    text: "Schluss mit den Unterbrechungs-Effekten. Ihre Mitarbeitenden gewinnen Fokuszeit zurück und können sich auf das konzentrieren, was wirklich zählt.",
  },
  {
    title: "Investitionen schützen",
    text: "Voller Werterhalt durch Upgrade. Ihre etablierten Kernprozesse bleiben erhalten und werden durch intelligente Brücken zum Hochleistungswerkzeug erweitert.",
  },
  {
    title: "200% ROI innerhalb 6 Monaten",
    text: "Ihre Investition rechnet sich garantiert. Wir optimieren dort, wo der größte Hebel liegt – messbar und nachvollziehbar.",
  },
];

const PROZESS_SCHRITTE = [
  {
    nr: "01",
    title: "Gratis Potenzial-Check",
    text: "In drei kompakten Schritten ermitteln wir gratis für Sie, wo die größten Hebel in Ihrem Unternehmen liegen.",
    details: ["Quick-Check", "Struktur-Scan", "Performance-Dialog"],
  },
  {
    nr: "02",
    title: "Analyse & Masterplan",
    text: "Nach Ihrer Auftragserteilung führen wir ein tiefgehendes Infrastruktur-Audit durch und erstellen Ihren individuellen Masterplan.",
    details: ["Umfragen", "Infrastruktur-Audit", "Masterplan"],
  },
  {
    nr: "03",
    title: "Umsetzung",
    text: "Maßgeschneiderte Schnittstellen, innovative Anwendungen und Automationen – exakt auf Ihre Anforderungen zugeschnitten.",
    details: [
      "Schnittstellen",
      "Apps & Automationen",
      "Individuelles User-Interface",
    ],
  },
  {
    nr: "04",
    title: "Schulung",
    text: "Ihr Team wird die umgesetzten Prozesse schnell integrieren können und die neuen Features lieben. Der reibungslose Übergang hat für uns höchste Priorität.",
    details: ["Einarbeitung", "Reibungsloser Übergang", "Hohe Akzeptanz"],
  },
  {
    nr: "05",
    title: "Betreuung",
    text: "Wir stellen sicher, dass Ihre neuen Systeme einwandfrei laufen – und entwickeln sie bei Bedarf dynamisch weiter. Ihr Rundum-sorglos-Paket.",
    details: ["Funktionssicherung", "Dynamische Weiterentwicklung", "Service & Support"],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="start"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/digi-tech.webp"
          alt="Ineinandergreifende Zahnräder – symbolisiert die reibungslose Optimierung bestehender Systeme"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <h1 className="font-kalam-bold text-4xl leading-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Upgrades für Ihre
            <br />
            digitalen Prozesse!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/85 md:text-xl">
            Wir machen Ihre bestehende Software zum Hochleistungswerkzeug.
            <br />
            Statt kostspieliger Systemwechsel liefern wir punktgenau die digitalen
            Erweiterungen, die Ihr Team heute braucht – nahtlos integriert und
            sofort einsatzbereit.
          </p>

          <a
            href="#kontakt"
            className="mt-10 inline-block rounded-full border-2 border-accent-light bg-white px-8 py-3 font-bold text-black transition-colors hover:bg-accent hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Jetzt Potenzial-Check anfordern
          </a>
        </div>
      </section>

      {/* ── Nutzen-Sektion ── */}
      <section className="border-t-2 border-accent/60 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Die konkrete Perspektive für Sie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Optimierung statt Neuanfang. Vier Versprechen, die wir mit jedem
            Projekt einlösen.
          </p>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <article key={b.title} className="group">
                <div className="mb-4 h-1 w-12 bg-accent transition-all group-hover:w-20" />
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {b.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lösungen ── */}
      <section id="loesungen" className="border-t-2 border-accent/60 bg-neutral-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Unser Vorgehen: Der Anbau-Ansatz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Kein Abriss Ihrer bestehenden Infrastruktur!
            <br />
            Wir bauen an, was fehlt – Schritt für Schritt, transparent und messbar.
          </p>

          <div className="mt-20 space-y-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-5">
            {PROZESS_SCHRITTE.map((s) => (
              <article key={s.nr} className="relative">
                <span className="text-4xl font-bold text-accent/50">{s.nr}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {s.text}
                </p>
                <ul className="mt-4 inline-flex flex-col gap-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-accent/30 px-3 py-1 text-xs text-neutral-300"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontaktformular ── */}
      <section id="kontakt" className="border-t-2 border-accent/60 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Ihr Potenzial-Check. Gratis!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Sie füllen das Formular aus – wir rufen Sie zurück und vereinbaren mit Ihnen einen Besprechungstermin für den ersten Step – unseren Quick-Check.
          </p>

          <div className="mt-12">
            <KontaktFormular />
          </div>
        </div>
      </section>
    </>
  );
}
