# Spritz Design System

A design system for **Spritz Commercial Cleaning** — a premium recurring commercial-cleaning service for Greater Montréal. Bilingual (EN / FR). Aimed at offices, clinics, retail, and managed properties.

> Tagline: **"Commercial cleaning, elevated."**

The system is **dark-mode-first**, with a single high-contrast accent (Spritz Gold `#FFB900`) on near-black backgrounds. Type is **Montserrat** throughout — used very heavy (800–900) for display and bold (700) for UI.

---

## Sources

- `uploads/spritz-landing-v3 (1).html` — original landing-page draft provided by the client. Single source-of-truth for tone, motifs, and visuals.
- A clean reference copy lives at `reference/spritz-landing-source.html`.

There is no separate Figma, codebase, or brand book — this design system is derived entirely from the landing page above. Where details were not specified (icon family, alternate page templates, dashboard UI), reasonable choices were made and **flagged below**.

---

## Index

| File / Folder | What's in it |
|---|---|
| `README.md` | This file. Brand, content, visual, iconography fundamentals. |
| `SKILL.md` | Skill manifest so this folder can be used directly by Claude Code. |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, shadows) as CSS vars + utility classes. |
| `fonts/` | Webfont notes — Montserrat is loaded from Google Fonts. |
| `assets/` | Logos (light + dark variants), brand SVGs, favicon. |
| `preview/` | One small HTML card per token group — populates the **Design System** tab. |
| `ui_kits/marketing/` | Pixel-recreation of the marketing site. JSX components + `index.html` clickthrough. See its own `README.md` for component manifest. |
| `reference/` | Original landing-page source for reference. |

## UI Kits

| Kit | What's covered |
|---|---|
| `ui_kits/marketing/` | The full landing page broken into modular React components: `AnnouncementBar`, `Nav`, `Hero` + `QuoteCard`, `LogoStrip`, `WhyItMatters`, `Differentiators`, `Process`, `Industries`, `FAQ`, `CtaForm`, `Footer`. |

There is only one product surface in scope — the marketing site. No dashboard, customer portal, mobile app, or CMS exists in the source materials.

---

## Brand at a glance

- **Name:** Spritz Commercial Cleaning
- **Domain:** spritzcleaners.ca
- **Location:** Greater Montréal (Downtown · Westmount · NDG · Outremont · Laval · West Island · Longueuil · Brossard)
- **Phone:** 514-677-8390 · **Email:** hello@spritzcleaners.ca
- **Languages:** English + French (services are bilingual; copy is primarily English with occasional French inline phrases)
- **Audience:** Property managers, operators, clinic owners, retail managers — B2B decision-makers
- **Service positioning:** Recurring contracts from **$1,500 / mo**, 12-month standard term with 30-day notice; walkthrough-before-pricing model

---

## Content fundamentals

**Tone.** Confident, direct, slightly aspirational. The brand sells reliability and accountability, not warmth. Copy reads like a competent ops person, not a salesperson. Sentences are short, sharp, often fragments. Em-dashes do the heavy lifting.

**Voice mechanics**
- **Second-person.** Addresses the reader as **"you"** / **"your"** — almost never "we" first.
- **"We"** for the company, never "us" or "Spritz" as a third-person.
- **No exclamation marks.** Calm, never breathless.
- **No emoji.** Anywhere. Ever.
- **Casing:** Sentence-case body. Title-case nav and buttons. **UPPERCASE** with wide letter-spacing for kickers, labels, and small meta (`PROPERTY`, `RECURRING INVESTMENT`, `STEP 01`).
- **Numbers stay numeric** ("7–14 days", "$1,500 / mo", "3× weekly", "90d") — never spelled out.
- **Bilingual inline.** Drop French phrases in occasionally as proof, not translation: *"Bilingual service: répondez en français si vous préférez."*
- **Accented characters preserved** in Montréal, repondez, etc.

**Sentence shape.** One bold claim, an em-dash, a sharper qualifier. Examples taken from the source:
- "Commercial cleaning, **elevated**."
- "A structured partner, **not just a crew**."
- "A clean space is a **business asset**."
- "Cleanliness compounds."
- "We don't lock people in — if it's not working, you can leave."
- "Cleaning is one thing that should never be a fire to put out."

