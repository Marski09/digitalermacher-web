# Programmier-Gesetze für Digitalermacher (Stand 2026)

## 1. Rechtssicherheit (STRIKT)
* **KEINE Cookies:** Kein Tracking, kein Consent-Banner.
* **LOKALE Fonts:** Die Schriftarten 'Inter' und 'Kalam' MÜSSEN lokal aus `/public-fonts/` geladen werden.
* **Assets:** Bilder und Skripte lokal hosten. Nutze moderne Formate wie WebP, sofern möglich.
* **Formular-Provider:** Nutze ausschließlich den deutschen Dienst **form.taxi**.

## 2. Design & Branding
* **Logo:** Schriftzug "Digitalermacher" (Kalam Bold) + stiltreues Siegel "Das Original" (minimalistischer Qualitätsstempel).
* **Hero-Visual:** 1. Nutze das Bild `hero-gears.webp` als Full-Width Hintergrund.
                   2. Wende einen CSS-Filter an, um das Bild in Schwarz-Weiß (grayscale) darzustellen.
                   3. **WICHTIG:** Lege einen schwarzen Overlay (Deckkraft ca. 50-60%) über das Bild, um den Kontrast für die weiße Headline ("Weniger Change. Mehr Upgrade!") sicherzustellen (Barrierefreiheit/Lesbarkeit).
* **Ästhetik:** High-Contrast S/W, viel Weißraum, technischer "Macher-Look".
* **Grundlage:** Full Responsive!

## 3. Formular-Logik (AJAX / No-Redirect)
* **Versand:** Nutze die JavaScript `fetch()` API (AJAX). 
* **Header:** Sende zwingend `'Accept': 'application/json'`. Dies verhindert die Weiterleitung auf die Standardseite von form.taxi.
* **Honeypot:** Implementiere ein Feld `_gotcha`. Dieses muss für Menschen unsichtbar sein (`display: none`, `tabindex="-1"`).
* **UX:** Verhindere Standard-Submit (`e.preventDefault()`). Blende das Formular bei Erfolg aus und zeige die Erfolgsmeldung aus @context_digitalermacher.md an.

## 4. Copywriting
* **Nutzen vor ROI:** Headlines fokussieren auf Entlastung und Kapazität.
* **Perspektive:** Konsequentes "Sie" / "Ihr Team".
* **Struktur:** Texte so lang wie nötig und so kurz wie möglich. Alle Botschaften und Informationen müssen vollständig nachvollziehbar sein.

## 5. Barrierefreiheit
* Nutze Semantic HTML. Frage den Nutzer bei jedem Bild aktiv nach einem Alt-Text, falls @context_digitalermacher.md keine exakte Beschreibung liefert.
