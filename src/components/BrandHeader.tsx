import { assets } from "../data/assets";
import { brandContent } from "../data/content";
import { CabinetCircleIcon } from "./icons/NavIcons";

interface BrandHeaderProps {
  onCabinetClick?: () => void;
}

export function BrandHeader({ onCabinetClick }: BrandHeaderProps) {
  return (
    <header className="brand-header" aria-label="Vedara">
      <img className="brand-logo" src={assets.logoFull} alt="Vedara" />
      {onCabinetClick ? (
        <button className="icon-button brand-header__cabinet" type="button" aria-label={brandContent.profileAria} onClick={onCabinetClick}>
          <CabinetCircleIcon size={22} />
        </button>
      ) : null}
    </header>
  );
}
