import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ProgressCard } from "../components/ProgressCard";
import { SafetyNote } from "../components/SafetyNote";
import { brandContent } from "../data/appContent";
import type { Screen } from "../types";

type ProfileScreenProps = {
  fullAccess: boolean;
  completedLessons: number;
  totalLessons: number;
  completedMaterials: number;
  totalMaterials: number;
  onPurchase: () => void;
  onReset: () => void;
  onNavigate: (screen: Screen) => void;
};

export function ProfileScreen({
  fullAccess,
  completedLessons,
  totalLessons,
  completedMaterials,
  totalMaterials,
  onPurchase,
  onReset,
  onNavigate,
}: ProfileScreenProps) {
  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>профиль</h1>
        </div>
      </header>

      <section className="profile-top">
        <div className="avatar">U</div>
        <h2>Пользователь</h2>
        <p>{brandContent.demoEmail}</p>
      </section>

      <section className="subscription-card">
        <div className="subscription-icon" aria-hidden="true">
          <CheckCircle2 size={22} />
        </div>
        <h2>ваша подписка в клуб</h2>
        <p>
          {fullAccess
            ? "Полный доступ активен в демо-режиме. Закрытые материалы и сервисы открыты."
            : "Демо-доступ к клубу активен. Откройте полный доступ, чтобы увидеть закрытые разделы."}
        </p>
        {!fullAccess ? (
          <button type="button" className="primary-button" onClick={onPurchase}>
            Купить полный доступ
          </button>
        ) : null}
      </section>

      <section className="section-stack">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">прогресс</span>
            <h2>Мой прогресс в Vedara Premium</h2>
          </div>
        </div>
        <div className="progress-grid">
          <ProgressCard value={`${completedLessons}/${totalLessons}`} label="Изучено тренировок" />
          <ProgressCard value={`${completedMaterials}/${totalMaterials}`} label="Изучено материалов" />
          <ProgressCard value="0/0" label="Мои изменения" locked />
        </div>
      </section>

      <section className="profile-actions">
        <button type="button" className="secondary-button" onClick={() => onNavigate("purchases")}>
          Мои покупки
        </button>
        <button type="button" className="text-button reset-button" onClick={onReset}>
          Сбросить демо
        </button>
      </section>

      <SafetyNote />
    </div>
  );
}
