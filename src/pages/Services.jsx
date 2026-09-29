import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  House,
  Buildings,
  Drone,
  Eraser,
  MoonStars,
  Waves,
  Flame,
  ArrowsClockwise,
  Armchair,
  CloudSun,
  ArrowRight,
} from "@phosphor-icons/react";
import { services } from "../data/services";
import { CTASection } from "../components/CTASection";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";
import { WordReveal } from "../components/WordReveal";
import { BlurImage } from "../components/BlurImage";

const icons = {
  House,
  Buildings,
  Drone,
  Eraser,
  MoonStars,
  Waves,
  Flame,
  ArrowsClockwise,
  Armchair,
  CloudSun,
};

export function Services() {
  const headerRef = useReveal();
  const listRef = useStaggerReveal(".service-row", { stagger: 0.08, y: 24 });

  useEffect(() => {
    document.title = "Services | Kverra Infotech";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-paper-50 pt-16 pb-16 sm:pt-24">
        <div aria-hidden="true" className="liquid-mesh pointer-events-none absolute inset-x-0 top-0 -z-10 h-[75%] opacity-70" />
        <div ref={headerRef} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-300">
            Every service, one editing team
          </p>
          <WordReveal
            as="h1"
            text="Services built for listings."
            emphasize="listings"
            trigger="load"
            delay={0.15}
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
            Order one edit or bundle several. Every photo in a batch comes
            back colour matched by the same editor.
          </p>
        </div>
      </section>

      <section className="bg-paper-50 py-20 sm:py-24">
        <div ref={listRef} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="service-row group grid grid-cols-1 items-center gap-6 border-b border-brand-900/10 py-8 transition-colors hover:bg-paper-100/60 sm:grid-cols-[auto_1fr_auto_auto] sm:gap-8 sm:px-4"
              >
                <div className="h-20 w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-brand-900/10">
                  <BlurImage
                    src={s.image}
                    alt={`${s.name} example`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    blur={8}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                      {Icon && <Icon size={16} weight="bold" />}
                    </span>
                    <p className="font-display text-xl font-semibold text-ink-900">
                      {s.name}
                    </p>
                  </div>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-900/60">
                    {s.tagline}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-ink-900/70">{s.delivery}</p>
                </div>
                <ArrowRight
                  size={20}
                  weight="bold"
                  className="hidden text-blue-600 transition-transform group-hover:translate-x-1 sm:block"
                />
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
