import { assets } from "../data/assets";
import { CabinetCircleIcon } from "./icons/NavIcons";

interface BrandHeaderProps {
  onCabinetClick?: () => void;
}

export function BrandHeader({ onCabinetClick }: BrandHeaderProps) {
  return (
    <header className="brand-header" aria-label="Vedara">
      <div>
        <img className="brand-logo" src={assets.logoFull} alt="Vedara" />
        <div className="brand-mini">экосистема для твоего здоровья</div>
      </div>
      <button className="icon-button" type="button" aria-label="Открыть кабинет" onClick={onCabinetClick}>
        <CabinetCircleIcon size={22} />
      </button>
    </header>
  );
}
