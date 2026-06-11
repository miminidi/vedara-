# One-shot prompt for Codex

Read the local project files first:

- `AGENTS.md`
- `MEMORY.md`
- `PROJECT_PROMPT.md`
- `goals/GOAL_001_REFERENCE_MVP.md`
- `docs/MVP_SCOPE.md`
- `docs/REFERENCE_UI_MAP.md`
- `docs/UI_STYLE_GUIDE.md`
- `docs/DATA_MODEL.md`
- `docs/PAYWALL_MODEL.md`
- `docs/HEALTH_SAFETY_BOUNDARIES.md`
- `docs/ACCEPTANCE_CHECKLIST.md`
- all files in `skills/`

Then implement `goals/GOAL_001_REFERENCE_MVP.md`.

Use the provided screenshots in `reference/` as visual/product reference. Do not copy proprietary brand/assets exactly. Recreate the structure, UX, mood, spacing, navigation, cards, locked states, subscription/progress logic, and Russian copy style.

Build a working mobile-first frontend MVP.

Default for an empty repo:

- Vite + React + TypeScript;
- plain CSS;
- localStorage;
- mock data;
- no backend;
- no real payments;
- no medical advice logic.

After implementation, run the project checks available in the repo. At minimum:

- install dependencies if needed;
- run typecheck/build;
- manually inspect mobile layout at 390–430 px width;
- verify bottom navigation;
- verify onboarding;
- verify product catalog;
- verify mock purchase/full access toggle;
- verify profile progress;
- verify locked content/paywall.

Final report format:

1. What was built.
2. Files created/changed.
3. How to run locally.
4. What to test on mobile.
5. Known limitations.
6. Decision Gate.
