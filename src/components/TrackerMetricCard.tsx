interface TrackerMetricCardProps {
  title: string;
  value: string;
  description: string;
}

export function TrackerMetricCard({ title, value, description }: TrackerMetricCardProps) {
  return (
    <article className="tracker-metric-card">
      <span className="tracker-metric-card__title">{title}</span>
      <strong className="tracker-metric-card__value">{value}</strong>
      <span className="tracker-metric-card__description">{description}</span>
    </article>
  );
}
