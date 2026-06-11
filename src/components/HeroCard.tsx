import { ArrowRightIcon } from "./icons/NavIcons";

interface HeroCardProps {
  image?: string;
  title: string;
  text?: string;
  cta?: string;
  onClick?: () => void;
  subtitle?: string;
  description?: string;
  tone?: string;
  badge?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function HeroCard({
  image,
  title,
  text,
  cta,
  onClick,
  subtitle,
  description,
  badge,
  actionLabel,
  onAction,
}: HeroCardProps) {
  const bodyText = text ?? description ?? subtitle;
  const buttonLabel = cta ?? actionLabel;
  const handleClick = onClick ?? onAction;

  return (
    <section className="hero-card">
      {image ? <img className="hero-card__image" src={image} alt="" aria-hidden="true" /> : null}
      <div className="hero-card__overlay" />
      <div className="hero-card__content">
        {badge ? <span className="badge badge--gold">{badge}</span> : null}
        <h1 className="hero-title">{title}</h1>
        {bodyText ? <p className="hero-text">{bodyText}</p> : null}
        {buttonLabel && handleClick ? (
          <button className="button button--primary" type="button" onClick={handleClick}>
            {buttonLabel}
            <span className="button__icon">
              <ArrowRightIcon size={16} strokeWidth={2} />
            </span>
          </button>
        ) : null}
      </div>
    </section>
  );
}
