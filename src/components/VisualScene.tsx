import type { CoverTone } from "../types";

type VisualSceneProps = {
  tone: CoverTone;
  compact?: boolean;
  className?: string;
};

export function VisualScene({ tone, compact = false, className = "" }: VisualSceneProps) {
  return (
    <div
      className={`visual-scene visual-${tone} ${compact ? "visual-compact" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className="scene-arc" />
      <span className="scene-mat" />
      <span className="scene-plant scene-plant-left" />
      <span className="scene-plant scene-plant-right" />
      <span className="scene-person scene-person-a" />
      <span className="scene-person scene-person-b" />
      <span className="scene-bowl" />
      <span className="scene-card" />
    </div>
  );
}
