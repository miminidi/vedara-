# MEMORY.md — Health Ecosystem MVP

## Project status

Date: 2026-06-11.

The user received an offer to develop a health lifestyle / wellness ecosystem app with paid subscriptions and services. The user provided screenshots of `app.nutribody.pro` as a visual/product reference and explicitly said:

- do not invent too much;
- make an MVP;
- this can be done almost with one prompt;
- create a Codex package: agents, skills, memory.

## Product essence

Build a mobile-first Russian-language wellness app where a user can:

- pass onboarding;
- see ecosystem sections;
- open training/body space;
- see nutrition/wellness materials;
- view paid products/subscriptions;
- open `Wellness Club` product;
- see demo access/full access state;
- track simple progress;
- see locked areas and CTA to buy full access;
- leave a request for a paid service/consultation in a mock flow.

## Reference screens observed

The screenshots show:

1. Onboarding / hero:
   - brand title `nutribody`;
   - subtitle about ecosystem for health;
   - large background image;
   - three/five wellness pillars;
   - large sage button `Продолжить`.

2. Home / ecosystem:
   - large hero card;
   - category cards: BODY, NUTRITION, REHABILITATION;
   - locked category state with blur/lock.

3. Body section:
   - header `body`, subtitle `Пространство тренировок`;
   - gender tabs `Девушкам` / `Мужчинам`;
   - for men: coming soon text;
   - for women: explanatory body/training text.

4. Useful section:
   - card `что такое nutribody?`;
   - bullets: expert knowledge, support/motivation, practical tools, community;
   - list of useful materials.

5. Purchases:
   - tabs `Все`, `Мои`, `Завершённые`;
   - product card image;
   - badge `Демо`;
   - product `Wellness Club`;
   - price about `5 900 ₽`;
   - CTA/button.

6. Profile:
   - user avatar with initial;
   - email;
   - subscription card;
   - demo access active;
   - CTA `Купить полный доступ`;
   - progress cards like `0/243`, `0/45`, locked measurements.

7. Bottom navigation:
   - `Главная`, `Мои покупки`, center brand pill, `Полезное`, `Профиль`.

## Visual memory

The app should feel:

- calm;
- premium but simple;
- airy;
- feminine/wellness-oriented, but not excluding men;
- beige/ivory background;
- sage green accents;
- large rounded cards;
- soft shadows;
- big typography;
- lots of vertical spacing;
- mobile Safari friendly.

## MVP boundaries

GOAL 001 includes frontend-only MVP.

GOAL 001 excludes:

- real backend;
- real auth;
- real payments;
- real subscription provider;
- video hosting;
- chat;
- expert dashboard;
- medical calculations;
- personal treatment recommendations;
- AI coach;
- analytics;
- admin panel.

## Mock business logic

Use localStorage to simulate:

- onboarding completed;
- demo access active by default;
- full access purchased after pressing mock buy button;
- completed lessons/materials;
- locked/unlocked content.

## Suggested content entities

- Product: Wellness Club.
- Product: Body — пространство тренировок.
- Product: Nutrition — пространство нутрициологии.
- Product: Rehabilitation — locked / coming later.
- Service: консультация нутрициолога.
- Service: индивидуальная онлайн-тренировка.
- Service: разбор привычек / wellness plan.

These are MVP placeholders, not final business commitments.

## Important risk

This is health/wellness. The MVP must not become a medical app. Keep all guidance general and educational.
---

# Vedara brand update — 2026-06-11

The customer supplied Vedara brand materials:

- logo file added to `assets/brand/`;
- colors:
  - purple `#241336`;
  - graphite `#2B2B2F`;
  - gold `#C6A75E`;
  - pearl `#EDEAF4`;
- fonts:
  - Prata for display/headings;
  - Arial for interface/body.

User request:

- make pearl/white the main visual base;
- use lavender and lilac for tabs/cards/accents;
- use purple for active states and primary CTA;
- use a little gold for highlights;
- place the logo at the top of the main screen;
- keep photos temporary for now;
- make edits systemic through tokens/rules, not one-off page patches.

Current Decision Gate: DO / ДЕЛАТЬ for a frontend MVP brand-system pass.
Payments/backend/medical personalization remain CHECK / ПРОВЕРИТЬ later.


---

# Vedara SVG logo update

User supplied the SVG logo file. It is added as:

```txt
assets/brand/vedara-logo.svg
```

Use SVG as the preferred logo in the app. PNG files remain fallback/preview assets.

---

# Vedara auto-publish workflow

Current workflow rule:

- For safe MVP UI/product iterations, Codex should commit and push successful
  changes to `origin/vedara-mvp` after verification.
- Verification before publish:
  - `npm.cmd run typecheck`;
  - `npm.cmd run build`;
  - mobile QA at 390px and 430px for obvious overflow;
  - bottom dock and changed CTA/buttons checked;
  - no raw HEX outside `src/styles/tokens.css`;
  - no inline styles.
- Final report should include changed scope, build/typecheck status, commit hash,
  push status, and what the customer should review in Vercel.

Auto-publish is allowed for UI, copy, cards, navigation, MVP pages, content
blocks, visual polish, localStorage mock logic, locked states, and mock
trial/premium states.

Auto-publish is forbidden without confirmation for real payments, auth, backend,
database migrations, medical recommendation logic, deleting large app sections,
domain/DNS/Vercel config, merging to main/master, or production release outside
`vedara-mvp`.
