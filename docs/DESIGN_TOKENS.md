# Design tokens spec

## Goal

All visual decisions must be centralized. When the customer asks to change color, spacing, radius, tab style, font, or active state, we should edit tokens/components once, not hunt through pages.

## Token layers

### 1. Primitive tokens

Raw brand values:

```css
--vd-purple-950: #241336;
--vd-graphite-900: #2B2B2F;
--vd-gold-500: #C6A75E;
--vd-pearl-100: #EDEAF4;
```

Additional support values are derived for mobile UI:

```css
--vd-pearl-50: #FAF8FC;
--vd-lavender-50: #F8F3FF;
--vd-lavender-100: #EEE4FB;
--vd-lilac-100: #E9DDF4;
```

### 2. Semantic tokens

Components must consume semantic tokens:

```css
--color-page-bg
--color-surface
--color-surface-pearl
--color-surface-lavender
--color-text-primary
--color-text-heading
--color-text-muted
--color-accent-primary
--color-accent-gold
--color-button-primary-bg
--color-tab-active-bg
--color-border-soft
```

### 3. Component tokens

If needed, define component-level aliases in a central CSS file:

```css
--home-hero-bg
--home-card-radius
--bottom-nav-bg
--premium-card-bg
```

Only add component tokens when the same component appears in multiple screens.

## Typography tokens

```css
--font-display: "Prata", Georgia, "Times New Roman", serif;
--font-ui: Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Rules:

- Prata: brand headline, section titles, large category names, premium headings.
- Arial: tabs, buttons, cards, body copy, labels, counters.
- Uppercase: only for display labels like `BODY`, `NUTRITION`, `VEDARA PREMIUM`, not for long Russian paragraphs.

## Layout tokens

- `--mobile-max-width: 480px`
- `--screen-padding: 24px`
- `--bottom-nav-height: 88px`
- `--tap-target: 48px`

## Radius tokens

- Cards: `--radius-lg` or `--radius-xl`.
- Buttons/tabs: `--radius-pill`.
- Small badges: `--radius-sm`.

## Shadow tokens

Use only:

- `--shadow-soft`
- `--shadow-card`
- `--shadow-button`

No random `box-shadow` values inside components unless promoted to a token.

## Hard rule for review

Search for raw hex values after implementation:

```bash
grep -R "#[0-9A-Fa-f]\{3,8\}" src
```

Expected result: no raw colors in components except the central token file.
