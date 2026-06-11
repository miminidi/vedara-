import type { ReactNode } from "react";
import { WellnessIcon, type WellnessIconName } from "./icons/WellnessIcons";

interface WellnessRowProps {
  title: string;
  description: string;
  icon: WellnessIconName;
  chip?: ReactNode;
  done?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function WellnessRow({ title, description, icon, chip, done = false, onClick, className = "", ariaLabel }: WellnessRowProps) {
  const rowClassName = `tracker-row ${done ? "is-done" : ""} ${onClick ? "is-clickable" : ""} ${className}`.trim();
  const content = (
    <>
      <span className="tracker-row__icon" aria-hidden="true">
        <WellnessIcon name={icon} />
      </span>
      <span className="tracker-row__content">
        <span className="tracker-row__title">{title}</span>
        <span className="tracker-row__description">{description}</span>
      </span>
      {chip ? <span className="tracker-row__chip">{chip}</span> : null}
    </>
  );

  if (onClick) {
    return (
      <button className={rowClassName} type="button" onClick={onClick} aria-label={ariaLabel ?? title}>
        {content}
      </button>
    );
  }

  return <article className={rowClassName}>{content}</article>;
}
