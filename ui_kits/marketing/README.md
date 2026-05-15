# Marketing UI Kit

A modular React recreation of the **Spritz Commercial Cleaning** landing page. Designed for re-piecing into new layouts (case studies, alternate landings, French version, sub-pages).

## Files

| File | Purpose |
|---|---|
| `index.html` | Full clickable landing page — entry point |
| `styles.css` | Component primitives (buttons, eyebrows, kickers, fields, reveals) |
| `sections.css` | Section-specific layout (hero, why, diff, process, industries, faq, cta, footer) |
| `Icons.jsx` | Lucide-style icons — exported on `window.SpritzIcons` |
| `Logo.jsx` | `SpritzMark` + `SpritzBrand` lockup — exported on `window.SpritzLogo` |
| `Nav.jsx` | `AnnouncementBar` + `Nav` — exported on `window.SpritzNav` |
| `Hero.jsx` | `Hero` (with embedded `QuoteCard`) — exported on `window.SpritzHero` |
| `Sections.jsx` | `LogoStrip`, `WhyItMatters`, `Differentiators`, `Process`, `Industries`, `FAQ` — exported on `window.SpritzSections` |
| `CtaForm.jsx` | `CtaForm` (with fake submit) — exported on `window.SpritzCta` |
| `Footer.jsx` | `Footer` — exported on `window.SpritzFooter` |

## Conventions

- All design tokens come from `../../colors_and_type.css`. **Don't hardcode hex values** — use vars (`var(--spritz-gold)`, `var(--text-sub)`, etc).
- Class names are prefixed `spritz-` for primitives and unprefixed for section-local layout (`.hero`, `.qc-card`, `.diff-grid`) — matches the original source.
- Babel JSX components register their public exports on `window.Spritz*` so each file stays self-contained.
- Scroll reveal is opt-in: add `spritz-reveal` (single fade) or `spritz-stagger` (children fade with delay) to any element; the `IntersectionObserver` in `index.html` handles the rest.

## Interactive bits

- **FAQ** items collapse/expand on click (`useState` in `Sections.jsx`).
- **CtaForm** is a real React form — submitting flips to a success state. (No backend.)
- **Hero quote card** floats two notification chips with infinite-loop CSS animations.
- **Hover states** are CSS-only (lift, color, shadow).

## What's NOT in this kit

- No real photography — industry cards use CSS-generated layered patterns.
- No bilingual French version of the page.
- No dashboard / customer-portal UI (Spritz doesn't have one in the source).
- No real form submission backend.
