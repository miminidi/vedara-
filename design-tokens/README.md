# Design tokens — Vedara

This folder is the single source of visual truth for the Vedara MVP.

Use:

- `vedara.css` for implementation in CSS / CSS modules;
- `vedara.tokens.json` for design review or future Figma import;
- `vedara.ts` if the app uses TypeScript-based style constants.

RULE: components must use semantic variables like `--color-page-bg`, `--color-accent-primary`, `--radius-lg`, `--font-display`.
Do not scatter raw colors, random shadows, one-off radii, or local font stacks inside components.
