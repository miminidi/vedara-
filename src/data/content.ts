import type {
  CheckMetric,
  DayPlanItem,
  Habit,
  LeadType,
  Material,
  NavItem,
  ProductCta,
  Program,
  Protocol,
  UserProfile,
} from "./types";

export const brandContent = {
  tagline: "мобильный ритм здоровья",
  profileAria: "Открыть профиль",
  navAria: "Основная навигация Vedara",
};

export const uiCopy = {
  open: "Открыть",
  back: "Назад",
  apply: "Оставить заявку",
  protocol: "Протокол",
  clinicBadge: "Clinic",
};

export const navItems: NavItem[] = [
  { id: "today", label: "Сегодня", icon: "today" },
  { id: "tracker", label: "Трекер", icon: "tracker" },
  { id: "protocols", label: "Протоколы", icon: "protocols" },
  { id: "materials", label: "Материалы", icon: "materials" },
  { id: "profile", label: "Профиль", icon: "profile" },
];

export const userProfile: UserProfile = {
  id: "demo-user",
  name: "Мария",
  subtitle: "demo-профиль Vedara",
  focus: "Спокойный режим, сон и регулярность базовых привычек",
  goals: ["больше энергии", "мягкий режим дня", "устойчивые практики", "осознанное питание"],
};

export const accessLabels = {
  guest: "Гость",
  trial: "Demo доступ",
  clubMonthly: "Premium месяц",
  clubAnnual: "Premium год",
  clinicLead: "Заявка в клинику",
  universityLead: "Заявка в университет",
} as const;

export const todayContent = {
  greeting: "Доброе утро",
  dateLabel: "Сегодня",
  scoreLabel: "Индекс дня",
  checkInTitle: "Быстрый check-in",
  checkInText: "Отметьте состояние. Vedara сохранит день локально на этом устройстве.",
  planTitle: "План дня",
  planAction: "Открыть трекер",
  focusTitle: "Фокус недели",
  focusText: "Соберите минимум: вода, движение, короткая практика и один материал без перегруза.",
  protocolTitle: "Текущий протокол",
  primaryCta: "Отметить состояние",
  practiceCta: "Начать практику",
  protocolCta: "Открыть протокол",
};

export const trackerContent = {
  header: {
    kicker: "ежедневный ритм",
    title: "Трекер",
    subtitle: "Привычки, состояние и прогресс дня. Данные остаются в localStorage.",
  },
  weekTitle: "Неделя",
  habitsTitle: "Привычки дня",
  conditionTitle: "Состояние",
  saveDay: "Сохранить день",
  saved: "День сохранен",
};

export const protocolsContent = {
  header: {
    kicker: "мягкие протоколы",
    title: "Протоколы",
    subtitle: "Пошаговые wellness-задачи без медицинских рекомендаций и без обещаний результата.",
  },
  currentTitle: "Активный протокол",
  tasksTitle: "Задачи дня",
  catalogTitle: "Доступные протоколы",
  premiumCta: "Открыть с Premium",
  clinicCta: "Нужна индивидуальная программа",
  leadSaved: "Заявка сохранена",
};

export const materialsContent = {
  header: {
    kicker: "библиотека Vedara",
    title: "Материалы",
    subtitle: "Уроки, практики, медитации и вводные материалы клуба и университета.",
  },
  progressTitle: "Прогресс обучения",
  listTitle: "Сегодня можно изучить",
  completed: "Изучено",
  open: "Отметить изученным",
};

export const profileContent = {
  header: {
    kicker: "личный кабинет",
    title: "Профиль",
    subtitle: "Demo-доступ, цели, заявки и локальная история MVP.",
  },
  stats: {
    habits: "привычек сегодня",
    materials: "материалов",
    protocolTasks: "задач протокола",
    leads: "заявок",
  },
  goalsTitle: "Цели",
  accessTitle: "Доступ",
  leadsTitle: "Заявки",
  productsTitle: "Следующие шаги",
  enableTrial: "Включить demo",
  enablePremium: "Premium demo",
  reset: "Сбросить demo",
  noLeads: "Заявок пока нет",
};

