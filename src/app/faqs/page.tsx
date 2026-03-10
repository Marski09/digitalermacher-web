import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import KontaktFormular from "@/components/KontaktFormular";

export const metadata: Metadata = {
  title: "FAQs – Digitalermacher",
  description:
    "Häufig gestellte Fragen rund um den Anbau-Ansatz, den Potenzial-Check und die Zusammenarbeit mit Digitalermacher.",
};

const FAQS = [
  {
    frage: "Muss die gewohnte Software für die Optimierung aufgegeben werden?",
    antwort:
      `Nein. Bestehende Kern-Systeme enthalten wertvolles Prozesswissen. Die Strategie lautet „Optimierung statt Systemwechsel-Chaos" – die vorhandene Software bleibt das Fundament und wird punktgenau durch digitale Brücken erweitert.`,
  },
  {
    frage: "Wie sicher ist der garantierte ROI von mindestens 200%?",
    antwort:
      `Die Kalkulation basiert auf harten Fakten unserer "ROI-Hebel". Diese Hebel werden Ihnen anhand Ihrer aktuellen Prozesse aufgezeigt und dann auch im Masterplan schriftlich fixiert. Die realen Potenziale liegen meist deutlich über diesen Werten.`,
  },
  {
    frage: "Steht der Betrieb während der Umstellung still?",
    antwort:
      `Keineswegs. Da keine „Operation am offenen Herzen" (Systemwechsel) stattfindet, erfolgt die Implementierung parallel zum Tagesgeschäft. Die Mitarbeiter arbeiten in ihrer gewohnten Umgebung weiter.`,
  },
  {
    frage: "Wie hoch ist der Zeitaufwand für das Team?",
    antwort:
      `Minimal. Da die Kernanwendung erhalten bleibt, entfällt das Erlernen eines komplett neuen Systems. Die Einarbeitung konzentriert sich rein auf das „Upgrade", was die Lernkurve extrem flach hält.`,
  },
  {
    frage: "Bieten Sie die Nutzung von Förderprogrammen an?",
    antwort:
      `Um für Förderprogramme zugelassen zu werden, sind aus unserer Sicht die bürokratischen Hürden für Startups wie wir unangemessen hoch. Aus diesem Grund haben wir uns zunächst dagegen entschieden. Diese Entscheidung fiel uns aber ehrlich gesagt leicht, da wir den Sachverhalt so sehen: Wir betrachten unsere Projekte nicht als unternehmerischen Kostenpunkt, den man durch Zuschüsse „erträglicher" machen muss, sondern als eine hochrentable Investition. Während anderswo Projekte auf „Bestätigung" vom Amt warten und in dieser Zeit durch veraltete Prozesse weiterhin Ressourcen verschwendet werden, bauen wir bereits an der neuen optimierten Infrastruktur unserer Kunden. Unser garantierter ROI von mindestens 200% innerhalb 6 Monaten sorgt dafür, dass sich die Investition ohnehin in Rekordzeit bezahlt macht. Wir arbeiten für Entscheider, die Ergebnisse wollen – und zwar sofort.`,
  },
  {
    frage: "Was passiert, wenn die Anforderungen nach dem Projekt wachsen?",
    antwort:
      "Die geschaffene Infrastruktur ist auf Skalierung ausgelegt. Durch die 12-monatige Betreuungsphase (Sorglos-Versicherung) ist sichergestellt, dass veränderte Anforderungen schnell lokaliseret werden. Wenn Sie dann Anpassungen wünschen, können wir extrem schnell liefern.\nFazit: Eine sichere, dynamische Weiterentwicklung ist gewährleistet.",
  },
  {
    frage:
      "Ist eine individuelle Lösung nicht viel teurer als Standard-Software?",
    antwort:
      `Im Gegenteil. Eine gezielte Erweiterung kostet oft nur 15–20 % einer kompletten ERP-Neueinführung, da nur die Funktionen gebaut werden, die tatsächlich fehlen. Es wird kein unnötiger „Ballast" bezahlt und Aufwände für Datenmigration und umfassende Schulungen entfallen.`,
  },
  {
    frage: "Wie wird die Datensicherheit bei Schnittstellen gewährleistet?",
    antwort:
      "Daten werden über gesicherte Schnittstellen extrahiert und in geschützten Umgebungen verarbeitet. Der Schutz Ihres digitalen Kapitals hat bei jeder Erweiterung oberste Priorität.",
  },
  {
    frage: "Woran erkennt man, dass ein Potenzial-Check sinnvoll ist?",
    antwort:
      `Wenn zum Beispiel Sätze wie diese in Ihrem Team fallen:

„Ich dachte, das hättest du schon in die Liste eingetragen?"
„Wo liegt eigentlich die aktuelle Version der Kalkulation?"
„Ich verbringe gefühlt den halben Tag mit Abstimmungs-Mails und Besprechungen."

Wenn Zeit in Suchen, Rückfragen oder doppelter Datenpflege versickert, ist unser Quick-Check der erste Schritt zur digitalen Befreiung.`,
  },
  {
    frage: "Warum ist die Lösung für den Fachkräftemangel relevant?",
    antwort:
      "Moderne Talente suchen effiziente Arbeitsumgebungen. Werden Zeitfresser eliminiert, steigt Ihre Attraktivität als Arbeitgeber massiv, da das Team sich auf wertschöpfende Aufgaben konzentrieren kann.",
  },
  {
    frage:
      "Gibt es eine persönliche Betreuung oder nur anonymen Support?",
    antwort:
      "Es erfolgt eine durchgehende Begleitung durch die Experten, die Ihr System konzipiert haben. Von der ersten Analyse über die Umsetzung bis hin zur Betreuung bleibt die Verantwortung in einer Hand.",
  },
  {
    frage: "Wie schnell sind erste messbare Ergebnisse sichtbar?",
    antwort:
      "Da bei unseren Systemen keine lange Einführungsphase nötig ist, werden die Ergebnisse der Optimierungen in der Regel schon innerhalb weniger Wochen, zum Beispiel durch spürbare Zeitersparnis und Fehlerreduktion, sichtbar.",
  },
];

export default function FaqsPage() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="bg-neutral-950 pt-32 pb-24 text-white md:pb-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            FAQs
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Häufig gestellte Fragen
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Klare Antworten auf die wichtigsten Fragen rund um unseren
            Anbau-Ansatz,
            <br />
            den Potenzial-Check und die Zusammenarbeit.
          </p>
        </div>
      </section>

      {/* ── FAQ-Liste ── */}
      <section className="border-t-2 border-accent/60 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* ── Kontaktformular ── */}
      <section id="kontakt" className="border-t-2 border-accent/60 bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Ihre Frage ist nicht dabei?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Kein Problem – wir rufen Sie zurück und beantworten Ihre Frage.
          </p>

          <div className="mt-12">
            <KontaktFormular buttonText="Jetzt informiert werden" />
          </div>
        </div>
      </section>
    </>
  );
}
