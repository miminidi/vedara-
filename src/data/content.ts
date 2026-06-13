import type {
  AccessState,
  CheckMetric,
  ClubArticle,
  ClubVideo,
  DayPlanItem,
  Habit,
  LeadType,
  Material,
  MethodPillar,
  NavItem,
  ProductCta,
  Program,
  Protocol,
  TeamMember,
  UserProfile,
  VedaraProduct,
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
  directionsKicker: "экосистема",
  directionsTitle: "Экосистема Vedara",
};

export const homeHeroContent = {
  kicker: "the longevita method",
  title: "Создавать здоровье, а не лечить болезни",
  text: "Премиальный клуб осознанного долголетия для женщин: энергия, молодость, спокойная нервная система и сильное окружение.",
};

export const homeRecoveryContent = {
  kicker: "recovery score",
  emptyTitle: "Узнай свой уровень ресурса",
  emptyText: "Пройди ежедневную диагностику состояния — энергия, сон, стресс — и увидь свой Recovery Score.",
  emptyCta: "Пройти диагностику",
  scoreCta: "Открыть трекер",
  ofLabel: "из 100",
};

export const homePillarsContent = {
  kicker: "5 столпов метода",
  title: "Путь восстановления",
  text: "Пять направлений, по которым идёт каждая участница — от спокойной нервной системы до новой жизни.",
  cta: "Открыть практики",
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
    kicker: "the longevita method",
    title: "Практики",
    subtitle: "Пять столпов восстановления женщины — от спокойной нервной системы до новой жизни. Отмечайте практики и эфиры как пройденные.",
  },
  progressTitle: "Прогресс по методу",
  progressLabel: "Пройдено",
  listKicker: "library",
  listTitle: "Сегодня можно изучить",
  protocolKicker: "программа-старт",
  protocolTitle: "30-Day Recovery Reset",
  completed: "Пройдено",
  premium: "Premium",
  minuteSuffix: "мин",
  openTracker: "Открыть трекер",
};

