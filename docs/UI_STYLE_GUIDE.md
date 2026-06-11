# UI Style Guide — Wellness MVP

## Mood

Calm, premium, soft, clean, airy.

Avoid:

- neon;
- cyberpunk;
- heavy dashboards;
- medical/hospital look;
- aggressive fitness/bodybuilding tone;
- dark trading-style UI;
- crowded admin panels.

## Colors

Use CSS variables. Suggested tokens:

```css
:root {
  --color-bg: #f3f4ef;
  --color-surface: #ffffff;
  --color-surface-warm: #eee6dc;
  --color-sage: #7f8d7a;
  --color-sage-dark: #63705f;
  --color-text: #22231f;
  --color-muted: #8e9189;
  --color-border: rgba(34, 35, 31, 0.08);
  --shadow-soft: 0 18px 48px rgba(71, 78, 65, 0.14);
  --radius-lg: 28px;
  --radius-xl: 36px;
  --bottom-nav-height: 88px;
}
```

## Typography

Use system fonts unless the repo already has a font pipeline.

Suggested:

```css
font-family: Inter, Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Large headings should feel light and elegant:

- font-weight 300–500;
- increased letter-spacing for English section titles;
- Russian text must remain readable.

## Layout

- mobile-first;
- content max-width: 480px;
- padding: 24–36 px;
- large vertical rhythm;
- cards rounded 28–36 px;
- bottom padding must include nav height and safe area.

```css
padding-bottom: calc(var(--bottom-nav-height) + env(safe-area-inset-bottom) + 24px);
```

## Components

### Buttons

- sage background;
- white text;
- rounded pill;
- large tap target at least 48 px high.

### Cards

- large image/gradient areas;
- soft shadow;
- gentle overlays;
- lock badge when locked.

### Bottom nav

- fixed bottom;
- white translucent/solid pill-like area;
- center brand mark elevated;
- labels small and muted;
- active state sage/dark text.

### Locked state

Use:

- subtle blur or opacity;
- lock icon/badge;
- clear CTA;
- do not make the user wonder why content is unavailable.

## Images

For MVP, use CSS gradients, generated placeholder blocks, or remote-safe placeholder assets if the repo already uses them.

Do not hard-copy proprietary images from screenshots into the product build unless ownership is confirmed.

---

# Vedara override

The old sage/green reference is no longer the primary brand system.

Use Vedara tokens:

- page background: pearl / white;
- soft surfaces: lavender / lilac / pearl;
- active state and CTA: deep purple;
- highlights: restrained gold;
- text: graphite;
- headings: Prata;
- interface/body: Arial.

See:

- `docs/VEDARA_BRAND_BRIEF.md`
- `docs/DESIGN_TOKENS.md`
- `design-tokens/vedara.css`
