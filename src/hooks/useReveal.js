import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades + lifts an element in once it enters the viewport.
 * Used for section headers and standalone blocks (hierarchy: tells the
 * reader where to look next as they scroll).
 */
export function useReveal({ y = 32, delay = 0, duration = 0.9 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduceMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [y, delay, duration]);

  return ref;
}

/**
 * Staggers the direct children matching `childSelector` in as the container
 * enters the viewport (storytelling: reveals a set of items in sequence
 * rather than all at once).
 */
export function useStaggerReveal(childSelector, { y = 28, stagger = 0.09 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    if (reduceMotion()) {
      gsap.set(children, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [childSelector, y, stagger]);

  return ref;
}
