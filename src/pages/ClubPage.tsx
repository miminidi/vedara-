import { PriceCard } from "../components/PriceCard";
import { SectionHead } from "../components/SectionHead";
import { ScreenHeader } from "../components/ScreenHeader";
import { clubFeatures, clubPageContent, clubPillars, clubPlans } from "../data/content";
import type { AccessState } from "../data/types";

interface ClubPageProps {
  access: AccessState;
  onSetAccess: (access: AccessState) => void;
}

export function ClubPage({ access, onSetAccess }: ClubPageProps) {
  const active = access === "trial" || access === "clubMonthly" || access === "clubAnnual";

  return (
    <main className="screen">
      <ScreenHeader
        kicker={clubPageContent.header.kicker}
        title={clubPageContent.header.title}
        subtitle={clubPageContent.header.subtitle}
      />

      <div className="panel">
        <h2 className="panel-title">{active ? clubPageContent.accessPanel.activeTitle : clubPageContent.accessPanel.trialTitle}</h2>
        <p>
          {active
            ? clubPageContent.accessPanel.activeText
            : clubPageContent.accessPanel.trialText}
        </p>
        <button className="button button--primary u-mt-4" type="button" onClick={() => onSetAccess(active ? "guest" : "trial")}>
          {active ? clubPageContent.accessPanel.activeCta : clubPageContent.accessPanel.trialCta}
        </button>
      </div>

      <SectionHead kicker={clubPageContent.methodology.kicker} title={clubPageContent.methodology.title} />
      <div className="grid">
        {clubPillars.map((pillar, index) => (
          <article className="program-card" key={pillar.id}>
            <div className="program-card__top">
              <span className="badge badge--gold">{String(index + 1).padStart(2, "0")}</span>
              <span className="badge">{clubPageContent.header.title}</span>
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>

      <SectionHead kicker={clubPageContent.inside.kicker} title={clubPageContent.inside.title} />
      <div className="panel">
        <ul className="check-list">
          {clubFeatures.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </div>

      <SectionHead kicker={clubPageContent.avatar.kicker} title={clubPageContent.avatar.title} />
      <div className="panel">
        <h2 className="panel-title">{clubPageContent.avatar.heading}</h2>
        <p>{clubPageContent.avatar.text}</p>
      </div>

      <SectionHead kicker={clubPageContent.investment.kicker} title={clubPageContent.investment.title} />
      <div className="grid">
        {clubPlans.map((plan) => (
          <PriceCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            suffix={plan.suffix}
            badge={plan.badge}
            features={[...plan.featuresPrefix, ...(plan.id === "monthly" ? clubFeatures : [])]}
            cta={plan.cta}
            onClick={() => onSetAccess(plan.access)}
          />
        ))}
      </div>

      <div className="notice u-mt-6">
        {clubPageContent.notice}
      </div>
    </main>
  );
}
