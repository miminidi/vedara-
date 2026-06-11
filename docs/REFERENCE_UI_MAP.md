# Reference UI Map

Use the screenshots in `reference/` for visual direction.

Do not copy exact brand, proprietary images, or exact protected content unless ownership is confirmed. Copy the structure and mood.

## Screen patterns

### Onboarding

Observed:

- large brand title;
- short subtitle;
- background image/hero;
- wellness pillars;
- bottom CTA.

MVP implementation:

- `OnboardingScreen`;
- `Продолжить` button;
- localStorage `onboardingCompleted`.

### Home / ecosystem

Observed:

- big visual sections;
- `BODY`, `NUTRITION`, `REHABILITATION` cards;
- locked blur state.

MVP implementation:

- `HomeScreen`;
- `SectionCard` component;
- locked card with lock badge.

### Body

Observed:

- header `body`;
- subtitle;
- gender tabs;
- explanatory card;
- men section coming soon.

MVP implementation:

- `BodyScreen`;
- tab state;
- women content + program items;
- men coming soon message.

### Useful

Observed:

- intro explanatory card;
- bullets with icons;
- useful material cards.

MVP implementation:

- `UsefulScreen`;
- `MaterialCard`;
- mark complete/read action.

### Purchases

Observed:

- filters;
- product card;
- `Wellness Club`;
- price;
- demo badge;
- CTA.

MVP implementation:

- `PurchasesScreen`;
- `ProductCard`;
- `ProductDetailScreen`.

### Profile

Observed:

- avatar;
- email;
- subscription card;
- CTA full access;
- progress cards;
- locked measurements.

MVP implementation:

- `ProfileScreen`;
- `ProgressCard`;
- `PaywallCard`;
- localStorage progress.

### Bottom nav

Observed:

- five nav positions;
- center brand pill;
- icons;
- text labels.

MVP implementation:

- `BottomNav`;
- route/screen state or router;
- safe-area bottom spacing.
