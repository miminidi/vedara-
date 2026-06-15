import { useRef, useState } from "react";

interface HeroCarouselProps {
  slides: string[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== active) {
      setActive(index);
    }
  };

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="hero-carousel" aria-label="Vedara">
      <div className="hero-carousel__track" ref={trackRef} onScroll={onScroll}>
        {slides.map((text, index) => (
          <div className="hero-slide" key={index}>
            <p className="hero-slide__text">{text}</p>
          </div>
        ))}
      </div>
      <div className="hero-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${index === active ? "is-active" : ""}`}
            aria-label={`Слайд ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
