import { ArrowLeft } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { SegmentedTabs } from "../components/SegmentedTabs";
import { products } from "../data/products";
import type { ProductFilter, Screen } from "../types";

type PurchasesScreenProps = {
  fullAccess: boolean;
  activeFilter: ProductFilter;
  onFilterChange: (filter: ProductFilter) => void;
  onNavigate: (screen: Screen) => void;
};

const filters: Array<{ id: ProductFilter; label: string }> = [
  { id: "all", label: "Все" },
  { id: "mine", label: "Мои" },
  { id: "completed", label: "Завершённые" },
];

export function PurchasesScreen({ fullAccess, activeFilter, onFilterChange, onNavigate }: PurchasesScreenProps) {
  const visibleProducts =
    activeFilter === "all" || (activeFilter === "mine" && fullAccess) ? products : [];

  return (
    <div className="screen-stack">
      <header className="screen-header">
        <button type="button" className="back-button" onClick={() => onNavigate("home")} aria-label="Назад">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>мои покупки</h1>
        </div>
      </header>

      <SegmentedTabs
        label="Фильтр покупок"
        options={filters}
        value={activeFilter}
        onChange={onFilterChange}
      />

      <section className="section-stack">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            fullAccess={fullAccess}
            onOpen={() => onNavigate("product-detail")}
          />
        ))}
      </section>

      {visibleProducts.length === 0 ? (
        <section className="empty-state">
          <h2>{activeFilter === "mine" ? "Пока нет активных покупок" : "Завершённых продуктов нет"}</h2>
          <p>Для демо доступен основной продукт Vedara Premium.</p>
          <button type="button" className="primary-button" onClick={() => onFilterChange("all")}>
            Показать продукты
          </button>
        </section>
      ) : null}
    </div>
  );
}
