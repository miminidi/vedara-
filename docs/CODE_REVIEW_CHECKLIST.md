# Code review checklist — Vedara system pass

Before reporting completion, Codex must check:

## Build

- `npm install` if dependencies are missing.
- `npm run build` passes.
- TypeScript errors are resolved.

## Tokenization

- Colors are centralized.
- Fonts are centralized.
- Radius and shadows are centralized.
- No raw HEX values scattered in components.

Suggested check:

```bash
grep -R "#[0-9A-Fa-f]\{3,8\}" src
```

Raw colors should appear only in token/style foundation files.

## Mobile

Inspect at:

- 390 px width;
- 430 px width.

Check:

- no horizontal scroll;
- cards do not clip text badly;
- bottom nav does not cover CTA;
- safe-area bottom padding exists.

## Product

- Logo visible at top of home.
- Main background feels pearl/white, not dark.
- Tabs/cards use lavender/lilac.
- Active accents are deep purple.
- Gold is restrained.
- Product still has demo/full access logic.
- No real payment integration.
- No medical advice logic.

## Final report

Use:

1. What changed.
2. Files changed.
3. How the design system is organized.
4. How to change colors/photos/copy later.
5. What to test.
6. Decision Gate.
