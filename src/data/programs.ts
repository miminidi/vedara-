import type { Program } from "../types";

export const programs: Program[] = [
  {
    id: "body-soft-start",
    section: "body",
    audience: "women",
    title: "Мягкий старт",
    description: "Базовые занятия для возвращения к регулярному движению.",
    access: "demo",
    lessons: [
      {
        id: "lesson-breath-mobility",
        title: "Дыхание и мобильность",
        durationMin: 14,
        description: "Спокойная вводная практика для суставов и дыхания.",
        access: "demo",
      },
      {
        id: "lesson-core-soft",
        title: "Центр тела без перегруза",
        durationMin: 18,
        description: "Низкоинтенсивная работа с контролем движения.",
        access: "demo",
      },
      {
        id: "lesson-leg-flow",
        title: "Ноги и баланс",
        durationMin: 24,
        description: "Плавная тренировка на устойчивость и силу.",
        access: "full",
      },
    ],
  },
  {
    id: "body-weekly-flow",
    section: "body",
    audience: "women",
    title: "Три тренировки в неделю",
    description: "Недельный ритм для регулярной практики дома.",
    access: "full",
    lessons: [
      {
        id: "lesson-full-body-1",
        title: "Полное тело: неделя 1",
        durationMin: 32,
        description: "Сбалансированная тренировка без агрессивного темпа.",
        access: "full",
      },
      {
        id: "lesson-stretch-release",
        title: "Растяжение и расслабление",
        durationMin: 22,
        description: "Мягкая практика после рабочего дня.",
        access: "full",
      },
      {
        id: "lesson-posture",
        title: "Осанка и плечевой пояс",
        durationMin: 26,
        description: "Общие упражнения для ощущения устойчивости и свободы.",
        access: "full",
      },
    ],
  },
];
