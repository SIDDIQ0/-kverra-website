import { useEffect, useRef } from "react";
import { ArrowsLeftRight } from "@phosphor-icons/react";
import { gsap } from "gsap";

const clampPercent = (p) => Math.min(96, Math.max(4, p));

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "RAW",
  afterLabel = "EDITED",
  className = "",
}) {
  const containerRef = useRef(null);
  const rawWrapRef = useRef(null);
  const handleRef = useRef(null);
  const draggingRef = useRef(false);

  const setPercent = (p) => {
    const clamped = clampPercent(p);
    if (rawWrapRef.current) {
      rawWrapRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${clamped}%`;
      handleRef.current.setAttribute("aria-valuenow", String(Math.round(clamped)));
    }
  };

  const percentFromClientX = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    setPercent(percentFromClientX(e.clientX));
  };

  const stopDrag = () => {
    draggingRef.current = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", stopDrag);
  };

  const startDrag = (e) => {
    draggingRef.current = true;
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDrag);
    setPercent(percentFromClientX(e.clientX));
  };

  const onKeyDown = (e) => {
    const current = parseFloat(handleRef.current.style.left) || 50;
    if (e.key === "ArrowLeft") setPercent(current - 4);
    if (e.key === "ArrowRight") setPercent(current + 4);
  };

  useEffect(() => {
    setPercent(50);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const el = containerRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const proxy = { p: 50 };
        gsap
          .timeline()
          .to(proxy, {
            p: 20,
            duration: 0.9,
            ease: "power2.inOut",
            onUpdate: () => setPercent(proxy.p),
          })
          .to(proxy, {
            p: 80,
            duration: 1.3,
            ease: "power2.inOut",
            onUpdate: () => setPercent(proxy.p),
          })
          .to(proxy, {
            p: 50,
            duration: 0.9,
            ease: "power2.inOut",
            onUpdate: () => setPercent(proxy.p),
          });
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [before, after]);

  return (
    <div
      ref={containerRef}
      onPointerDown={startDrag}
      style={{ touchAction: "pan-y" }}
      className={`group relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-2xl bg-brand-950 select-none ${className}`}
    >
      <img
        src={after}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-brand-950/75 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        ref={rawWrapRef}
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <img
          src={before}
          alt=""
          className="h-full w-full object-cover [filter:grayscale(0.25)_brightness(0.7)_contrast(0.9)_saturate(0.7)_sepia(0.12)]"
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold tracking-wide text-brand-950">
          {beforeLabel}
        </span>
      </div>

      <div
        ref={handleRef}
        onKeyDown={onKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare the raw and edited photo"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute top-0 h-full w-0 -translate-x-1/2 focus:outline-none"
        style={{ left: "50%" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/90 shadow-[0_0_0_1px_rgba(6,15,46,0.25)]" />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-800 shadow-lg ring-4 ring-white/30 transition-transform group-hover:scale-105">
          <ArrowsLeftRight size={20} weight="bold" />
        </div>
      </div>
    </div>
  );
}
