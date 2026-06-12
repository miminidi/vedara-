import type {
  AccessState,
  CheckMetric,
  ClubArticle,
  ClubVideo,
  DayPlanItem,
  Habit,
  LeadType,
  Material,
  NavItem,
  ProductCta,
  Program,
  Protocol,
  TeamMember,
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
  { id: "home", label: "Главная", icon: "home" },
  { id: "practices", label: "Уроки", icon: "practices" },
  { id: "tracker", label: "Трекер", icon: "tracker", center: true },
  { id: "chat", label: "Чат", icon: "chat" },
  { id: "profile", label: "Профиль", icon: "profile" },
];

export const homeHubContent = {
  tariff: {
    kicker: "Longevita Club",
    title: "5 555 ₽ стартовый доступ",
    text: "Далее 3 333 ₽ / месяц. В MVP это только demo-состояние без реальной оплаты.",
    actions: [
      {
        id: "trial",
        label: "7 дней бесплатно",
        target: "club",
        access: "trial",
        variant: "primary",
      },
      {
        id: "subscription",
        label: "Оформить подписку",
        target: "club",
        access: "clubMonthly",
        variant: "secondary",
      },
    ],
    activeCta: "Войти в клуб",
  },
  directionsKicker: "Vedara",
  directionsTitle: "Экосистема Vedara",
};

export const homeEcosystemCards = [
  {
    id: "longevita",
    title: "VEDARA LONGEVITA CLUB",
    description: "Главный открытый продукт: клуб, практики, комьюнити и мягкое сопровождение.",
    meta: "открыт",
    target: "club",
  },
  {
    id: "university",
    title: "VEDARA UNIVERSITY",
    description: "Обучение специалистов, живые форматы и вводная заявка в demo-режиме.",
    meta: "locked",
    target: "profile",
    cta: "Заявка на обучение",
  },
  {
    id: "clinic",
    title: "VEDARA CLINIC",
    description: "Индивидуальные программы и консультация специалиста через mock-заявку.",
    meta: "locked",
    target: "profile",
    cta: "Оставить заявку",
  },
  {
    id: "individual",
    title: "Индивидуальные программы с Марией Святой",
    description: "Персональный маршрут восстановления и сопровождения после заявки.",
    meta: "locked",
    target: "profile",
    cta: "Подробнее",
  },
] satisfies Array<{
  id: string;
  title: string;
  description: string;
  meta: string;
  cta?: string;
  target?: NavItem["id"];
  actions?: Array<{
    id: string;
    label: string;
    target: NavItem["id"];
    access?: AccessState;
    variant: "primary" | "secondary";
  }>;
}>;

export const homeAboutContent = {
  kicker: "team",
  title: "О нас",
  subtitle: "Наша команда — VEDARA family",
};

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    role: "Основатель Vedara",
    description: "Автор идеи, методологии и направления осознанного долголетия.",
    initials: "OV",
  },
  {
    id: "project-curator",
    role: "Куратор проекта",
    description: "Помогает участницам двигаться по программе и сохранять ритм.",
    initials: "KP",
  },
  {
    id: "revival-mentor-practices",
    role: "Revival mentor",
    description: "Сопровождает практики, состояние и личный прогресс участниц.",
    initials: "RM",
  },
  {
    id: "revival-mentor-club",
    role: "Revival mentor",
    description: "Поддерживает участниц в клубе и помогает внедрять привычки.",
    initials: "RM",
  },
  {
    id: "revival-mentor-tracker",
    role: "Revival mentor",
    description: "Помогает проходить материалы, практики и трекер без перегруза.",
    initials: "RM",
  },
];

export const practicesContent = {
  header: {
    kicker: "библиотека уроков",
    title: "Уроки",
    subtitle: "Уроки, материалы, мягкие протоколы и короткие действия, которые можно отметить как выполненные.",
  },
  progressTitle: "Прогресс уроков",
  progressLabel: "Прогресс уроков",
  listKicker: "library",
  listTitle: "Сегодня можно изучить",
  protocolKicker: "wellness",
  protocolTitle: "Протоколы",
  completed: "Изучено",
  premium: "Premium",
  minuteSuffix: "мин",
  openTracker: "Открыть трекер",
};

export const clubContent = {
  header: {
    kicker: "Longevita Club",
    title: "VEDARA LONGEVITA CLUB",
    subtitle: "Клуб молодости, энергии и осознанного долголетия.",
  },
  access: {
    trial: "Пробный доступ активен",
    premium: "Подписка активна",
    guest: "Оформите доступ, чтобы открыть материалы клуба",
    guestStatus: "Доступ можно открыть на главной",
    trialText: "7 дней открывают короткие видео, статьи и клубные материалы в demo-режиме.",
    premiumText: "Mock-подписка активна. Реальная оплата в MVP не подключена.",
    guestText: "Вы можете включить пробный доступ или посмотреть тарифный блок без реальной оплаты.",
  },
  trialCta: "7 дней бесплатно",
  tariff: {
    kicker: "подписка",
    title: "5 555 ₽ стартовый доступ",
    text: "Далее 3 333 ₽ / месяц. В MVP это mock-состояние без реальной оплаты.",
    cta: "Активировать mock-подписку",
  },
  videosKicker: "club library",
  videosTitle: "Короткие видео",
  articlesKicker: "tracker guide",
  articlesTitle: "Статьи для пользования трекером",
  communityKicker: "community",
  communityTitle: "Клубное общение",
  communityText: "Общение, эфиры, вопросы куратору и объявления вынесены в отдельный community-раздел.",
  chatCta: "Перейти в чат клуба",
  open: "Открыть",
  markWatched: "Отметить просмотренным",
  watched: "Просмотрено",
  markRead: "Отметить прочитанным",
  read: "Прочитано",
  available: "доступно",
  locked: "locked",
  openAccess: "Открыть доступ",
  detailTitle: "Mock-просмотр",
  detailText: "Реальные видео и внешние материалы в MVP не подключены. Этот блок показывает, как будет открываться клубный материал.",
  closeDetail: "Закрыть",
};

