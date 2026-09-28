import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits `text` into words, each masked in its own overflow-hidden box, and
 * slides them up into place word by word. `emphasize` (optional) renders a
 * single matching word in italic blue, matching the site's headline style.
 */
export function WordReveal({
  text,
  emphasize,
  emphasisClassName = "text-blue-400 italic",
  as: Tag = "h2",
  className = "",
  trigger = "scroll",
  delay = 0,
  play = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const words = el.querySelectorAll(".word-inner");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      return undefined;
    }

    // `trigger="load"` normally fires as soon as this mounts. When a parent
    // is coordinating a larger handoff (e.g. a cinematic loader) it can hold
    // this back with `play={false}` - the words sit masked/hidden until the
    // parent flips `play` to true, instead of revealing on their own clock.
    if (trigger === "load" && !play) {
      gsap.set(words, { yPercent: 110, opacity: 0 });
      return undefined;
    }

    const vars = {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      stagger: 0.045,
      ease: "power3.out",
      delay,
    };

    const tween =
      trigger === "load"
        ? gsap.fromTo(words, { yPercent: 110, opacity: 0 }, vars)
        : gsap.fromTo(
            words,
            { yPercent: 110, opacity: 0 },
            {
              ...vars,
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
            }
          );

    return () => tween.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger, delay, play]);

  const words = text.split(" ");
  let emphasisUsed = false;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const clean = word.replace(/[.,!?]/g, "");
        const isEmphasis =
          !emphasisUsed && emphasize && clean.toLowerCase() === emphasize.toLowerCase();
        if (isEmphasis) emphasisUsed = true;
        return (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <span className={`word-inner inline-block ${isEmphasis ? emphasisClassName : ""}`}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
