# Systemic editing rules

## Goal

Future design changes must be system-level, not page-by-page patches.

## Rules for Codex

1. First create/import token files.
2. Then refactor components to use tokens.
3. Then create reusable components.
4. Then bind screens to content/data arrays.
5. Only then tune individual screen layout.

## Forbidden

Do not:

- set raw colors directly in React components;
- use inline styles for normal UI;
- create one-off card styles for every screen;
- duplicate tabs/buttons/nav styles;
- hardcode repeated copy inside components;
- put business access logic inside visual components;
- mix mock data with layout markup.

## Required central files

If the repo is React/Vite, create or adapt:

```txt
src/styles/tokens.css
src/styles/base.css
src/styles/components.css
src/data/appContent.ts
src/data/products.ts
src/data/progress.ts
src/data/assets.ts
src/components/AppShell.tsx
src/components/BrandHeader.tsx
src/components/HeroCard.tsx
src/components/SpaceCard.tsx
src/components/PremiumCta.tsx
src/components/ProgressCard.tsx
src/components/BottomNav.tsx
src/components/PaywallCard.tsx
```

If the repo has another structure, preserve it but keep the same principles.

## Data-driven screens

Cards must come from arrays:

```ts
const spaces = [
  { id: "body", title: "BODY", subtitle: "Пространство тренировок", imageKey: "bodyPeople" },
  { id: "nutrition", title: "NUTRITION", subtitle: "Пространство питания", imageKey: "nutritionBowl" },
  { id: "wellness", title: "WELLNESS CLUB", subtitle: "Поддержка, мотивация и эксперты", imageKey: "wellnessClub" },
]
```

Progress cards must come from arrays.

Products must come from arrays.

Useful materials must come from arrays.

## Access logic

Use one central access helper:

```ts
type AccessState = "demo" | "premium";

function hasPremiumAccess(state: AccessState) {
  return state === "premium";
}
```

For MVP, store access in localStorage. No backend and no real payments in this step.

## Visual review

A good implementation passes these checks:

- Changing `--vd-purple-950` updates all purple accents.
- Changing `--radius-lg` updates major cards.
- Changing nav labels in content file updates bottom navigation.
- Replacing image paths in `assets.ts` updates cards without component edits.
- A new space card can be added by adding one object to `spaces`.
