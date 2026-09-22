import { useEffect } from "react";
import { gsap } from "gsap";
import { useLenis } from "../lenis/LenisContext.jsx";

/**
 * Skews an element in proportion to scroll speed (from Lenis' reported
 * velocity), easing back to level the moment scrolling slows. Reads as
 * physical weight rather than a flat scroll-to-transform mapping.
 */
export function useVelocitySkew(ref, { max = 6, factor = 0.6 } = {}) {
  const lenisRef = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const skewTo = gsap.quickTo(el, "skewY", { duration: 0.6, ease: "power3.out" });
    const lenis = lenisRef?.current;
    if (!lenis) return undefined;

    const onScroll = (e) => {
      const clamped = gsap.utils.clamp(-max, max, (e.velocity || 0) * factor);
      skewTo(clamped);
    };
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [ref, lenisRef, max, factor]);
}
