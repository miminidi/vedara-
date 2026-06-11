import type { Material } from "../types";

export const materials: Material[] = [
  {
    id: "plate-basics",
    title: "Как собрать спокойную тарелку на день",
    category: "nutrition",
    description: "Общие принципы баланса, без строгих запретов и подсчётов.",
    access: "demo",
    readTimeMin: 6,
  },
  {
    id: "movement-habit",
    title: "Движение как привычка, а не испытание",
    category: "body",
    description: "Как встроить регулярную активность в обычный график.",
    access: "demo",
    readTimeMin: 5,
  },
  {
    id: "recovery-evening",
    title: "Вечернее восстановление после насыщенного дня",
    category: "balance",
    description: "Небольшие ритуалы для сна, отдыха и мягкого восстановления.",
    access: "demo",
    readTimeMin: 7,
  },
  {
    id: "nutrition-rhythm",
    title: "Ритм питания без крайностей",
    category: "nutrition",
    description: "Как смотреть на питание шире, чем на список запретов.",
    access: "full",
    readTimeMin: 8,
  },
  {
    id: "body-awareness",
    title: "Осознанность в тренировках",
    category: "mind",
    description: "Как замечать нагрузку и вовремя снижать темп.",
    access: "full",
    readTimeMin: 9,
  },
  {
    id: "weekly-check-in",
    title: "Еженедельная сверка привычек",
    category: "balance",
    description: "Простой способ увидеть прогресс без давления на себя.",
    access: "full",
    readTimeMin: 4,
  },
];
