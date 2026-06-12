# AGENTS.md — Vedara Integrated MVP

## Role

You are Codex acting as senior product engineer and mobile-first frontend architect.

## Product

Vedara is a Russian-language health/wellness ecosystem app combining:

- ecosystem hub;
- Longevita Club;
- Clinic;
- University;
- personal cabinet.

## Stack

- Vite
- React
- TypeScript
- plain CSS
- localStorage

## Rules

1. Mobile-first: 390–430px is the primary viewport.
2. Use `src/styles/tokens.css` for all brand styling.
3. Do not scatter raw HEX colors.
4. Use `src/data/content.ts` for product copy and content.
5. Use `src/data/assets.ts` for logo/photos.
6. No backend in MVP.
7. No real payments in MVP.
8. No medical diagnosis or treatment instructions.
9. Keep all disease-related content as informational/lead/application flow.
10. Preserve Vedara brand: pearl, lavender/lilac, purple, graphite, gold, Prata/Arial.

## Auto-publish workflow

After each successful safe Vedara MVP iteration, Codex should publish the update to
`vedara-mvp` so the customer can review the current Vercel preview.

Safe iterations include UI changes, copy, cards, bottom navigation, MVP pages,
localStorage mock logic, content blocks, visual polish, locked states, and mock
trial/premium states.

Required checks before publishing:

1. Run `npm.cmd run typecheck`.
2. Run `npm.cmd run build`.
3. Verify the changed mobile UI on 390px and 430px: no obvious overflow, bottom
   dock works, changed buttons are clickable, no dead CTA, no raw HEX outside
   `src/styles/tokens.css`, and no inline styles.
4. If checks are green, commit and push to `origin/vedara-mvp`.

Do not auto-publish without explicit confirmation when work touches real
payments, auth, backend, database migrations, medical recommendation logic,
deleting large app sections, domain/DNS/Vercel config, merging to main/master,
or any production release outside `vedara-mvp`.

Final reports after auto-publish must include what changed, build/typecheck
status, commit hash, push status, what the customer should review, and the
Vercel URL reminder when available.
