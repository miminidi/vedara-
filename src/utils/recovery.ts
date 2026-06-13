import type { DailyCheckIn } from "../data/types";

export type RecoveryLevel = "low" | "medium" | "high";

export interface RecoveryScore {
  value: number; // 0-100
  level: RecoveryLevel;
  label: string;
  hint: string;
}

/**
 * Recovery Score™ — индекс ресурса женщины, считается из ежедневного чек-ина
 * (энергия, настроение, сон — выше лучше; стресс инвертируется). 0–100.
 * Возвращает null, если за день нет ни одной отметки состояния.
 */
export function computeRecoveryScore(checkIn?: DailyCheckIn): RecoveryScore | null {
  if (!checkIn) {
    return null;
  }

  const parts: number[] = [];
  if (typeof checkIn.energy === "number") parts.push(checkIn.energy);
  if (typeof checkIn.mood === "number") parts.push(checkIn.mood);
  if (typeof checkIn.sleep === "number") parts.push(checkIn.sleep);
  if (typeof checkIn.stress === "number") parts.push(11 - checkIn.stress);

  if (!parts.length) {
    return null;
  }

  const avg = parts.reduce((sum, n) => sum + n, 0) / parts.length;
  const value = Math.max(0, Math.min(100, Math.round(avg * 10)));

  const level: RecoveryLevel = value >= 67 ? "high" : value >= 40 ? "medium" : "low";
  const label =
    level === "high" ? "Ресурс восстановлен" : level === "medium" ? "Ресурс в балансе" : "Ресурс на исходе";
  const hint =
    level === "high"
      ? "Энергия есть — удерживай ритм и восстановление."
      : level === "medium"
        ? "Состояние ровное. Добавь сон и мягкое восстановление."
        : "Тело просит восстановления. Начни с нервной системы и сна.";

  return { value, level, label, hint };
}
