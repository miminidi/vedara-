import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { HeroCard } from "../components/HeroCard";
import { SafetyNote } from "../components/SafetyNote";
import { products } from "../data/products";
import type { Screen } from "../types";

type ProductDetailScreenProps = {
  fullAccess: boolean;
  onPurchase: () => void;
  onNavigate: (screen: Screen) => void;
};

const product = products[0];

export function ProductDetailScreen({ fullAccess, onPurchase, onNavigate }: ProductDetailScreenProps) {
  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("purchases")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>{product.title}</h1>
          <p>{fullAccess ? "полный доступ активен" : "демо-доступ активен"}</p>
        </div>
      </header>

      <HeroCard
        title={product.title}
        subtitle={product.subtitle}
        description={product.description}
        tone={product.coverTone}
        badge={fullAccess ? "Полный доступ" : "Демо"}
      />

      <section className="detail-panel">
        <div className="price-panel">
          <span>Стоимость доступа</span>
          <strong>{product.priceRub.toLocaleString("ru-RU")} ₽</strong>
        </div>

        <div className="included-list">
          <h2>Что входит</h2>
          {product.included.map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {!fullAccess ? (
          <button type="button" className="primary-button" onClick={onPurchase}>
            Купить полный доступ
          </button>
        ) : (
          <div className="unlocked-panel">
            <CheckCircle2 size={24} aria-hidden="true" />
            <div>
              <h3>Полный доступ открыт в демо-режиме</h3>
              <p>Теперь доступны закрытые уроки, материалы и сервисы.</p>
            </div>
          </div>
        )}
      </section>

      {fullAccess ? (
        <section className="module-grid">
          <button type="button" onClick={() => onNavigate("body")}>
            Body
            <span>программы тренировок</span>
          </button>
          <button type="button" onClick={() => onNavigate("nutrition")}>
            Nutrition
            <span>материалы по питанию</span>
          </button>
          <button type="button" onClick={() => onNavigate("useful")}>
            Useful
            <span>библиотека клуба</span>
          </button>
          <button type="button" onClick={() => onNavigate("services")}>
            Services
            <span>заявки на сервисы</span>
          </button>
        </section>
      ) : null}

      <SafetyNote />
    </div>
  );
}
