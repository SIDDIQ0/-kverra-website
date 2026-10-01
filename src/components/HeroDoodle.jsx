import { useEffect, useRef, useState } from "react";
import { Camera } from "@phosphor-icons/react";

/**
 * Small hand-drawn-feeling decorative trail that floats directly above the
 * word "Photo" inside the blue eyebrow line ("Real Estate Photo Editing"),
 * curving up and to the right toward a camera icon. Deliberately anchored
 * to a word *inside the eyebrow* rather than anything in the headline below
 * - the headline is much larger, so an anchor borrowed from it could place
 * the group at a height that overlaps the headline's own text depending on
 * breakpoint/line-wrap. Anchoring both x and y to the same small, stable
 * eyebrow word keeps the group reliably above all text at any size.
 *
 * `targetRef` must point at the "Photo" span inside the eyebrow (see
 * Hero.jsx, where the eyebrow is split into words so this one can carry a
 * ref). Uses `offsetLeft`/`offsetTop`/`offsetWidth`, same as
 * `CurvedUnderline` and for the same reason: those reflect layout position
 * only, ignoring the CSS `transform` the eyebrow's own entrance tween
 * animates it with, so the anchor is correct immediately rather than racing
 * the reveal animation. `containerRef` must be `position: relative` (the
 * same textColRef CurvedUnderline uses, so everything shares one coordinate
 * space).
 */
export function HeroDoodle({ targetRef, containerRef, className = "" }) {
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    const target = targetRef.current;
    const container = containerRef.current;
    if (!target || !container) return undefined;

    // Fixed, not responsive: this height has to be known here (not just in
    // Tailwind classes) so `top` can be computed without a CSS transform -
    // see the note below on why a transform can't be used for this.
    const GROUP_HEIGHT = 60;

    const measure = () => {
      if (target.offsetWidth === 0) return;
      setAnchor({
        left: target.offsetLeft + target.offsetWidth * 0.15,
        top: target.offsetTop - 12 - GROUP_HEIGHT,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(target);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [targetRef, containerRef]);

  if (!anchor) return null;

  return (
    // No `transform` here (not even a plain inline one, and not Tailwind's
    // `-translate-y-full`) - this element also carries `hero-cta`, which
    // Hero.jsx's GSAP reveal timeline animates via `y`. GSAP writes y moves
    // directly to the `transform` property and overwrites whatever was
    // there, which silently clobbered an earlier translateY(-100%) attempt
    // at mount and left the group sitting at its un-translated position,
    // overlapping the eyebrow text it's meant to float above. Baking the
    // "float above" offset into `top` (via GROUP_HEIGHT) instead of a
    // transform sidesteps that entirely - `top` and `transform` don't
    // interact, so GSAP's own y-transform for the fade-in stays free to do
    // its thing.
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{ left: anchor.left, top: anchor.top }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 110 50" fill="none" aria-hidden="true">
        <path
          d="M4,42 Q22,20 40,32 Q56,44 70,24 T106,8"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="1 6.5"
          strokeLinecap="round"
        />
      </svg>
      <Camera
        weight="light"
        aria-hidden="true"
        className="absolute h-4 w-4 sm:h-5 sm:w-5"
        style={{ left: "96%", top: "16%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
