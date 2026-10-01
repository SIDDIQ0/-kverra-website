import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Timer, PlayCircle, ShieldCheck } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBackground from "../assets/hero-waterfront.jpg";
import { whatsappLink } from "../data/site";
import { useMagnetic } from "../hooks/useMagnetic";
import { WordReveal } from "./WordReveal";
import { CurvedUnderline } from "./CurvedUnderline";
import { HeroDoodle } from "./HeroDoodle";

gsap.registerPlugin(ScrollTrigger);

export function Hero({ reveal = true }) {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const textColRef = useRef(null);
  const emphasisRef = useRef(null);
  const eyebrowPhotoRef = useRef(null);
  const ctaRef = useMagnetic(0.2);

  // Runs once on mount, independent of `reveal`: puts the text content in
  // its hidden starting state immediately so nothing can flash visible
  // before the coordinated reveal plays.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.set(".hero-anim", { opacity: 0, y: 16 });
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(".hero-anim", { opacity: 1, y: 0 });
      return undefined;
    }
    if (!reveal) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-sub", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.1")
        .fromTo(".hero-cta", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(
          ".hero-card",
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.15"
        );
    }, rootRef);
    return () => ctx.revert();
  }, [reveal]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      // Slow, subtle Ken-Burns drift on the full-bleed background photo -
      // restrained, since it now fills the entire hero rather than sitting
      // inside a framed collage card.
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        {
          scale: 1.16,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative isolate overflow-hidden bg-brand-950">
      <img
        ref={bgRef}
        src={heroBackground}
        alt="Waterfront property photographed for a real estate listing"
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[78%_55%] sm:object-[68%_48%] lg:object-[58%_45%]"
      />
      {/* Soft, feathered white/cream glow behind the left-side copy - not a
          panel or a flat scrim, it blends into the photograph with no hard
          edge, fading to fully transparent well before the right half so the
          property stays rich and photographic there. Dark text now sits
          inside this lighter region instead of light text over a navy
          scrim. Explicit percentage radii (relative to the hero box itself)
          keep the bloom tall enough to reach from the eyebrow down through
          the CTA row, rather than pooling tightly around just the headline. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 54% 90% at 20% 46%, rgba(255,250,243,0.97) 0%, rgba(255,250,243,0.85) 26%, rgba(255,250,243,0.52) 52%, rgba(255,250,243,0) 80%)",
        }}
      />

      {/* Mobile gets extra top padding (vs. a symmetric py-) so the whole
          content stack - doodle, eyebrow, headline, paragraph, CTAs, and
          the card, all centered together as one flex-col group - sits with
          more breathing room from the viewport edge instead of reading as
          pinned to the top. Both anchors (HeroDoodle, CurvedUnderline) are
          positioned relative to textColRef, so they ride along with this
          shift automatically; sm:py-20 restores the original symmetric
          desktop padding untouched. */}
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-start justify-center gap-10 px-4 pt-24 pb-16 sm:min-h-[620px] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-20 lg:min-h-[760px] lg:px-8">
        <div ref={textColRef} className="relative max-w-xl lg:max-w-2xl">
          <p className="hero-anim hero-eyebrow text-sm font-semibold tracking-[0.3em] text-blue-600 uppercase">
            Real Estate <span ref={eyebrowPhotoRef} className="inline-block">Photo</span> Editing
          </p>
          <WordReveal
            as="h1"
            text="Professional Real Estate Photo Editing"
            trigger="load"
            play={reveal}
            delay={0.3}
            emphasize="Editing"
            emphasisClassName="text-[#F05A3C] italic"
            emphasisRef={emphasisRef}
            className="mt-4 font-display text-[3rem] leading-[1.05] font-semibold tracking-tight text-ink-900 sm:mt-5 sm:text-[4.1rem] lg:text-[4.35rem]"
          />
          <HeroDoodle
            targetRef={eyebrowPhotoRef}
            containerRef={textColRef}
            className="hero-anim hero-cta h-[60px] w-[150px] text-blue-600 sm:w-[170px]"
          />
          <CurvedUnderline targetRef={emphasisRef} containerRef={textColRef} play={reveal} />
          <p className="hero-anim hero-sub mt-6 max-w-md text-base leading-relaxed text-secondary-500 sm:mt-7">
            Professional real estate photo editing services. Enhance your
            real estate photos with our <strong className="font-semibold text-ink-900">high-quality</strong>,{" "}
            <strong className="font-semibold text-ink-900">fast</strong>, and{" "}
            <strong className="font-semibold text-ink-900">affordable</strong> editing.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-3">
            <a
              ref={ctaRef}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-anim hero-cta btn-glass btn-glass--primary btn-liquid w-full px-8 py-4 text-sm sm:w-auto sm:text-base"
            >
              Chat on WhatsApp
              <ArrowRight size={19} weight="bold" />
            </a>
            <Link
              to="/portfolio"
              className="hero-anim hero-cta group flex items-center gap-2 text-sm font-medium text-secondary-500 transition-colors hover:text-blue-600"
            >
              <PlayCircle size={20} weight="fill" className="text-blue-500" />
              See it in action
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Desktop-only supporting line - on mobile it's exactly the kind
              of small print that reads as clutter under an already-full CTA
              stack, so it's dropped there rather than shrunk further. */}
          <p className="hero-anim hero-cta hidden items-center gap-1.5 text-xs text-secondary-500 sm:mt-5 sm:flex">
            <Timer size={13} weight="fill" className="text-blue-500" />
            Easily order in under 60 seconds
          </p>
        </div>

        {/* Small floating trust card - centered, compact composition
            (icon+label, big stat, short supporting line, all centered, with
            even gaps between each layer), built from a real,
            already-published stat (see StatsBar) rather than an invented
            discount or review. */}
        <div className="hero-anim hero-card flex w-[220px] shrink-0 self-center flex-col items-center justify-center gap-2 rounded-[26px] bg-[#fffdf9] px-6 py-7 text-center shadow-2xl shadow-brand-950/25 ring-1 ring-black/5 sm:w-[230px] sm:self-auto sm:-rotate-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} weight="fill" className="text-blue-600" />
            <p className="text-[10px] font-semibold tracking-[0.14em] text-ink-900/50 uppercase">
              Reliable Delivery
            </p>
          </div>
          <p className="font-display text-5xl leading-none font-semibold text-blue-600">98%</p>
          <p className="max-w-[170px] text-xs leading-snug text-ink-900/60">
            Delivered on or ahead of schedule
          </p>
        </div>
      </div>
    </section>
  );
}
