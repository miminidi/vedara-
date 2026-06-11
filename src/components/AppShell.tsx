import type { ReactNode } from "react";
import type { Screen } from "../types";
import { BottomNav } from "./BottomNav";

type AppShellProps = {
  screen: Screen;
  onNavigate: (screen: Screen) => void;
  children: ReactNode;
};

export function AppShell({ screen, onNavigate, children }: AppShellProps) {
  return (
    <div className="app-frame">
      <main className="app-content">{children}</main>
      <BottomNav screen={screen} onNavigate={onNavigate} />
    </div>
  );
}
