import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "../types";
import { appAssets } from "../data/assets";
import { VisualScene } from "./VisualScene";

type ProductCardProps = {
  product: Product;
  fullAccess: boolean;
  onOpen: () => void;
};

export function ProductCard({ product, fullAccess, onOpen }: ProductCardProps) {
  const image = product.imageKey ? appAssets.photos[product.imageKey] : null;

  return (
    <article className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-cover">
        {image ? <img src={image} alt="" /> : <VisualScene tone={product.coverTone} compact />}
        <span className={`product-badge ${fullAccess ? "success" : ""}`}>
          {fullAccess ? "Полный доступ" : "Демо"}
        </span>
      </div>
      <div className="product-body">
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <div className="product-action-row">
          <span className="price">{product.priceRub.toLocaleString("ru-RU")} ₽</span>
          <button
            type="button"
            data-testid={`open-product-${product.id}`}
            className="icon-text-button"
            onClick={onOpen}
          >
            {fullAccess ? <CheckCircle2 size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
            <span>{fullAccess ? "Открыть" : "Подробнее"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
