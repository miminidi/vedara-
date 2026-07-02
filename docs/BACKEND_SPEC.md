# Техническое задание: Backend Vedara Longevita

Версия 1.0 · июнь 2026 · статус: на согласование
Контекст и роадмап: [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) (этапы 2–4).

---

## 1. Цель и рамки

### 1.1. Цель

Перевести Vedara Longevita из локального демо (весь user-state в `localStorage`, контент захардкожен в `src/data/content.ts`) в клиент-серверный продукт:

1. Аккаунты пользователей и синхронизация состояния между устройствами.
2. Статус подписки как **server-side source of truth** + реальные рекуррентные платежи.
3. Управление контентом без релиза фронтенда (CMS).
4. Приём и обработка заявок (Clinic, University, диагностика, индивидуальный протокол).

### 1.2. Вне рамок (не делать в этой итерации)

- Чат/сообщество в реальном времени (экран «Чат» остаётся заглушкой/ссылкой на Telegram).
- Видео-стриминг собственной разработки (видео — embed-ссылки из CMS).
- Нативные приложения, push-уведомления, интеграции с носимыми устройствами.
- Медицинские данные сверх ежедневного чек-ина (анализы, назначения).

### 1.3. Исходные данные (что уже определяет фронтенд)

Frontend-контракт зафиксирован в коде и **является первичным**:

- Типы: `src/data/types.ts` (`AccessState`, `DailyCheckIn`, `Lead`, `LeadType`, `Protocol`, `Material`, `ClubVideo`, `ClubArticle`, `Habit`, `VedaraProduct`, …).
- Состояние пользователя: 9 ключей `localStorage` в `src/App.tsx` (`vedara.access`, `vedara.checkIns`, `vedara.completedHabits`, `vedara.completedMaterials`, `vedara.completedProtocolTasks`, `vedara.completedClubVideos`, `vedara.completedClubArticles`, `vedara.leads`, `vedara.productIntents`).
- Контент: коллекции `src/data/content.ts`; в шапке файла — маппинг коллекций на ресурсы API.
- Recovery Score считается на клиенте (`src/utils/recovery.ts`) из чек-ина; серверу достаточно хранить сырые метрики.

---

## 2. Рекомендуемый стек

| Слой | Выбор | Обоснование |
|---|---|---|
| Runtime / язык | **Node.js 22 LTS + TypeScript** | Один язык с фронтом, переиспользование типов из `src/data/types.ts` через общий пакет |
| Framework | **NestJS** (или Fastify + zod при желании минимализма) | Структура, DI, OpenAPI из коробки |
| БД | **PostgreSQL 16** | Реляционная модель прогресса/подписок, JSONB для гибких полей |
| ORM | **Prisma** | Типобезопасность, миграции |
| CMS | **Directus** (self-hosted, поверх той же PostgreSQL) или Strapi | Контент-коллекции без собственной админки; роли для контент-менеджера |
| Аутентификация | OTP (SMS/email) + **JWT (access 15 мин / refresh 30 дней)** | Пароли не нужны аудитории; refresh-ротация |
| Платежи | **ЮKassa** (осн.) / CloudPayments (альт.) | Рекуррентные списания, 54-ФЗ чеки, рынок РФ |
| Инфраструктура | Docker Compose → VPS/managed K8s в РФ-зоне (Yandex Cloud / VK Cloud) | 152-ФЗ: хранение ПДн в РФ |
| Наблюдаемость | Sentry + структурные логи (pino) + healthcheck `/healthz` | Минимум для продакшена |

Монорепо: `apps/web` (текущий фронт), `apps/api`, `packages/shared` (типы и константы).

---

## 3. Модель данных

### 3.1. Диаграмма (основные сущности)

```
User 1─1 Subscription
User 1─* DailyCheckIn
User 1─* HabitCompletion
User 1─* ProgressItem        (полиморфный прогресс: material | protocolTask | clubVideo | clubArticle)
User 1─* Lead
User 1─* ProductIntent
Content (в CMS): Pillar 1─* Material; Protocol 1─* ProtocolDay 1─* ProtocolTask;
                 ClubVideo; ClubArticle; Habit; CheckMetric; Product; TeamMember; CopyBundle
```

### 3.2. Таблицы (PostgreSQL)

**users**

| поле | тип | примечание |
|---|---|---|
| id | uuid PK | |
| phone | text unique nullable | E.164; хотя бы одно из phone/email обязательно |
| email | citext unique nullable | |
| name | text | |
| focus | text nullable | цель из профиля |
| age, height_cm, weight_kg | int nullable | опциональные поля профиля |
| goals | text[] | |
| created_at, updated_at | timestamptz | |
| deleted_at | timestamptz nullable | soft-delete для 152-ФЗ «право на удаление» |

