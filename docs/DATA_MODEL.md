# Data Model

Keep MVP data simple and centralized.

## TypeScript types

Recommended types:

```ts
export type AccessLevel = 'demo' | 'full' | 'locked';

export type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priceRub: number;
  badge?: string;
  accessLevel: AccessLevel;
  coverTone: 'body' | 'nutrition' | 'rehab' | 'wellness';
  included: string[];
};

export type Program = {
  id: string;
  section: 'body' | 'nutrition' | 'rehabilitation';
  audience: 'women' | 'men' | 'all';
  title: string;
  description: string;
  access: 'demo' | 'full';
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  durationMin?: number;
  description: string;
  access: 'demo' | 'full';
};

export type Material = {
  id: string;
  title: string;
  category: 'nutrition' | 'body' | 'mind' | 'balance';
  description: string;
  access: 'demo' | 'full';
  readTimeMin?: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  access: 'demo' | 'full';
};

export type AccessState = {
  onboardingCompleted: boolean;
  demoAccess: boolean;
  fullAccess: boolean;
  completedLessonIds: string[];
  completedMaterialIds: string[];
  serviceRequests: string[];
};
```

## LocalStorage keys

Recommended:

```ts
const STORAGE_KEY = 'wellness-mvp-state-v1';
```

State default:

```ts
{
  onboardingCompleted: false,
  demoAccess: true,
  fullAccess: false,
  completedLessonIds: [],
  completedMaterialIds: [],
  serviceRequests: []
}
```

## Product examples

- `wellness-club` — main paid subscription.
- `body-space` — training space.
- `nutrition-space` — nutrition space.
- `rehabilitation-space` — locked/coming soon.

## Progress calculation

For MVP, calculate progress from localStorage:

- completed lessons / total visible lessons;
- completed materials / total materials;
- locked measurements card only visual.

No backend.
