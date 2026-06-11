import type { PhotoKey } from "./assets";
import type { Screen } from "../types";

export const brandContent = {
  name: "Vedara",
  tagline: "экосистема для твоего здоровья",
  demoEmail: "demo@vedara.local",
} as const;

export const onboardingContent = {
  eyebrow: "мобильная экосистема заботы о себе",
  title: "Vedara",
  text: "Экосистема здоровья для тела, питания, восстановления и внутреннего баланса.",
  pillars: ["Тело", "Здоровье", "Качество жизни"],
  cta: "Продолжить",
} as const;

export const homeContent = {
  hero: {
    title: "ТВОЙ ПУТЬ К ГАРМОНИИ",
    text: "Комплексный подход к телу, питанию, восстановлению и внутреннему балансу.",
    badge: "экосистемный подход",
    cta: "Узнать больше",
    imageKey: "heroYoga" satisfies PhotoKey,
  },
  spacesTitle: "пространства Vedara",
  premium: {
    title: "VEDARA PREMIUM",
    text: "Полный доступ ко всем пространствам и возможностям экосистемы.",
    price: "от 5 900 ₽ / месяц",
    cta: "Оформить подписку",
  },
  servicePreview: {
    eyebrow: "сервисы",
    title: "Консультации и личный запрос",
    text: "Лёгкий mock-flow заявки без сбора медицинских данных.",
    cta: "Перейти",
  },
} as const;

export type HomeSpace = {
  id: "body" | "nutrition" | "wellness" | "rehabilitation";
  title: string;
  subtitle: string;
  meta: string;
  imageKey: PhotoKey;
  screen: Screen;
  testId: string;
  locked?: boolean;
};

export const homeSpaces: HomeSpace[] = [
  {
    id: "body",
    title: "BODY",
    subtitle: "Пространство тренировок",
    meta: "демо-уроки",
    imageKey: "bodyPeople",
    screen: "body",
    testId: "section-body",
  },
  {
    id: "nutrition",
    title: "NUTRITION",
    subtitle: "Пространство питания",
    meta: "частично доступно",
    imageKey: "nutritionBowl",
    screen: "nutrition",
    testId: "section-nutrition",
  },
  {
    id: "wellness",
    title: "WELLNESS CLUB",
    subtitle: "Поддержка, мотивация и эксперты",
    meta: "премиум",
    imageKey: "wellnessClub",
    screen: "product-detail",
    testId: "section-wellness",
  },
  {
    id: "rehabilitation",
    title: "REHABILITATION",
    subtitle: "Пространство восстановления",
    meta: "позже",
    imageKey: "bodyPeople",
    screen: "product-detail",
    testId: "section-rehabilitation",
    locked: true,
  },
];

export const bottomNavItems = [
  { label: "Главная", screen: "home" },
  { label: "Мои покупки", screen: "purchases" },
  { label: "Vedara", screen: "home" },
  { label: "Полезное", screen: "useful" },
  { label: "Профиль", screen: "profile" },
] as const;

export const accessCopy = {
  demo: "Демо-доступ активен",
  full: "Vedara Premium активен",
  paywallTitle: "Доступно в Vedara Premium",
  paywallText: "Откройте премиальные уроки, материалы и сервисы в демо-режиме без реальной оплаты.",
} as const;
