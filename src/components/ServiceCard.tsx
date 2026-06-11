import { CheckCircle2, LockKeyhole, Send } from "lucide-react";
import type { Service } from "../types";

type ServiceCardProps = {
  service: Service;
  fullAccess: boolean;
  requested: boolean;
  onRequest: () => void;
  onLocked: () => void;
};

export function ServiceCard({ service, fullAccess, requested, onRequest, onLocked }: ServiceCardProps) {
  const locked = service.access === "full" && !fullAccess;

  return (
    <article className={`service-card ${locked ? "locked" : ""}`} data-testid={`service-${service.id}`}>
      <div className="service-card-top">
        <span className="service-price">{service.priceLabel}</span>
        {locked ? <LockKeyhole size={20} aria-hidden="true" /> : null}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button
        type="button"
        data-testid={`request-service-${service.id}`}
        className="icon-text-button"
        onClick={locked ? onLocked : onRequest}
      >
        {requested ? <CheckCircle2 size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        <span>{locked ? "Нужен полный доступ" : requested ? "Заявка отправлена" : "Оставить заявку"}</span>
      </button>
    </article>
  );
}
