import { ProgramCard } from "../components/ProgramCard";
import { SectionHead } from "../components/SectionHead";
import { ScreenHeader } from "../components/ScreenHeader";
import { clinicPageContent, clinicPrinciples, clinicPrograms, uiCopy } from "../data/content";
import type { AccessState } from "../data/types";

interface ClinicPageProps {
  onSetAccess: (access: AccessState) => void;
}

export function ClinicPage({ onSetAccess }: ClinicPageProps) {
  return (
    <main className="screen">
      <ScreenHeader
        kicker={clinicPageContent.header.kicker}
        title={clinicPageContent.header.title}
        subtitle={clinicPageContent.header.subtitle}
      />

      <div className="grid grid--two">
        {clinicPageContent.highlights.map((item) => (
          <div className="panel" key={item.title}>
            <h2 className="panel-title">{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <SectionHead kicker={clinicPageContent.programs.kicker} title={clinicPageContent.programs.title} />
      <div className="grid">
        {clinicPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            actionLabel={uiCopy.apply}
            onAction={() => onSetAccess("clinicLead")}
          />
        ))}
      </div>

      <SectionHead kicker={clinicPageContent.philosophy.kicker} title={clinicPageContent.philosophy.title} />
      <div className="grid">
        {clinicPrinciples.map((principle) => (
          <article className="program-card" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>

      <div className="notice u-mt-6">
        {clinicPageContent.notice}
      </div>
    </main>
  );
}
