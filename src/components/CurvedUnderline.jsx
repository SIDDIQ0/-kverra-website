import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * A hand-drawn-style curved underline that tracks a target word's bounding
 * box (via ResizeObserver, since the target reflows across breakpoints) and
 * draws itself left-to-right with a stroke-dashoffset tween. Positioned
 * absolutely against `containerRef`, which must be `position: relative`.
 */
export function CurvedUnderline({ targetRef, containerRef, play = true, delay = 1.15, color = "#F05A3C" }) {
  const pathRef = useRef(null);
  const [box, setBox] = useState(null);

  useEffect(() => {
    const target = targetRef.current;
    const container = containerRef.current;
    if (!target || !container) return undefined;

    // `offsetLeft`/`offsetTop`/`offsetWidth` reflect layout position only,
    // ignoring the CSS `transform` WordReveal's own entrance tween animates
    // the word with - unlike getBoundingClientRect, which would capture
    // whatever mid-animation (or still off-screen pre-reveal) position the
    // word happened to be in at measurement time. `container` (textColRef)
    // is the nearest positioned ancestor, so these offsets already line up
    // with the coordinate space this SVG is positioned in.
    const measure = () => {
      if (target.offsetWidth === 0) return;
      // Scale the stroke and curve depth off the word's own line-height so
      // the underline reads proportionally the same whether the headline is
      // set small (mobile) or large (desktop) - a fixed stroke width looked
      // thin and undersized once the headline grew substantially larger.
      const strokeWidth = Math.min(6, Math.max(3, target.offsetHeight * 0.055));
      const svgHeight = Math.max(20, target.offsetHeight * 0.32);
      setBox({
        left: target.offsetLeft - target.offsetWidth * 0.04,
        top: target.offsetTop + target.offsetHeight - svgHeight * 0.4,
        width: target.offsetWidth * 1.08,
        height: svgHeight,
        strokeWidth,
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

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !box) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const length = path.getTotalLength();

    if (reduce) {
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
      return undefined;
    }

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    if (!play) return undefined;
    const tween = gsap.to(path, { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut", delay });
    return () => tween.kill();
  }, [box, play, delay]);

  if (!box) return null;

  const { width, height, strokeWidth } = box;
  const midX = width / 2;

  return (
    <svg
      className="pointer-events-none absolute"
      style={{ left: box.left, top: box.top, width, height }}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d={`M3,${height * 0.65} Q${midX},${height * 0.08} ${width - 3},${height * 0.55}`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
