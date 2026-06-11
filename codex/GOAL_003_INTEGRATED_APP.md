# GOAL 003 — Integrated Vedara App

## GOAL

Build/refine a mobile-first Vedara app that combines the ecosystem website, club, clinic, university and personal cabinet into one coherent product.

## CONTEXT

The source pages define:

- Vedara as an ecosystem;
- Longevita Club as subscription/community;
- Clinic as consultation/program layer;
- University as education layer;
- App as personal cabinet with progress, lessons, tracker, protocols and sessions.

## SCOPE

1. Keep app frontend-only.
2. Preserve tokenized Vedara brand system.
3. Use the SVG logo.
4. Create/keep screens:
   - Home
   - Club
   - Clinic
   - University
   - Cabinet
5. Centralize content/data.
6. Add localStorage demo access.
7. Add mock lead states for Clinic and University.
8. Add safety/legal boundary copy.
9. Keep mobile-first.

## OUT OF SCOPE

- real payments;
- backend/auth;
- medical prescriptions;
- AI health coach;
- real curator chat;
- video streaming;
- admin panel.

## ACCEPTANCE CRITERIA

- `npm run build` passes.
- All five core screens are reachable.
- User can activate trial/subscription mock.
- User can submit mock clinic/university interest through state change.
- Cabinet reflects access state.
- Content is centralized in data files.
- Styling uses tokens.
- The UI is Russian-language and Vedara-branded.
