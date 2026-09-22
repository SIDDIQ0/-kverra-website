import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fades an element in from a soft blur to fully sharp as it enters view. */
export function useBlurReveal({ blur = 14, y = 20, duration = 1, delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0, filter: "blur(0px)" });
      return undefined;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y, filter: `blur(${blur}px)` },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => tween.kill();
  }, [blur, y, duration, delay]);

  return ref;
}
