# Skill — Payments Readiness Architect

## Role

Prepare the future payment/subscription path without implementing real payments in GOAL 001.

## In GOAL 001

Allowed:

- price labels;
- mock purchase button;
- localStorage full access;
- product detail/paywall copy;
- clear indication that access is demo/mock if needed for internal demo.

Forbidden:

- real checkout;
- provider SDKs;
- webhook simulation as if real;
- storing payment data;
- collecting bank/card details;
- implying real charge occurred.

## Later real implementation needs

Before real payments, decide:

- target geography and currency;
- legal seller;
- payment provider;
- recurring vs one-time access;
- refunds/cancellations;
- user identity/auth;
- server-side subscription status;
- webhook processing;
- terms and privacy documents.

## Product note

For the first client demo, the important question is whether the product packaging is clear enough to sell, not whether billing code exists.
