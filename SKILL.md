---
name: spritz-design
description: Use this skill to generate well-branded interfaces and assets for Spritz Commercial Cleaning (Montréal), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files to know about:
- `README.md` — brand context, content tone, visual foundations, iconography
- `colors_and_type.css` — CSS variables for the entire design language (colors, type scale, spacing, radii, shadows, motion)
- `assets/` — logos and brand SVGs (copy these out, never redraw)
- `reference/spritz-landing-source.html` — the canonical single source of truth
- `ui_kits/marketing/` — modular JSX components recreating the marketing site
- `preview/` — small token cards (helpful as quick visual references)

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference — Spritz at a glance

- **Brand:** Premium recurring commercial cleaning for Greater Montréal. Bilingual EN / FR.
- **Voice:** Direct, confident, calm. No exclamation marks, no emoji, no fluff. Second-person ("you / your"). Sentence-case body, UPPERCASE wide-tracked labels.
- **Color:** `#FFB900` Spritz Gold on `#0B0B0B` near-black. White text at 100/72/50/32% opacity. Tiny `#4ADE80` for success/active.
- **Type:** Montserrat, weights 400/700/800/900. Display is `900`. Tracking tight on headings (`-0.025em`), wide on labels (`0.16–0.20em`).
- **Icons:** Lucide / Feather, stroke 1.8–2.5, round caps, gold stroke inside a soft gold-tinted square pill.
- **Cards:** Charcoal bg, `1px solid rgba(255,255,255,0.08)` border, `12–18px` radius, drop-shadow.
- **Motion:** Cubic-bezier ease, 200–250ms hovers, 600–700ms scroll-reveals fading up. No springs, no bounces.

## Don'ts (these violate the brand)

- No emoji, no playful illustrations, no rounded mascot characters.
- No purple, no blue, no multi-color palette. Gold is the only accent.
- No gradients on text. No glow text. (Gold-accent words are flat color.)
- No light-mode by default. (A light variant doesn't exist yet.)
- No "Solutions", "Best-in-class", "We pride ourselves on…", etc.
