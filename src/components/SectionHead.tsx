import type { ReactNode } from "react";

interface SectionHeadProps {
  kicker?: string;
  title: string;
  action?: ReactNode;
}

export function SectionHead({ kicker, title, action }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div>
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2 className="section-title">{title}</h2>
      </div>
      {action}
    </div>
  );
}
