import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVelocitySkew } from "../hooks/useVelocitySkew";
import { useTilt } from "../hooks/useTilt";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

gsap.registerPlugin(ScrollTrigger);

/**
 * A single reel frame: widescreen still, desaturated at rest like an
 * unlit negative and colour-graded in on hover, with viewfinder corner
 * marks and a pointer-tracked tilt on the inner frame only (kept off the
 * outer .dolly-card element so it never fights the scroll-reveal tween
 * below, which owns that element's transform).
 */
function ReelFrame({ item, index }) {
  const tiltRef = useTilt(5);

  return (
    <div className="dolly-card group w-[82vw] shrink-0 snap-center sm:w-[58vw] lg:w-[34vw]">
      <div
        ref={tiltRef}
        className="relative overflow-hidden rounded-xl bg-brand-950 shadow-2xl shadow-black/50 ring-1 ring-white/10"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.82] saturate-[0.85] grayscale-[35%] transition-[filter,transform] duration-700 ease-out group-hover:brightness-100 group-hover:saturate-100 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/5 to-transparent" />

          <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-blue-400/0 transition-colors duration-500 group-hover:border-blue-400/70" />
          <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-blue-400/0 transition-colors duration-500 group-hover:border-blue-400/70" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-blue-400/0 transition-colors duration-500 group-hover:border-blue-400/70" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-blue-400/0 transition-colors duration-500 group-hover:border-blue-400/70" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[11px] tracking-[0.25em] text-blue-400/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-0.5 text-sm text-white/55">{item.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Camera-dolly reveal: cards sit in normal document flow (native horizontal
 * drag/swipe to browse, no scroll hijacking) and scale up from a soft,
 * distant blur into sharp focus as the page scrolls them into view, as if
 * the camera were racking focus onto each one. Deliberately avoids pinning
 * or remapping vertical scroll to horizontal motion.
 */
export function CameraDollyGallery({ items }) {
  const rowRef = useRef(null);
  useVelocitySkew(rowRef, { max: 1.5, factor: 0.25 });

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return undefined;
    const cards = row.querySelectorAll(".dolly-card");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      gsap.set(cards, { scale: 1, opacity: 1, filter: "blur(0px)" });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { scale: 0.8, opacity: 0.3, filter: "blur(14px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            end: "top 30%",
            scrub: 0.6,
          },
        }
      );
    }, row);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        ref={rowRef}
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:gap-8 lg:px-[8vw]"
      >
        {items.map((item, i) => (
          <ReelFrame key={i} item={item} index={i} />
        ))}
      </div>
      <HorizontalScrollbar targetRef={rowRef} variant="light" />
    </div>
  );
}
