"use client";

import { useState, useEffect } from "react";
import Siegel from "./Siegel";

const NAV_ITEMS = [
  { label: "Start", href: "/#start" },
  { label: "Lösungen", href: "/#loesungen" },
  { label: "Die Macher", href: "/die-macher" },
  { label: "FAQs", href: "/faqs" },
];

const SCROLL_THRESHOLD = 30;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showCompactHeader = isScrolled && isMobile;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-accent/60 transition-shadow duration-300">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 transition-all duration-300 sm:px-6 md:py-4" aria-label="Hauptnavigation">
        {/* Logo + Siegel – Mobile: klein + Platz für Hamburger wenn gescrollt */}
        <a
          href="/"
          className={`flex min-w-0 shrink items-center gap-0.5 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded md:pr-0 ${
            showCompactHeader ? "pr-12" : "pr-0"
          }`}
          aria-label="Digitalermacher – Startseite"
        >
          <span
            className={`font-kalam-bold tracking-tight text-black transition-all duration-300 ${
              showCompactHeader
                ? "text-xl md:text-[2.2rem] lg:text-[2.5rem]"
                : "text-[2.2rem] sm:text-[2.5rem]"
            }`}
          >
            Digitalermacher
          </span>
          <Siegel compact={showCompactHeader} />
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

        {/* Mobile Hamburger – nur sichtbar wenn gescrollt */}
        <div
          className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 transition-opacity duration-300 md:hidden ${
            showCompactHeader ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-neutral-300 bg-white p-2 transition-colors hover:border-accent hover:bg-neutral-50 active:bg-neutral-100"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-5 bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-neutral-200 bg-white transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
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