export const checkMetrics: CheckMetric[] = [
  { id: "energy", label: "Энергия", helper: "ресурс", minLabel: "низко", maxLabel: "высоко" },
  { id: "mood", label: "Настроение", helper: "фон", minLabel: "тяжело", maxLabel: "легко" },
  { id: "sleep", label: "Сон", helper: "качество", minLabel: "плохо", maxLabel: "хорошо" },
  { id: "stress", label: "Стресс", helper: "напряжение", minLabel: "много", maxLabel: "мало" },
];

export const habits: Habit[] = [
  {
    id: "water",
    title: "Вода",
    description: "Мягко держать питьевой режим в течение дня.",
    category: "water",
    target: "4 отметки",
  },
  {
    id: "nutrition",
    title: "Питание",
    description: "Один спокойный прием пищи без спешки.",
    category: "nutrition",
    target: "1 фокус",
  },
  {
    id: "movement",
    title: "Движение",
    description: "Короткая прогулка или мягкая разминка.",
    category: "movement",
    target: "15 минут",
  },
  {
    id: "practice-breath",
    title: "Практика",
    description: "Дыхательная пауза и переключение внимания.",
    category: "practice",
    target: "7 минут",
  },
  {
    id: "sleep-ritual",
    title: "Сон",
    description: "Вечерний ритуал без перегруза экранами.",
    category: "sleep",
    target: "1 шаг",
  },
];

export const dayPlan: DayPlanItem[] = [
  {
    id: "plan-water",
    title: "Вода",
    subtitle: "Отметить базовый питьевой ритм",
    habitId: "water",
    action: "habit",
  },
  {
    id: "plan-movement",
    title: "Движение",
    subtitle: "15 минут мягкой активности",
    habitId: "movement",
    action: "habit",
  },
  {
    id: "plan-practice",
    title: "Практика",
    subtitle: "7 минут дыхания",
    habitId: "practice-breath",
    action: "practice",
  },
  {
    id: "plan-protocol",
    title: "Протокол",
    subtitle: "Выполнить первую задачу дня",
    protocolTaskId: "sleep-d1-rhythm",
    action: "protocol",
  },
  {
    id: "plan-material",
    title: "Материал",
    subtitle: "Открыть урок из библиотеки",
    action: "material",
  },
];

export const protocols: Protocol[] = [
  {
    id: "sleep-recovery",
    title: "Сон и восстановление",
    subtitle: "14 дней спокойной настройки режима",
    durationDays: 14,
    statusLabel: "доступен",
    access: "free",
    currentDay: 1,
    days: [
      {
        day: 1,
        title: "Ритм вечера",
        summary: "Соберите простой вечерний сценарий и отметьте состояние утром.",
        tasks: [
          {
            id: "sleep-d1-rhythm",
            title: "Выбрать время замедления",
            description: "Поставьте мягкую границу для работы и уведомлений.",
            kind: "habit",
            minutes: 3,
          },
          {
            id: "sleep-d1-breath",
            title: "Дыхательная пауза",
            description: "Короткая практика для переключения внимания.",
            kind: "practice",
            minutes: 7,
          },
          {
            id: "sleep-d1-reflection",
            title: "Отметить утреннее состояние",
            description: "Заполните быстрый check-in на главном экране.",
            kind: "reflection",
            minutes: 2,
          },
        ],
      },
    ],
  },
  {
    id: "energy-baseline",
    title: "Энергия без перегруза",
    subtitle: "7 дней наблюдения за ресурсом",
    durationDays: 7,
    statusLabel: "premium",
    access: "premium",
    currentDay: 1,
    days: [
      {
        day: 1,
        title: "Базовая карта ресурса",
        summary: "Отмечайте ритм дня и выбирайте легкие действия.",
        tasks: [
          {
            id: "energy-d1-map",
            title: "Карта энергии",
            description: "Зафиксируйте периоды подъема и спада.",
            kind: "reflection",
            minutes: 5,
          },
        ],
      },
    ],
  },
  {
    id: "nutrition-awareness",
    title: "Осознанное питание",
    subtitle: "10 дней спокойного наблюдения",
    durationDays: 10,
    statusLabel: "premium",
    access: "premium",
    currentDay: 1,
    days: [
      {
        day: 1,
        title: "Темп и внимание",
        summary: "Отметьте один прием пищи без спешки.",
        tasks: [
          {
            id: "nutrition-d1-focus",
            title: "Один спокойный прием пищи",
            description: "Наблюдайте темп, насыщение и фон состояния.",
            kind: "habit",
            minutes: 12,
          },
        ],
      },
    ],
  },
];