**subscriptions** — источник правды по доступу

| поле | тип | примечание |
|---|---|---|
| id | uuid PK | |
| user_id | uuid FK unique | одна активная запись на пользователя |
| state | enum: `guest, trial, clubMonthly, clubAnnual, clinicLead, universityLead` | ровно `AccessState` фронта |
| trial_ends_at | timestamptz nullable | |
| current_period_end | timestamptz nullable | конец оплаченного периода |
| provider | enum: `yookassa, cloudpayments, manual` nullable | `manual` — выдано администратором |
| provider_subscription_id | text nullable | |
| status | enum: `active, past_due, canceled, expired` | платёжный статус, отличен от `state` |
| created_at, updated_at | timestamptz | |

**payments** — журнал операций (append-only): id, user_id, subscription_id, provider, provider_payment_id, amount_rub numeric, status (`pending/succeeded/refunded/failed`), raw_payload jsonb, created_at.

**daily_check_ins**

| поле | тип | примечание |
|---|---|---|
| id | uuid PK | |
| user_id | uuid FK | |
| date | date | уникальность (user_id, date) |
| energy, mood, sleep, stress | smallint nullable, CHECK 1..10 | как `DailyCheckIn` |
| note | text nullable | |
| saved_at | timestamptz | последнее изменение |

**habit_completions**: id, user_id, date (date), habit_id (text — id из CMS), created_at; unique (user_id, date, habit_id). Соответствует ключам `"YYYY-MM-DD:habitId"` фронта.

**progress_items** — единая таблица «выполнено»: id, user_id, kind enum (`material, protocolTask, clubVideo, clubArticle`), item_id text (id контента из CMS), completed_at; unique (user_id, kind, item_id). Снятие отметки = удаление строки (фронт делает toggle).

**leads**

| поле | тип | примечание |
|---|---|---|
| id | uuid PK | |
| user_id | uuid FK | |
| type | enum: `clinic, university, diagnostics, individualProtocol` | = `LeadType` |
| title | text | серверный снапшот из справочника |
| status | enum: `new, contacted, scheduled, done, rejected` | фронт показывает локализованную метку |
| comment | text nullable | заполняет менеджер |
| created_at, updated_at | timestamptz | |

**product_intents**: id, user_id, intent_id text, created_at; unique (user_id, intent_id).

**otp_codes**, **refresh_tokens** — служебные (код+соль, TTL, попытки; ротация refresh с revoke-цепочкой).

### 3.3. Контент в CMS (Directus-коллекции)

Один-в-один по маппингу из шапки `content.ts`:

| Коллекция CMS | Экран | Тип фронта |
|---|---|---|
| pillars, materials, protocols (+days, +tasks) | Уроки | `MethodPillar`, `Material`, `Protocol` |
| club_videos, club_articles | Клуб | `ClubVideo`, `ClubArticle` |
| habits, daily_rituals, check_metrics | Трекер | `Habit`, `DayPlanItem`, `CheckMetric` |
| products | Профиль | `VedaraProduct` |
| team_members | Главная | `TeamMember` |
| copy_bundles (key → jsonb) | все | `*Content/*Labels/*Copy` объекты, i18n-ready |

Требования: стабильные строковые `id` (сохранить текущие id из `content.ts` при первичном импорте), поле `access` у контента (`free/premium/university/club`), статус публикации (draft/published), медиа-хранилище для картинок (S3-совместимое, CDN).

---

## 4. API

REST + JSON, версия в пути: `/api/v1`. OpenAPI-спека генерируется из кода и является артефактом поставки. Все `/me/*` — только с JWT.

### 4.1. Аутентификация

| Метод | Путь | Описание |
|---|---|---|
| POST | `/auth/otp/request` | `{ channel: "sms"\|"email", destination }` → отправка кода. Rate limit 3/мин, 10/час на destination |
| POST | `/auth/otp/verify` | `{ destination, code }` → `{ accessToken, refreshToken, isNewUser }`; создаёт пользователя при первом входе |
| POST | `/auth/refresh` | ротация пары токенов |
| POST | `/auth/logout` | revoke refresh |

### 4.2. Профиль и состояние (`/me`)