export const methodPillars: MethodPillar[] = [
  {
    id: "nervous-system",
    index: "01",
    enName: "Nervous System Recovery™",
    title: "Восстановление нервной системы",
    tagline: "Из режима выживания — в спокойствие, глубокий сон и ощущение безопасности в теле.",
    practices: [
      {
        id: "ns-breath",
        title: "Дыхательная пауза для нервной системы",
        description: "Короткая практика, чтобы выйти из напряжения и вернуть внимание к телу.",
        kind: "practice",
        duration: "7 мин",
        access: "free",
        tag: "практика",
      },
      {
        id: "ns-evening-ritual",
        title: "Вечерний ритуал замедления",
        description: "Тёплый свет, без телефона до сна, отбой в 22:00 — мягкий сценарий вечера.",
        kind: "article",
        duration: "6 мин",
        access: "free",
        tag: "ритуал",
      },
      {
        id: "ns-rest-doesnt-help",
        title: "Эфир: почему отдых не помогает",
        description: "Как тело застревает в выживании и что действительно восстанавливает ресурс.",
        kind: "lesson",
        duration: "15 мин",
        access: "premium",
        tag: "эфир",
      },
      {
        id: "ns-where-stress-lives",
        title: "Эфир: где тело хранит стресс",
        description: "Почему тревога живёт в мышцах и как снимать хроническое напряжение.",
        kind: "lesson",
        duration: "12 мин",
        access: "premium",
        tag: "эфир",
      },
    ],
  },
  {
    id: "energy",
    index: "02",
    enName: "Cellular Energy Restoration™",
    title: "Восстановление энергии",
    tagline: "Энергия — не мотивация, а биологический ресурс. Утро с ясной головой и лёгкостью в теле.",
    practices: [
      {
        id: "en-morning-protocol",
        title: "Утренний протокол энергии",
        description: "Солнечный свет, вода и минералы, белок — основа ресурса на день.",
        kind: "practice",
        duration: "8 мин",
        access: "free",
        tag: "ритуал",
      },
      {
        id: "en-sugar",
        title: "Эфир: почему сахар убивает ресурс",
        description: "Воспалительная еда и усталость, и как питание влияет на энергию.",
        kind: "lesson",
        duration: "14 мин",
        access: "premium",
        tag: "эфир",
      },
      {
        id: "en-light-cortisol",
        title: "Эфир: свет, кортизол и энергия",
        description: "Как сбивается биоритм и почему ты просыпаешься разбитой.",
        kind: "lesson",
        duration: "12 мин",
        access: "premium",
        tag: "эфир",
      },
    ],
  },
  {
    id: "biohealing",
    index: "03",
    enName: "Biohealing & Detox™",
    title: "Очищение и омоложение тела",
    tagline: "Создаём условия, в которых организм восстанавливается сам: лёгкость, чистая кожа, меньше отёков.",
    practices: [
      {
        id: "bio-anti-inflammatory",
        title: "Противовоспалительный день",
        description: "Живая еда, зелень, клетчатка, гидратация — мягкая поддержка организма.",
        kind: "article",
        duration: "6 мин",
        access: "free",
        tag: "питание",
      },
      {
        id: "bio-lymph",
        title: "Лимфодренаж и лёгкость",
        description: "Мягкий телесный ритуал для снятия отёков и ощущения лёгкости.",
        kind: "practice",
        duration: "10 мин",
        access: "premium",
        tag: "практика",
      },
      {
        id: "bio-bloating",
        title: "Эфир: почему вздутие — не норма",
        description: "ЖКТ и энергия, стресс и пищеварение, токсическая перегрузка жизни.",
        kind: "lesson",
        duration: "13 мин",
        access: "premium",
        tag: "эфир",
      },
    ],
  },
  {
    id: "longevity",
    index: "04",
    enName: "Longevity Lifestyle™",
    title: "Образ жизни против старения",
    tagline: "Молодость — это не борьба с возрастом, а качество жизни организма каждый день.",
    practices: [
      {
        id: "lon-sleep-foundation",
        title: "Сон как основа молодости",
        description: "Нормальный ритм сна и периоды восстановления без чувства вины.",
        kind: "article",
        duration: "6 мин",
        access: "free",
        tag: "сон",
      },
      {
        id: "lon-soft-movement",
        title: "Мягкое движение для долголетия",
        description: "Ходьба, пилатес, растяжка, йога — движение без истощения.",
        kind: "practice",
        duration: "12 мин",
        access: "free",
        tag: "движение",
      },
      {
        id: "lon-sleep-aging",
        title: "Эфир: почему недосып ускоряет старение",
        description: "Сон и женское здоровье, и почему состояние важнее продуктивности.",
        kind: "lesson",
        duration: "14 мин",
        access: "premium",
        tag: "эфир",
      },
    ],
  },
  {
    id: "purpose",
    index: "05",
    enName: "Purpose & Feminine Fulfillment™",
    title: "Новая жизнь женщины",
    tagline: "Реализация без разрушения себя: контакт с собой, границы, окружение и вкус к жизни.",
    practices: [
      {
        id: "pur-journaling",
        title: "Контакт с собой: journaling",
        description: "Что я чувствую и чего хочу на самом деле — мягкий разбор перегрузки.",
        kind: "practice",
        duration: "8 мин",
        access: "premium",
        tag: "практика",
      },
      {
        id: "pur-who-are-you",
        title: "Эфир: кто ты без режима выживания",
        description: "Почему сильные женщины выгорают и как выйти из «всё на себе».",
        kind: "lesson",
        duration: "15 мин",
        access: "premium",
        tag: "эфир",
      },
      {
        id: "pur-state-creates-life",
        title: "Эфир: состояние создаёт жизнь",
        description: "Новая идентичность женщины и реализация в удовольствие, а не на пределе.",
        kind: "lesson",
        duration: "12 мин",
        access: "premium",
        tag: "эфир",
      },
    ],
  },
];

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
  videosKicker: "эфиры по столпам",
  videosTitle: "Эфиры клуба",
  articlesKicker: "с чего начать",
  articlesTitle: "Онбординг клуба",
  welcomeTitle: "Добро пожаловать в Vedara Longevita",
  welcomeText:
    "Вы вошли в премиальный клуб осознанного долголетия для женщин. Здесь вы выходите из режима выживания и выстраиваете новую систему жизни: спокойная нервная система, энергия, восстановление тела и сильное женское окружение.",
  methodTitle: "The Longevita Method™",
  methodText:
    "Метод собран из пяти столпов: восстановление нервной системы, энергия, биохилинг и детокс, образ жизни против старения и новая жизнь женщины. Вы идёте по шагам, отмечаете состояние в трекере и видите, как ресурс возвращается.",
  open: "Открыть",
  markWatched: "Отметить выполненным",
  watched: "Выполнено",
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
  introTitle: "Женское сообщество Vedara",
  introText: "Здесь собрана community-часть Longevita Club: эфиры, ближайшие встречи, тема недели и поддержка куратора в окружении единомышленниц.",
  liveKicker: "ближайший эфир",
  liveTitle: "Воскресенье · 19:00",
  liveText: "«Почему отдых не помогает» — разбор столпа нервной системы и вопросы участниц.",
  weekTitle: "Тема недели",
  weekText: "Столп 1 — нервная система: выходим из режима выживания через утренние и вечерние ритуалы.",
  curatorTitle: "Вопрос куратору",
  curatorText: "В MVP вопрос сохраняется локально как интерфейсное состояние. Реальной отправки на сервер нет.",
  announcementsTitle: "Объявления",
  announcements: [
    "Новые эфиры по столпам метода доступны на странице клуба.",
    "Vedara Daily Rituals в трекере помогают удерживать ритм дня.",
    "Recovery Score показывает уровень ресурса по ежедневным отметкам.",
  ],
  questionCta: "Задать вопрос",
  questionSaved: "Вопрос сохранен локально",
  clubCta: "Вернуться в клуб",
};

