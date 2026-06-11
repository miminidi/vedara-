# Paywall / Subscription Model for MVP

## Goal

Demonstrate how paid access works without implementing real billing.

## States

### Demo access

Default state:

- user can browse app;
- some materials/lessons are available;
- profile says demo access is active;
- product card shows `Демо`.

### Full access

Mock state after clicking `Купить полный доступ`:

- localStorage `fullAccess = true`;
- profile says full access active;
- locked modules become available;
- product badge changes to `Полный доступ`.

### Locked

Content locked when:

- item access is `full`;
- `fullAccess` is false.

Show:

- lock badge;
- soft blur/overlay;
- CTA to product detail or buy.

## Purchase action

No real money movement.

Button behavior:

1. User clicks `Купить полный доступ`.
2. Show short confirmation modal/screen or direct state update.
3. Save full access in localStorage.
4. Show success message: `Полный доступ открыт в демо-режиме`.

## Services

Service request is also mock:

1. User clicks `Оставить заявку`.
2. Save service id to localStorage.
3. Show success message.

No forms with sensitive health information in GOAL 001.

## Later real payment gate

Before real payments, create a separate GOAL with:

- payment provider selection;
- legal entity/payment contract;
- terms of service;
- refund policy;
- user account/auth;
- server-side webhook;
- subscription status source of truth;
- email/phone receipts;
- privacy and health data boundaries.
