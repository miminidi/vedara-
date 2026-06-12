import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import { checkMetrics, habits, trackerContent } from "../data/content";
import type { CheckMetricId, DailyCheckIn, ScreenId } from "../data/types";

type CheckInPatch = Partial<Pick<DailyCheckIn, "energy" | "mood" | "sleep" | "stress" | "note">>;

interface ClubPageProps {
  checkIn?: DailyCheckIn;
  completedHabits: string[];
  onNavigate: (screen: ScreenId) => void;
  onSaveCheckIn: (patch?: CheckInPatch) => void;
  onToggleHabit: (habitId: string) => void;
}

const metricDefaults: Record<CheckMetricId, number> = {
  energy: 6,
  mood: 7,
  sleep: 6,
  stress: 4,
};

function metricValue(checkIn: DailyCheckIn | undefined, id: CheckMetricId) {
  return checkIn?.[id] ?? metricDefaults[id];
}

function weekDays() {
  const formatter = new Intl.DateTimeFormat("ru-RU", { weekday: "short" });
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return formatter.format(date).replace(".", "");
  });
}

export function ClubPage({ checkIn, completedHabits, onNavigate, onSaveCheckIn, onToggleHabit }: ClubPageProps) {
  const progress = Math.round((completedHabits.length / habits.length) * 100);
  const streak = Math.min(7, completedHabits.length + (checkIn ? 1 : 0));

  return (
    <main className="screen">
      <ScreenHeader
        kicker={trackerContent.header.kicker}
        title={trackerContent.header.title}
        subtitle={trackerContent.header.subtitle}
      />

      <section className="panel">
        <div className="stat-row stat-row--compact">
          <div className="stat-card"><span className="stat-value">{streak}</span><span className="stat-label">streak</span></div>
          <div className="stat-card"><span className="stat-value">{progress}%</span><span className="stat-label">день</span></div>
          <div className="stat-card"><span className="stat-value">{completedHabits.length}/{habits.length}</span><span className="stat-label">привычки</span></div>
          <div className="stat-card"><span className="stat-value">{checkIn ? "yes" : "no"}</span><span className="stat-label">check-in</span></div>
        </div>
        <div className="tracker-week" aria-label={trackerContent.weekTitle}>
          {weekDays().map((day, index) => (
            <div key={`${day}-${index}`} className={`day-chip ${index >= 7 - streak ? "is-active" : ""}`}>{day}</div>
          ))}
        </div>
        <ProgressBar value={progress} label={`Прогресс дня ${progress}%`} />
      </section>

      <SectionHead kicker={`${completedHabits.length}/${habits.length}`} title={trackerContent.habitsTitle} />
      <div className="task-list">
        {habits.map((habit) => {
          const done = completedHabits.includes(habit.id);
          return (
            <WellnessRow
              key={habit.id}
              title={habit.title}
              description={habit.description}
              icon={habit.category}
              chip={done ? "Готово" : habit.target}
              done={done}
              onClick={() => onToggleHabit(habit.id)}
            />
          );
        })}
      </div>

      <SectionHead kicker="1-10" title={trackerContent.conditionTitle} />
      <div className="scale-grid">
        {checkMetrics.map((metric) => {
          const value = metricValue(checkIn, metric.id);
          const nextValue = value >= 10 ? 1 : value + 1;

          return (
            <button
              className="scale-card"
              key={metric.id}
              type="button"
              onClick={() => onSaveCheckIn({ [metric.id]: nextValue } as CheckInPatch)}
            >
              <span className="metric-card__label">{metric.label}</span>
              <strong>{value}</strong>
              <small>{metric.minLabel} / {metric.maxLabel}</small>
            </button>
          );
        })}
      </div>

      <div className="button-row u-mt-5">
        <button className="button button--primary u-full" type="button" onClick={() => onSaveCheckIn()}>
          {trackerContent.saveDay}
        </button>
        <button className="button button--ghost u-full" type="button" onClick={() => onNavigate("home")}>
          {trackerContent.homeCta}
        </button>
      </div>
    </main>
  );
}
