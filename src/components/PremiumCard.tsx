import type { AccessState, ScreenId } from "../data/types";
import { premiumCopy } from "../data/content";
import { CrownIcon } from "./icons/NavIcons";

interface PremiumCardProps {
  access: AccessState;
  onTrial: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export function PremiumCard({ access, onTrial, onNavigate }: PremiumCardProps) {
  const isActive = access !== "guest";

  return (
    <section className="premium-card">
      <div className="premium-icon">
        <CrownIcon size={24} />
      </div>
      <div>
        <h3>{premiumCopy.title}</h3>
        <p>{isActive ? premiumCopy.activeText : premiumCopy.guestText}</p>
        <div className="u-wrap">
          <button className="button button--primary" type="button" onClick={isActive ? () => onNavigate("profile") : onTrial}>
            {isActive ? premiumCopy.activeCta : premiumCopy.guestCta}
          </button>
          <button className="button button--secondary" type="button" onClick={() => onNavigate("materials")}>
            {premiumCopy.tariffsCta}
          </button>
        </div>
      </div>
    </section>
  );
}