export const chatContent = {
  header: {
    kicker: "community",
    title: "Чат клуба",
    subtitle: "Клубное общение, эфиры, вопросы куратору и объявления в mock-режиме MVP.",
  },
  status: "community mock",
  introTitle: "Клубное общение",
  introText: "Здесь собрана community-часть Longevita Club: чат, ближайшие встречи, тема недели и мягкая поддержка куратора.",
  liveKicker: "ближайший эфир",
  liveTitle: "Воскресенье · 19:00",
  liveText: "Разбор ритма недели, вопросы участников и спокойная настройка практик без медицинских назначений.",
  weekTitle: "Тема недели",
  weekText: "Мягкая регулярность: вода, движение, практика, сон и один материал без перегруза.",
  curatorTitle: "Вопрос куратору",
  curatorText: "В MVP вопрос сохраняется локально как интерфейсное состояние. Реальной отправки на сервер нет.",
  announcementsTitle: "Объявления",
  announcements: [
    "Новые короткие видео доступны на странице клуба.",
    "Статьи для трекера помогают подготовиться к ежедневным отметкам.",
    "Чат клуба будет подключен после MVP-проверки сценария.",
  ],
  questionCta: "Задать вопрос",
  questionSaved: "Вопрос сохранен локально",
  clubCta: "Вернуться в клуб",
};

export const clubVideos: ClubVideo[] = [
  {
    id: "what-is-longevita",
    title: "Что такое VEDARA Longevita",
    description: "Короткое введение в клуб, ритм материалов и ежедневную практику наблюдения.",
    duration: "7 мин",
    access: "club",
    completed: false,
  },
  {
    id: "dao-practices",
    title: "Даосские практики",
    description: "Мягкие принципы телесного внимания без сложных техник и медицинских обещаний.",
    duration: "9 мин",
    access: "club",
    completed: false,
  },
  {
    id: "breathing-practice",
    title: "Дыхательная практика",
    description: "Спокойная короткая пауза для возвращения внимания к телу и состоянию дня.",
    duration: "6 мин",
    access: "club",
    completed: false,
  },
  {
    id: "face-massage",
    title: "Массаж лица",
    description: "Деликатный уходовый ритуал как часть вечернего восстановления.",
    duration: "8 мин",
    access: "club",
    completed: false,
  },
  {
    id: "hrv-basics",
    title: "Показатель HRV",
    description: "Как относиться к HRV как к наблюдению, а не как к диагнозу или назначению.",
    duration: "10 мин",
    access: "club",
    completed: false,
  },
  {
    id: "soft-training",
    title: "Тренировка",
    description: "Мягкая активность, которую можно связать с отметками движения и состояния.",
    duration: "12 мин",
    access: "club",
    completed: false,
  },
];

export const clubArticles: ClubArticle[] = [
  {
    id: "essentials-list",
    title: "Список необходимого",
    description: "Что подготовить для спокойного старта: вода, заметки, удобное место и простой план.",
    readingTime: "4 мин чтения",
    access: "club",
    completed: false,
  },
  {
    id: "recipe-book",
    title: "Книга рецептов",
    description: "Идеи простых приемов пищи для наблюдения за питанием без жестких правил.",
    readingTime: "7 мин чтения",
    access: "club",
    completed: false,
  },
  {
    id: "tracker-explainer",
    title: "Пояснения к трекеру",
    description: "Как отмечать привычки и состояние, чтобы видеть динамику недели и месяца.",
    readingTime: "5 мин чтения",
    access: "club",
    completed: false,
  },
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
  scoreLabel: "Ритм дня",
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
    subtitle: "Отмечайте привычки и состояние, чтобы видеть динамику недели и месяца.",
  },
  monthTitle: "Календарь месяца",
  monthKicker: "месяц",
  monthLegendAria: "Легенда календаря",
  monthLegend: {
    none: "нет данных",
    partial: "частично",
    filled: "заполнен",
  },
  selectedDayTitle: "Выбранный день",
  todayInputTitle: "Что отмечаем сегодня",
  emptyTitle: "Данных за день пока нет",
  emptyText: "Выберите привычки или заполните состояние, чтобы день появился в календаре.",
  reportTitle: "Отчет дня",
  reportDescription: "На основе привычек и состояния выбранного дня.",
  reportEmptyText: "Заполните привычки и состояние, чтобы увидеть отчет дня.",
  reportScoreLabel: "Оценка дня",
  habitsTitle: "Привычки дня",
  conditionTitle: "Состояние",
  conditionScale: "1-10",
  noValue: "—",
  startCheckIn: "Заполнить состояние",
  saveDay: "Сохранить день",
  saved: "День сохранен",
  homeCta: "На главную",
  summary: {
    habits: {
      title: "Привычки",
      description: "выполнено сегодня",
    },
    state: {
      title: "Состояние",
      description: "самочувствие дня",
    },
  },
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
  homeCta: "Вернуться на главную",
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
