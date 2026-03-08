import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const inter = localFont({
  src: "../../public-fonts/inter-v20-latin-regular.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400",
});

const kalamRegular = localFont({
  src: "../../public-fonts/kalam-v18-latin-regular.woff2",
  variable: "--font-kalam",
  display: "swap",
  weight: "400",
});

const kalamBold = localFont({
  src: "../../public-fonts/kalam-v18-latin-700.woff2",
  variable: "--font-kalam-bold",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Digitalermacher – Weniger Change. Mehr Upgrade!",
  description:
    "Optimierung statt Abriss. Bestehende Kern-Systeme bleiben erhalten und werden durch intelligente digitale Brücken zu Hochleistungswerkzeugen erweitert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${kalamRegular.variable} ${kalamBold.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-block focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-black focus:font-medium"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />

        <main id="main-content" tabIndex={-1}>{children}</main>

        <footer className="border-t-2 border-accent/60 bg-neutral-950 text-neutral-400">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-kalam-bold text-lg text-white">Digitalermacher</p>
              <p className="text-sm text-neutral-500">&copy; 2026</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/impressum" className="transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded">
                Impressum
              </a>
              <a href="/datenschutz" className="transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded">
                Datenschutz
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
