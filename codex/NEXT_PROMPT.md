GOAL:
Refine the integrated Vedara MVP into a polished mobile app prototype.

CONTEXT:
The app already includes Home, Club, Clinic, University and Cabinet. Keep the current MVP boundaries: frontend-only, tokenized CSS, localStorage demo state, no real payments, no backend, no medical prescriptions.

TASK:
1. Inspect the app.
2. Run build.
3. Improve mobile visual polish without changing architecture.
4. Keep all content in src/data/content.ts.
5. Keep assets centralized in src/data/assets.ts.
6. Keep colors/fonts/radii in src/styles/tokens.css.
7. Improve empty/loading/access states if needed.
8. Do not add new dependencies unless clearly necessary.

ACCEPTANCE:
- build passes;
- no raw brand colors outside tokens;
- all five screens work at 390px width;
- bottom nav is safe-area friendly;
- CTA states are clear;
- medical safety boundary remains visible.
