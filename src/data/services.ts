import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "nutrition-consult",
    title: "Консультация нутрициолога",
    description: "Короткая заявка на обсуждение общего ритма питания и привычек.",
    priceLabel: "от 3 500 ₽",
    access: "demo",
  },
  {
    id: "personal-training",
    title: "Индивидуальная онлайн-тренировка",
    description: "Подбор формата занятия без медицинских выводов и перегрузки.",
    priceLabel: "от 4 000 ₽",
    access: "full",
  },
  {
    id: "wellness-review",
    title: "Разбор Vedara-ритма",
    description: "Сессия о привычках, нагрузке, восстановлении и устойчивом графике.",
    priceLabel: "от 5 000 ₽",
    access: "full",
  },
];
