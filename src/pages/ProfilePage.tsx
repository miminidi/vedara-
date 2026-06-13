import { useState } from "react";
import { ScreenHeader } from "../components/ScreenHeader";
import { SectionHead } from "../components/SectionHead";
import { WellnessIcon } from "../components/icons/WellnessIcons";
import { accessLabels, profileContent, vedaraProducts } from "../data/content";
import type { AccessState, DailyCheckIn, Lead, LeadType, ScreenId, UserProfile, VedaraProduct } from "../data/types";

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
        <span className="badge badge--gold">{accessLabels[access]}</span>
      </section>

      <div className="stat-row">
        <div className="stat-card"><span className="stat-value">{completedHabits.length}</span><span className="stat-label">{profileContent.stats.habits}</span></div>
        <div className="stat-card"><span className="stat-value">{completedMaterials.length}</span><span className="stat-label">{profileContent.stats.materials}</span></div>
        <div className="stat-card"><span className="stat-value">{completedProtocolTasks.length}</span><span className="stat-label">{profileContent.stats.protocolTasks}</span></div>
        <div className="stat-card"><span className="stat-value">{leads.length}</span><span className="stat-label">{profileContent.stats.leads}</span></div>
      </div>

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

      <button className="button button--primary u-full u-mt-5" type="button" onClick={() => onNavigate("home")}>
        {profileContent.homeCta}
      </button>
    </main>
  );
}
