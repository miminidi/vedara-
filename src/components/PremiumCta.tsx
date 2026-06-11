import { Crown } from "lucide-react";

type PremiumCtaProps = {
  title: string;
  text: string;
  price: string;
  cta: string;
  fullAccess: boolean;
  onClick: () => void;
};

export function PremiumCta({ title, text, price, cta, fullAccess, onClick }: PremiumCtaProps) {
  return (
    <section className="premium-cta">
      <div className="premium-cta-icon" aria-hidden="true">
        <Crown size={28} />
      </div>
      <div className="premium-cta-copy">
        <h2>{title}</h2>
        <p>{fullAccess ? "Полный доступ активен в демо-режиме." : text}</p>
        <strong>{fullAccess ? "доступ открыт" : price}</strong>
      </div>
      <button type="button" className="primary-button premium-cta-button" onClick={onClick}>
        {fullAccess ? "Открыть клуб" : cta}
      </button>
    </section>
  );
}
