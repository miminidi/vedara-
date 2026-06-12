# Vedara MVP Workflow

## Auto-publish rule

For safe Vedara MVP iterations, publish successful work immediately to the
`vedara-mvp` branch so Vercel can build the current preview for the customer.

Safe iterations include:

- UI changes;
- copy and content blocks;
- cards and page sections;
- bottom navigation;
- MVP pages;
- localStorage mock logic;
- visual polish;
- locked states;
- mock trial and premium states.

## Required checks

Before publishing, run:

```powershell
npm.cmd run typecheck
npm.cmd run build
```

Then verify:

- 390px and 430px have no obvious horizontal overflow;
- bottom dock still works;
- changed buttons and CTA are clickable;
- there are no dead CTA;
- no raw HEX colors were added outside `src/styles/tokens.css`;
- no inline styles were added.

If checks are green:

```powershell
git status
git add -A
git commit -m "<short meaningful commit message>"
git push origin vedara-mvp
```

When unrelated local files are already dirty, stage only the files that belong to
the completed task and report what was intentionally left out.

## Do not auto-publish without confirmation

Stop and ask before committing or pushing changes involving:

- real payments;
- authentication;
- backend;
- database migrations;
- medical recommendation logic;
- deleting large app sections;
- domain, DNS, or Vercel configuration;
- merging to `main` or `master`;
- production release outside `vedara-mvp`.

## Final report

After publishing, report:

- what changed;
- build and typecheck status;
- commit hash;
- push status;
- what the customer should review;
- Vercel URL reminder, if available.
