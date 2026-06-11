import type { ScreenId } from "../data/types";
import { navItems } from "../data/content";

interface BottomNavProps {
  active?: string;
  screen?: string;
  onNavigate: (screen: any) => void;
}

export function BottomNav({ active, screen, onNavigate }: BottomNavProps) {
  const current = active ?? screen ?? "home";

  return (
    <nav className="bottom-nav" aria-label="Основная навигация">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav__item ${current === item.id ? "is-active" : ""}`}
          type="button"
          onClick={() => onNavigate(item.id)}
          aria-current={current === item.id ? "page" : undefined}
        >
          <span className="bottom-nav__icon" aria-hidden="true">{item.icon}</span>
          <span className="bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
