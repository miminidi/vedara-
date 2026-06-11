import { BookOpen, CheckCircle2, LockKeyhole } from "lucide-react";
import type { Material } from "../types";

type MaterialCardProps = {
  material: Material;
  fullAccess: boolean;
  completed: boolean;
  onComplete: () => void;
  onLocked: () => void;
};

export function MaterialCard({ material, fullAccess, completed, onComplete, onLocked }: MaterialCardProps) {
  const locked = material.access === "full" && !fullAccess;

  return (
    <article className={`material-card ${locked ? "locked" : ""}`} data-testid={`material-${material.id}`}>
      <div className="material-icon" aria-hidden="true">
        {locked ? <LockKeyhole size={20} /> : completed ? <CheckCircle2 size={20} /> : <BookOpen size={20} />}
      </div>
      <div className="material-copy">
        <div className="card-kicker">
          <span>{material.category}</span>
          {material.readTimeMin ? <span>{material.readTimeMin} мин</span> : null}
        </div>
        <h3>{material.title}</h3>
        <p>{material.description}</p>
        <button
          type="button"
          data-testid={`complete-material-${material.id}`}
          className={locked ? "text-button" : completed ? "text-button completed" : "text-button"}
          onClick={locked ? onLocked : onComplete}
        >
          {locked ? "Открыть доступ" : completed ? "Изучено" : "Отметить изученным"}
        </button>
      </div>
    </article>
  );
}
