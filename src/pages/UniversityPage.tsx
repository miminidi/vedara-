import { SectionHead } from "../components/SectionHead";
import { ScreenHeader } from "../components/ScreenHeader";
import { universityFormats, universityPageContent, universityPrinciples, universityStages } from "../data/content";
import type { AccessState } from "../data/types";

interface UniversityPageProps {
  onSetAccess: (access: AccessState) => void;
}

export function UniversityPage({ onSetAccess }: UniversityPageProps) {
  return (
    <main className="screen">
      <ScreenHeader
        kicker={universityPageContent.header.kicker}
        title={universityPageContent.header.title}
        subtitle={universityPageContent.header.subtitle}
      />

      <SectionHead kicker={universityPageContent.program.kicker} title={universityPageContent.program.title} />
      <div className="timeline">
        {universityStages.map((stage) => (
          <article className="program-card timeline-card" key={stage.id} data-index={stage.index}>
            <div className="program-card__top">
              <span className="badge">{stage.duration}</span>
              <span className="badge badge--gold">{stage.title}</span>
            </div>
            <h3>{stage.subtitle}</h3>
            <p>{stage.description}</p>
            <ul className="check-list u-mt-4">
              {stage.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <SectionHead kicker={universityPageContent.principles.kicker} title={universityPageContent.principles.title} />
      <div className="grid">
        {universityPrinciples.map((principle, index) => (
          <article className="program-card" key={principle}>
            <div className="program-card__top">
              <span className="badge badge--gold">{index + 1}</span>
            </div>
            <p>{principle}</p>
          </article>
        ))}
      </div>

      <SectionHead kicker={universityPageContent.formats.kicker} title={universityPageContent.formats.title} />
      <div className="grid grid--two">
        {universityFormats.map((format) => (
          <div className="panel" key={format}>
            <h2 className="panel-title">{format}</h2>
            <p>{universityPageContent.formats.text}</p>
          </div>
        ))}
      </div>

      <button className="button button--primary u-full u-mt-5" type="button" onClick={() => onSetAccess("universityLead")}>
        {universityPageContent.cta}
      </button>

      <div className="notice u-mt-6">
        {universityPageContent.notice}
      </div>
    </main>
  );
}
