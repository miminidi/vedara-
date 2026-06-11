import { LockKeyhole } from "lucide-react";

type PaywallCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  onCta: () => void;
};

export function PaywallCard({ title, description, ctaLabel, onCta }: PaywallCardProps) {
  return (
    <section className="paywall-card">
      <div className="paywall-icon" aria-hidden="true">
        <LockKeyhole size={22} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button type="button" className="primary-button" onClick={onCta}>
        {ctaLabel}
      </button>
    </section>
  );
}
