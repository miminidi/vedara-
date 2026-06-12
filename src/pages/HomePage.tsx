import { BrandHeader } from "../components/BrandHeader";
import { SectionHead } from "../components/SectionHead";
import { homeAboutContent, homeEcosystemCards, homeHubContent, teamMembers } from "../data/content";
import type { AccessState, ScreenId } from "../data/types";
import type { KeyboardEvent } from "react";

interface HomePageProps {
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
}

export function HomePage({ onNavigate, onSetAccess }: HomePageProps) {
  const leadershipMembers = teamMembers.filter((member) => member.group === "leadership");
  const staffMembers = teamMembers.filter((member) => member.group === "staff");

  const handleAction = (target: ScreenId, access?: AccessState) => {
    if (access) {
      onSetAccess(access);
    }
    onNavigate(target);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, target?: ScreenId) => {
    if (!target || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    onNavigate(target);
  };

  return (
    <main className="screen">
      <BrandHeader />

      <section className="premium-card home-tariff-card">
        <div>
          <span className="section-kicker">{homeHubContent.tariff.kicker}</span>
          <h3>{homeHubContent.tariff.title}</h3>
          <p>{homeHubContent.tariff.text}</p>
          <div className="home-ecosystem-card__actions">
            {homeHubContent.tariff.actions.map((action) => (
              <button
                className={`button ${action.variant === "primary" ? "button--primary" : "button--secondary"}`}
                key={action.id}
                type="button"
                onClick={() => handleAction(action.target as ScreenId, action.access as AccessState | undefined)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <SectionHead kicker={homeHubContent.directionsKicker} title={homeHubContent.directionsTitle} />
      <div className="grid grid--two">
        {homeEcosystemCards.map((card) => {
          const isClickable = Boolean(card.target);

          return (
          <article
            aria-label={isClickable ? `${card.title}: ${card.cta ?? "Открыть"}` : undefined}
            className={`program-card home-ecosystem-card ${isClickable ? "home-ecosystem-card--clickable" : ""}`}
            key={card.id}
            onClick={isClickable ? () => onNavigate(card.target as ScreenId) : undefined}
            onKeyDown={(event) => handleCardKeyDown(event, card.target)}
            role={isClickable ? "link" : undefined}
            tabIndex={isClickable ? 0 : undefined}
          >
            <div className="program-card__top">
              <h3>{card.title}</h3>
              <span className="badge">{card.meta}</span>
            </div>
            <p>{card.description}</p>
            {card.cta && card.target ? (
              <button
                className="button button--ghost u-mt-4"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate(card.target);
                }}
              >
                {card.cta}
              </button>
            ) : null}
          </article>
          );
        })}
      </div>

      <section className="home-about-section">
        <SectionHead kicker={homeAboutContent.kicker} title={homeAboutContent.title} />
        <p className="home-about-section__subtitle">{homeAboutContent.subtitle}</p>

        <div className="team-group">
          <h3 className="team-group__title">{homeAboutContent.leadershipTitle}</h3>
          <div className="grid team-grid team-grid--leadership">
            {leadershipMembers.map((member) => (
              <article className="team-card team-card--leadership" key={member.id}>
                <div className="team-avatar" aria-hidden="true">
                  {member.photoUrl ? <img src={member.photoUrl} alt="" /> : <span>{member.initials}</span>}
                </div>
                <div className="team-card__content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="team-group">
          <h3 className="team-group__title">{homeAboutContent.staffTitle}</h3>
          <div className="grid team-grid">
            {staffMembers.map((member) => (
              <article className="team-card" key={member.id}>
                <div className="team-avatar team-avatar--sm" aria-hidden="true">
                  {member.photoUrl ? <img src={member.photoUrl} alt="" /> : <span>{member.initials}</span>}
                </div>
                <div className="team-card__content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className="button button--secondary home-about-section__cta" type="button" onClick={() => onNavigate("club")}>
          {homeAboutContent.cta}
        </button>
      </section>
    </main>
  );
}
