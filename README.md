# Vedara Integrated MVP

Мобильный frontend MVP приложения Vedara, объединяющий:

- главную экосистему Vedara;
- Longevita Club;
- Clinic;
- University;
- личный кабинет / app dashboard.

## Стек

- Vite
- React
- TypeScript
- CSS tokens
- localStorage для демо-состояний

## Как запустить

```bash
npm install
npm run dev
```

Проверка сборки:

```bash
npm run build
```

## Что уже есть

- бренд Vedara через SVG-логотип;
- системные токены цвета/шрифтов/радиусов;
- мобильная оболочка;
- нижняя навигация;
- Home / Club / Clinic / University / Cabinet;
- демо-доступ, подписки и заявки через localStorage;
- трекер практик;
- уроки, протоколы, сессии;
- контент из публичных страниц Vedara, упакованный в продуктовую структуру.

## Ограничения MVP

- нет backend;
- нет настоящей авторизации;
- нет настоящих оплат;
- нет медицинских назначений;
- нет реального чата/куратора;
- фото временные, заменить через `src/data/assets.ts`.

## Где менять системно

- Цвета и шрифты: `src/styles/tokens.css`
- Контент: `src/data/content.ts`
- Ассеты: `src/data/assets.ts`
- Навигация: `src/data/content.ts`
