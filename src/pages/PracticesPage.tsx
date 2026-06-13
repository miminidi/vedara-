import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import { materials, practicesContent, protocols } from "../data/content";
import type { AccessState, MaterialKind, ProtocolTaskKind, ScreenId } from "../data/types";
import type { WellnessIconName } from "../components/icons/WellnessIcons";

interface PracticesPageProps {
  completedMaterials: string[];
  completedProtocolTasks: string[];
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
  onToggleMaterial: (materialId: string) => void;
  onToggleProtocolTask: (taskId: string) => void;
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

function protocolTaskIcon(kind: ProtocolTaskKind): WellnessIconName {
  if (kind === "practice") {
    return "practice";
  }
  if (kind === "lesson") {
    return "material";
  }
  return "protocol";
}

export function PracticesPage({
  completedMaterials,
  completedProtocolTasks,
  onNavigate,
  onSetAccess,
  onToggleMaterial,
  onToggleProtocolTask,
}: PracticesPageProps) {
  const totalProtocolTasks = protocols.reduce((count, protocol) => count + protocol.days[0].tasks.length, 0);
  const totalItems = materials.length + totalProtocolTasks;
  const completedCount = completedMaterials.length + completedProtocolTasks.length;
  const progress = Math.round((completedCount / totalItems) * 100);

  return (
    <main className="screen">
      <ScreenHeader
        kicker={practicesContent.header.kicker}
        title={practicesContent.header.title}
        subtitle={practicesContent.header.subtitle}
      />

      <section className="panel">
        <div className="program-card__top">
          <div>
            <span className="section-kicker">{practicesContent.progressTitle}</span>
            <h2 className="panel-title">{completedCount}/{totalItems}</h2>
          </div>
          <span className="badge">{progress}%</span>
        </div>
        <ProgressBar value={progress} label={`${practicesContent.progressLabel} ${progress}%`} />
      </section>

      <SectionHead kicker={practicesContent.listKicker} title={practicesContent.listTitle} />
      <div className="task-list">
        {materials.map((material) => {
          const done = completedMaterials.includes(material.id);
          const locked = material.access !== "free" && !done;

          return (
            <WellnessRow
              key={material.id}
              title={material.title}
              description={material.description}
              icon={materialIcon(material.kind)}
              chip={done ? practicesContent.completed : locked ? practicesContent.premium : material.duration}
              done={done}
              onClick={() => (locked ? onSetAccess("trial") : onToggleMaterial(material.id))}
            />
          );
        })}
      </div>

      <SectionHead kicker={practicesContent.protocolKicker} title={practicesContent.protocolTitle} />
      <div className="task-list">
        {protocols.flatMap((protocol) =>
          protocol.days[0].tasks.map((task) => {
            const done = completedProtocolTasks.includes(task.id);
            const locked = protocol.access === "premium" && !done;

            return (
              <WellnessRow
                key={task.id}
                title={task.title}
                description={task.description}
                icon={protocolTaskIcon(task.kind)}
                chip={done ? practicesContent.completed : locked ? practicesContent.premium : task.minutes ? `${task.minutes} ${practicesContent.minuteSuffix}` : protocol.title}
                done={done}
                onClick={() => (locked ? onSetAccess("trial") : onToggleProtocolTask(task.id))}
              />
            );
          }),
        )}
      </div>

      <button className="button button--primary u-full u-mt-5" type="button" onClick={() => onNavigate("tracker")}>
        {practicesContent.openTracker}
      </button>
    </main>
  );
}