export const materials: Material[] = [
  {
    id: "intro-vedara",
    title: "Как устроена Vedara",
    description: "Короткий вводный урок о трекере, протоколах и материалах.",
    kind: "lesson",
    duration: "8 мин",
    access: "free",
    tag: "старт",
  },
  {
    id: "breath-soft",
    title: "Мягкая дыхательная практика",
    description: "Аудио-практика для паузы в течение дня.",
    kind: "practice",
    duration: "7 мин",
    access: "free",
    tag: "практика",
  },
  {
    id: "club-pillars",
    title: "5 столпов Longevita Club",
    description: "Community, практики, протоколы, знания и сопровождение куратора.",
    kind: "club",
    duration: "14 мин",
    access: "premium",
    tag: "club",
  },
  {
    id: "sleep-hygiene",
    title: "Вечерний ритм",
    description: "Статья о спокойной настройке дня без жестких правил.",
    kind: "article",
    duration: "6 мин",
    access: "free",
    tag: "сон",
  },
  {
    id: "body-scan",
    title: "Сканирование тела",
    description: "Медитация для контакта с телесными сигналами.",
    kind: "meditation",
    duration: "11 мин",
    access: "premium",
    tag: "медитация",
  },
  {
    id: "university-intro",
    title: "Введение в Vedara University",
    description: "Три этапа обучения специалистов: база, практика, интеграция.",
    kind: "university",
    duration: "12 мин",
    access: "university",
    tag: "university",
  },
];

export const productCtas: ProductCta[] = [
  {
    id: "club",
    title: "Longevita Club",
    text: "7 дней бесплатно, затем месячный или годовой Premium demo в рамках MVP.",
    cta: "Открыть Premium",
    target: "profile",
  },
  {
    id: "clinic",
    title: "Vedara Clinic",
    text: "Индивидуальная программа и консультация специалиста.",
    cta: "Оставить заявку",
    leadType: "clinic",
  },
  {
    id: "university",
    title: "Vedara University",
    text: "Вводная заявка на обучение специалистов и живые форматы.",
    cta: "Заявка на обучение",
    leadType: "university",
  },
];

export const safetyNotes = [
  "MVP не ставит диагнозы и не заменяет очную работу со специалистом.",
  "Протоколы являются wellness-структурой для наблюдения и привычек.",
  "Заявки сохраняются как mock-состояние без отправки на сервер.",
];

export const leadTitles: Record<LeadType, string> = {
  clinic: "Заявка в Vedara Clinic",
  university: "Заявка в Vedara University",
};

export const premiumCopy = {
  title: "Vedara Premium",
  guestText: "Demo-доступ открывает клубные материалы и расширенные протоколы.",
  activeText: "Premium demo активен. Продолжайте трекинг, материалы и протоколы.",
  guestCta: "Включить demo",
  activeCta: "Перейти в профиль",
  tariffsCta: "Смотреть материалы",
};

export const homePrograms: Program[] = [
  {
    id: "demo-program",
    title: "Индивидуальная программа",
    eyebrow: "Clinic",
    description: "Mock-направление для заявки на персональную работу.",
    tag: "mock",
    access: "clinic",
  },
];
