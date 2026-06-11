import { BrandHeader } from "../components/BrandHeader";
import { ProgressBar } from "../components/ProgressBar";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import {
  checkMetrics,
  dayPlan,
  habits,
  protocols,
  safetyNotes,
  todayContent,
} from "../data/content";
import type { AccessState, CheckMetricId, DailyCheckIn, DayPlanItem, ScreenId, UserProfile } from "../data/types";
import type { WellnessIconName } from "../components/icons/WellnessIcons";

type CheckInPatch = Partial<Pick<DailyCheckIn, "energy" | "mood" | "sleep" | "stress" | "note">>;

interface HomePageProps {
  access: AccessState;
  checkIn?: DailyCheckIn;
  completedHabits: string[];
  completedProtocolTasks: string[];
  profile: UserProfile;
  onNavigate: (screen: ScreenId) => void;
  onSaveCheckIn: (patch?: CheckInPatch) => void;
  onToggleHabit: (habitId: string) => void;
  onToggleProtocolTask: (taskId: string) => void;
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

function dayScore(checkIn?: DailyCheckIn) {
  if (!checkIn) {
    return 68;
  }

  const stressBalance = 11 - checkIn.stress;
  return Math.round(((checkIn.energy + checkIn.mood + checkIn.sleep + stressBalance) / 40) * 100);
}

function formattedToday() {
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());
}

function dayPlanIcon(item: DayPlanItem): WellnessIconName {
  if (item.habitId === "water") {
    return "water";
  }
  if (item.habitId === "nutrition") {
    return "nutrition";
  }
  if (item.habitId === "movement") {
    return "movement";
  }
  if (item.habitId === "practice-breath") {
    return "practice";
  }
  if (item.habitId === "sleep-ritual") {
    return "sleep";
  }
  if (item.action === "protocol") {
    return "protocol";
  }
  if (item.action === "material") {
    return "material";
  }
  return "practice";
}

function dayPlanChip(item: DayPlanItem, done: boolean) {
  if (done) {
    return "Готово";
  }
  if (item.action === "protocol" || item.action === "material") {
    return "Открыть";
  }
  return "Отметить";
}

export function HomePage({
  access,
  checkIn,
  completedHabits,
  completedProtocolTasks,
  profile,
  onNavigate,
  onSaveCheckIn,
  onToggleHabit,
  onToggleProtocolTask,
}: HomePageProps) {
  const score = dayScore(checkIn);
  const activeProtocol = protocols[0];
  const activeDay = activeProtocol.days[0];
  const protocolDone = activeDay.tasks.filter((task) => completedProtocolTasks.includes(task.id)).length;
  const habitDone = habits.filter((habit) => completedHabits.includes(habit.id)).length;

  return (
    <main className="screen">
      <BrandHeader onCabinetClick={() => onNavigate("profile")} />

      <section className="today-hero">
        <div>
          <span className="section-kicker">{todayContent.dateLabel}</span>
          <h1 className="hero-title">{todayContent.greeting}, {profile.name}</h1>
          <p className="hero-text">{formattedToday()} · {profile.focus}</p>
          <div className="button-row">
            <button className="button button--primary" type="button" onClick={() => onSaveCheckIn()}>
              {todayContent.primaryCta}
            </button>
            <button className="button button--secondary" type="button" onClick={() => onToggleHabit("practice-breath")}>
              {todayContent.practiceCta}
            </button>
          </div>
        </div>
        <div className="score-card" aria-label={`${todayContent.scoreLabel}: ${score}`}>
          <span className="score-card__value">{score}</span>
          <span className="score-card__label">{todayContent.scoreLabel}</span>
        </div>
      </section>

      <SectionHead kicker={todayContent.checkInTitle} title={todayContent.checkInText} />
      <div className="metric-grid">
        {checkMetrics.map((metric) => {
          const value = metricValue(checkIn, metric.id);
          const nextValue = value >= 10 ? 1 : value + 1;

          return (
            <button
              className="metric-card"
              key={metric.id}
              type="button"
              onClick={() => onSaveCheckIn({ [metric.id]: nextValue } as CheckInPatch)}
            >
              <span className="metric-card__label">{metric.label}</span>
              <span className="metric-card__value">{value}</span>
              <span className="metric-card__helper">{metric.helper}</span>
            </button>
          );
        })}
      </div>

      <SectionHead
        kicker={`${habitDone}/${habits.length}`}
        title={todayContent.planTitle}
        action={<button className="section-action" type="button" onClick={() => onNavigate("tracker")}>{todayContent.planAction}</button>}
      />
      <div className="task-list">
        {dayPlan.map((item) => {
          const done = item.habitId
            ? completedHabits.includes(item.habitId)
            : item.protocolTaskId
              ? completedProtocolTasks.includes(item.protocolTaskId)
              : false;

          const handleClick = () => {
            if (item.action === "protocol") {
              onNavigate("protocols");
              return;
            }
            if (item.action === "material") {
              onNavigate("materials");
              return;
            }
            if (item.habitId) {
              onToggleHabit(item.habitId);
            }
            if (item.protocolTaskId) {
              onToggleProtocolTask(item.protocolTaskId);
            }
          };

          return (
            <WellnessRow
              key={item.id}
              title={item.title}
              description={item.subtitle}
              icon={dayPlanIcon(item)}
              chip={dayPlanChip(item, done)}
              done={done}
              onClick={handleClick}
            />
          );
        })}
      </div>

      <section className="protocol-summary">
        <div>
          <span className="section-kicker">{todayContent.protocolTitle}</span>
          <h2 className="panel-title">{activeProtocol.title}</h2>
          <p>{activeDay.title}: {activeDay.summary}</p>
        </div>
        <ProgressBar
          value={Math.round((protocolDone / activeDay.tasks.length) * 100)}
          label={`Прогресс протокола ${protocolDone} из ${activeDay.tasks.length}`}
        />
        <button className="button button--ghost u-full" type="button" onClick={() => onNavigate("protocols")}>
          {todayContent.protocolCta}
        </button>
      </section>

      <section className="panel">
        <span className="section-kicker">{todayContent.focusTitle}</span>
        <h2 className="panel-title">{access === "guest" ? "Базовый режим" : "Demo доступ активен"}</h2>
        <p>{todayContent.focusText}</p>
      </section>

      <div className="notice">
        {safetyNotes.map((note) => (
          <div key={note}>• {note}</div>
        ))}
      </div>
    </main>
  );
}