| Метод | Путь | Описание |
|---|---|---|
| GET | `/me` | профиль + `subscription` (state, trial_ends_at, current_period_end) |
| PATCH | `/me` | имя, focus, age/height/weight, goals |
| DELETE | `/me` | запрос на удаление аккаунта (152-ФЗ), soft-delete + отложенная очистка 30 дней |
| GET | `/me/check-ins?from&to` | чек-ины за период |
| PUT | `/me/check-ins/{date}` | upsert чек-ина; тело = частичный патч метрик/заметки (семантика `buildCheckIn` фронта: clamp 1..10) |
| GET | `/me/progress` | агрегат: `{ habits: [{date, habitId}], materials: [], protocolTasks: [], clubVideos: [], clubArticles: [] }` — один запрос на старте приложения |
| PUT | `/me/progress/habits/{date}/{habitId}` / DELETE | toggle привычки за дату |
| PUT | `/me/progress/{kind}/{itemId}` / DELETE | toggle прогресса (`kind` ∈ material/protocolTask/clubVideo/clubArticle) |
| GET | `/me/leads` | заявки пользователя со статусами |
| POST | `/me/leads` | `{ type }`; идемпотентно — повторная заявка того же типа возвращает существующую (как текущая логика `createLead`); для `clinic/university` переводит `subscription.state` в `clinicLead/universityLead`, если нет платной подписки |
| PUT | `/me/product-intents/{intentId}` | сохранить интерес к продукту (идемпотентно) |
| POST | `/me/import` | **одноразовая миграция localStorage**: тело = дамп 9 ключей `vedara.*`; сервер валидирует и мёржит (upsert, конфликты — «сервер выигрывает»); повторный вызов — no-op |

### 4.3. Контент (`/content`, публичный, кэшируемый)

| Метод | Путь | Отдаёт |
|---|---|---|
| GET | `/content/lessons` | pillars + materials + protocols (published) |
| GET | `/content/club` | club_videos + club_articles |
| GET | `/content/tracker` | habits + daily_rituals + check_metrics |
| GET | `/content/products` | products |
| GET | `/content/team` | team_members |
| GET | `/content/copy?locale=ru` | copy_bundles |

Ответы — формы, совпадающие с текущими типами `types.ts` (адаптация делается на сервере, не на клиенте). `Cache-Control: public, max-age=300` + ETag. Premium-контент: списки отдаются всем (карточки с замками — UX фронта), но тела уроков/URL видео — только по подписке (403 `PAYWALL` без активного доступа).

### 4.4. Платежи

| Метод | Путь | Описание |
|---|---|---|
| POST | `/me/subscription/trial` | активировать trial 7 дней (один раз на пользователя) |
| POST | `/me/subscription/checkout` | `{ plan: "clubMonthly"\|"clubAnnual" }` → `{ confirmationUrl }` провайдера |
| POST | `/me/subscription/cancel` | отмена автопродления (доступ до конца периода) |
| POST | `/webhooks/yookassa` | приём событий провайдера: проверка подписи, идемпотентность по event id, обновление `subscriptions`/`payments` |

Правила доступа: `payment.succeeded` → state `clubMonthly/clubAnnual`, продление `current_period_end`; неуспешное продление → `past_due` (grace 72 ч) → `expired` + state `guest`. Цены — в CMS/конфиге (сейчас 5 555 ₽/мес), не в коде.

### 4.5. Админ/CRM (минимум, роль `manager`)

- `GET /admin/leads?status&type` + `PATCH /admin/leads/{id}` (status, comment) — либо реализуется представлением в Directus (предпочтительно), либо отдельными эндпоинтами.
- Уведомление о новой заявке в Telegram-бот менеджера (webhook, ≤60 сек от создания).
- `PATCH /admin/users/{id}/subscription` — ручная выдача/отзыв доступа (provider `manual`), с аудит-логом.

### 4.6. Формат ошибок

```json
{ "error": { "code": "PAYWALL", "message": "Требуется подписка", "details": {} } }
```

Коды: `UNAUTHORIZED`, `FORBIDDEN`, `PAYWALL`, `NOT_FOUND`, `VALIDATION`, `RATE_LIMITED`, `CONFLICT`, `INTERNAL`. HTTP-статусы соответствуют.

---

## 5. Интеграция с фронтендом

