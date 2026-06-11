import { ArrowLeft } from "lucide-react";
import { PaywallCard } from "../components/PaywallCard";
import { SafetyNote } from "../components/SafetyNote";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/services";
import type { Screen } from "../types";

type ServicesScreenProps = {
  fullAccess: boolean;
  requestedServiceIds: string[];
  onRequestService: (id: string) => void;
  onNavigate: (screen: Screen) => void;
};

export function ServicesScreen({
  fullAccess,
  requestedServiceIds,
  onRequestService,
  onNavigate,
}: ServicesScreenProps) {
  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>сервисы</h1>
          <p>Лёгкая заявка в демо-режиме</p>
        </div>
      </header>

      <section className="story-card service-story">
        <div>
          <h2>платные услуги</h2>
          <p>
            Здесь показан будущий каталог консультаций и персональных форматов. В GOAL 001 заявка
            сохраняется только локально.
          </p>
        </div>
      </section>

      <section className="section-stack">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            fullAccess={fullAccess}
            requested={requestedServiceIds.includes(service.id)}
            onRequest={() => onRequestService(service.id)}
            onLocked={() => onNavigate("product-detail")}
          />
        ))}
      </section>

      {!fullAccess ? (
        <PaywallCard
          title="Часть сервисов для участников клуба"
          description="В демо можно отправить одну базовую заявку. Остальные сервисы открываются после mock-покупки."
          ctaLabel="Открыть клуб"
          onCta={() => onNavigate("product-detail")}
        />
      ) : null}

      <SafetyNote />
    </div>
  );
}
