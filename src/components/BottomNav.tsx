import type { ScreenId } from "../data/types";
import { assets } from "../data/assets";
import { brandContent, navItems } from "../data/content";
import { NavIcon } from "./icons/NavIcons";

interface BottomNavProps {
  active?: ScreenId;
  screen?: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export function BottomNav({ active, screen, onNavigate }: BottomNavProps) {
  const current = active ?? screen ?? "home";

  return (
    <nav className="bottom-dock" aria-label={brandContent.navAria}>
      {navItems.map((item) => {
        const isActive = current === item.id;

        if (item.center) {
          return (
            <button
              key={item.id}
              className={`bottom-dock__center ${isActive ? "is-active" : ""}`}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="bottom-dock__center-mark" aria-hidden="true">
                <img src={assets.logoMark} alt="" />
              </span>
              <span className="bottom-dock__label">{item.label}</span>
            </button>
          );
        }

        return (
          <button
            key={item.id}
            className={`bottom-dock__item ${isActive ? "is-active" : ""}`}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="bottom-dock__icon">
              <NavIcon screen={item.id} />
            </span>
            <span className="bottom-dock__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
