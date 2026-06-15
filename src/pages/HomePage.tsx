import { BrandHeader } from "../components/BrandHeader";
import { HeroCarousel } from "../components/HeroCarousel";
import { SectionHead } from "../components/SectionHead";
import { ArrowRightIcon, CrownIcon } from "../components/icons/NavIcons";
import { assets } from "../data/assets";
import {
  ecosystemContent,
  homeAboutContent,
  homeHubContent,
  teamMembers,
} from "../data/content";
import type { AccessState, ScreenId } from "../data/types";
import type { KeyboardEvent } from "react";

const ecosystemPhotos: Record<string, string> = {
  longevita: assets.photos.ecosystemClub,
  university: assets.photos.ecosystemUniversity,
  clinic: assets.photos.ecosystemClinic,
  recovery: assets.photos.ecosystemRecovery,
};

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
  const clubDirection = ecosystemContent.directions.find((direction) => direction.id === "longevita");
  const otherDirections = ecosystemContent.directions.filter((direction) => direction.id !== "longevita");

  const handleAction = (target: ScreenId, access?: AccessState) => {
    if (access) {
      onSetAccess(access);
    }
    onNavigate(target);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, target: ScreenId) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <main className="screen">
      <BrandHeader />

      <HeroCarousel slides={ecosystemContent.heroSlides} />

      <SectionHead title={ecosystemContent.title} />

      {clubDirection ? (
        <article
          aria-label={`${clubDirection.name}: открыть клуб`}
          className="ecosystem-card ecosystem-card--wide home-ecosystem-card--clickable"
          onClick={() => onNavigate("club")}
          onKeyDown={(event) => handleCardKeyDown(event, "club")}
          role="link"
          tabIndex={0}
        >
          <span className="ecosystem-card__media" aria-hidden="true">
            <img src={ecosystemPhotos[clubDirection.id]} alt="" loading="lazy" />
          </span>
          <div className="ecosystem-card__body">
            <h4 className="ecosystem-card__title">{clubDirection.short}</h4>
            <p className="ecosystem-card__text">{clubDirection.text}</p>
            <span className="ecosystem-card__cta">
              {ecosystemContent.clubCta}
              <ArrowRightIcon size={15} />
            </span>
          </div>
        </article>
      ) : null}

      <div className="ecosystem-cards">
        {otherDirections.map((direction) => (
          <article
            aria-label={`${direction.name}: ${ecosystemContent.directionCta}`}
            className="ecosystem-card home-ecosystem-card--clickable"
            key={direction.id}
            onClick={() => onNavigate("profile")}
            onKeyDown={(event) => handleCardKeyDown(event, "profile")}
            role="link"
            tabIndex={0}
          >
            <span className="ecosystem-card__media" aria-hidden="true">
              <img src={ecosystemPhotos[direction.id]} alt="" loading="lazy" />
            </span>
            <div className="ecosystem-card__body">
              <h4 className="ecosystem-card__title">{direction.short}</h4>
              <p className="ecosystem-card__text">{direction.text}</p>
              <span className="ecosystem-card__cta ecosystem-card__cta--ghost">
                {ecosystemContent.directionCta}
                <ArrowRightIcon size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>

      <section className="premium-plate">
        <div className="premium-plate__head">
          <span className="premium-plate__crown" aria-hidden="true">
            <CrownIcon size={22} />
          </span>
          <div className="premium-plate__heading">
            <span className="premium-plate__label">{homeHubContent.premium.label}</span>
            <span className="premium-plate__price">{homeHubContent.tariff.title}</span>
          </div>
        </div>
        <p className="premium-plate__text">{homeHubContent.premium.text}</p>
        {isClubActive ? (
          <button className="button button--primary u-full" type="button" onClick={() => onNavigate("club")}>
            {homeHubContent.tariff.activeCta}
          </button>
        ) : (
          <div className="premium-plate__actions">
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
        )}
      </section>

      <section className="home-about-section">
        <SectionHead title={homeAboutContent.title} />
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
