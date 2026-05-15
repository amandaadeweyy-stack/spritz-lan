# Fonts

Spritz uses **Montserrat** for everything. The brand depends on Montserrat's `800` and `900` weights — using a substitute will visibly change the feel of headlines.

Loaded via Google Fonts in `colors_and_type.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
```

Or via `<link>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**Weights actually used by the system:**

| Weight | Where |
|---|---|
| 400 | Body paragraphs |
| 500 | Trust items, meta, list items |
| 600 | Nav links, sub-labels |
| 700 | Bold body, buttons, kickers, labels |
| 800 | Card titles (H4) |
| 900 | Display H1, section H2, headline accents, totals |

> No self-hosted `.ttf` / `.woff2` files are committed — Google Fonts is the canonical source. If self-hosting is required for production, download the same weights from [fonts.google.com/specimen/Montserrat](https://fonts.google.com/specimen/Montserrat) and add a local `@font-face` block here.