1. Создать `src/api/` (клиент + типы из `packages/shared`); все обращения — через него, `fetch` в компонентах запрещён.
2. Режимы через env: `VITE_API_URL` пуст → текущее поведение на `localStorage` (демо-режим сохраняется навсегда как fallback и для презентаций).
3. Загрузка при старте: параллельно `GET /me`, `GET /me/progress`, `GET /content/*` (контент — со stale-while-revalidate кэшем в памяти/IndexedDB).
4. Записи — оптимистичные: UI меняется сразу, запрос уходит в фоновую очередь с ретраями; при офлайне очередь сохраняется и доигрывается (порядок FIFO, last-write-wins).
5. Первый вход с существующим `localStorage` → `POST /me/import`, после успеха локальные ключи помечаются мигрированными (не удаляются до подтверждения).

---

## 6. Нефункциональные требования

| Область | Требование |
|---|---|
| Производительность | p95 < 300 мс для `/me/*`; `/content/*` из кэша/CDN < 100 мс; старт приложения ≤ 3 запросов |
| Доступность | 99.5% в месяц; деплой без даунтайма (rolling) |
| Масштаб | расчётная нагрузка 10k MAU / 1k DAU; запас 10× без изменения архитектуры |
| Безопасность | TLS everywhere; JWT RS256; rate limiting (глобальный + на OTP); OWASP ASVS L1; секреты — в vault/env, не в репо |
| Персональные данные (152-ФЗ) | хранение в РФ; чек-ины (самочувствие) — чувствительные: шифрование бэкапов, доступ по ролям, аудит-лог админ-действий; экспорт и удаление аккаунта по запросу |
| Платежи | 54-ФЗ чеки через провайдера; вебхуки идемпотентны; сверка платежей раз в сутки |
| Резервное копирование | PITR PostgreSQL, ежедневные бэкапы, retention 30 дней, восстановление ≤ 4 ч |
| Наблюдаемость | Sentry (API+web), структурные логи с request-id, метрики (RPS, латентность, ошибки, платежи), алерты в Telegram |
| Документация | OpenAPI, README по локальному запуску (`docker compose up`), runbook инцидентов |
| Тесты | unit на домен (доступ/пейволл/Recovery-инварианты), интеграционные на API (testcontainers), контрактный тест «ответы = типам фронта»; покрытие домена ≥ 80% |

---

## 7. Этапы и приёмка

### Этап A — Фундамент (2 недели)

Монорепо, CI, Docker Compose (api+db+cms), auth (OTP+JWT), `GET/PATCH /me`, миграции, Sentry.
**Приёмка:** пользователь входит по коду из SMS/email на двух устройствах и видит один профиль.

### Этап B — Состояние пользователя (2 недели)

Чек-ины, привычки, прогресс, заявки, интересы; `POST /me/import`; интеграция фронта (API-слой, оптимистичные записи, офлайн-очередь).
**Приёмка:** чек-ин на устройстве A виден на устройстве B ≤ 5 сек; полный дамп `localStorage` демо импортируется без потерь; при офлайне отметки не теряются.

### Этап C — Контент из CMS (1,5 недели)

Directus-коллекции, импорт данных из `content.ts` с сохранением id, `GET /content/*`, переключение фронта на API-контент.
**Приёмка:** контент-менеджер меняет название урока в CMS → в приложении обновляется без релиза ≤ 5 мин; типы ответов проходят контрактный тест.

### Этап D — Платежи и пейволл (2,5 недели)

ЮKassa checkout, вебхуки, trial, продление/отмена/отзыв, серверный пейволл на телах premium-контента, e-mail чеки.
**Приёмка:** тестовая карта проходит полный цикл «trial → подписка → продление (эмуляция) → отмена → истечение доступа»; двойная доставка вебхука не задваивает платёж.

### Этап E — Заявки/админка и запуск (1 неделя)

Роль manager, статусы заявок, Telegram-уведомления, аудит; прод-окружение, бэкапы, алерты, нагрузочный прогон.
**Приёмка:** заявка из приложения попадает менеджеру ≤ 60 сек; смена статуса видна пользователю; чек-лист запуска закрыт.

Итого ~9 недель одной командой (1 backend + 1 fullstack на интеграцию). Этапы B и C можно частично распараллелить.

---

## 8. Открытые вопросы (решить до этапа A)

1. OTP-канал по умолчанию: SMS (стоимость) vs email (доставляемость)? Предложение: email на старте, SMS позже.
2. Провайдер платежей: подтверждён ли ЮKassa и есть ли юрлицо/договор?
3. Хостинг: Yandex Cloud vs VK Cloud vs VPS — есть ли предпочтения/бюджет?
4. Directus vs собственная админка: достаточно ли Directus-ролей для контент-менеджера клиента?
5. Судьба экрана «Чат» на период до этапа 5 роадмапа (ссылка на Telegram-канал?).
