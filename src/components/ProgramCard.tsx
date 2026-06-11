import type { Program } from "../data/types";

interface ProgramCardProps {
  program: Program;
  actionLabel?: string;
  onAction?: () => void;
}

export function ProgramCard({ program, actionLabel, onAction }: ProgramCardProps) {
  return (
    <article className="program-card">
      <div className="program-card__top">
        <div>
          {program.eyebrow ? <span className="badge">{program.eyebrow}</span> : null}
          <h3>{program.title}</h3>
        </div>
        <span className="badge badge--gold">{program.tag}</span>
      </div>
      <p>{program.description}</p>
      {actionLabel ? (
        <button className="button button--ghost u-mt-4" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  );
}
