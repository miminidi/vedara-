interface ProgressBarProps {
  value: number;
  label: string;
}

function normalizeProgress(value: number) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return Math.round(clamped / 10) * 10;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const normalizedValue = Math.max(0, Math.min(100, Math.round(value)));
  const visualStep = normalizeProgress(normalizedValue);

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedValue}
    >
      <span className={`progress-bar__fill progress-bar__fill--${visualStep}`} />
    </div>
  );
}
