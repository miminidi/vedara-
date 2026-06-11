import { ArrowLeft } from "lucide-react";
import { MaterialCard } from "../components/MaterialCard";
import { PaywallCard } from "../components/PaywallCard";
import { SafetyNote } from "../components/SafetyNote";
import { VisualScene } from "../components/VisualScene";
import { materials } from "../data/materials";
import type { Screen } from "../types";

type NutritionScreenProps = {
  fullAccess: boolean;
  completedMaterialIds: string[];
  onCompleteMaterial: (id: string) => void;
  onNavigate: (screen: Screen) => void;
};

export function NutritionScreen({
  fullAccess,
  completedMaterialIds,
  onCompleteMaterial,
  onNavigate,
}: NutritionScreenProps) {
  const nutritionMaterials = materials.filter((material) => material.category === "nutrition");

  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>nutrition</h1>
          <p>Пространство нутрициологии</p>
        </div>
      </header>

      <section className="story-card nutrition-story">
        <div>
          <h2>питание без крайностей</h2>
          <p>
            В этом разделе собраны общие материалы о ритме питания, привычках и внимательности к
            себе. Здесь нет диагнозов, диетических назначений или медицинских планов.
          </p>
        </div>
        <VisualScene tone="nutrition" compact />
      </section>

      <section className="section-stack">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">материалы</span>
            <h2>Nutrition preview</h2>
          </div>
        </div>

        {nutritionMaterials.map((material) => (
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

      {!fullAccess ? (
        <PaywallCard
          title="Расширенные материалы закрыты"
          description="Полный доступ открывает премиальные темы по привычкам, ритму питания и восстановлению."
          ctaLabel="Смотреть Vedara Premium"
          onCta={() => onNavigate("product-detail")}
        />
      ) : null}

      <SafetyNote />
    </div>
  );
}
