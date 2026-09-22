import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logoMark from "../assets/kverra-logo-mark.png";
import { photos } from "../data/images";

const STAGES = ["Raw", "Exposure", "Color", "Detail", "Refine", "Final"];

// Each stage filter shares the same function list/order (brightness, contrast,
// saturate, blur, sepia) so GSAP can tween the `filter` string directly
// between them - the image visibly "gets edited" rather than just fading in.
const STAGE_FILTERS = [
  "brightness(0.85) contrast(0.82) saturate(0.5) blur(1.5px) sepia(0)",
  "brightness(1.08) contrast(0.9) saturate(0.62) blur(1px) sepia(0)",
  "brightness(1.02) contrast(0.98) saturate(1.15) blur(0.5px) sepia(0.05)",
  "brightness(1) contrast(1.1) saturate(1.08) blur(0px) sepia(0.02)",
  "brightness(1.02) contrast(1.08) saturate(1.06) blur(0px) sepia(0.01)",
  "brightness(1.03) contrast(1.06) saturate(1.05) blur(0px) sepia(0)",
];

const BLADE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

// Same source and crop as Hero.jsx's HERO_IMAGE - the loader reveals this
// exact photo, so the frame-expand climax hands off into the hero without
// the underlying image ever visibly changing.
const LOADER_IMAGE = photos.pool[1];

