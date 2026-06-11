interface PriceCardProps {
  title: string;
  price: string;
  suffix: string;
  features: string[];
  badge?: string;
  cta: string;
  onClick: () => void;
}

export function PriceCard({ title, price, suffix, features, badge, cta, onClick }: PriceCardProps) {
  return (
    <article className="price-card">
      <div>
        {badge ? <span className="badge badge--gold">{badge}</span> : null}
        <h3>{title}</h3>
        <div className="price">
          <strong>{price}</strong>
          <span>{suffix}</span>
        </div>
      </div>
      <ul className="check-list">
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <button className="button button--primary" type="button" onClick={onClick}>
        {cta}
      </button>
    </article>
  );
}
