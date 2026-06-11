import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import { productCtas, protocols, protocolsContent, safetyNotes } from "../data/content";
import type { AccessState, LeadType, ProtocolTaskKind, ScreenId } from "../data/types";
import type { WellnessIconName } from "../components/icons/WellnessIcons";

interface ClinicPageProps {
  access: AccessState;
  completedProtocolTasks: string[];
  onCreateLead: (type: LeadType) => void;
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
  onToggleProtocolTask: (taskId: string) => void;
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

export function ClinicPage({
  access,
  completedProtocolTasks,
  onCreateLead,
  onNavigate,
  onSetAccess,
  onToggleProtocolTask,
}: ClinicPageProps) {
  const activeProtocol = protocols[0];
  const activeDay = activeProtocol.days[0];
  const completedTodayTasks = activeDay.tasks.filter((task) => completedProtocolTasks.includes(task.id)).length;
  const progress = Math.round((completedTodayTasks / activeDay.tasks.length) * 100);
  const clinicCta = productCtas.find((item) => item.id === "clinic");

  return (
    <main className="screen">
      <ScreenHeader
        kicker={protocolsContent.header.kicker}
        title={protocolsContent.header.title}
        subtitle={protocolsContent.header.subtitle}
      />

      <section className="protocol-card">
        <div className="program-card__top">
          <span className="badge badge--gold">день {activeProtocol.currentDay}</span>
          <span className="badge">{activeProtocol.durationDays} дней</span>
        </div>
        <h2>{activeProtocol.title}</h2>
        <p>{activeProtocol.subtitle}</p>
        <ProgressBar value={progress} label={`Прогресс протокола ${progress}%`} />
      </section>

      <SectionHead kicker={activeDay.title} title={protocolsContent.tasksTitle} />
      <div className="task-list">
        {activeDay.tasks.map((task) => {
          const done = completedProtocolTasks.includes(task.id);
          return (
            <WellnessRow
              key={task.id}
              title={task.title}
              description={task.description}
              icon={protocolTaskIcon(task.kind)}
              chip={done ? "Готово" : task.minutes ? `${task.minutes} мин` : task.kind}
              done={done}
              onClick={() => onToggleProtocolTask(task.id)}
            />
          );
        })}
      </div>

      <SectionHead kicker="catalog" title={protocolsContent.catalogTitle} />
      <div className="grid">
        {protocols.map((protocol) => {
          const locked = protocol.access === "premium" && access === "guest";
          return (
            <WellnessRow
              key={protocol.id}
              title={protocol.title}
              description={protocol.subtitle}
              icon="protocol"
              chip={locked ? "Premium" : `${protocol.durationDays} дней`}
              onClick={() => (locked ? onSetAccess("trial") : onToggleProtocolTask(protocol.days[0].tasks[0].id))}
            />
          );
        })}
      </div>

      {clinicCta ? (
        <section className="premium-card">
          <div>
            <span className="section-kicker">Vedara Clinic</span>
            <h3>{clinicCta.title}</h3>
            <p>{clinicCta.text}</p>
            <button className="button button--primary" type="button" onClick={() => onCreateLead("clinic")}>
              {protocolsContent.clinicCta}
            </button>
          </div>
        </section>
      ) : null}

      <div className="notice">
        {safetyNotes.map((note) => (
          <div key={note}>• {note}</div>
        ))}
      </div>
    </main>
  );
}
