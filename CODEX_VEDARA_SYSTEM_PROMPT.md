# Codex prompt — Vedara systemic design pass

GOAL:
Rebrand the current health/wellness MVP into `Vedara` and implement a centralized design system with tokens, reusable components, centralized content, and replaceable assets.

CONTEXT:
The project is a mobile-first Russian wellness ecosystem MVP based on reference screenshots. Now we have the customer's real brand:

- Logo: use files in `assets/brand/`. Prefer `assets/brand/vedara-logo.svg`; PNG is fallback.
- Colors:
  - purple `#241336`;
  - graphite `#2B2B2F`;
  - gold `#C6A75E`;
  - pearl `#EDEAF4`.
- Fonts:
  - Prata for display/headings, mostly uppercase;
  - Arial for interface/body.
- Visual direction:
  - main background: white/pearl;
  - lavender/lilac tabs, cards and accents;
  - purple active states and primary actions;
  - restrained gold highlights;
  - place Vedara logo at the top of the home screen.
- Photos are temporary; use provided temporary assets now and keep them easy to replace.

READ FIRST:
- `AGENTS.md`
- `MEMORY.md`
- `goals/GOAL_002_VEDARA_BRAND_SYSTEM.md`
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

SCOPE:
1. Add/import design tokens into the app.
2. Refactor styles to use semantic CSS variables.
3. Add centralized content/data files.
4. Add centralized asset manifest.
5. Rebuild the main screen in the Vedara visual language.
6. Update tabs/buttons/cards/bottom nav systematically.
7. Preserve frontend-only MVP, localStorage demo access, and mock subscription.

OUT OF SCOPE:
- real payments;
- backend;
- auth;
- admin cabinet;
- AI coach;
- medical diagnosis/treatment logic;
- full production architecture;
- exact pixel-copy of the generated mockup.

FILES:
Likely create/adapt:
- `src/styles/tokens.css`
- `src/styles/base.css`
- `src/styles/components.css`
- `src/data/assets.ts`
- `src/data/appContent.ts`
- `src/data/products.ts`
- `src/data/progress.ts`
- `src/components/BrandHeader.tsx`
- `src/components/HeroCard.tsx`
- `src/components/SpaceCard.tsx`
- `src/components/PremiumCta.tsx`
- `src/components/BottomNav.tsx`
- existing screen files.

RULES:
- No raw HEX colors in components.
- No scattered inline styles.
- No duplicate one-off tabs/buttons/cards.
- Russian UI only.
- Use Prata/Arial via CSS font tokens.
- Use the Vedara SVG logo at top of home.
- Keep images replaceable through one manifest file.
- Keep mobile-first layout for 390–430 px.
- Do not break existing routes/flows if present.

ACCEPTANCE CRITERIA:
- Build passes.
- Home screen looks like a premium Vedara app, not a generic recolor.
- Logo is visible at the top.
- Pearl/lavender/lilac/purple/gold system is applied.
- All main styles are tokenized.
- Cards/tabs/buttons/nav use reusable styles/components.
- Photo replacement requires changing only `src/data/assets.ts` or equivalent.
- Mock premium access still works.
- No backend/payment/medical scope creep.

TESTS:
Run:
- `npm run build`

Then manually check:
- mobile viewport 390 px and 430 px;
- onboarding/home;
- body section tabs;
- purchases/product detail;
- mock premium CTA;
- profile access/progress;
- bottom nav safe-area.

FINAL REPORT:
1. What changed.
2. Files changed.
3. How tokens are organized.
4. How to change colors globally.
5. How to replace photos.
6. How to test.
7. Known limitations.
8. Decision Gate.
