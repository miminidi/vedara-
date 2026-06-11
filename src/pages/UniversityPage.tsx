import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import { materials, materialsContent, productCtas } from "../data/content";
import type { AccessState, LeadType, MaterialKind, ScreenId } from "../data/types";
import type { WellnessIconName } from "../components/icons/WellnessIcons";

interface UniversityPageProps {
  completedMaterials: string[];
  onCreateLead: (type: LeadType) => void;
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
  onToggleMaterial: (materialId: string) => void;
}

function materialIcon(kind: MaterialKind): WellnessIconName {
  if (kind === "practice" || kind === "meditation") {
    return "practice";
  }
  if (kind === "club" || kind === "university") {
    return "protocol";
  }
  return "material";
}

export function UniversityPage({
  completedMaterials,
  onCreateLead,
  onNavigate,
  onSetAccess,
  onToggleMaterial,
}: UniversityPageProps) {
  const progress = Math.round((completedMaterials.length / materials.length) * 100);
  const clubCta = productCtas.find((item) => item.id === "club");
  const universityCta = productCtas.find((item) => item.id === "university");

  return (
    <main className="screen">
      <ScreenHeader
        kicker={materialsContent.header.kicker}
        title={materialsContent.header.title}
        subtitle={materialsContent.header.subtitle}
      />

      <section className="panel">
        <div className="program-card__top">
          <div>
            <span className="section-kicker">{materialsContent.progressTitle}</span>
            <h2 className="panel-title">{completedMaterials.length}/{materials.length} материалов</h2>
          </div>
          <span className="badge badge--gold">{progress}%</span>
        </div>
        <ProgressBar value={progress} label={`Прогресс материалов ${progress}%`} />
      </section>

      <SectionHead kicker="library" title={materialsContent.listTitle} />
      <div className="task-list">
        {materials.map((material) => {
          const done = completedMaterials.includes(material.id);
          return (
            <WellnessRow
              key={material.id}
              title={material.title}
              description={material.description}
              icon={materialIcon(material.kind)}
              chip={done ? materialsContent.completed : material.duration}
              done={done}
              onClick={() => onToggleMaterial(material.id)}
            />
          );
        })}
      </div>

      <SectionHead kicker="Vedara" title="Клуб и университет" />
      <div className="grid">
        {clubCta ? (
          <article className="program-card">
            <h3>{clubCta.title}</h3>
            <p>{clubCta.text}</p>
            <button className="button button--ghost u-mt-4" type="button" onClick={() => onSetAccess("trial")}>
              {clubCta.cta}
            </button>
          </article>
        ) : null}
        {universityCta ? (
          <article className="program-card">
            <h3>{universityCta.title}</h3>
            <p>{universityCta.text}</p>
            <div className="button-row u-mt-4">
              <button className="button button--primary" type="button" onClick={() => onCreateLead("university")}>
                {universityCta.cta}
              </button>
              <button className="button button--ghost" type="button" onClick={() => onNavigate("profile")}>
                Профиль
              </button>
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
