import { useMemo, useState } from "react";
import { MonthCalendar, type MonthCalendarDay } from "../components/MonthCalendar";
import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { TrackerMetricCard } from "../components/TrackerMetricCard";
import { WellnessRow } from "../components/WellnessRow";
import { checkMetrics, habits, trackerContent } from "../data/content";
import type { CheckMetricId, DailyCheckIn, ScreenId } from "../data/types";

type CheckInPatch = Partial<Pick<DailyCheckIn, "energy" | "mood" | "sleep" | "stress" | "note">>;

interface ClubPageProps {
  checkIns: Record<string, DailyCheckIn>;
  completedHabitKeys: string[];
  onNavigate: (screen: ScreenId) => void;
  onSaveCheckIn: (date: string, patch?: CheckInPatch) => void;
  onToggleHabit: (date: string, habitId: string) => void;
}

const stateScaleMax = 10;
const baselineCheckIn: CheckInPatch = {
  energy: 4,
  mood: 4,
  sleep: 4,
  stress: 7,
};

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function todayKey() {
  return formatDateKey(new Date());
}

function selectedDateLabel(dateKey: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(parseDateKey(dateKey));
}

function compactSelectedDateLabel(dateKey: string) {
  const date = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
  }).format(parseDateKey(dateKey));

  return dateKey === todayKey() ? `Сегодня · ${date}` : date;
}

function monthTitle(dateKey: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  }).format(parseDateKey(dateKey));
}

function monthStartOffset(dateKey: string) {
  const date = parseDateKey(dateKey);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return (firstDay.getDay() + 6) % 7;
}

function getCompletedHabitsForDate(completedHabitKeys: string[], dateKey: string) {
  const prefix = `${dateKey}:`;
  return completedHabitKeys.filter((key) => key.startsWith(prefix)).map((key) => key.replace(prefix, ""));
}

function metricValue(checkIn: DailyCheckIn | undefined, id: CheckMetricId) {
  return checkIn?.[id];
}

function nextMetricValue(checkIn: DailyCheckIn | undefined, id: CheckMetricId) {
  const current = metricValue(checkIn, id);
  if (current === undefined) {
    return baselineCheckIn[id] ?? 4;
  }
  return current >= stateScaleMax ? 1 : current + 1;
}

function stateScore(checkIn?: DailyCheckIn) {
  if (!checkIn) {
    return null;
  }

  const values = checkMetrics
    .map((metric) => {
      const value = metricValue(checkIn, metric.id);
      if (value === undefined) {
        return undefined;
      }
      return metric.id === "stress" ? stateScaleMax + 1 - value : value;
    })
    .filter((value): value is number => value !== undefined);

  if (!values.length) {
    return null;
  }

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.round((average / stateScaleMax) * 100);
}

function percentLabel(value: number | null) {
  return value === null ? trackerContent.noValue : `${value}%`;
}

function calculateReportScore(habitsPercent: number, hasHabitData: boolean, selectedStateScore: number | null) {
  if (hasHabitData && selectedStateScore !== null) {
    return Math.round(habitsPercent * 0.55 + selectedStateScore * 0.45);
  }
  if (hasHabitData) {
    return habitsPercent;
  }
  if (selectedStateScore !== null) {
    return selectedStateScore;
  }
  return 0;
}

function buildMonthDays(
  selectedDate: string,
  checkIns: Record<string, DailyCheckIn>,
  completedHabitKeys: string[],
): MonthCalendarDay[] {
  const selected = parseDateKey(selectedDate);
  const year = selected.getFullYear();
  const month = selected.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const currentToday = todayKey();

  return Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(year, month, index + 1);
    const key = formatDateKey(date);
    const completedHabits = getCompletedHabitsForDate(completedHabitKeys, key);
    const checkIn = checkIns[key];
    const hasCheckIn = stateScore(checkIn) !== null;
    const isFilled = hasCheckIn && completedHabits.length === habits.length;
    const isPartial = hasCheckIn || completedHabits.length > 0;

    return {
      key,
      label: String(index + 1),
      status: isFilled ? "filled" : isPartial ? "partial" : "none",
      hasCheckIn,
      isSelected: key === selectedDate,
      isToday: key === currentToday,
    };
  });
}