export function LoadingScreen({ onFinish, onReveal }) {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const wordmarkRef = useRef(null);
  const taglineRef = useRef(null);
  const frameRef = useRef(null);
  const ringRef = useRef(null);
  const imgRef = useRef(null);
  const scanRef = useRef(null);
  const stageRowRef = useRef(null);
  const progressBarRef = useRef(null);
  const pctRef = useRef(null);
  const finalStatusRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      document.body.style.overflow = "";
      onFinish();
    };

    const setActiveStage = (index) => {
      const children = stageRowRef.current?.children;
      if (!children) return;
      Array.from(children).forEach((el, i) => {
        el.classList.toggle("text-gold-300", i <= index);
        el.classList.toggle("text-white/30", i > index);
        el.classList.toggle("font-semibold", i === index);
      });
    };

    if (reduce) {
      if (imgRef.current) imgRef.current.style.filter = STAGE_FILTERS[STAGE_FILTERS.length - 1];
      setActiveStage(STAGES.length - 1);
      gsap.set([logoRef.current, lineRef.current, wordmarkRef.current, taglineRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      gsap.set(
        [ringRef.current, frameRef.current.querySelectorAll(".loader-grid, .loader-crop, .loader-tech-label, .aperture-blade")],
        { opacity: 0 }
      );
      onReveal?.();
      const t = setTimeout(finish, 450);
      return () => clearTimeout(t);
    }

    if (imgRef.current) imgRef.current.style.filter = STAGE_FILTERS[0];
    setActiveStage(0);

    const progress = { v: 0 };
    const tl = gsap.timeline({ onComplete: finish });

    // Phase 1 - void: a tiny gold line, then the Kverra identity, on a near-black ground.
    tl.addLabel("void")
      .fromTo(lineRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
      .fromTo(logoRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.1")
      .fromTo(wordmarkRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, "-=0.15")
      .fromTo(taglineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=0.2")

      // Phase 2 - camera focus: viewfinder chrome assembles around the frame.
      .addLabel("focus", "+=0.05")
      .fromTo(frameRef.current, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }, "focus")
      .fromTo(ringRef.current, { opacity: 0, scale: 0.85, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: "power2.out" }, "focus")
      .fromTo(".loader-grid", { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.03 }, "focus+=0.05")
      .fromTo(".loader-crop", { opacity: 0, scale: 1.3 }, { opacity: 1, scale: 1, duration: 0.3, stagger: 0.04 }, "focus+=0.05")
      .fromTo(".loader-tech-label", { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.04 }, "focus+=0.1")

      // Phase 3 - aperture: blades swing open, the image irises into view rather than fading.
      .addLabel("aperture", "+=0.05")
      .fromTo(
        ".aperture-blade",
        { opacity: 0.9 },
        { opacity: 0, rotate: "+=35", scale: 1.4, duration: 0.5, ease: "power2.in", stagger: 0.02 },
        "aperture"
      )
      .fromTo(
        imgRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(75% at 50% 50%)", duration: 0.55, ease: "power2.out" },
        "aperture"
      )

      // Phase 4/5 - raw capture enters the edit: stages advance while a scan
      // line sweeps and a quiet percentage climbs alongside the stage labels.
      .addLabel("edit", "+=0.05")
      .to(scanRef.current, { opacity: 1, yPercent: 220, duration: 0.85, ease: "power1.inOut" }, "edit")
      .to(imgRef.current, { filter: STAGE_FILTERS[1], duration: 0.22, ease: "power1.inOut", onStart: () => setActiveStage(1) }, "edit+=0.05")
      .to(imgRef.current, { filter: STAGE_FILTERS[2], duration: 0.22, ease: "power1.inOut", onStart: () => setActiveStage(2) }, "edit+=0.3")
      .to(imgRef.current, { filter: STAGE_FILTERS[3], duration: 0.22, ease: "power1.inOut", onStart: () => setActiveStage(3) }, "edit+=0.55")
      .to(imgRef.current, { filter: STAGE_FILTERS[4], duration: 0.22, ease: "power1.inOut", onStart: () => setActiveStage(4) }, "edit+=0.8")
      .to(imgRef.current, { filter: STAGE_FILTERS[5], duration: 0.25, ease: "power1.inOut", onStart: () => setActiveStage(5) }, "edit+=1.05")
      .to(
        progress,
        {
          v: 100,
          duration: 1.3,
          ease: "power1.inOut",
          onUpdate: () => {
            if (progressBarRef.current) progressBarRef.current.style.width = `${progress.v}%`;
            if (pctRef.current) pctRef.current.textContent = `${Math.round(progress.v)}%`;
          },
        },
        "edit"
      )
      .to(imgRef.current, { clipPath: "circle(100% at 50% 50%)", duration: 0.4, ease: "power1.out" }, "edit+=0.2")

      // Phase 6 - climax: chrome falls away, the frame breaks out of the flow
      // and grows to fill the viewport, becoming the same photo the homepage
      // hero uses underneath - one continuous camera-to-website transition.
      .addLabel("climax", "+=0.05")
      .to(
        [ringRef.current, ".loader-grid", ".loader-crop", ".loader-tech-label", scanRef.current, logoRef.current, lineRef.current, wordmarkRef.current, taglineRef.current, stageRowRef.current, progressBarRef.current?.parentElement?.parentElement],
        { opacity: 0, duration: 0.3 },
        "climax"
      )
      .call(
        () => {
          const rect = frameRef.current.getBoundingClientRect();
          gsap.set(frameRef.current, {
            position: "fixed",
            top: rect.top,
            left: rect.left,
            margin: 0,
            width: rect.width,
            height: rect.height,
          });
        },
        [],
        "climax"
      )
      .to(
        frameRef.current,
        {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "climax"
      )
      // The hero's own reveal begins here, before the loader has finished
      // leaving - by the time this overlay fades away, the homepage is
      // already mid-reveal underneath rather than popping in from nothing.
      .call(() => onReveal?.(), [], "climax+=0.4")
      .fromTo(
        finalStatusRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        "climax+=0.4"
      )
      .to({}, { duration: 0.2 })
      .to(rootRef.current, { opacity: 0, duration: 0.45, ease: "power2.inOut" })
      .to(rootRef.current, { display: "none", duration: 0 });

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 px-6"
    >
      <div
        aria-hidden="true"
        className="loader-ambient pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[62vh] w-[62vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
      />

      <img ref={logoRef} src={logoMark} alt="Kverra" className="h-8 w-auto" />
      <div ref={lineRef} className="gold-rule mt-4 w-10 origin-center" />
      <p
        ref={wordmarkRef}
        className="mt-4 font-display text-2xl font-semibold tracking-[0.4em] text-white uppercase sm:text-3xl"
      >
        Kverra
      </p>
      <p ref={taglineRef} className="mt-2 text-[10px] font-semibold tracking-[0.4em] text-gold-300 uppercase">
        Infotech
      </p>

      <div
        ref={frameRef}
        className="relative mt-8 w-[74vw] max-w-[700px] overflow-hidden rounded-md ring-1 ring-white/15"
        style={{ aspectRatio: "16 / 10" }}
      >
        <span className="loader-crop absolute -top-2 -left-2 z-10 h-4 w-4 border-t-2 border-l-2 border-gold-400/80" />
        <span className="loader-crop absolute -top-2 -right-2 z-10 h-4 w-4 border-t-2 border-r-2 border-gold-400/80" />
        <span className="loader-crop absolute -bottom-2 -left-2 z-10 h-4 w-4 border-b-2 border-l-2 border-gold-400/80" />
        <span className="loader-crop absolute -bottom-2 -right-2 z-10 h-4 w-4 border-b-2 border-r-2 border-gold-400/80" />

        <img
          ref={imgRef}
          src={LOADER_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_32%] sm:object-[center_40%]"
        />

        <div
          ref={scanRef}
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-0 mix-blend-screen"
        />

        <div ref={ringRef} className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <span className="h-[68%] w-[42%] rounded-full border border-gold-400/50" />
          <span className="absolute h-1.5 w-1.5 rounded-full bg-gold-400" />
          {BLADE_ANGLES.map((angle) => (
            <span
              key={angle}
              className="aperture-blade absolute top-1/2 left-1/2 h-14 w-px bg-gradient-to-b from-gold-300/80 to-transparent"
              style={{ transformOrigin: "top center", transform: `translate(-50%, 0) rotate(${angle}deg)` }}
            />
          ))}
        </div>

        <span className="loader-grid absolute inset-y-0 left-1/3 z-10 w-px bg-white/10" />
        <span className="loader-grid absolute inset-y-0 left-2/3 z-10 w-px bg-white/10" />
        <span className="loader-grid absolute inset-x-0 top-1/3 z-10 h-px bg-white/10" />
        <span className="loader-grid absolute inset-x-0 top-2/3 z-10 h-px bg-white/10" />

        <span className="loader-tech-label absolute top-3 left-3 z-10 text-[8px] font-medium tracking-[0.2em] text-white/45 uppercase sm:text-[9px]">
          Focus
        </span>
        <span className="loader-tech-label absolute top-3 right-3 z-10 text-[8px] font-medium tracking-[0.2em] text-white/45 uppercase sm:text-[9px]">
          Frame 01 / 35mm
        </span>
        <span className="loader-tech-label absolute bottom-3 left-3 z-10 text-[8px] font-medium tracking-[0.2em] text-white/45 uppercase sm:text-[9px]">
          F 2.8 · ISO 100
        </span>
        <span className="loader-tech-label absolute right-3 bottom-3 z-10 text-[8px] font-medium tracking-[0.2em] text-white/45 uppercase sm:text-[9px]">
          Raw capture
        </span>
      </div>

      <div
        ref={stageRowRef}
        className="mt-5 flex items-center gap-1 text-[8px] font-medium tracking-[0.06em] text-white/30 uppercase sm:gap-2.5 sm:text-[9px] sm:tracking-[0.22em]"
      >
        {STAGES.map((s, i) => (
          <span key={s} className="flex items-center gap-1 sm:gap-2.5">
            <span className="transition-colors duration-300">{s}</span>
            {i < STAGES.length - 1 && <span className="text-white/15">·</span>}
          </span>
        ))}
      </div>

      <div className="mt-3 flex w-[74vw] max-w-[700px] items-center gap-3">
        <div className="relative h-px flex-1 bg-white/15">
          <div ref={progressBarRef} className="absolute inset-y-0 left-0 w-0 bg-gold-400" />
        </div>
        <span ref={pctRef} className="w-9 text-right text-[11px] font-semibold text-gold-300 tabular-nums">
          0%
        </span>
      </div>

      <p
        ref={finalStatusRef}
        className="pointer-events-none fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold tracking-[0.35em] text-gold-200 uppercase opacity-0 [text-shadow:0_2px_16px_rgba(14,21,36,0.6)]"
      >
        Listing ready
      </p>
    </div>
  );
}