export const clubVideos: ClubVideo[] = [
  {
    id: "live-rest-doesnt-help",
    title: "Почему отдых не помогает",
    description: "Как тело застревает в выживании и что действительно восстанавливает ресурс.",
    category: "нервная система",
    duration: "15 мин",
    icon: "practice",
    access: "club",
    completed: false,
  },
  {
    id: "live-where-stress-lives",
    title: "Где тело хранит стресс",
    description: "Почему тревога живёт в мышцах и как снимать хроническое напряжение.",
    category: "нервная система",
    duration: "12 мин",
    icon: "practice",
    access: "club",
    completed: false,
  },
  {
    id: "live-sugar-resource",
    title: "Почему сахар убивает ресурс",
    description: "Воспалительная еда и усталость, и как питание влияет на энергию.",
    category: "энергия",
    duration: "14 мин",
    icon: "nutrition",
    access: "club",
    completed: false,
  },
  {
    id: "live-light-cortisol",
    title: "Свет, кортизол и энергия",
    description: "Как сбивается биоритм и почему ты просыпаешься разбитой.",
    category: "энергия",
    duration: "12 мин",
    icon: "movement",
    access: "club",
    completed: false,
  },
  {
    id: "live-bloating",
    title: "Почему вздутие — не норма",
    description: "ЖКТ и энергия, стресс и пищеварение, токсическая перегрузка жизни.",
    category: "тело",
    duration: "13 мин",
    icon: "protocol",
    access: "club",
    completed: false,
  },
  {
    id: "live-beauty-recovery",
    title: "Красота через восстановление",
    description: "Отёки и нервная система, почему стресс старит лицо.",
    category: "тело",
    duration: "12 мин",
    icon: "sleep",
    access: "club",
    completed: false,
  },
  {
    id: "live-sleep-aging",
    title: "Почему недосып ускоряет старение",
    description: "Сон и женское здоровье, почему состояние важнее продуктивности.",
    category: "долголетие",
    duration: "14 мин",
    icon: "sleep",
    access: "club",
    completed: false,
  },
  {
    id: "live-who-are-you",
    title: "Кто ты без режима выживания",
    description: "Почему сильные женщины выгорают и как выйти из «всё на себе».",
    category: "новая жизнь",
    duration: "15 мин",
    icon: "material",
    access: "club",
    completed: false,
  },
];

