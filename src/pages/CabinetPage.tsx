import { SectionHead } from "../components/SectionHead";
import { ScreenHeader } from "../components/ScreenHeader";
import { cabinetContent, lessons, protocols, sessions, uiCopy } from "../data/content";
import type { AccessState } from "../data/types";

interface CabinetPageProps {
  access: AccessState;
  completedLessons: string[];
  practiceCount: number;
  onToggleLesson: (id: string) => void;
  onAddPractice: () => void;
}

function accessLabel(access: AccessState) {
  return cabinetContent.accessLabels[access];
}

export function CabinetPage({ access, completedLessons, practiceCount, onToggleLesson, onAddPractice }: CabinetPageProps) {
  const completion = Math.min(100, Math.round(((completedLessons.length + practiceCount) / 8) * 100));
  const activeDays = Math.min(7, 3 + practiceCount);

  return (
    <main className="screen">
      <ScreenHeader
        kicker={cabinetContent.header.kicker}
        title={cabinetContent.header.title}
        subtitle={cabinetContent.header.subtitle(activeDays, accessLabel(access))}
      />

      <div className="stat-row">
        <div className="stat-card"><span className="stat-value">{activeDays}</span><span className="stat-label">{cabinetContent.stats.streak}</span></div>
        <div className="stat-card"><span className="stat-value">{completion}%</span><span className="stat-label">{cabinetContent.stats.completion}</span></div>
        <div className="stat-card"><span className="stat-value">3/8</span><span className="stat-label">{cabinetContent.stats.sessions}</span></div>
        <div className="stat-card"><span className="stat-value">{lessons.length}</span><span className="stat-label">{cabinetContent.stats.lessons}</span></div>
      </div>

      <SectionHead kicker={cabinetContent.week.kicker} title={cabinetContent.week.title} action={<button className="section-action" type="button" onClick={onAddPractice}>{cabinetContent.week.action}</button>} />
      <div className="panel">
        <div className="tracker-week">
          {cabinetContent.week.days.map((day, index) => (
            <div key={day} className={`day-chip ${index < activeDays ? "is-active" : ""}`}>{day}</div>
          ))}
        </div>
        <p>{cabinetContent.week.summary(completion, activeDays)}</p>
      </div>

      <SectionHead kicker={cabinetContent.lessons.kicker} title={cabinetContent.lessons.title} />
      <div className="grid">
        {lessons.map((lesson, index) => {
          const done = completedLessons.includes(lesson.id);
          return (
            <button
              className={`lesson-row ${done ? "is-done" : ""}`}
              key={lesson.id}
              type="button"
              onClick={() => onToggleLesson(lesson.id)}
            >
              <span className="lesson-index">{done ? "✓" : index + 1}</span>
              <span>
                <span className="lesson-title">{lesson.title}</span>
                <span className="lesson-meta">{lesson.duration} · {lesson.access}</span>
              </span>
              <span className="badge">{done ? cabinetContent.lessons.done : cabinetContent.lessons.open}</span>
            </button>
          );
        })}
      </div>

      <SectionHead kicker={cabinetContent.protocols.kicker} title={cabinetContent.protocols.title} />
      <div className="grid">
        {protocols.map((item) => (
          <div className="protocol-row" key={item.title}>
            <span className="lesson-index">◇</span>
            <span>
              <span className="lesson-title">{item.title}</span>
              <span className="lesson-meta">{item.status}</span>
            </span>
            <span className="badge">{uiCopy.protocol}</span>
          </div>
        ))}
      </div>

      <SectionHead kicker={cabinetContent.sessions.kicker} title={cabinetContent.sessions.title} />
      <div className="grid">
        {sessions.map((item) => (
          <div className="session-row" key={item.title}>
            <span className="lesson-index">✦</span>
            <span>
              <span className="lesson-title">{item.title}</span>
              <span className="lesson-meta">{item.status}</span>
            </span>
            <span className="badge badge--gold">{uiCopy.clinicBadge}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
