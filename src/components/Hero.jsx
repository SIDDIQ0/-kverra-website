import { useEffect, useRef } from "react";
import { ArrowRight, Timer } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "../data/images";
import { whatsappLink } from "../data/site";
import { useMagnetic } from "../hooks/useMagnetic";
import { WordReveal } from "./WordReveal";

gsap.registerPlugin(ScrollTrigger);

const leftLabels = ["Edit", "Enhance", "Sell Faster"];
const rightLabels = ["Brighter", "Clearer", "Higher Value"];

// Shared with LoadingScreen.jsx - the loader's aperture frame reveals this
// exact photo at this same crop, so the handoff into the hero is a seamless
// continuation rather than a swap between two different images.
const HERO_IMAGE = photos.pool[1];

export function Hero({ reveal = true }) {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const ctaRef = useMagnetic(0.2);

  // Runs once on mount, independent of `reveal`: puts the text content in
  // its masked/hidden starting state immediately so nothing can flash
  // visible before the coordinated reveal plays. The image itself is left
  // alone here - it's meant to already be sitting in place underneath the
  // loader, not fading in on its own.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.set([".hero-anim", ".hero-side-left", ".hero-side-right"], { opacity: 0, y: 16 });
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([".hero-anim", ".hero-side-left", ".hero-side-right"], { opacity: 1, y: 0 });
      return undefined;
    }
    if (!reveal) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-sub", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.25")
        .fromTo(".hero-cta", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(
          ".hero-side-left",
          { opacity: 0, x: -18 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.07 },
          "-=0.2"
        )
        .fromTo(
          ".hero-side-right",
          { opacity: 0, x: 18 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.07 },
          "<"
        );
    }, rootRef);
    return () => ctx.revert();
  }, [reveal]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow, subtle Ken-Burns drift on the single hero image rather than a
      // two-layer parallax - one image is the whole point of this hero.
      // Unconditional on `reveal`: the image is already meant to be settled
      // in place, only text content waits on the coordinated handoff.
      gsap.fromTo(
        imgRef.current,
        { scale: 1.06, y: -16 },
        {
          scale: 1.14,
          y: 10,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative isolate overflow-hidden bg-brand-950">
      <div className="relative h-[100svh] max-h-[900px] min-h-[620px] w-full sm:min-h-[720px]">
        <div className="hero-image absolute inset-0 overflow-hidden">
          <img
            ref={imgRef}
            src={HERO_IMAGE}
            alt="Professionally edited luxury residence with pool and terrace"
            className="h-full w-full scale-[1.08] object-cover object-[center_32%] sm:object-[center_40%]"
          />
        </div>

        {/* Even top/bottom read for the eyebrow and CTA, plus a soft centered
            vignette behind the headline - a readability treatment on the
            photo itself, not an opaque card sitting on top of it. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/40 via-brand-950/15 to-brand-950/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_46%,rgba(14,21,36,0.5)_0%,transparent_72%)]" />

        {/* Small editorial side labels - desktop only, purely decorative,
            never competing with the centered message. Safely inset from the
            edge (not flush against it) so browser chrome never clips them. */}
        <div className="pointer-events-none absolute inset-y-0 left-6 z-10 hidden flex-col items-start justify-center gap-5 xl:left-14 lg:flex">
          <span className="hero-side-left h-10 w-px bg-gold-400/60" />
          {leftLabels.map((label) => (
            <span
              key={label}
              className="hero-side-left text-[10px] font-semibold tracking-[0.3em] text-white/65 uppercase"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-6 z-10 hidden flex-col items-end justify-center gap-5 text-right xl:right-14 lg:flex">
          <span className="hero-side-right h-10 w-px bg-gold-400/60" />
          {rightLabels.map((label) => (
            <span
              key={label}
              className="hero-side-right text-[10px] font-semibold tracking-[0.3em] text-white/65 uppercase"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <p className="hero-anim hero-eyebrow text-xs font-semibold tracking-[0.3em] text-gold-300 uppercase [text-shadow:0_1px_12px_rgba(14,21,36,0.5)]">
            Real Estate Photo Editing
          </p>
          <WordReveal
            as="h1"
            text="Real Estate Photos That Look Exceptional."
            emphasize="Exceptional"
            emphasisClassName="text-gold-400 italic"
            trigger="load"
            play={reveal}
            delay={0.3}
            className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white [text-shadow:0_4px_24px_rgba(14,21,36,0.45)] sm:text-5xl lg:text-6xl"
          />
          <p className="hero-anim hero-sub mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/80 [text-shadow:0_1px_10px_rgba(14,21,36,0.4)] sm:max-w-lg sm:text-base">
            Professional photo editing for real estate agents, photographers
            and property marketing teams, with consistent colour, lighting
            and detail across every listing.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
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
            <p className="hero-anim hero-cta flex items-center gap-1.5 text-xs text-white/75 [text-shadow:0_1px_8px_rgba(14,21,36,0.4)]">
              <Timer size={13} weight="fill" className="text-gold-400" />
              Easily order in under 60 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
