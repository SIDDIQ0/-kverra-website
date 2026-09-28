import { useRef } from "react";
import { Quotes, Star } from "@phosphor-icons/react";
import { testimonials } from "../data/testimonials";
import { useReveal } from "../hooks/useReveal";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

export function Testimonials() {
  const headerRef = useReveal();
  const rowRef = useRef(null);

  return (
    <section className="bg-paper-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={headerRef} className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          What agents and editors <em className="text-blue-600">say</em>.
        </h2>

        <div ref={rowRef} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="w-[85%] shrink-0 snap-start rounded-2xl bg-white p-8 shadow-[0_20px_45px_-25px_rgba(7,26,61,0.35)] ring-1 ring-brand-900/5 transition-shadow duration-300 hover:ring-blue-500/40 sm:w-[46%] lg:w-[31%]"
            >
              <Quotes size={28} weight="fill" className="text-brand-700/30" />
              <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-ink-900/85">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex gap-1 text-blue-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} weight="fill" />
                ))}
              </div>
              <figcaption className="mt-4 text-sm">
                <span className="block font-semibold text-ink-900">{t.name}</span>
                <span className="text-ink-900/55">
                  {t.role} · {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <HorizontalScrollbar targetRef={rowRef} variant="light" />
      </div>
    </section>
  );
}