**Headlines** almost always end with a short emphasized phrase wrapped in gold. Pattern:
```
[setup statement,] [gold-accented payoff.]
```

**Kicker → Headline → Lead** is the canonical section opener. Example:
```
THE BUSINESS CASE
A clean space is a business asset.
Your environment signals everything before anyone speaks…
```

**Forbidden phrases.** Avoid filler that softens conviction:
- "We pride ourselves on…", "We strive to…"
- "Best-in-class", "World-class", "Industry-leading"
- "Solutions" (use "service", "cleaning", "scope")
- "Reach out" (use "call", "message")

**Trust signals are concrete, not adjectival.** "Fully insured & bonded · Bilingual EN / FR service · Walkthrough before pricing" — not "trusted by hundreds".

---

## Visual foundations

### Palette
A near-monochrome dark stack (`#0B0B0B → #1A1A1A → #222 → #2A2A2A`) with a single hot accent: **Spritz Gold `#FFB900`**. White text at four opacities (100/72/50/32%) does all the typographic hierarchy. The only other color is a tiny `#4ADE80` green for "active / on schedule" status pills.

### Type
- **Family:** Montserrat (Google Fonts), weights 300–900.
- **Display weights** are extreme — `900` for H1 and H2, `800` for card titles. This is the signature.
- **Body** is `400` regular at 15–17px with `1.65` line-height.
- **Tracking** goes tight on headlines (`-0.025em`) and wide on uppercase labels (`0.16–0.20em`).
- **Display line-height** is very tight (`1.0`–`1.05`).

### Spacing & rhythm
- Section vertical padding is **120px** desktop, **80px** mobile — generous and consistent.
- Section heads have **64px** below them.
- Container max-width **1320px**, side padding **32px** (20px mobile).
- Cards have **28–36px** interior padding.
- Spacing scale used: 4 / 8 / 14 / 20 / 24 / 28 / 32 / 40 / 48 / 64 / 80 / 100 / 120.

### Backgrounds
- **Primary background:** flat `#0B0B0B` with a subtle 80px grid overlay (`rgba(255,255,255,0.025)`), masked with a radial fade so it only shows in the center of the hero.
- **Section alternation:** sections alternate between `--black` and `--charcoal` (`#1A1A1A`) — never gradients.
- **Gold glows:** large soft radial gradients (`rgba(255,185,0,0.06–0.08)`) used sparingly behind the hero and CTA — atmospheric, not chromatic.
- **No photography** in the source. No illustrations. **Industry cards use CSS-generated layered patterns** (grid lines, dots, diagonal stripes) tinted with gold — a fallback for missing imagery. ⚠️ **See "Imagery" caveat below.**

### Animation
- **Eases:** `cubic-bezier(0.4, 0, 0.2, 1)` (default) and `cubic-bezier(0.16, 1, 0.3, 1)` (entry).
- **Scroll reveal:** elements fade up 20–28px over 600–700ms; staggered children at 80ms increments.
- **Float loops:** floating notification cards do a gentle 8px y-bob over 4s, infinite.
- **Pulse:** the eyebrow dot scales 1 → 1.6 with opacity 0.4 → 0 over 2s.
- **Hover lift:** primary buttons translate `-2px` Y and grow a gold shadow; cards translate `-4 to -6px` Y.
- **No bounces, no springs, no parallax.** Everything is calm.

### Hover & press states
- **Buttons (primary gold):** background lightens to `--spritz-gold-hover`, `translateY(-2px)`, `0 12px 32px rgba(255,185,0,0.28)` shadow, embedded arrow icon slides right `3–4px`.
- **Buttons (secondary, outlined):** border darkens to gold, text turns gold, no translate.
- **Cards:** background lightens charcoal → slate, border tint shifts gold, `translateY(-4px)` for industry/diff cards.
- **Nav links:** text opacity 72% → 100%.
- **No active/press shrink** in source; we recommend a `scale(0.98)` + `--spritz-gold-deep` background for active state.

### Borders, lines, shadows
- **Thin lines** at `rgba(255,255,255,0.08)` separate sections, list items, card sections.
- **Gold-tinted lines** at `rgba(255,185,0,0.14)` outline gold cards.
- **Inner glow** on big cards: `0 0 0 1px rgba(255,185,0,0.06)` combined with a heavy outer shadow.
- **No bevels, no neumorphism.** Cards are flat with a single drop shadow.

