import { BrandHeader } from "../components/BrandHeader";
import { DirectionCard } from "../components/DirectionCard";
import { HeroCard } from "../components/HeroCard";
import { PremiumCard } from "../components/PremiumCard";
import { ProgramCard } from "../components/ProgramCard";
import { SectionHead } from "../components/SectionHead";
import { assets } from "../data/assets";
import { ecosystemDirections, homePageContent, homePrograms, safetyNotes } from "../data/content";
import type { AccessState, ScreenId } from "../data/types";

interface HomePageProps {
  access: AccessState;
  onNavigate: (screen: ScreenId) => void;
  onTrial: () => void;
}

export function HomePage({ access, onNavigate, onTrial }: HomePageProps) {
  return (
    <main className="screen">
      <BrandHeader onCabinetClick={() => onNavigate("cabinet")} />

      <HeroCard
        image={assets.photos.heroYoga}
        title={homePageContent.hero.title}
        text={homePageContent.hero.text}
        cta={homePageContent.hero.cta}
        onClick={() => onNavigate("club")}
      />

      <div className="photo-strip" aria-label="Пространства Vedara">
        <div className="photo-card photo-card--tall">
          <img src={assets.photos.bodyPeople} alt={homePageContent.photoAlts.bodyPeople} />
        </div>
        <div className="photo-card">
          <img src={assets.photos.nutritionBowl} alt={homePageContent.photoAlts.nutritionBowl} />
        </div>
        <div className="photo-card">
          <img src={assets.photos.wellnessClub} alt={homePageContent.photoAlts.wellnessClub} />
        </div>
      </div>

      <SectionHead kicker={homePageContent.directions.kicker} title={homePageContent.directions.title} />
      <div className="grid grid--two">
        {ecosystemDirections.map((item) => (
          <DirectionCard key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </div>

      <PremiumCard access={access} onTrial={onTrial} onNavigate={onNavigate} />

      <SectionHead
        kicker={homePageContent.programs.kicker}
        title={homePageContent.programs.title}
        action={<button className="section-action" type="button" onClick={() => onNavigate("clinic")}>{homePageContent.programs.action}</button>}
      />
      <div className="grid">
        {homePrograms.slice(0, 3).map((program) => (
          <ProgramCard key={program.id} program={program} actionLabel={homePageContent.programs.itemAction} onAction={() => onNavigate("clinic")} />
        ))}
      </div>

      <SectionHead kicker={homePageContent.safety.kicker} title={homePageContent.safety.title} />
      <div className="notice">
        {safetyNotes.map((note) => (
          <div key={note}>• {note}</div>
        ))}
      </div>
    </main>
  );
}
