# Asset manifest
## Preferred logo asset

```txt
assets/brand/vedara-logo.svg
```

This SVG is the preferred logo source for implementation.

Use the SVG first. Use PNG only as fallback when the current build pipeline cannot import SVG cleanly.

Recommended app mapping:

```ts
export const assets = {
  logoFull: "/assets/brand/vedara-logo.svg",
  logoFallbackPng: "/assets/brand/vedara-logo-full-trimmed.png",
}
```

If the app imports assets through Vite/React imports, place/copy this SVG into `src/assets/brand/vedara-logo.svg` and import it from the centralized asset manifest.


## Brand assets

```txt
assets/brand/vedara-logo-full.png
assets/brand/vedara-logo-full-trimmed.png
assets/brand/vedara-logo-mark-rough.png
```

Use:

- full/trimmed logo at the top of the home screen;
- rough mark for center bottom nav or small brand badge only if it looks acceptable.

## Reference assets

```txt
assets/reference/vedara-home-generated-reference.png
```

This is a visual target, not a UI element to paste into the app.

## Temporary photo assets

```txt
assets/temporary-photos/photo-hero-yoga.png
assets/temporary-photos/photo-body-people.png
assets/temporary-photos/photo-nutrition-bowl.png
assets/temporary-photos/photo-wellness-club.png
```

These are temporary MVP placeholders extracted from the generated reference. They may contain imperfections or partial UI traces.

RULE:

- Use them only for quick MVP presentation.
- Keep all image paths in `src/data/assets.ts`.
- Do not bake these paths into components.
- Replace later with customer-owned photos.

## Files still useful to request from customer later

- original brandbook PDF or Figma;
- SVG logo if available;
- separate brand mark without wordmark;
- final photos for Body / Nutrition / Wellness / Rehabilitation;
- final product prices and subscription terms;
- real copy for sections and legal text.