### Cards — anatomy
- Background `--charcoal` or a vertical gradient `--charcoal → --slate`.
- Border `1px solid rgba(255,255,255,0.08)`.
- Radius `12–18px` (icon-pill cards 10px; quote cards 14–18px).
- Heavy stacked shadow on hero cards; thin shadow or none on grid cards.
- Internal structure: icon-pill (top), title, body, optional divider line, footer row.

### Transparency & blur
- **Sticky nav** uses `backdrop-filter: blur(16px) saturate(150%)` over `rgba(11,11,11,0.92)`.
- **Inside-card overlays** use `rgba(255,255,255,0.02)` to make subtle inset panels.
- Blur is reserved for sticky surfaces — never decorative.

### Corner radii
- **6px** — pill buttons
- **8px** — form inputs, small inset cards
- **10px** — float notification chips
- **12px** — FAQ items, side cards
- **14px** — main cards, quote card
- **16–18px** — feature card, form card
- **50% / 100px** — fully round (icons, dots, pills)

### Layout primitives
- Centered 1320-max container with 32px gutters.
- `section { padding: 120px 0 }` is the heartbeat.
- Two-column splits use `1.1fr 1fr`, `1.4fr 1.1fr`, `1fr 1.2fr` — never 50/50.
- 4-column grids for industries; 3-column for process; 2-column splits for hero/CTA/FAQ.

---

## Iconography

**Style:** **Feather/Lucide-style line icons.** Stroke-width `1.8–2.5`, round line-caps, round line-joins, no fills, 24×24 viewBox.

**Where they appear:** Inline SVG everywhere. The brand does **not** use an icon font, sprite, or PNG icons.

**Color:** Always `var(--spritz-gold)` (`#FFB900`) for the icon stroke, sitting inside a square-rounded pill (`rgba(255,185,0,0.08)` bg, `rgba(255,185,0,0.18)` border). Pill sizes: **32 / 40 / 44 / 48 / 56px** depending on hierarchy.

**Stroke weights observed in source:**
- `1.8` — large feature icons (calmer feel)
- `2.0` — standard icons
- `2.5` — small checkmarks, arrows (stand out at tiny sizes)
- `3.0` — inline check ticks in bullets

**Decision: Lucide.** The source uses hand-rolled SVG that exactly matches Lucide / Feather glyphs. Going forward, **use [Lucide](https://lucide.dev/) icons** as the canonical set. ⚠️ This is a **substitution** — please confirm. The original landing page inlines the same shapes but isn't formally pinned to a library.

**Emoji and Unicode chars:** Never used. The only special chars in the brand are `×` (multiplication for "3× weekly"), `·` (middot for separators), `—` (em-dash). All typed, not via icon.

**Brand logo** is a custom SVG composite (`assets/spritz-mark.svg`): three horizontal gold motion-lines stacked left, a two-layer (gold + white) script-`S`, two four-point sparkles. Don't recreate it from scratch — copy the SVG.

---

## Caveats / open questions

1. **Icon system substitution.** The landing page inlines Lucide-shaped SVGs without naming the library. We've pinned this to **Lucide** going forward; please confirm or substitute.
2. **No photography.** The original uses CSS patterns where photos would normally go (industry cards). When real shots become available, drop them into `assets/imagery/` and the cards will swap automatically.
3. **No dashboard / app surface.** Only the marketing site exists in the source. If Spritz has a customer portal (the "visit logs / quality reports / photo proof" implied by the copy), that's a missing surface to design.
4. **Logo file.** The mark is reproduced as inline SVG in the source. We've extracted it into `assets/spritz-mark.svg`. If there is a higher-fidelity master file (PDF, AI, or PNG with proper margins), please share.
5. **No bilingual FR variant of the site.** Copy is English-first with one inline French phrase. If full FR pages are expected, copy needs to be re-decked.
6. **Single source-of-truth fidelity.** Decisions about hover/press, animation timing curves, and component states are inferred from one HTML file. If you have additional patterns (toasts, modals, table styling, form errors), they should be documented next.