export function ClubPage({
  checkIns,
  completedHabitKeys,
  onNavigate,
  onSaveCheckIn,
  onToggleHabit,
}: ClubPageProps) {
  const [selectedDate, setSelectedDate] = useState(todayKey);
  const selectedCheckIn = checkIns[selectedDate];
  const selectedCompletedHabits = useMemo(
    () => getCompletedHabitsForDate(completedHabitKeys, selectedDate),
    [completedHabitKeys, selectedDate],
  );
  const selectedStateScore = stateScore(selectedCheckIn);
  const hasHabitData = selectedCompletedHabits.length > 0;
  const selectedDayIsEmpty = !hasHabitData && selectedStateScore === null;
  const habitsPercent = Math.round((selectedCompletedHabits.length / habits.length) * 100);
  const reportScore = calculateReportScore(habitsPercent, hasHabitData, selectedStateScore);
  const reportHasData = hasHabitData || selectedStateScore !== null;
  const monthDays = useMemo(
    () => buildMonthDays(selectedDate, checkIns, completedHabitKeys),
    [checkIns, completedHabitKeys, selectedDate],
  );

  const saveSelectedDay = () => {
    onSaveCheckIn(selectedDate, selectedCheckIn ? {} : baselineCheckIn);
  };

  return (
    <main className="screen">
      <ScreenHeader
        kicker={trackerContent.header.kicker}
        title={trackerContent.header.title}
        meta={compactSelectedDateLabel(selectedDate)}
        subtitle={trackerContent.header.subtitle}
      />

      <section className="panel tracker-input-card" aria-label={trackerContent.todayInputTitle}>
        <h2 className="panel-title">{trackerContent.todayInputTitle}</h2>

        {selectedDayIsEmpty ? (
          <div className="notice tracker-empty-state">
            <strong>{trackerContent.emptyTitle}</strong>
            <span>{trackerContent.emptyText}</span>
            <button
              className="button button--secondary"
              type="button"
              onClick={() => onSaveCheckIn(selectedDate, baselineCheckIn)}
            >
              {trackerContent.startCheckIn}
            </button>
          </div>
        ) : null}

        <div className="tracker-input-section">
          <h3>{trackerContent.habitsTitle}</h3>
          <div className="task-list">
            {habits.map((habit) => {
              const done = selectedCompletedHabits.includes(habit.id);
              return (
                <WellnessRow
                  key={habit.id}
                  title={habit.title}
                  description={habit.description}
                  icon={habit.category}
                  chip={done ? "Готово" : habit.target}
                  done={done}
                  onClick={() => onToggleHabit(selectedDate, habit.id)}
                />
              );
            })}
          </div>
        </div>

        <div className="tracker-input-section">
          <div className="tracker-input-section__heading">
            <h3>{trackerContent.conditionTitle}</h3>
            <span>{trackerContent.conditionScale}</span>
          </div>
          <div className="scale-grid">
            {checkMetrics.map((metric) => {
              const value = metricValue(selectedCheckIn, metric.id);

              return (
                <button
                  className={`scale-card ${value === undefined ? "is-empty" : ""}`}
                  key={metric.id}
                  type="button"
                  onClick={() =>
                    onSaveCheckIn(selectedDate, {
                      [metric.id]: nextMetricValue(selectedCheckIn, metric.id),
                    } as CheckInPatch)
                  }
                >
                  <span className="metric-card__label">{metric.label}</span>
                  <strong>{value ?? trackerContent.noValue}</strong>
                  <small>{metric.minLabel} / {metric.maxLabel}</small>
                </button>
              );
            })}
          </div>
        </div>

        <div className="button-row u-mt-5">
          <button className="button button--primary u-full" type="button" onClick={saveSelectedDay}>
            {trackerContent.saveDay}
          </button>
          <button className="button button--ghost u-full" type="button" onClick={() => onNavigate("home")}>
            {trackerContent.homeCta}
          </button>
        </div>
      </section>

      <section className="tracker-summary" aria-label={trackerContent.selectedDayTitle}>
        <TrackerMetricCard
          title={trackerContent.summary.habits.title}
          value={`${selectedCompletedHabits.length}/${habits.length}`}
          description={trackerContent.summary.habits.description}
        />
        <TrackerMetricCard
          title={trackerContent.summary.state.title}
          value={percentLabel(selectedStateScore)}
          description={trackerContent.summary.state.description}
        />
      </section>

      <section className="panel tracker-report-card" aria-label={trackerContent.reportTitle}>
        <div>
          <span className="section-kicker">{selectedDateLabel(selectedDate)}</span>
          <h2 className="panel-title">{trackerContent.reportTitle}</h2>
          <p>{reportHasData ? trackerContent.reportDescription : trackerContent.reportEmptyText}</p>
        </div>
        <div className="tracker-report-card__progress">
          <div className="tracker-report-card__score-row">
            <span>{trackerContent.reportScoreLabel}</span>
            <strong>{percentLabel(reportScore)}</strong>
          </div>
          <ProgressBar value={reportScore} label={`${trackerContent.reportScoreLabel} ${percentLabel(reportScore)}`} />
        </div>
      </section>

      <MonthCalendar
        ariaLabel={trackerContent.monthLegendAria}
        days={monthDays}
        kicker={trackerContent.monthKicker}
        legend={trackerContent.monthLegend}
        onSelectDay={setSelectedDate}
        startOffset={monthStartOffset(selectedDate)}
        title={monthTitle(selectedDate)}
        weekdays={["пн", "вт", "ср", "чт", "пт", "сб", "вс"]}
      />
    </main>
  );
}
