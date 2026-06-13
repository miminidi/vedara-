import { BrandHeader } from "../components/BrandHeader";
import { SectionHead } from "../components/SectionHead";
import {
  homeAboutContent,
  homeEcosystemCards,
  homeHubContent,
  teamMembers,
} from "../data/content";
import type { AccessState, ScreenId } from "../data/types";
import type { KeyboardEvent } from "react";

interface HomePageProps {
  access: AccessState;
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
}

function hasClubAccess(access: AccessState) {
  return access === "trial" || access === "clubMonthly" || access === "clubAnnual";
}

export function HomePage({ access, onNavigate, onSetAccess }: HomePageProps) {
  const isClubActive = hasClubAccess(access);
  const clubCard = homeEcosystemCards.find((card) => card.id === "longevita");
  const otherCards = homeEcosystemCards.filter((card) => card.id !== "longevita");

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

      {clubCard && clubCard.target ? (
        <article
          aria-label={`${clubCard.title}: ${isClubActive ? homeHubContent.tariff.activeCta : "Открыть"}`}
          className="program-card home-club-banner home-ecosystem-card--clickable"
          onClick={() => onNavigate(clubCard.target as ScreenId)}
          onKeyDown={(event) => handleCardKeyDown(event, clubCard.target)}
          role="link"
          tabIndex={0}
        >
          <div className="program-card__top">
            <h3>{clubCard.title}</h3>
            <span className="badge badge--gold">{clubCard.meta}</span>
          </div>
          <p>{clubCard.description}</p>
          <div className="home-club-offer">
            <span>{homeHubContent.tariff.title}</span>
            <p>{homeHubContent.tariff.text}</p>
          </div>
          {isClubActive ? (
            <button
              className="button button--primary u-mt-4"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onNavigate(clubCard.target as ScreenId);
              }}
            >
              {homeHubContent.tariff.activeCta}
            </button>
          ) : (
            <div className="home-ecosystem-card__actions">
              {homeHubContent.tariff.actions.map((action) => (
                <button
                  className={`button ${action.variant === "primary" ? "button--primary" : "button--secondary"}`}
                  key={action.id}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAction(action.target as ScreenId, action.access as AccessState | undefined);
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </article>
      ) : null}

      <div className="grid grid--two">
        {otherCards.map((card) => {
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
                  onNavigate(card.target as ScreenId);
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

        <div className="grid team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-avatar team-avatar--sm" aria-hidden="true">
                {member.photoUrl ? <img src={member.photoUrl} alt="" /> : <span>{member.initials}</span>}
              </div>
              <div className="team-card__content">
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
