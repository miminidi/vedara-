import { LockKeyhole } from "lucide-react";
import type { CoverTone } from "../types";
import { VisualScene } from "./VisualScene";

type SectionCardProps = {
  title: string;
  subtitle: string;
  tone: CoverTone;
  locked?: boolean;
  meta?: string;
  testId?: string;
  onClick: () => void;
};

export function SectionCard({ title, subtitle, tone, locked = false, meta, testId, onClick }: SectionCardProps) {
  return (
    <button
      type="button"
      data-testid={testId}
      className={`section-card ${locked ? "locked" : ""}`}
      onClick={onClick}
    >
      <VisualScene tone={tone} compact />
      <div className="section-card-copy">
        {meta ? <span className="eyebrow">{meta}</span> : null}
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {locked ? (
        <span className="lock-badge" aria-label="Закрыто">
          <LockKeyhole size={18} />
        </span>
      ) : null}
    </button>
  );
}
