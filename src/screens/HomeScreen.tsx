import { ArrowRight } from "lucide-react";
import { BrandHeader } from "../components/BrandHeader";
import { HeroCard } from "../components/HeroCard";
import { PremiumCta } from "../components/PremiumCta";
import { ProgressCard } from "../components/ProgressCard";
import { SpaceCard } from "../components/SpaceCard";
import { appAssets } from "../data/assets";
import { accessCopy, homeContent, homeSpaces } from "../data/appContent";
import { homeProgressMetrics } from "../data/progress";
import type { Screen } from "../types";

type HomeScreenProps = {
  fullAccess: boolean;
  completedCount: number;
  onNavigate: (screen: Screen) => void;
};

export function HomeScreen({ fullAccess, completedCount, onNavigate }: HomeScreenProps) {
  return (
    <div className="screen-stack home-screen">
      <BrandHeader />

      <HeroCard
        title={homeContent.hero.title}
        description={homeContent.hero.text}
        tone="wellness"
        badge={homeContent.hero.badge}
        image={appAssets.photos[homeContent.hero.imageKey]}
        actionLabel={homeContent.hero.cta}
        onAction={() => onNavigate("product-detail")}
      />

      <section className="quick-status">
        <div>
          <span className="eyebrow">{fullAccess ? accessCopy.full : accessCopy.demo}</span>
          <strong>{completedCount} материалов и уроков отмечено</strong>
        </div>
        <button type="button" className="round-icon-button" onClick={() => onNavigate("profile")} aria-label="Открыть профиль">
          <ArrowRight size={20} />
        </button>
      </section>

      <section className="section-stack" aria-labelledby="ecosystem-title">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">экосистема здоровья</span>
            <h2 id="ecosystem-title">{homeContent.spacesTitle}</h2>
          </div>
        </div>

        <div className="space-grid">
          {homeSpaces.map((space) => (
            <SpaceCard
              key={space.id}
              space={space}
              image={appAssets.photos[space.imageKey]}
              unlockedMeta={space.id === "nutrition" && fullAccess ? "открыто" : undefined}
              onClick={() => onNavigate(space.screen)}
            />
          ))}
        </div>
      </section>

      <PremiumCta
        title={homeContent.premium.title}
        text={homeContent.premium.text}
        price={homeContent.premium.price}
        cta={homeContent.premium.cta}
        fullAccess={fullAccess}
        onClick={() => onNavigate("product-detail")}
      />

      <section className="home-progress">
        <div className="section-title-row">
          <div>
            <span className="eyebrow">мой прогресс</span>
            <h2>Ритм Vedara</h2>
          </div>
          <button type="button" className="text-button" onClick={() => onNavigate("profile")}>
            Смотреть все
          </button>
        </div>
        <div className="progress-grid progress-grid-home">
          {homeProgressMetrics.map((metric) => (
            <ProgressCard key={metric.id} value={metric.value} label={metric.label} />
          ))}
        </div>
      </section>

      <section className="service-preview">
        <div>
          <span className="eyebrow">{homeContent.servicePreview.eyebrow}</span>
          <h2>{homeContent.servicePreview.title}</h2>
          <p>{homeContent.servicePreview.text}</p>
        </div>
        <button type="button" className="secondary-button" onClick={() => onNavigate("services")}>
          {homeContent.servicePreview.cta}
        </button>
      </section>
    </div>
  );
}
