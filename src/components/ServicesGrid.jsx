import { Link } from "react-router-dom";
import {
  House,
  Buildings,
  Eraser,
  MoonStars,
  Waves,
  Drone,
  CloudSun,
  ArrowsClockwise,
  Armchair,
  ArrowRight,
} from "@phosphor-icons/react";
import { homepageServiceSlugs, getServiceBySlug } from "../data/services";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";

const icons = {
  House,
  Buildings,
  Eraser,
  MoonStars,
  Waves,
  Drone,
  CloudSun,
  ArrowsClockwise,
  Armchair,
};

export function ServicesGrid({ showViewAll = true }) {
  const headerRef = useReveal();
  const listRef = useStaggerReveal(".service-row", { stagger: 0.06, y: 18 });
  const curated = homepageServiceSlugs.map(getServiceBySlug).filter(Boolean);

  return (
    <section id="services" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase">
              What we edit
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Every edit a <em className="text-gold-600">listing</em> needs.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-500">
              Order one service or bundle several. Every photo in a batch
              comes back colour matched by the same editor.
            </p>
          </div>
          {showViewAll && (
            <Link
              to="/services"
              className="group btn-glass btn-glass--secondary-light px-5 py-2.5 text-sm"
            >
              View all services
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div ref={listRef} className="mt-12 border-t border-[rgba(201,164,92,0.25)]">
          {curated.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="service-row group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-[rgba(201,164,92,0.25)] py-6 transition-colors hover:bg-white/70 sm:grid-cols-[3.5rem_auto_1fr_auto] sm:gap-6 sm:px-4"
              >
                <span className="font-display text-2xl font-semibold text-gold-500/60 tabular-nums sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/20 sm:flex">
                  {Icon && <Icon size={20} weight="bold" />}
                </span>

                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-ink-900 sm:text-xl">
                    {s.name}
                  </p>
                  <p className="mt-1 max-w-md truncate text-sm leading-relaxed text-secondary-500 sm:text-base">
                    {s.tagline}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  weight="bold"
                  className="shrink-0 text-gold-600 transition-transform duration-300 sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
