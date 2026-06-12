import type { ScreenId } from "../data/types";
import { uiCopy } from "../data/content";

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  kicker?: string;
  meta?: string;
  onBack?: () => void;
}

export function ScreenHeader({ title, subtitle, kicker, meta, onBack }: ScreenHeaderProps) {
  return (
    <header className="screen-header">
      {onBack ? (
        <div className="back-row">
          <button className="button button--ghost" type="button" onClick={onBack}>{uiCopy.back}</button>
        </div>
      ) : null}
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h1 className="screen-heading">{title}</h1>
      {meta ? <p className="screen-header__meta">{meta}</p> : null}
      <p className="screen-subtitle">{subtitle}</p>
    </header>
  );
}
