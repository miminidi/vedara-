import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "vedara-premium",
    title: "Vedara Premium",
    subtitle: "Онлайн-клуб заботы о теле, питании и привычках",
    description:
      "Полный доступ к пространствам Vedara: тренировкам, материалам, мягкой поддержке и сервисам для спокойного движения к здоровому образу жизни.",
    priceRub: 5900,
    accessLevel: "demo",
    coverTone: "wellness",
    imageKey: "wellnessClub",
    included: [
      "Демо-доступ к вводным урокам и материалам",
      "Полный доступ к программам Body и Nutrition",
      "Полезные материалы по привычкам, питанию и балансу",
      "Приоритет на консультационные сервисы",
    ],
  },
];
