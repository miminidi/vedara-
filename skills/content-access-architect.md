# Skill — Content Access Architect

## Role

Design simple demo access, full access, locked content, progress, and mock service requests.

## Access levels

- `demo` — available by default.
- `full` — requires mock purchase.
- `locked` — unavailable/coming soon.

## State

Use one localStorage state object.

Never use payment state only in component local state because refresh would break the demo.

## Required functions

Recommended hook:

```ts
useAccessState()
```

It should expose:

- `state`;
- `completeOnboarding()`;
- `purchaseFullAccess()`;
- `completeLesson(id)`;
- `completeMaterial(id)`;
- `requestService(id)`;
- `resetDemoState()` optional for development.

## Paywall behavior

Locked premium content should:

- show title enough to create desire;
- show why locked;
- offer path to product detail/buy;
- not feel broken.

## Progress behavior

Progress should update when a user completes material/lesson.

Simple counts are enough.
