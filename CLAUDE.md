# CLAUDE.md

Guidance for working in this repo. Keep it short, accurate, and current — update it when the architecture changes.

## What this is

**Vedara Longevita** — a premium "longevity club for women" mobile app. This repo is the **MVP / demo**: a mobile-first single-page app used to show the product to the client. **There is no backend** — all content is static and all user state lives in the browser's `localStorage`. Subscriptions, payments, leads, chat and video are mocked.

- Stack: **React 19 + TypeScript 5.8 + Vite 7**. No CSS-in-JS, no UI framework, no router library.
- Mobile-first, designed for a ~480px wide viewport.
- Platform here is **Windows / PowerShell** (mind path quoting; Vite auto-picks a free port).

## Commands

```bash
npm run dev        # Vite dev server (HMR)
npm run build      # tsc -b && vite build  (this is what the deploy runs)
npm run typecheck  # tsc -b
npm run lint:colors# flags raw hex colors in src (use design tokens instead)
```

Always verify a change with `npm run typecheck` (or a quick `npx tsc --noEmit`) and, for anything structural, `npm run build` before considering it done.

## Architecture

- **Entry:** `src/main.tsx` → `src/App.tsx`. `App.tsx` is the whole shell.
- **Routing:** hash-based, no router lib. Screens are `home | practices | tracker | club | chat | profile` (`ScreenId` in `src/data/types.ts`). `App.tsx` maps the hash → the active page and renders `<BottomNav>`. It also keeps a small `navStack` for the edge-swipe-back gesture (`src/hooks/useEdgeSwipeBack.ts`).
- **Persistence:** user state (access/tariff, daily check-ins, completed practices/materials/protocol tasks, club video progress, leads, product intents) is read/written to `localStorage` in `App.tsx`. Clearing storage or switching device resets everything. This is the data a real backend would own (`/me`, `/me/progress`, …).
- **No network:** there are no `fetch`/API calls anywhere. Don't add a backend integration without being asked.

## Where things live

| Area | Path |
|---|---|
| Pages (one per screen) | `src/pages/*.tsx` |
| Reusable UI | `src/components/*.tsx`, icons in `src/components/icons/` |
| **Content / copy** | `src/data/content.ts` (primary, organised by screen with a backend-mapping header), plus `appContent.ts`, `assets.ts`, and domain files (`materials.ts`, `products.ts`, …) |
| Types | `src/data/types.ts` |
| Styles | `src/styles/` |
| Hooks | `src/hooks/` (`useEdgeSwipeBack`, `useLocalStorage`, `useAccessState`) |
| Utils | `src/utils/recovery.ts` (Recovery Score) |

**Edit copy in the data layer, not in JSX.** `src/data/content.ts` is the canonical source of strings for the live screens and is grouped by screen; its header doc-block maps each content collection to a future backend resource.

Legacy/unused (do not extend): `src/screens/` (not imported), `src/styles/components.css` and `src/styles/global.css` (not loaded — see CSS chain below).

## Styling system

- **Design tokens** in `src/styles/tokens.css` are the source of truth (palette, spacing, radii, shadows, dock, glass). Use CSS variables — never raw hex (see `lint:colors`).
- CSS load chain: `App.tsx` imports `base.css` (which `@import`s `tokens.css`) and `app.css`. Component styles live in `app.css`. Class names are stable, so token/CSS edits cascade app-wide.
- **Visual direction — "Editorial Light":** pearl/lilac/gold, premium magazine feel, crisp white content cards, large `Prata` display headings, hairline gold accents, soft low-spread shadows. Deep purple `#241336` is the action color; gold `#C6A75E` is accent-only.
- **Apple Liquid Glass on the chrome layer only:** translucent frosted material (`--glass-*` tokens, `.glass-surface`) is applied to navigation/controls/overlays (bottom dock, detail sheets, secondary/ghost buttons) — **content cards stay opaque** for readability.
- The Liquid-Glass overrides are appended at the END of `app.css` so they win over the base `.panel`/`.button` rules.

## Conventions & gotchas

- Match the surrounding code's style; keep structure/logic intact when doing visual work.
- Mobile-first: the `≤480px` media block in `app.css` can override base grid rules — check it when a layout looks off (a stat row "hole" was caused by exactly this).
- Some bundled image assets are very large (`src/assets/brand/vedara-logo-full.png` is ~18 MB) — avoid shipping new oversized assets; downscale/compress.
- The in-repo preview sandbox can't reach a host-run Vite; to eyeball changes, run Vite via the terminal and open it in the real browser.

## Deploy

The live demo auto-builds from the **`vedara-mvp`** branch (this is also the default branch). Commits land there; the host rebuilds on push. Use concise English conventional-commit messages.
