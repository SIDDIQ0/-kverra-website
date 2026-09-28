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
import { TiltCard } from "./TiltCard";
import { BlurImage } from "./BlurImage";

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

// The first curated service gets a wider frame and spans two columns at
// `lg:` - a deliberate size break so the grid reads as a curated showcase
// rather than nine uniformly repeated tiles, without inventing any "featured"
// label or claim that isn't backed by the data.
function ServiceCard({ s, index, featured = false }) {
  const Icon = icons[s.icon];
  return (
    <TiltCard
      to={`/services/${s.slug}`}
      tilt={4}
      className={`service-card group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_-30px_rgba(23,32,51,0.35)] ring-1 ring-brand-900/5 transition-shadow duration-300 hover:shadow-[0_28px_60px_-28px_rgba(37,99,235,0.35)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <BlurImage
          src={s.image}
          alt={`Example of ${s.name} on a real-estate listing photo`}
          delay={index * 0.06}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-md backdrop-blur-sm ring-1 ring-blue-500/15">
          {Icon && <Icon size={18} weight="bold" />}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className={`font-display font-semibold text-ink-900 ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
          {s.name}
        </p>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-secondary-500">{s.tagline}</p>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-secondary-500">
          <span>From ${s.price} / image</span>
          <span className="h-1 w-1 rounded-full bg-secondary-500/40" />
          <span>{s.delivery}</span>
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue-600">
          View service
          <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </TiltCard>
  );
}

export function ServicesGrid({ showViewAll = true }) {
  const headerRef = useReveal();
  const gridRef = useStaggerReveal(".service-card", { stagger: 0.08, y: 24 });
  const curated = homepageServiceSlugs.map(getServiceBySlug).filter(Boolean);

  return (
    <section id="services" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase">
              What we edit
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              This is what we <em className="text-blue-600">do</em>.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-500">
              From HDR and twilight conversion to object removal, drone
              editing and virtual staging - every edit a listing needs,
              delivered by one team and colour matched across the batch.
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

        <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curated.map((s, i) => (
            <ServiceCard key={s.slug} s={s} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
