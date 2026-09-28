import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import logoMark from "../assets/kverra-logo-mark.png";
import { photos } from "../data/images";

gsap.registerPlugin(Flip);

// Same source and crop as Hero.jsx's HERO_IMAGE - the loader reveals this
// exact photo, so the fullscreen takeover hands off into the hero without
// the underlying image ever visibly changing.
const LOADER_IMAGE = photos.pool[1];

const RAW_FILTER = "brightness(0.85) contrast(0.82) saturate(0.5) blur(1px)";
const FINAL_FILTER = "brightness(1.03) contrast(1.07) saturate(1.06) blur(0px)";

/**
 * "The image reveals": a clean white opening film, not a dark UI widget.
 * A single blue line is the recurring motif - it draws in as an identity
 * accent, then returns as the raw/refined scan boundary. The photographic
 * frame grows to fill the viewport via GSAP Flip (capture -> instant
 * fullscreen state -> Flip.from), which is what actually keeps the
 * expansion centered and edge-accurate - the previous hand-rolled
 * top/left/width/height tween was the root cause of the image appearing
 * stuck to one side with empty canvas beside it on wide viewports.
 */
export function LoadingScreen({ onFinish, onReveal }) {
  const rootRef = useRef(null);
  const identityRef = useRef(null);
  const logoRef = useRef(null);
  const cursorLineRef = useRef(null);
  const wordmarkRef = useRef(null);
  const infotechRef = useRef(null);
  const subtaglineRef = useRef(null);
  const frameRef = useRef(null);
  const rawImgRef = useRef(null);
  const finalImgRef = useRef(null);
  const wipeLineRef = useRef(null);
  const cropMarksRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      document.body.style.overflow = "";
      onFinish();
    };

    if (reduce) {
      if (finalImgRef.current) finalImgRef.current.style.clipPath = "inset(0 0% 0 0)";
      gsap.set([identityRef.current, cropMarksRef.current, wipeLineRef.current], { opacity: 0 });
      frameRef.current.classList.add("loader-frame--full");
      gsap.set(frameRef.current, { opacity: 1 });
      onReveal?.();
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }

    if (finalImgRef.current) finalImgRef.current.style.clipPath = "inset(0 100% 0 0)";

    const tl = gsap.timeline({ onComplete: finish });

    // Phase 1-2 - white canvas, almost empty; a thin blue line draws,
    // then the Kverra identity settles in. Calm and expensive, not busy.
    tl.addLabel("identity")
      .fromTo(cursorLineRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
      .fromTo(logoRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "-=0.15")
      .fromTo(wordmarkRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.32, ease: "power3.out" }, "-=0.15")
      .fromTo(infotechRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=0.15")
      .fromTo(subtaglineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=0.12")

      // Phase 3 - the photographic frame forms as the identity settles
      // gently upward and out of the way, handing focus to the photograph.
      .addLabel("frame", "-=0.05")
      .to(identityRef.current, { y: -18, opacity: 0, duration: 0.3, ease: "power2.inOut" }, "frame")
      .fromTo(frameRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }, "frame")
      .fromTo(cropMarksRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 }, "frame+=0.1")

      // Phase 4-5 - development + editing scan: the blue line returns as a
      // wipe boundary sweeping the photograph from flat/raw to refined.
      .addLabel("develop", "frame+=0.5")
      .fromTo(wipeLineRef.current, { opacity: 0, left: "0%" }, { opacity: 1, duration: 0.12 }, "develop")
      .to(
        { v: 0 },
        {
          v: 100,
          duration: 0.55,
          ease: "power2.inOut",
          onUpdate: function () {
            const v = this.targets()[0].v;
            if (finalImgRef.current) finalImgRef.current.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
            if (wipeLineRef.current) wipeLineRef.current.style.left = `${v}%`;
          },
        },
        "develop"
      )
      .to(wipeLineRef.current, { opacity: 0, duration: 0.15 }, "develop+=0.5")

      // Phase 6-9 - climax: crop marks fall away, then the frame grows to
      // fill the viewport via Flip - capture the current state, apply the
      // fullscreen state instantly, and let Flip compute the true inverse
      // transform. This is what keeps the growth centered and edge-correct
      // on every viewport size instead of drifting toward one side.
      .addLabel("climax", "develop+=0.65")
      .to(cropMarksRef.current, { opacity: 0, duration: 0.2 }, "climax")
      .call(
        () => {
          const state = Flip.getState(frameRef.current);
          frameRef.current.classList.add("loader-frame--full");
          Flip.from(state, { duration: 0.6, ease: "power2.inOut", scale: true });
        },
        [],
        "climax"
      )
      .to({}, { duration: 0.6 }, "climax")
      // The hero's own reveal begins here, before the loader has finished
      // leaving - by the time this overlay fades away, the homepage is
      // already mid-reveal underneath rather than popping in from nothing.
      .call(() => onReveal?.(), [], "climax+=0.35")
      .to({}, { duration: 0.15 })
      .to(rootRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" })
      .to(rootRef.current, { display: "none", duration: 0 });

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-paper-50 px-6"
    >
      <div ref={identityRef} className="flex flex-col items-center">
        <img ref={logoRef} src={logoMark} alt="Kverra" className="h-8 w-auto" />
        <div ref={cursorLineRef} className="accent-rule mt-4 w-10 origin-center" />
        <p
          ref={wordmarkRef}
          className="mt-4 font-display text-2xl font-semibold tracking-[0.4em] text-ink-900 uppercase sm:text-3xl"
        >
          Kverra
        </p>
        <p ref={infotechRef} className="mt-2 text-[10px] font-semibold tracking-[0.4em] text-blue-600 uppercase">
          Infotech
        </p>
        <p
          ref={subtaglineRef}
          className="mt-1.5 max-w-[230px] text-center text-[9px] font-medium tracking-[0.3em] text-secondary-500 uppercase sm:max-w-none"
        >
          Real Estate Image Post-Production
        </p>
      </div>

      <div
        ref={frameRef}
        className="relative mt-10 w-[58vw] max-w-[620px] overflow-hidden border border-ink-900/15 opacity-0"
        style={{ aspectRatio: "4 / 3" }}
      >
        <img
          ref={rawImgRef}
          src={LOADER_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] sm:object-[center_40%]"
          style={{ filter: RAW_FILTER }}
        />
        <img
          ref={finalImgRef}
          src={LOADER_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_32%] sm:object-[center_40%]"
          style={{ filter: FINAL_FILTER }}
        />

        <div
          ref={wipeLineRef}
          className="pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-blue-500 opacity-0 shadow-[0_0_10px_2px_rgba(37,99,235,0.5)]"
        />

        <div ref={cropMarksRef} className="pointer-events-none absolute inset-0 z-10 opacity-0">
          <span className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-blue-500" />
          <span className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-blue-500" />
          <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-blue-500" />
          <span className="absolute right-2 bottom-2 h-4 w-4 border-b-2 border-r-2 border-blue-500" />
        </div>
      </div>
    </div>
  );
}
