import { Crown, Dumbbell, Leaf, LockKeyhole, Sparkles } from "lucide-react";
import type { HomeSpace } from "../data/appContent";

type SpaceCardProps = {
  space: HomeSpace;
  image: string;
  unlockedMeta?: string;
  onClick: () => void;
};

const icons = {
  body: Dumbbell,
  nutrition: Leaf,
  wellness: Crown,
  rehabilitation: Sparkles,
} as const;

export function SpaceCard({ space, image, unlockedMeta, onClick }: SpaceCardProps) {
  const Icon = icons[space.id];

  return (
    <button
      type="button"
      data-testid={space.testId}
      className={`space-card ${space.locked ? "locked" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt="" />
      <span className="space-card-shade" />
      <span className="space-card-icon" aria-hidden="true">
        {space.locked ? <LockKeyhole size={18} /> : <Icon size={20} />}
      </span>
      <span className="space-card-copy">
        <span className="eyebrow">{unlockedMeta ?? space.meta}</span>
        <strong>{space.title}</strong>
        <span>{space.subtitle}</span>
      </span>
    </button>
  );
}
