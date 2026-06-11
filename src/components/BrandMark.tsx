import type { SyntheticEvent } from "react";
import { appAssets } from "../data/assets";
import { brandContent } from "../data/appContent";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  const handleLogoError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = appAssets.brand.markFallback;
  };

  return (
    <span className={`brand-mark ${compact ? "brand-mark-compact" : ""}`} aria-label={brandContent.name}>
      <img src={appAssets.brand.logoPrimary} alt="" onError={handleLogoError} />
    </span>
  );
}
