import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { accessLabels, productCtas, profileContent } from "../data/content";
import type { AccessState, DailyCheckIn, Lead, LeadType, ScreenId, UserProfile } from "../data/types";

interface CabinetPageProps {
  access: AccessState;
  checkIn?: DailyCheckIn;
  completedHabits: string[];
  completedMaterials: string[];
  completedProtocolTasks: string[];
  leads: Lead[];
  profile: UserProfile;
  onCreateLead: (type: LeadType) => void;
  onNavigate: (screen: ScreenId) => void;
  onResetDemo: () => void;
  onSetAccess: (access: AccessState) => void;
}

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function CabinetPage({
  access,
  checkIn,
  completedHabits,
  completedMaterials,
  completedProtocolTasks,
  leads,
  profile,
  onCreateLead,
  onNavigate,
  onResetDemo,
  onSetAccess,
}: CabinetPageProps) {
  const clinicCta = productCtas.find((item) => item.id === "clinic");
  const universityCta = productCtas.find((item) => item.id === "university");

  return (
    <main className="screen">
      <ScreenHeader
        kicker={profileContent.header.kicker}
        title={profileContent.header.title}
        subtitle={profileContent.header.subtitle}
      />

      <section className="profile-banner">
        <div>
          <span className="section-kicker">{profile.subtitle}</span>
          <h1>{profile.name}</h1>
          <p>{profile.focus}</p>
        </div>
        <span className="badge badge--gold">{accessLabels[access]}</span>
      </section>

      <div className="stat-row">
        <div className="stat-card"><span className="stat-value">{completedHabits.length}</span><span className="stat-label">{profileContent.stats.habits}</span></div>
        <div className="stat-card"><span className="stat-value">{completedMaterials.length}</span><span className="stat-label">{profileContent.stats.materials}</span></div>
        <div className="stat-card"><span className="stat-value">{completedProtocolTasks.length}</span><span className="stat-label">{profileContent.stats.protocolTasks}</span></div>
        <div className="stat-card"><span className="stat-value">{leads.length}</span><span className="stat-label">{profileContent.stats.leads}</span></div>
      </div>

      <SectionHead kicker="localStorage" title={profileContent.accessTitle} />
      <section className="panel">
        <p>{checkIn ? `Последний check-in: ${dateLabel(checkIn.savedAt)}` : "Сегодняшний check-in пока не сохранен."}</p>
        <div className="button-row u-mt-4">
          <button className="button button--secondary" type="button" onClick={() => onSetAccess("trial")}>
            {profileContent.enableTrial}
          </button>
          <button className="button button--primary" type="button" onClick={() => onSetAccess("clubMonthly")}>
            {profileContent.enablePremium}
          </button>
          <button className="button button--ghost" type="button" onClick={onResetDemo}>
            {profileContent.reset}
          </button>
        </div>
      </section>

      <SectionHead kicker={profile.goals.length.toString()} title={profileContent.goalsTitle} />
      <div className="goal-grid">
        {profile.goals.map((goal) => (
          <span className="badge" key={goal}>{goal}</span>
        ))}
      </div>

      <SectionHead kicker="mock" title={profileContent.leadsTitle} />
      <div className="grid">
        {leads.length ? leads.map((lead) => (
          <article className="lead-row" key={lead.id}>
            <h3>{lead.title}</h3>
            <p>{lead.status} · {dateLabel(lead.createdAt)}</p>
          </article>
        )) : (
          <div className="notice">{profileContent.noLeads}</div>
        )}
      </div>

      <SectionHead kicker="Vedara" title={profileContent.productsTitle} />
      <div className="grid">
        {clinicCta ? (
          <article className="program-card profile-next-card">
            <h3>{clinicCta.title}</h3>
            <p>{clinicCta.text}</p>
            <button className="button button--ghost u-mt-4" type="button" onClick={() => onCreateLead("clinic")}>
              {clinicCta.cta}
            </button>
          </article>
        ) : null}
        {universityCta ? (
          <article className="program-card profile-next-card">
            <h3>{universityCta.title}</h3>
            <p>{universityCta.text}</p>
            <button className="button button--ghost u-mt-4" type="button" onClick={() => onCreateLead("university")}>
              {universityCta.cta}
            </button>
          </article>
        ) : null}
      </div>

      <button className="button button--primary u-full u-mt-5" type="button" onClick={() => onNavigate("today")}>
        Вернуться на сегодня
      </button>
    </main>
  );
}
