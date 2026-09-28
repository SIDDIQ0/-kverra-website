import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Timer, PlayCircle } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "../data/images";
import { whatsappLink } from "../data/site";
import { useMagnetic } from "../hooks/useMagnetic";
import { WordReveal } from "./WordReveal";

gsap.registerPlugin(ScrollTrigger);

// Shared with LoadingScreen.jsx - the loader's photographic frame reveals
// this exact photo, so the handoff into the hero's own composition reuses
// the same image rather than swapping to a different one.
const MAIN_IMAGE = photos.pool[1];
const SIDE_IMAGE = photos.bedroom[1];
const BOTTOM_IMAGE = photos.bathroom[0];

export function Hero({ reveal = true }) {
  const rootRef = useRef(null);
  const mainImgRef = useRef(null);
  const ctaRef = useMagnetic(0.2);

  // Runs once on mount, independent of `reveal`: puts the text/image content
  // in its hidden starting state immediately so nothing can flash visible
  // before the coordinated reveal plays.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.set([".hero-anim", ".hero-image-col"], { opacity: 0, y: 16 });
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([".hero-anim", ".hero-image-col"], { opacity: 1, y: 0 });
      return undefined;
    }
    if (!reveal) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-sub", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.1")
        .fromTo(".hero-cta", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(
          ".hero-image-col",
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.5"
        );
    }, rootRef);
    return () => ctx.revert();
  }, [reveal]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow, subtle Ken-Burns drift on the dominant collage image only -
      // restrained, since it now sits inside a framed card rather than
      // bleeding to the edges of the viewport.
      gsap.fromTo(
        mainImgRef.current,
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
    <section id="home" ref={rootRef} className="relative isolate overflow-hidden bg-paper-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: eyebrow, headline, copy, CTAs */}
        <div className="relative z-10">
          <p className="hero-anim hero-eyebrow text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">
            Real Estate Photo Editing
          </p>
          <WordReveal
            as="h1"
            text="Real Estate Photos That Look Exceptional."
            emphasize="Exceptional"
            emphasisClassName="text-blue-600 italic"
            trigger="load"
            play={reveal}
            delay={0.3}
            className="mt-5 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="hero-anim hero-sub mt-6 max-w-md text-sm leading-relaxed text-secondary-500 sm:text-base">
            Professional photo editing for real estate agents, photographers
            and property marketing teams, with consistent colour, lighting
            and detail across every listing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              ref={ctaRef}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-anim hero-cta btn-glass btn-glass--primary btn-liquid w-full max-w-xs px-8 py-4 text-sm sm:w-auto sm:text-base"
            >
              Chat on WhatsApp
              <ArrowRight size={19} weight="bold" />
            </a>
            <Link
              to="/portfolio"
              className="hero-anim hero-cta group flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-blue-600"
            >
              <PlayCircle size={20} weight="fill" className="text-blue-500" />
              See it in action
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="hero-anim hero-cta mt-5 flex items-center gap-1.5 text-xs text-secondary-500">
            <Timer size={13} weight="fill" className="text-blue-500" />
            Easily order in under 60 seconds
          </p>
        </div>

        {/* Right: premium multi-image composition - one dominant frame plus
            two supporting frames, echoing how a listing itself is shot
            (a hero room, a detail room, an amenity). Below `sm:`, only the
            dominant image shows so mobile stays a clean single column
            instead of a cramped collage. */}
        <div className="hero-image-col relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/15 sm:hidden">
            <img
              src={MAIN_IMAGE}
              alt="Professionally edited living room with balanced light and true-to-life colour"
              className="h-full w-full object-cover object-[center_32%]"
            />
          </div>

          <div className="hidden sm:grid sm:h-[440px] sm:grid-cols-[1.6fr_1fr] sm:grid-rows-[1.5fr_1fr] sm:gap-4 lg:h-[520px]">
            <div className="relative col-start-1 row-start-1 overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/15">
              <img
                ref={mainImgRef}
                src={MAIN_IMAGE}
                alt="Professionally edited living room with balanced light and true-to-life colour"
                className="h-full w-full scale-[1.08] object-cover object-[center_32%]"
              />
            </div>
            <div className="relative col-start-2 row-span-2 row-start-1 overflow-hidden rounded-2xl shadow-xl shadow-brand-900/10">
              <img
                src={SIDE_IMAGE}
                alt="Bedroom retouched for even exposure and natural colour"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative col-start-1 row-start-2 overflow-hidden rounded-2xl shadow-xl shadow-brand-900/10">
              <img
                src={BOTTOM_IMAGE}
                alt="Bathroom retouched with clean, true-to-life colour"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
