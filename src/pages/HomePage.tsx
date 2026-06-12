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
    </main>
  );
}