export const clubArticles: ClubArticle[] = [
  {
    id: "onboarding-manifesto",
    title: "Манифест Vedara Longevita",
    description: "Кто мы, для кого клуб и почему здоровье — главный актив женщины.",
    readingTime: "5 мин",
    icon: "material",
    access: "club",
    completed: false,
  },
  {
    id: "onboarding-values",
    title: "Ценности клуба",
    description: "Долголетие как образ жизни, энергия важнее возраста, сила сообщества.",
    readingTime: "4 мин",
    icon: "protocol",
    access: "club",
    completed: false,
  },
  {
    id: "onboarding-method",
    title: "Как устроен метод",
    description: "Пять столпов восстановления и как двигаться по ним вместе с трекером.",
    readingTime: "6 мин",
    icon: "practice",
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
  selectedDayTitle: "Сводка дня",
  todayInputTitle: "Что отмечаем сегодня",
  reportTitle: "Отчет дня",
  reportDescription: "На основе привычек и состояния выбранного дня.",
  reportEmptyText: "Заполните привычки и состояние, чтобы увидеть отчет дня.",
  reportScoreLabel: "Оценка дня",
  habitsTitle: "Привычки дня",
  conditionTitle: "Состояние",
  conditionScale: "1-10",
  noValue: "—",
  recoveryKicker: "recovery score",
  recoveryOfLabel: "из 100",
  recoveryEmptyTitle: "Отметь состояние дня",
  recoveryEmptyHint: "Заполни энергию, сон и стресс — и увидишь свой Recovery Score за день.",
  ritualsTitle: "Vedara Daily Rituals",
  ritualsMorning: "Утро",
  ritualsEvening: "Вечер",
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

export const dailyRituals = {
  morning: [
    {
      id: "ritual-morning-phone",
      title: "1 час для себя без телефона",
      description: "Спокойное утро без ленты и уведомлений.",
      icon: "practice" as const,
    },
    {
      id: "ritual-morning-breath",
      title: "Дыхательная практика",
      description: "Несколько минут дыхания для нервной системы.",
      icon: "practice" as const,
    },
    {
      id: "ritual-morning-water",
      title: "Вода и минералы",
      description: "Стакан воды с минералами до кофе.",
      icon: "water" as const,
    },
    {
      id: "ritual-morning-light",
      title: "Утренний свет",
      description: "Дневной свет или прогулка для биоритма.",
      icon: "movement" as const,
    },
  ],
  evening: [
    {
      id: "ritual-evening-phone",
      title: "1 час без телефона до сна",
      description: "Тёплый приглушённый свет вместо экранов.",
      icon: "sleep" as const,
    },
    {
      id: "ritual-evening-meditation",
      title: "Медитация перед сном",
      description: "Замедление и мягкая разгрузка дня.",
      icon: "practice" as const,
    },
    {
      id: "ritual-evening-bed",
      title: "Отбой в 22:00",
      description: "Сон — основа восстановления и молодости.",
      icon: "sleep" as const,
    },
    {
      id: "ritual-evening-gratitude",
      title: "Итоги дня",
      description: "Благодарность себе и спокойный план на завтра.",
      icon: "material" as const,
    },
  ],
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
  goalsTitle: "Цели по методу",
  accessTitle: "Доступ",
  leadsTitle: "Заявки",
  mapKicker: "the longevita map",
  mapTitle: "Твой путь восстановления",
  mapSubtitle: "Прогресс по пяти столпам метода — отмечай практики в разделе «Практики».",
  mapStates: {
    notStarted: "не начат",
    inProgress: "в процессе",
    done: "пройден",
  },
  supportKicker: "поддержка",
  supportTitle: "Протоколы и адаптогены",
  supportText: "Нутрицевтики для мягкой поддержки восстановления — не назначение, а ориентир. Подбор индивидуально с ментором.",
  supportItems: [
    "Минералы и электролиты — энергия и гидратация",
    "Ашваганда, родиола — спокойствие и адаптация к стрессу",
    "Рейши, траметес — мягкая поддержка восстановления и сна",
  ],
  productsTitle: "Продукты Vedara",
  productsSubtitle: "Ваши доступы, заявки и дополнительные программы.",
  productIntentSaved: "Заявка на доступ сохранена",
  subscriptionIntentSaved: "Запрос на подписку сохранен",
  productDetailText: "Mock-доступ открыт локально. Реальная оплата и внешние материалы в MVP не подключены.",
  closeProductDetail: "Закрыть",
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

export const vedaraProducts: VedaraProduct[] = [
  {
    id: "longevita-tracker",
    title: "Трекер Longevita",
    description: "Ежедневные привычки, состояние, календарь и динамика.",
    status: "Открыт",
    accessType: "open",
    actionLabel: "Зайти",
    route: "tracker",
    icon: "protocol",
  },
  {
    id: "hunger-mimicry",
    title: "Мимикрия голода",
    description: "Клубный материал, доступный при активной платной подписке.",
    status: "Доступно с подпиской",
    accessType: "premium",
    actionLabel: "Оформить подписку",
    intentId: "hungerMimicrySubscription",
    icon: "nutrition",
  },
  {
    id: "therapeutic-fasting",
    title: "Лечебное голодание",
    description: "Отдельная программа с доступом после покупки.",
    status: "Купить доступ",
    accessType: "purchase",
    actionLabel: "Купить доступ",
    intentId: "therapeuticFastingPurchase",
    icon: "practice",
  },
  {
    id: "diagnostics",
    title: "Бесплатная диагностика онлайн с ментором Vedara",
    description: "Первичная встреча для определения запроса и подходящего маршрута.",
    status: "Можно подать заявку",
    accessType: "lead",
    actionLabel: "Подать заявку",
    leadType: "diagnostics",
    icon: "clinic",
  },
  {
    id: "individual-protocol",
    title: "Индивидуальный протокол с Марией Святой",
    description: "Персональное сопровождение при сложных состояниях и восстановлении ресурса.",
    status: "Можно подать заявку",
    accessType: "lead",
    actionLabel: "Подать заявку",
    leadType: "individualProtocol",
    icon: "material",
  },
  {
    id: "vedara-university",
    title: "Vedara Университет",
    description: "Обучение специалистов и живые форматы.",
    status: "Можно подать заявку",
    accessType: "lead",
    actionLabel: "Подать заявку",
    leadType: "university",
    icon: "protocol",
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
  diagnostics: "Заявка на диагностику Vedara",
  individualProtocol: "Заявка на индивидуальный протокол",
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
