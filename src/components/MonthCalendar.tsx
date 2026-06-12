export type MonthCalendarDayStatus = "none" | "partial" | "filled";

export interface MonthCalendarDay {
  key: string;
  label: string;
  status: MonthCalendarDayStatus;
  hasCheckIn: boolean;
  isSelected: boolean;
  isToday: boolean;
}

interface MonthCalendarProps {
  ariaLabel: string;
  kicker: string;
  legend: {
    none: string;
    partial: string;
    filled: string;
  };
  title: string;
  days: MonthCalendarDay[];
  startOffset: number;
  weekdays: string[];
  onSelectDay: (date: string) => void;
}

export function MonthCalendar({
  ariaLabel,
  kicker,
  legend,
  title,
  days,
  startOffset,
  weekdays,
  onSelectDay,
}: MonthCalendarProps) {
  return (
    <section className="panel tracker-month-card" aria-label={title}>
      <div className="program-card__top">
        <div>
          <span className="section-kicker">{kicker}</span>
          <h2 className="panel-title">{title}</h2>
        </div>
      </div>
      <div className="month-calendar__weekdays" aria-hidden="true">
        {weekdays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="month-calendar__grid">
        {Array.from({ length: startOffset }, (_, index) => (
          <span className="month-calendar__spacer" key={`spacer-${index}`} aria-hidden="true" />
        ))}
        {days.map((day) => (
          <button
            className={`month-calendar__day is-${day.status} ${day.hasCheckIn ? "has-check-in" : ""} ${
              day.isSelected ? "is-selected" : ""
            } ${day.isToday ? "is-today" : ""}`.trim()}
            key={day.key}
            type="button"
            onClick={() => onSelectDay(day.key)}
            aria-pressed={day.isSelected}
          >
            <span>{day.label}</span>
          </button>
        ))}
      </div>
      <div className="month-calendar__legend" aria-label={ariaLabel}>
        <span>
          <i className="is-none" />
          {legend.none}
        </span>
        <span>
          <i className="is-partial" />
          {legend.partial}
        </span>
        <span>
          <i className="is-filled" />
          {legend.filled}
        </span>
      </div>
    </section>
  );
}
