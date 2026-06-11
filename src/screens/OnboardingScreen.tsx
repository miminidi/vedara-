import { Activity, Heart, Leaf } from "lucide-react";
import { BrandMark } from "../components/BrandMark";
import { VisualScene } from "../components/VisualScene";
import { onboardingContent } from "../data/appContent";

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  return (
    <main className="onboarding-screen">
      <div className="onboarding-top">
        <BrandMark compact />
        <p>{onboardingContent.eyebrow}</p>
      </div>

      <section className="onboarding-hero">
        <div className="onboarding-copy">
          <h1>{onboardingContent.title}</h1>
          <p>{onboardingContent.text}</p>
        </div>
        <VisualScene tone="wellness" />
      </section>

      <div className="pillar-row" aria-label="Ключевые направления">
        <div className="pillar">
          <Activity size={22} aria-hidden="true" />
          <span>{onboardingContent.pillars[0]}</span>
        </div>
        <div className="pillar">
          <Leaf size={22} aria-hidden="true" />
          <span>{onboardingContent.pillars[1]}</span>
        </div>
        <div className="pillar">
          <Heart size={22} aria-hidden="true" />
          <span>{onboardingContent.pillars[2]}</span>
        </div>
      </div>

      <button type="button" className="primary-button onboarding-button" onClick={onComplete}>
        {onboardingContent.cta}
      </button>
    </main>
  );
}
