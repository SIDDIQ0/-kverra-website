import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * 3D pointer-tracked tilt for cards. Desktop, fine-pointer only; a no-op
 * everywhere else so touch devices never see a stuck tilt state.
 */
export function useTilt(max = 8) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return undefined;

    gsap.set(el, { transformPerspective: 900, transformStyle: "preserve-3d" });
    const rxTo = gsap.quickTo(el, "rotateX", { duration: 0.45, ease: "power3.out" });
    const ryTo = gsap.quickTo(el, "rotateY", { duration: 0.45, ease: "power3.out" });
    const scaleTo = gsap.quickTo(el, "scale", { duration: 0.45, ease: "power3.out" });

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rxTo(-py * max);
      ryTo(px * max);
      scaleTo(1.015);
    };
    const onLeave = () => {
      rxTo(0);
      ryTo(0);
      scaleTo(1);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return ref;
}
