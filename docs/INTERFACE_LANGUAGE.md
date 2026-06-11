# Interface language — Vedara

## Tone

Russian UI. Calm, premium, supportive. No medical promises. No pressure.

Avoid:

- “вылечим”, “избавим от болезней”, “гарантированный результат”;
- aggressive fitness copy;
- mystical claims that sound like treatment;
- heavy clinic language.

Use:

- “поддержка”, “осознанный выбор”, “баланс”, “бережный подход”, “экспертное сопровождение”;
- “пространство”, “практики”, “материалы”, “программа”, “прогресс”.

## Brand terms

- App: `Vedara`
- Ecosystem: `экосистема здоровья`
- Subscription: `Vedara Premium`
- Main sections:
  - `BODY` — `Пространство тренировок`
  - `NUTRITION` — `Пространство питания`
  - `WELLNESS CLUB` — `Поддержка, мотивация и эксперты`
  - `REHABILITATION` — `Пространство восстановления` / locked or soon
- Paywall CTA:
  - `Оформить подписку`
  - `Купить полный доступ`
  - `Оставить заявку`
- Demo state:
  - `Демо-доступ активен`
  - `Доступно в Vedara Premium`

## Navigation labels

Bottom navigation:

1. `Главная`
2. `Мои покупки`
3. `Vedara`
4. `Полезное`
5. `Профиль`

## Sample home copy

Hero:

- Heading: `ТВОЙ ПУТЬ К ГАРМОНИИ`
- Body: `Комплексный подход к телу, питанию, восстановлению и внутреннему балансу.`
- Button: `Узнать больше`

Premium card:

- Heading: `VEDARA PREMIUM`
- Body: `Полный доступ ко всем пространствам и возможностям экосистемы.`
- Price: `от 5 900 ₽ / месяц`

Progress:

- `тренировок на этой неделе`
- `дней с питанием по плану`
- `медитаций в этом месяце`
- `баллов Vedara`

## Rule

Do not hardcode large copy in JSX components. Put reusable app copy into a content/config file, for example:

- `src/data/appContent.ts`
- `src/data/products.ts`
- `src/data/materials.ts`

This allows future copy changes without touching component structure.
