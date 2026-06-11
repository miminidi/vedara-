# Routes / Screen Map

Router can be real routes or internal screen state. For MVP, either is acceptable.

Recommended routes if using React Router or Next:

```txt
/                 onboarding or home depending on state
/home             ecosystem overview
/body             training space
/nutrition        nutrition space preview
/useful           useful materials
/purchases        products catalog
/purchases/:id    product detail
/profile          profile/subscription/progress
/services         paid services mock flow
```

If using simple state instead of router:

```ts
type Screen =
  | 'onboarding'
  | 'home'
  | 'body'
  | 'nutrition'
  | 'useful'
  | 'purchases'
  | 'product-detail'
  | 'profile'
  | 'services';
```

For speed, simple state is acceptable in GOAL 001.
