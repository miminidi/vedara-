import { ArrowLeft, BookOpen, CheckCircle2, Heart, Users } from "lucide-react";
import { MaterialCard } from "../components/MaterialCard";
import { SafetyNote } from "../components/SafetyNote";
import { VisualScene } from "../components/VisualScene";
import { brandContent } from "../data/appContent";
import { materials } from "../data/materials";
import type { Screen } from "../types";

type UsefulScreenProps = {
  fullAccess: boolean;
  completedMaterialIds: string[];
  onCompleteMaterial: (id: string) => void;
  onNavigate: (screen: Screen) => void;
};

const bullets = [
  { label: "Экспертные знания", icon: BookOpen },
  { label: "Поддержка и мотивация", icon: Heart },
  { label: "Практичные инструменты", icon: CheckCircle2 },
  { label: "Сообщество единомышленников", icon: Users },
];

export function UsefulScreen({ fullAccess, completedMaterialIds, onCompleteMaterial, onNavigate }: UsefulScreenProps) {
  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>полезное</h1>
        </div>
      </header>

      <section className="story-card useful-intro">
        <div>
          <h2>что такое {brandContent.name}?</h2>
          <p>
            Это экосистема для тех, кто хочет жить осознанно, двигаться регулярно, питаться спокойнее
            и заботиться о своём ресурсе.
          </p>
          <div className="bullet-list">
            {bullets.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label}>
                  <Icon size={19} aria-hidden="true" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
        <VisualScene tone="mind" compact />
      </section>

      <section className="section-stack">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">библиотека</span>
            <h2>Полезные материалы</h2>
          </div>
        </div>
        {materials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            fullAccess={fullAccess}
            completed={completedMaterialIds.includes(material.id)}
            onComplete={() => onCompleteMaterial(material.id)}
            onLocked={() => onNavigate("product-detail")}
          />
        ))}
      </section>

      <SafetyNote />
    </div>
  );
}
