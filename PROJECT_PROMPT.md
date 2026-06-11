# PROJECT_PROMPT.md — Health Ecosystem MVP

## GOAL

Build a mobile-first web/PWA MVP of a health lifestyle ecosystem app with paid subscriptions and services, based on the provided `nutribody` reference screenshots.

The MVP should be good enough to show to a client/investor/user on a phone.

## CONTEXT

The user was offered a project to develop an app for healthy lifestyle, wellness ecosystem, paid subscriptions, and services.

The user wants a fast MVP and explicitly does not want unnecessary invention. The reference screenshots already define the visual direction and core product structure.

## SCOPE

Implement a working frontend MVP with:

- onboarding screen;
- home/ecosystem screen;
- body/training section with gender tabs;
- nutrition preview;
- useful materials page;
- purchases/products catalog;
- product detail for Wellness Club;
- profile with subscription card and progress;
- demo/full access state;
- locked content and paywall CTA;
- lightweight service request mock flow;
- localStorage-based progress and purchase state;
- responsive mobile-first layout.

## OUT OF SCOPE

Do not implement in GOAL 001:

- real backend;
- real auth;
- real payment provider;
- real subscriptions billing;
- real video player/hosting;
- chat/community;
- expert/admin cabinet;
- AI coach;
- medical diagnosis or treatment recommendations;
- food/medication/insulin calculations;
- analytics dashboard;
- push notifications;
- native iOS/Android app.

## FILES

If the repo is empty, create a clean React app structure. Recommended:

```txt
src/
  App.tsx
  main.tsx
  types.ts
  data/
    materials.ts
    products.ts
    programs.ts
    services.ts
  hooks/
    useLocalStorage.ts
    useAccessState.ts
  components/
    AppShell.tsx
    BottomNav.tsx
    BrandMark.tsx
    HeroCard.tsx
    SectionCard.tsx
    ProductCard.tsx
    ProgressCard.tsx
    PaywallCard.tsx
    MaterialCard.tsx
    ServiceCard.tsx
    SafetyNote.tsx
  screens/
    OnboardingScreen.tsx
    HomeScreen.tsx
    BodyScreen.tsx
    NutritionScreen.tsx
    UsefulScreen.tsx
    PurchasesScreen.tsx
    ProductDetailScreen.tsx
    ProfileScreen.tsx
    ServicesScreen.tsx
  styles/
    tokens.css
    global.css
```

If the repo already has structure, adapt without unnecessary rewrite.

## RULES

- Russian UI copy.
- Mobile-first.
- Soft wellness design.
- Stable navigation.
- Centralized mock data.
- No backend.
- No real payments.
- No medical claims.
- No heavy dependencies.
- Build must pass.

## ACCEPTANCE CRITERIA

The MVP is done when:

1. A user can open the app and pass onboarding.
2. A user can navigate using the bottom nav.
3. A user can open Home, Purchases, Useful, Profile, Body/Nutrition spaces.
4. The app shows a `Wellness Club` paid product with price and CTA.
5. The app has demo access active by default.
6. A mock full-access purchase unlocks locked content.
7. Profile shows subscription state and progress cards.
8. At least one lesson/material can be marked complete and progress updates.
9. Locked content has a clean paywall state.
10. The app looks good on 390–430 px width.
11. The app builds without TypeScript errors.

## TESTS

Run:

```bash
npm install
npm run build
```

If tests/lint exist, run them too.

Manual mobile checks:

- onboarding CTA;
- bottom nav safe-area;
- cards do not overflow;
- text readable in Russian;
- paywall CTA works;
- localStorage persists state after refresh.

## DECISION GATE

- DO — build frontend MVP.
- CHECK — real payments, backend, health/legal safety, real content production.
