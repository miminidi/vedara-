import { LockKeyhole } from "lucide-react";

type ProgressCardProps = {
  value: string;
  label: string;
  locked?: boolean;
};

export function ProgressCard({ value, label, locked = false }: ProgressCardProps) {
  return (
    <article className={`progress-card ${locked ? "locked" : ""}`}>
      {locked ? <LockKeyhole size={24} aria-hidden="true" /> : <strong>{value}</strong>}
      <span>{label}</span>
    </article>
  );
}
