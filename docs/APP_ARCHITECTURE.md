# App architecture

## Frontend

Vite + React + TypeScript.

Screens:

- `home`
- `club`
- `clinic`
- `university`
- `cabinet`

Navigation is hash-based for MVP.

## Data

Static content in:

```txt
src/data/content.ts
src/data/assets.ts
src/data/types.ts
```

## State

MVP state in localStorage:

- `vedara.access`
- `vedara.completedLessons`
- `vedara.practiceCount`

## Styling

Tokenized CSS:

```txt
src/styles/tokens.css
src/styles/base.css
src/styles/app.css
```

Components consume semantic tokens.

## Out of scope

- backend;
- auth;
- real payments;
- CRM;
- video hosting;
- medical records;
- chat;
- AI recommendations;
- medical personalization.
