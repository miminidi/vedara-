import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessIcon } from "../components/icons/WellnessIcons";
import { accessLabels, methodPillars, profileContent, vedaraProducts } from "../data/content";
import type { AccessState, DailyCheckIn, Lead, LeadType, ScreenId, UserProfile, VedaraProduct } from "../data/types";
import { computeRecoveryScore } from "../utils/recovery";

interface ProfilePageProps {
  access: AccessState;
  checkIn?: DailyCheckIn;
  completedHabits: string[];
  completedMaterials: string[];
  completedProtocolTasks: string[];
  leads: Lead[];
  productIntents: string[];
  profile: UserProfile;
  onCreateLead: (type: LeadType) => void;
  onNavigate: (screen: ScreenId) => void;
  onResetDemo: () => void;
  onSaveProductIntent: (intentId: string) => void;
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

function isPremiumAccess(access: AccessState) {
  return access === "clubMonthly" || access === "clubAnnual";
}

export function ProfilePage({
  access,
  checkIn,
  completedHabits,
  completedMaterials,
  completedProtocolTasks,
  leads,
  productIntents,
  profile,
  onCreateLead,
  onNavigate,
  onResetDemo,
  onSaveProductIntent,
  onSetAccess,
}: ProfilePageProps) {
  const [selectedProduct, setSelectedProduct] = useState<VedaraProduct | null>(null);
  const premiumActive = isPremiumAccess(access);
  const recoveryScore = computeRecoveryScore(checkIn);

  const pillarProgress = methodPillars.map((pillar) => {
    const total = pillar.practices.length;
    const done = pillar.practices.filter((practice) => completedMaterials.includes(practice.id)).length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    const state = done === 0 ? "notStarted" : done === total ? "done" : "inProgress";
    return { ...pillar, total, done, percent, state };
  });

  const totalPractices = pillarProgress.reduce((sum, pillar) => sum + pillar.total, 0);
  const donePractices = pillarProgress.reduce((sum, pillar) => sum + pillar.done, 0);
  const overallPercent = totalPractices ? Math.round((donePractices / totalPractices) * 100) : 0;
  const levelThresholds = [0, 20, 45, 70, 95];
  const levelIndex = levelThresholds.reduce((acc, threshold, index) => (overallPercent >= threshold ? index : acc), 0);

  const hasLead = (type?: LeadType) => Boolean(type && leads.some((lead) => lead.type === type));
  const hasIntent = (intentId?: string) => Boolean(intentId && productIntents.includes(intentId));

  const productStatus = (product: VedaraProduct) => {
    if (product.accessType === "premium" && premiumActive) {
      return "Открыт";
    }
    if (product.accessType === "premium" && hasIntent(product.intentId)) {
      return profileContent.subscriptionIntentSaved;
    }
    if (product.accessType === "purchase" && hasIntent(product.intentId)) {
      return profileContent.productIntentSaved;
    }
    if (product.accessType === "lead" && hasLead(product.leadType)) {
      return "Заявка отправлена";
    }
    return product.status;
  };

  const productActionLabel = (product: VedaraProduct) => {
    if (product.accessType === "premium" && premiumActive) {
      return "Открыть";
    }
    if (product.accessType === "premium" && hasIntent(product.intentId)) {
      return "Открыть клуб";
    }
    if ((product.accessType === "purchase" && hasIntent(product.intentId)) || (product.accessType === "lead" && hasLead(product.leadType))) {
      return "Показать";
    }
    return product.actionLabel;
  };

  const handleProductAction = (product: VedaraProduct) => {
    if (product.route) {
      onNavigate(product.route);
      return;
    }

    if (product.accessType === "premium") {
      if (premiumActive) {
        setSelectedProduct(product);
        return;
      }
      if (hasIntent(product.intentId)) {
        onNavigate("club");
        return;
      }
      if (product.intentId) {
        onSaveProductIntent(product.intentId);
      }
      return;
    }

    if (product.accessType === "purchase") {
      if (hasIntent(product.intentId)) {
        setSelectedProduct(product);
        return;
      }
      if (product.intentId) {
        onSaveProductIntent(product.intentId);
      }
      return;
    }

    if (product.accessType === "lead" && product.leadType) {
      if (hasLead(product.leadType)) {
        setSelectedProduct(product);
        return;
      }
      onCreateLead(product.leadType);
    }
  };

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
        <div className="profile-banner__aside">
          <span className="badge badge--gold">{accessLabels[access]}</span>
          {recoveryScore ? (
            <span className={`profile-recovery-chip is-${recoveryScore.level}`}>
              <strong>{recoveryScore.value}</strong>
              Recovery Score
            </span>
          ) : null}
        </div>
      </section>

      <div className="stat-row">
        <div className="stat-card"><span className="stat-value">{completedHabits.length}</span><span className="stat-label">{profileContent.stats.habits}</span></div>
        <div className="stat-card"><span className="stat-value">{completedMaterials.length}</span><span className="stat-label">{profileContent.stats.materials}</span></div>
        <div className="stat-card"><span className="stat-value">{completedProtocolTasks.length}</span><span className="stat-label">{profileContent.stats.protocolTasks}</span></div>
      </div>

      <SectionHead kicker={profileContent.progressKicker} title={profileContent.progressTitle} />
      <p className="section-subcopy">{profileContent.progressSubtitle}</p>
      <section className="vedara-progress">
        <div className="vedara-progress__head">
          <span className="vedara-progress__current">{profileContent.progressLevels[levelIndex]}</span>
          <span className="vedara-progress__percent">{overallPercent}%</span>
        </div>
        <div className="vedara-progress__segments" role="presentation">
          {profileContent.progressLevels.map((level, index) => (
            <span className={`vedara-progress__segment ${index <= levelIndex ? "is-filled" : ""}`} key={level} />
          ))}
        </div>
        <div className="vedara-progress__ends">
          <span>{profileContent.progressLevels[0]}</span>
          <span>{profileContent.progressLevels[profileContent.progressLevels.length - 1]}</span>
        </div>
      </section>

      <SectionHead kicker={profileContent.mapKicker} title={profileContent.mapTitle} />
      <p className="section-subcopy">{profileContent.mapSubtitle}</p>
      <ol className="longevita-map">
        {pillarProgress.map((pillar) => (
          <li className={`longevita-map__step is-${pillar.state}`} key={pillar.id}>
            <span className="longevita-map__index">{pillar.index}</span>
            <div className="longevita-map__body">
              <div className="longevita-map__head">
                <span className="longevita-map__title">{pillar.title}</span>
                <span className="longevita-map__count">{pillar.done}/{pillar.total}</span>
              </div>
              <ProgressBar value={pillar.percent} label={`${pillar.title}: ${pillar.percent}%`} />
              <span className="longevita-map__state">
                {profileContent.mapStates[pillar.state as keyof typeof profileContent.mapStates]}
              </span>
            </div>
          </li>
        ))}
      </ol>

      {selectedProduct ? (
        <section className="panel product-detail-card">
          <span className="section-kicker">{productStatus(selectedProduct)}</span>
          <h2 className="panel-title">{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <p>{profileContent.productDetailText}</p>
          <button className="button button--ghost u-mt-4" type="button" onClick={() => setSelectedProduct(null)}>
            {profileContent.closeProductDetail}
          </button>
        </section>
      ) : null}

      <SectionHead kicker="Vedara" title={profileContent.productsTitle} />
      <p className="section-subcopy">{profileContent.productsSubtitle}</p>
      <div className="profile-products-list">
        {vedaraProducts.map((product) => (
          <article className="profile-product-row" key={product.id}>
            <span className="profile-product-row__icon" aria-hidden="true">
              <WellnessIcon name={product.icon} />
            </span>
            <span className="profile-product-row__content">
              <span className="profile-product-row__title">{product.title}</span>
              <span className="profile-product-row__description">{product.description}</span>
              <span className="profile-product-row__status">{productStatus(product)}</span>
            </span>
            <button className="button button--ghost profile-product-row__button" type="button" onClick={() => handleProductAction(product)}>
              {productActionLabel(product)}
            </button>
          </article>
        ))}
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

      <button className="button button--primary u-full u-mt-5" type="button" onClick={() => onNavigate("home")}>
        {profileContent.homeCta}
      </button>
    </main>
  );
}
