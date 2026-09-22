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
  CaretRight,
  CheckCircle,
  Clock,
} from "@phosphor-icons/react";
import { services, getServiceBySlug } from "../data/services";
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
  const bgPhotoRef = useRef(null);
  const blobRef = useRef(null);
  const blobBlueRef = useRef(null);

  useEffect(() => {
    if (service) document.title = `${service.name} | Kverra Infotech`;
  }, [service]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !heroSectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      // Layered parallax: the blurred backdrop photo, the two colour blobs
      // and the sharp sample image all drift at different speeds.
      gsap.fromTo(
        bgPhotoRef.current,
        { y: -20 },
        {
          y: 35,
          ease: "none",
          scrollTrigger: { trigger: heroSectionRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
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
          y: 55,
          x: 15,
          ease: "none",
          scrollTrigger: { trigger: heroSectionRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        blobBlueRef.current,
        { y: 25, x: 10 },
        {
          y: -60,
          x: -20,
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

  return (
    <>
      <section
        ref={heroSectionRef}
        className="relative overflow-hidden bg-brand-950 pt-16 pb-20 sm:pt-24"
      >
        <div ref={bgPhotoRef} aria-hidden="true" className="absolute inset-0 -z-30">
          <img
            src={service.heroImage}
            alt=""
            className="h-[130%] w-full scale-110 object-cover opacity-45 blur-2xl"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-950/75 via-brand-950/80 to-brand-950" />
        <div
          ref={blobRef}
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 -z-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(201,164,92,0.55), transparent 70%)" }}
        />
        <div
          ref={blobBlueRef}
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[380px] w-[380px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(226,196,119,0.5), transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/50">
            <Link to="/" className="transition-colors hover:text-white">Home</Link>
            <CaretRight size={10} weight="bold" />
            <Link to="/services" className="transition-colors hover:text-white">Services</Link>
            <CaretRight size={10} weight="bold" />
            <span className="text-gold-300">{service.name}</span>
          </nav>

          <div ref={headerRef} className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="glass-panel flex h-12 w-12 items-center justify-center rounded-full text-gold-400">
                {Icon && <Icon size={22} weight="bold" />}
              </span>
              <WordReveal
                as="h1"
                text={service.name}
                trigger="load"
                className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              />
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="glass-panel rounded-xl px-4 py-2.5">
                  <p className="font-display text-lg font-semibold text-gold-400">
                    ${service.price} <span className="text-xs font-normal text-white/50">/ image</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/60">
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

            <div className="h-[320px] overflow-hidden rounded-[1.75rem] ring-1 ring-gold-400/25 shadow-2xl shadow-brand-950/40 sm:h-[380px]">
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
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900">
                See the <em className="text-gold-600">difference</em>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-900/60">
                Drag the handle to compare the raw file against the delivered edit.
              </p>
              <BeforeAfterSlider
                before={service.image}
                after={service.image}
                className="mt-6 shadow-2xl shadow-brand-950/15"
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
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

            <div className="space-y-8">
              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <p className="font-display text-lg font-semibold text-gold-400">
                  What is included
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {service.whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-white/80">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-900/10 p-8">
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
          <div ref={relatedRef} className="mt-8 grid gap-6 sm:grid-cols-3">
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                      {RelatedIcon && <RelatedIcon size={16} weight="bold" />}
                    </span>
                    <p className="mt-3 font-display text-base font-semibold text-ink-900">
                      {s.name}
                    </p>
                    <p className="mt-1 text-xs text-ink-900/50">
                      ${s.price} / image · {s.delivery}
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
