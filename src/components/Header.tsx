"use client";

import { useState } from "react";
import Siegel from "./Siegel";

const NAV_ITEMS = [
  { label: "Start", href: "/#start" },
  { label: "Lösungen", href: "/#loesungen" },
  { label: "Die Macher", href: "/die-macher" },
  { label: "FAQs", href: "/faqs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-accent/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6" aria-label="Hauptnavigation">
        {/* Logo + Siegel */}
        <a href="/" className="flex min-w-0 shrink items-center gap-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded" aria-label="Digitalermacher – Startseite">
          <span className="font-kalam-bold text-[2.2rem] tracking-tight text-black sm:text-[2.5rem]">
            Digitalermacher
          </span>
          <Siegel />
        </a>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-8 text-[0.925rem] font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-neutral-700 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#kontakt"
              className="rounded-full bg-black px-5 py-2 text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger – immer sichtbar unter md, großer Touch-Bereich */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex shrink-0 flex-col items-center justify-center gap-1.5 p-3 md:hidden"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-neutral-200 bg-white transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-black px-5 py-2.5 text-center text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
