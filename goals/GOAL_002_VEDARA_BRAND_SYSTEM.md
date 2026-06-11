# GOAL 002 — Vedara brand system and systemic UI refactor

## GOAL

Rebrand the MVP into `Vedara` and implement a tokenized interface language so future design changes are made centrally, not through scattered one-off edits.

## CONTEXT

The previous MVP was based on a nutribody-style wellness reference. Now the customer supplied a real Vedara logo, colors, and fonts.

The user request:

- main color: white/pearl;
- lavender and lilac tabs/cards/accents;
- purple active states and key CTA;
- restrained gold highlights;
- place the logo at the top of the main screen;
- photos can remain temporary for now and will be replaced later;
- create systemic design tokens and rules.

## INPUT FILES

Read:

- `AGENTS.md`
- `MEMORY.md`
- `docs/VEDARA_BRAND_BRIEF.md`
- `docs/DESIGN_TOKENS.md`
- `docs/INTERFACE_LANGUAGE.md`
- `docs/SYSTEMIC_EDITING_RULES.md`
- `docs/COMPONENT_RULES.md`
- `docs/ASSET_MANIFEST.md`
- `docs/VEDARA_HOME_SCREEN_SPEC.md`
- `docs/CODE_REVIEW_CHECKLIST.md`
- `design-tokens/vedara.css`
- `design-tokens/vedara.ts`
- `assets/brand/*`
- `assets/reference/vedara-home-generated-reference.png`
- `assets/temporary-photos/*`

## SCOPE

### 1. Add design tokens

Create/adapt:

```txt
src/styles/tokens.css
src/styles/base.css
src/styles/components.css
```

Use the provided `design-tokens/vedara.css` as the source.

If the repo has another style setup, integrate the tokens into the existing style foundation.

### 2. Add asset manifest

Create/adapt:

```txt
src/data/assets.ts
```

Include references for:

- Vedara full logo, preferably `assets/brand/vedara-logo.svg`;
- Vedara mark;
- hero photo;
- body photo;
- nutrition photo;
- wellness club photo.

All components must read image references from this asset manifest or a centralized content file.

### 3. Add content model

Create/adapt:

```txt
src/data/appContent.ts
src/data/products.ts
src/data/progress.ts
```

Move repeated UI text into data/config.

### 4. Rebrand UI

Update visible UI:

- brand name: `Vedara`;
- tagline: `экосистема для твоего здоровья`;
- home hero: `ТВОЙ ПУТЬ К ГАРМОНИИ`;
- premium product: `Vedara Premium`;
- bottom center nav: `Vedara`;
- remove old placeholder/nutribody naming unless it appears only in reference docs.

### 5. Update main/home screen

Implement the screen per `docs/VEDARA_HOME_SCREEN_SPEC.md`.

### 6. Update tabs/buttons/cards

Use one shared style for:

- pills/tabs;
- primary CTA;
- cards;
- locked badges;
- bottom nav;
- premium CTA.

### 7. Keep MVP boundaries

Keep:

- frontend-only;
- localStorage demo access;
- mock purchase;
- no backend;
- no real payments;
- no medical advice.

## OUT OF SCOPE

Do not:

- integrate payment providers;
- create backend/auth;
- create admin/coach cabinet;
- add medical diagnosis or treatment recommendations;
- add AI coach;
- rebuild the entire app if current structure works;
- create a pixel-perfect clone of the generated image.

## FILES LIKELY TO CHANGE

Likely:

```txt
src/App.tsx
src/main.tsx
src/styles/*
src/components/*
src/data/*
src/assets/*
```

If the repo already has equivalent files, adapt them instead of duplicating.

## RULES

1. No raw brand colors in components.
2. No inline styling for ordinary UI.
3. No page-specific duplicate button/card/tab styles.
4. Use Prata for display headings and Arial for UI/body.
5. Logo must be visible at the top of the main screen.
6. Temporary photos must be centralized and replaceable.
7. Russian interface only.
8. Keep the app mobile-first at 390–430 px.
9. Maintain demo/full access behavior.
10. Every large visual choice must map back to a token or reusable component.

## ACCEPTANCE CRITERIA

- App builds successfully.
- Main screen is visibly Vedara-branded.
- Logo appears at top of home.
- Pearl/white background is dominant.
- Lavender/lilac are used for soft surfaces/tabs.
- Purple is used for active states and primary CTA.
- Gold is used lightly for premium/icon/highlight details.
- Bottom nav has 5 items and center Vedara mark.
- Replacing image paths in one data file updates UI.
- Changing color tokens changes the app globally.
- Mock premium access still works.
- No medical/payment/backend expansion was added.

## TESTS

Run available checks.

At minimum:

```bash
npm run build
```

Manual:

- open mobile viewport 390 px;
- complete onboarding if present;
- check home screen;
- open BODY;
- open purchases;
- mock-buy subscription;
- check profile access state;
- verify bottom nav.

## FINAL REPORT FORMAT

1. What changed.
2. Design system files added.
3. Components/data files changed.
4. How to change colors globally.
5. How to replace photos later.
6. How to run/test.
7. Known limitations.
8. Decision Gate.
