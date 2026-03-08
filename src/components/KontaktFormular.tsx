"use client";

import { useState, type FormEvent } from "react";

function getFormEndpoint() {
  if (typeof window === "undefined") return "https://form.taxi/s/jbw9im8g";
  const { hostname } = window.location;
  if (hostname === "localhost") return "/api/contact";
  if (hostname.includes("netlify.app")) return "/.netlify/functions/submit-form";
  return "https://form.taxi/s/jbw9im8g";
}

const MITARBEITER_OPTIONEN = ["1–20", "21–50", "51–100", "Mehr als 100"];

export default function KontaktFormular({ buttonText = "Jetzt Potenzial-Check anfordern" }: { buttonText?: string } = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(getFormEndpoint(), {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(
          "Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setError(
        "Keine Verbindung zum Server. Bitte prüfen Sie Ihre Internetverbindung."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl text-white" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-2xl font-bold">Vielen Dank!</h3>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-neutral-600">
          Ihre Anfrage ist sicher bei uns eingegangen.
          <br />
          Wir werden Sie zeitnah unter der angegebenen Nummer zurückrufen.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Unternehmen */}
        <div className="sm:col-span-2">
          <label htmlFor="unternehmen" className="mb-1.5 block text-sm font-medium">
            Unternehmen
          </label>
          <input
            type="text"
            id="unternehmen"
            name="unternehmen"
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>

        {/* Branche */}
        <div>
          <label htmlFor="branche" className="mb-1.5 block text-sm font-medium">
            Branche
          </label>
          <input
            type="text"
            id="branche"
            name="branche"
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>

        {/* Mitarbeiterzahl */}
        <div>
          <label htmlFor="mitarbeiter" className="mb-1.5 block text-sm font-medium">
            Mitarbeiterzahl
          </label>
          <select
            id="mitarbeiter"
            name="mitarbeiter"
            required
            defaultValue=""
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {MITARBEITER_OPTIONEN.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Vorname + Nachname */}
        <div>
          <label htmlFor="vorname" className="mb-1.5 block text-sm font-medium">
            Vorname
          </label>
          <input
            type="text"
            id="vorname"
            name="name"
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>
        <div>
          <label htmlFor="nachname" className="mb-1.5 block text-sm font-medium">
            Nachname
          </label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>

        {/* Telefon */}
        <div className="sm:col-span-2">
          <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium">
            Telefon-Nummer
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>

        {/* Telefonische Erreichbarkeit */}
        <div className="sm:col-span-2">
          <label htmlFor="erreichbarkeit" className="mb-1.5 block text-sm font-medium">
            Telefonische Erreichbarkeit
          </label>
          <input
            type="text"
            id="erreichbarkeit"
            name="erreichbarkeit"
            required
            placeholder="z. B. Mo–Fr, 9–17 Uhr"
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          />
        </div>
      </div>

      {/* Honeypot */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-accent px-8 py-3 font-bold text-white transition-colors hover:bg-accent-dark disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {loading ? "Wird gesendet …" : buttonText}
        </button>
      </div>
    </form>
  );
}
