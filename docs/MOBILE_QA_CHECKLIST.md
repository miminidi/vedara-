# Mobile QA Checklist

Target viewport:

- iPhone 390 × 844;
- iPhone 430 × 932;
- desktop browser with mobile container.

## Safari/mobile web checks

- [ ] Bottom nav safe-area padding works.
- [ ] Main content has enough bottom padding.
- [ ] Tap targets are at least 44–48 px high.
- [ ] No text is hidden under nav.
- [ ] No horizontal scroll.
- [ ] Buttons remain visible and tappable.
- [ ] Cards have correct radius and spacing.
- [ ] App feels smooth enough without heavy animations.

## Navigation checks

- [ ] Back/close behavior is understandable inside app shell.
- [ ] Active nav item is visually clear.
- [ ] Center brand pill is not confusing.
- [ ] Category card opens correct screen.
- [ ] Product detail has clear path back to purchases/home.

## Persistence checks

- [ ] Refresh keeps onboarding status.
- [ ] Refresh keeps full access state.
- [ ] Refresh keeps completed lessons/materials.
- [ ] Reset state is available for development or easy to perform from localStorage.
