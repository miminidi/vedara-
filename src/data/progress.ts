export type ProgressMetric = {
  id: string;
  label: string;
  value: string;
  icon: "flame" | "leaf" | "lotus" | "star";
};

export const homeProgressMetrics: ProgressMetric[] = [
  {
    id: "weekly-trainings",
    value: "12",
    label: "тренировок на этой неделе",
    icon: "flame",
  },
  {
    id: "nutrition-days",
    value: "6/7",
    label: "дней с питанием по плану",
    icon: "leaf",
  },
  {
    id: "meditations",
    value: "8",
    label: "медитаций в этом месяце",
    icon: "lotus",
  },
  {
    id: "vedara-points",
    value: "320",
    label: "баллов Vedara",
    icon: "star",
  },
];
