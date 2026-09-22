import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserFocus, Timer, ChartLineUp, ArrowClockwise } from "@phosphor-icons/react";
import { photos } from "../data/images";
import { WordReveal } from "./WordReveal";
import { useStaggerReveal } from "../hooks/useReveal";
import { BlurImage } from "./BlurImage";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: UserFocus,
    title: "One dedicated editor",
    body: "The same editor learns your style and your brand's colour grade, so every batch feels consistent.",
  },
  {
    icon: Timer,
    title: "Turnaround you can promise",
    body: "Most orders return in under 24 hours, so you can quote a delivery date to your client with confidence.",
  },
  {
    icon: ChartLineUp,
    title: "Built for high volume",
    body: "From a single listing to two hundred images a week, the pipeline scales without dropping quality.",
  },
  {
    icon: ArrowClockwise,
    title: "Revisions until it is right",
    body: "Free revisions within seven days of delivery if an edit does not match the brief.",
  },
];

export function WhyKverra() {
  const sectionRef = useRef(null);
  const bgLayerRef = useRef(null);
  const accentLayerRef = useRef(null);
  const cardsRef = useStaggerReveal(".value-card", { stagger: 0.1, y: 26 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const ctx = gsap.context(() => {
      // Two background layers move at different speeds for a real sense of
      // depth, distinct from the single-layer parallax used in the hero.
      gsap.fromTo(
        bgLayerRef.current,
        { y: -40 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        accentLayerRef.current,
        { y: 30, rotate: -3 },
        {
          y: -90,
          rotate: 3,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-paper-100 py-28 sm:py-32">
      <div ref={bgLayerRef} className="absolute inset-0 -z-20">
        <BlurImage
          src={photos.livingRoom[0]}
          alt=""
          className="h-[130%] w-full object-cover opacity-[0.07]"
        />
      </div>
      <div
        ref={accentLayerRef}
        aria-hidden="true"
        className="absolute -right-24 top-10 -z-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,164,92,0.4), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <WordReveal
            as="h2"
            text="Why brokerages choose Kverra."
            emphasize="Kverra"
            emphasisClassName="text-gold-600 italic"
            className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          />
          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary-500">
            Not the cheapest quote you will find, but the one that shows up
            on time, every time, without you having to check.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="value-card glass-panel-light rounded-2xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 ring-1 ring-gold-500/25">
                <v.icon size={20} weight="bold" />
              </span>
              <p className="mt-5 font-display text-lg font-semibold text-ink-900">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary-500">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
