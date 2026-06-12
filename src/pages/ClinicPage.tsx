import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessRow } from "../components/WellnessRow";
import { clubContent } from "../data/content";
import type { AccessState, ScreenId } from "../data/types";

interface ClinicPageProps {
  access: AccessState;
  onNavigate: (screen: ScreenId) => void;
  onSetAccess: (access: AccessState) => void;
}

export function ClinicPage({ access, onNavigate, onSetAccess }: ClinicPageProps) {
  const isDemoActive = access !== "guest";

  return (
    <main className="screen">
      <ScreenHeader
        kicker={clubContent.header.kicker}
        title={clubContent.header.title}
        subtitle={clubContent.header.subtitle}
      />

      <section className="premium-card">
        <div>
          <span className="section-kicker">{isDemoActive ? clubContent.stateActive : clubContent.stateMock}</span>
          <h3>{clubContent.chatTitle}</h3>
          <p>{clubContent.chatText}</p>
          <div className="button-row u-mt-4">
            <button className="button button--primary" type="button" onClick={() => onSetAccess("trial")}>
              {clubContent.cta}
            </button>
            <button className="button button--secondary" type="button" onClick={() => onNavigate("practices")}>
              {clubContent.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      <SectionHead kicker={clubContent.liveSectionKicker} title={clubContent.liveSectionTitle} />
      <div className="task-list">
        <WellnessRow
          title={clubContent.liveTitle}
          description={clubContent.liveText}
          icon="practice"
          chip={clubContent.chips.mock}
          onClick={() => onSetAccess("trial")}
        />
        <WellnessRow
          title={clubContent.curatorTitle}
          description={clubContent.curatorText}
          icon="material"
          chip={clubContent.chips.qa}
          onClick={() => onNavigate("profile")}
        />
        <WellnessRow
          title={clubContent.challengeTitle}
          description={clubContent.challengeText}
          icon="protocol"
          chip={clubContent.chips.challenge}
          onClick={() => onNavigate("tracker")}
        />
      </div>

      <SectionHead kicker={clubContent.activityKicker} title={clubContent.activityTitle} />
      <div className="grid">
        {clubContent.activityCards.map((card) => (
          <article className="panel" key={card.title}>
            <h2 className="panel-title">{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
