import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  ArrowsLeftRight,
  CaretRight,
  CheckCircle,
  Clock,
} from "@phosphor-icons/react";
import { services, getServiceBySlug, comparisonShowcaseSlugs } from "../data/services";
import { whatsappLink } from "../data/site";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { CTASection } from "../components/CTASection";
import { NotFound } from "./NotFound";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";
import { useMagnetic } from "../hooks/useMagnetic";
import { WordReveal } from "../components/WordReveal";
import { TiltCard } from "../components/TiltCard";
import { BlurImage } from "../components/BlurImage";

gsap.registerPlugin(ScrollTrigger);

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

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const headerRef = useReveal();
  const bodyRef = useReveal({ y: 30, delay: 0.1 });
  const relatedRef = useStaggerReveal(".related-card", { stagger: 0.08 });
  const ctaRef = useMagnetic(0.2);
  const heroSectionRef = useRef(null);
  const heroImgRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (service) document.title = `${service.name} | Kverra Infotech`;
  }, [service]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !heroSectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      // Two restrained layers - the sharp hero sample and one soft ambient
      // blob - drift at slightly different speeds behind the light hero.
      gsap.fromTo(
        heroImgRef.current,
        { y: -24 },
        {
          y: 24,
          ease: "none",
          scrollTrigger: { trigger: heroSectionRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        blobRef.current,
        { y: -30, x: -10 },
        {
          y: 45,
          x: 15,
          ease: "none",
          scrollTrigger: { trigger: heroSectionRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, heroSectionRef);
    return () => ctx.revert();
  }, []);

  if (!service) return <NotFound />;

  const Icon = icons[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const showcase = comparisonShowcaseSlugs.map(getServiceBySlug).filter(Boolean);

  return (
    <>
      <section
        ref={heroSectionRef}
        className="relative overflow-hidden bg-paper-50 pt-16 pb-20 sm:pt-24"
      >
        {/* One understated ambient blob rather than a full dark backdrop -
            "clean premium depth", not a flashy gradient background. */}
        <div
          ref={blobRef}
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.16), transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-secondary-500">
            <Link to="/" className="transition-colors hover:text-ink-900">Home</Link>
            <CaretRight size={10} weight="bold" />
            <Link to="/services" className="transition-colors hover:text-ink-900">Services</Link>
            <CaretRight size={10} weight="bold" />
            <span className="text-blue-600">{service.name}</span>
          </nav>

          <div ref={headerRef} className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="min-w-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20">
                {Icon && <Icon size={22} weight="bold" />}
              </span>
              <WordReveal
                as="h1"
                text={service.name}
                trigger="load"
                className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
              />
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-500">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 rounded-xl bg-blue-500/5 px-4 py-2.5 text-sm font-semibold text-blue-600 ring-1 ring-blue-500/15">
                  <Clock size={16} weight="bold" />
                  {service.delivery}
                </div>
              </div>
              <a
                ref={ctaRef}
                href={whatsappLink(`Hi Kverra Infotech, I'd like a quote for ${service.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass btn-glass--primary btn-liquid mt-7 px-6 py-3.5 text-sm"
              >
                Get a quote on WhatsApp
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>

            <div className="h-[320px] min-w-0 overflow-hidden rounded-[1.75rem] shadow-xl shadow-brand-900/10 ring-1 ring-blue-500/10 sm:h-[380px]">
              <BlurImage
                ref={heroImgRef}
                src={service.heroImage}
                alt={`${service.name} sample`}
                className="h-[350px] w-full scale-105 object-cover sm:h-[410px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 sm:py-24">
        <div ref={bodyRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="min-w-0">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900">
                One photo. <em className="text-blue-600">Two outcomes.</em>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-secondary-500">
                Drag the handle to compare the raw file against the delivered
                edit for {service.name.toLowerCase()}.
              </p>

              {/* This row is the main historical overflow culprit: it's a
                  horizontally-scrollable flex row nested inside a grid item.
                  Flex/grid items default to `min-width: auto`, i.e. they
                  refuse to shrink below their content's natural width -
                  without `min-w-0` on every ancestor up to the grid item
                  above, a handful of `shrink-0` pills can silently force the
                  whole grid track (and therefore the page) wider than the
                  viewport instead of scrolling inside this row. */}
              <div className="mt-6 min-w-0 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
                {showcase.map((s) =>
                  s.slug === service.slug ? (
                    <span
                      key={s.slug}
                      className="shrink-0 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.6)]"
                    >
                      {s.name}
                    </span>
                  ) : (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900/80 ring-1 ring-blue-500/20 transition-colors hover:bg-blue-500/5 hover:ring-blue-500/40"
                    >
                      {s.name}
                    </Link>
                  )
                )}
              </div>

              {/* One elevated card owns the whole comparison demonstration -
                  the slider plus its info card read as a single premium
                  product showcase rather than a raw image dropped on the
                  page. The info card floats over the slider's corner at
                  `lg:` and becomes a normal stacked card below it on
                  smaller screens, where floating would feel cramped. */}
              <div className="relative mt-6 rounded-3xl bg-white p-3 shadow-xl shadow-brand-900/10 ring-1 ring-blue-500/10 sm:p-4">
                <BeforeAfterSlider before={service.image} after={service.image} />

                <div className="relative z-10 mt-4 rounded-2xl bg-paper-100 p-6 ring-1 ring-blue-500/10 lg:absolute lg:right-8 lg:bottom-8 lg:mt-0 lg:w-72 lg:bg-white lg:shadow-2xl lg:shadow-brand-900/15">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
                    Listing ready
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink-900">
                    {service.name}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary-500">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-secondary-500">
                    Delivered as print-ready JPEG or TIFF, colour matched
                    across the full set.
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <ArrowsLeftRight size={14} weight="bold" />
                    Drag to compare
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl">
                    <BlurImage
                      src={src}
                      alt={`${service.name} additional sample ${i + 1}`}
                      className="h-56 w-full object-cover"
                      delay={i * 0.1}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-8">
              <div className="rounded-2xl border border-blue-500/10 p-8">
                <p className="font-display text-lg font-semibold text-ink-900">
                  What we do
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/70">
                  {service.whatWeDo}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/10 p-8">
                <p className="font-display text-lg font-semibold text-ink-900">
                  Best for
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.bestFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-ink-900/75 ring-1 ring-blue-500/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-paper-100 p-8 ring-1 ring-blue-500/10">
                <p className="font-display text-lg font-semibold text-blue-600">
                  What is included
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {service.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-ink-900/75">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.principle && (
                <div className="rounded-2xl bg-blue-500/5 p-8 ring-1 ring-blue-500/15">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
                    {service.principle.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/70">
                    {service.principle.text}
                  </p>
                </div>
              )}

              <div className="rounded-2xl border border-blue-500/10 p-8">
                <p className="font-display text-lg font-semibold text-ink-900">
                  {service.faq.q}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/60">
                  {service.faq.a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900">
            Other services
          </h2>
          <div ref={relatedRef} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => {
              const RelatedIcon = icons[s.icon];
              return (
                <TiltCard
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  tilt={5}
                  className="related-card group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-900/5 transition-shadow hover:shadow-lg"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.name} example`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                      {RelatedIcon && <RelatedIcon size={16} weight="bold" />}
                    </span>
                    <p className="mt-3 font-display text-base font-semibold text-ink-900">
                      {s.name}
                    </p>
                    <p className="mt-1 text-xs text-ink-900/50">
                      {s.delivery}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
