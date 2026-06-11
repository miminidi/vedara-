# GOAL 001 — Reference-based mobile MVP

## GOAL

Create the first working mobile-first MVP of a wellness ecosystem app using the provided reference screenshots.

The result should look and behave like a real app prototype, not a static landing page.

## CONTEXT

The reference app contains:

- onboarding;
- ecosystem/home;
- content spaces;
- purchases/products;
- profile/subscription/progress;
- bottom navigation;
- locked states.

The user wants speed. Do not overbuild.

## SCOPE

### 1. App shell

Build a mobile app shell with:

- max-width mobile container on desktop;
- full-width mobile layout;
- persistent bottom nav;
- safe-area padding;
- smooth screen transitions optional but not required.

### 2. Onboarding

Create a first screen with:

- brand name placeholder, e.g. `wellness body` or configurable `brandName`;
- tagline about health ecosystem;
- large calm hero block;
- pillars: Тело, Здоровье, Качество жизни;
- button `Продолжить`.

Store onboarding completion in localStorage.

### 3. Home / ecosystem

Create cards for:

- Body / Пространство тренировок;
- Nutrition / Пространство нутрициологии;
- Rehabilitation / coming soon or locked.

Cards should follow the reference style: rounded, image/gradient, big English title, Russian subtitle, soft overlay.

### 4. Body screen

Create:

- header `body`;
- subtitle `Пространство тренировок`;
- tabs `Девушкам` and `Мужчинам`;
- women tab with explanation text and a small lesson/program list;
- men tab with `Раздел для мужчин скоро откроется...` text like the reference.

### 5. Nutrition preview

Create nutrition page/section with:

- short explanation;
- useful material list;
- locked advanced content if no full access.

### 6. Useful materials

Create:

- intro card `что такое wellness ecosystem?`;
- bullets: экспертные знания, поддержка и мотивация, практичные инструменты, сообщество;
- material cards with demo content;
- mark-as-read / complete action for at least one material.

### 7. Purchases / products

Create:

- filters `Все`, `Мои`, `Завершённые`;
- `Wellness Club` product card;
- price `5 900 ₽` as mock;
- badge `Демо` or `Полный доступ` depending on state;
- CTA to open product detail.

### 8. Product detail

For `Wellness Club`, show:

- hero card;
- description;
- included items;
- subscription/access state;
- CTA `Купить полный доступ` when not purchased;
- mock purchase action that saves `fullAccess = true` in localStorage;
- after purchase, show unlocked modules.

### 9. Services

Create a lightweight services block/page/card:

- consultation with nutrition specialist;
- personal training request;
- wellness plan review.

Action: mock request submission with a success message. No backend.

### 10. Profile

Create:

- avatar initial;
- user placeholder/email;
- subscription card;
- demo access/full access state;
- CTA to buy full access;
- progress cards, e.g. `0/12`, `0/6`, locked measurements;
- completed material/lesson count from localStorage.

### 11. Access guard/paywall

Implement reusable access logic:

- demo access active by default;
- full access unlocks premium content;
- locked cards show blur/lock/CTA.

## OUT OF SCOPE

- backend;
- auth;
- real payments;
- video streaming;
- medical/diagnostic logic;
- real scheduling;
- admin/expert cabinet;
- analytics;
- AI features.

## RULES

- Keep mock content enough for a real demo.
- Keep code clean and componentized.
- Avoid overengineering.
- Use Russian UI text.
- Do not copy exact reference brand/images.
- Use CSS tokens for colors/radius/shadow/spacing.

## ACCEPTANCE CRITERIA

The app is accepted when:

- it launches locally;
- it builds successfully;
- all main screens are reachable;
- bottom nav works;
- onboarding persists;
- mock purchase unlocks full access;
- profile updates access/progress;
- at least one completion action persists;
- mobile layout looks close to the screenshots;
- no medical claims are present.

## TESTS

Run build and test manually on mobile viewport:

```bash
npm run build
```

Check at 390 × 844 and 430 × 932.

## FINAL REPORT

Use this format:

```md
Input filter: STANDARD
Decision Gate: DO / CHECK

1. What was built
2. Files changed
3. How to run
4. Mobile QA
5. Known limitations
6. Next recommended goal
```
