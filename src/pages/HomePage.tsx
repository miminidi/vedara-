import { BrandHeader } from "../components/BrandHeader";
import { SectionHead } from "../components/SectionHead";
import { homeEcosystemCards, homeHubContent } from "../data/content";
import type { AccessState, ScreenId } from "../data/types";

interface HomePageProps {
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
}

export function HomePage({ onNavigate, onSetAccess }: HomePageProps) {
  return (
    <main className="screen">
      <BrandHeader onCabinetClick={() => onNavigate("profile")} />

      <section className="today-hero home-entry-hero">
        <div>
          <span className="section-kicker">{homeHubContent.hero.kicker}</span>
          <h1 className="hero-title">{homeHubContent.hero.title}</h1>
          <p className="hero-text">{homeHubContent.hero.text}</p>
          <div className="button-row">
            <button className="button button--primary" type="button" onClick={() => onSetAccess("trial")}>
              {homeHubContent.hero.primaryCta}
            </button>
            <button className="button button--secondary" type="button" onClick={() => onNavigate("practices")}>
              {homeHubContent.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      <section className="premium-card home-tariff-card">
        <div>
          <span className="section-kicker">{homeHubContent.tariff.kicker}</span>
          <h3>{homeHubContent.tariff.title}</h3>
          <p>{homeHubContent.tariff.text}</p>
          <button className="button button--primary u-mt-4" type="button" onClick={() => onSetAccess("trial")}>
            {homeHubContent.tariff.cta}
          </button>
        </div>
      </section>

      <SectionHead kicker={homeHubContent.directionsKicker} title={homeHubContent.directionsTitle} />
      <div className="grid grid--two">
        {homeEcosystemCards.map((card) => (
          <article className="program-card home-ecosystem-card" key={card.id}>
            <div className="program-card__top">
              <h3>{card.title}</h3>
              <span className="badge">{card.meta}</span>
            </div>
            <p>{card.description}</p>
            <button className="button button--ghost u-mt-4" type="button" onClick={() => onNavigate(card.target)}>
              {card.cta}
            </button>
          </article>
        ))}
      </div>

      <section className="panel home-tracker-card">
        <div>
          <span className="section-kicker">{homeHubContent.trackerCta.kicker}</span>
          <h2 className="panel-title">{homeHubContent.trackerCta.title}</h2>
          <p>{homeHubContent.trackerCta.text}</p>
        </div>
        <button className="button button--primary" type="button" onClick={() => onNavigate("tracker")}>
          {homeHubContent.trackerCta.cta}
        </button>
      </section>
    </main>
  );
}
