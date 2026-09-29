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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: eyebrow, headline, copy, CTAs. Mobile gets its own tighter
            rhythm (smaller top margins, bigger headline, full-width primary
            CTA, secondary link demoted and stacked below it) rather than a
            shrunk copy of the desktop spacing - see
            Kverra_Mobile_Homepage_Service_Page_Fixes.md. */}
        <div className="relative z-10 min-w-0">
          <p className="hero-anim hero-eyebrow text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">
            Real Estate Photo Editing
          </p>
          <WordReveal
            as="h1"
            text="Professional Real Estate Photo Editing"
            trigger="load"
            play={reveal}
            delay={0.3}
            className="mt-4 font-display text-[2.5rem] leading-[1.08] font-semibold tracking-tight text-ink-900 sm:mt-5 sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="hero-anim hero-sub mt-5 max-w-md text-base leading-relaxed text-secondary-500 sm:mt-6">
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

        {/* Right: premium multi-image composition - one dominant frame plus
            two supporting frames, echoing how a listing itself is shot
            (a hero room, a detail room, an amenity). Kept as a real 3-image
            collage at every breakpoint, including mobile - a single-image
            mobile fallback was tried and rejected (see
            Kverra_Homepage_Hero_Layout_and_Content_Changes.md), only the
            overall height/gap scale down below `sm:`. */}
        <div className="hero-image-col relative min-w-0">
          <div className="grid h-[340px] grid-cols-[1.6fr_1fr] grid-rows-[1.5fr_1fr] gap-3 sm:h-[440px] sm:gap-4 lg:h-[520px]">
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
