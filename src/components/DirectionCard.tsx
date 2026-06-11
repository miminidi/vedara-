import type { EcosystemDirection, ScreenId } from "../data/types";
import { uiCopy } from "../data/content";

interface DirectionCardProps {
  item: EcosystemDirection;
  onNavigate: (screen: ScreenId) => void;
}

export function DirectionCard({ item, onNavigate }: DirectionCardProps) {
  return (
    <button className="direction-card" type="button" onClick={() => onNavigate(item.screen)}>
      <div className="direction-card__index">{item.index}</div>
      <div>
        <h3 className="direction-card__title">{item.title}</h3>
        <p className="direction-card__subtitle">{item.subtitle}</p>
        <p className="direction-card__desc">{item.description}</p>
      </div>
      <span className="badge">{uiCopy.open}</span>
    </button>
  );
}
