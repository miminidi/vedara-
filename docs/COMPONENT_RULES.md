# Component rules

## AppShell

Owns:

- mobile container;
- safe-area padding;
- background;
- bottom nav;
- current route/screen.

Does not own:

- product data;
- paywall content;
- raw styles.

## BrandHeader

Uses logo asset:

- `assets/brand/vedara-logo-full-trimmed.png` for the home header;
- optional `assets/brand/vedara-logo-mark-rough.png` for center nav mark.

Rules:

- logo must be visible at the top of the main screen;
- do not stretch the logo;
- use `object-fit: contain`;
- keep enough breathing room around it.

## HeroCard

Reusable large marketing card.

Props:

- title;
- text;
- image;
- cta;
- badge;
- onClick.

## SpaceCard

Reusable card for BODY/NUTRITION/WELLNESS/REHABILITATION.

Props:

- title;
- subtitle;
- image;
- icon;
- locked;
- comingSoon;
- onClick.

## Tabs

One component for all tabs:

- product filters;
- gender tabs;
- future category filters.

Active state uses purple.
Inactive state uses white/lavender.

## PaywallCard

Single component for demo/full access state.

Must show:

- current access state;
- CTA;
- what unlocks;
- no real payment promise in MVP.

## BottomNav

Fixed bottom nav.

Rules:

- 5 items;
- center Vedara mark elevated;
- active state deep purple;
- labels in Russian;
- respect safe-area bottom padding.
