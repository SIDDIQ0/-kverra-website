import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * A custom scroll-progress bar for a horizontally-scrolling container,
 * standing in for the native browser scrollbar (which `.no-scrollbar`
 * hides on the target). Thumb width tracks how much of the row is
 * visible, its position tracks scroll progress via a GSAP quickTo tween,
 * and it's draggable and click-to-jump, not just a passive indicator.
 * Hides itself when the target doesn't actually overflow.
 */
export function HorizontalScrollbar({ targetRef, variant = "light" }) {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const target = targetRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!target || !track || !thumb) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const xTo = gsap.quickTo(thumb, "x", { duration: reduce ? 0 : 0.25, ease: "power3.out" });

    const update = () => {
      const { scrollWidth, clientWidth, scrollLeft } = target;
      const overflow = scrollWidth - clientWidth;
      if (overflow <= 1) {
        gsap.to(track, { autoAlpha: 0, duration: 0.2 });
        return;
      }
      gsap.to(track, { autoAlpha: 1, duration: 0.2 });
      const trackWidth = track.clientWidth;
      const thumbWidth = Math.max((clientWidth / scrollWidth) * trackWidth, 40);
      thumb.style.width = `${thumbWidth}px`;
      const maxThumbX = trackWidth - thumbWidth;
      const progress = scrollLeft / overflow;
      xTo(progress * maxThumbX);
    };

    update();
    target.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(target);

    const onTrackPointerDown = (e) => {
      if (e.target === thumb) return;
      const rect = track.getBoundingClientRect();
      const thumbWidth = thumb.offsetWidth;
      const trackWidth = track.clientWidth;
      const clickX = e.clientX - rect.left;
      const progress = gsap.utils.clamp(0, 1, (clickX - thumbWidth / 2) / (trackWidth - thumbWidth));
      const overflow = target.scrollWidth - target.clientWidth;
      target.scrollTo({ left: progress * overflow, behavior: reduce ? "auto" : "smooth" });
    };
    track.addEventListener("pointerdown", onTrackPointerDown);

    let startX = 0;
    let startScrollLeft = 0;
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const trackWidth = track.clientWidth;
      const thumbWidth = thumb.offsetWidth;
      const overflow = target.scrollWidth - target.clientWidth;
      const deltaProgress = (e.clientX - startX) / (trackWidth - thumbWidth);
      target.scrollLeft = gsap.utils.clamp(0, overflow, startScrollLeft + deltaProgress * overflow);
    };
    const endDrag = () => {
      draggingRef.current = false;
      thumb.classList.remove("is-dragging");
      document.body.style.userSelect = "";
    };
    const onThumbPointerDown = (e) => {
      draggingRef.current = true;
      thumb.setPointerCapture?.(e.pointerId);
      thumb.classList.add("is-dragging");
      startX = e.clientX;
      startScrollLeft = target.scrollLeft;
      document.body.style.userSelect = "none";
      e.preventDefault();
      e.stopPropagation();
    };
    thumb.addEventListener("pointerdown", onThumbPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);

    return () => {
      target.removeEventListener("scroll", update);
      ro.disconnect();
      track.removeEventListener("pointerdown", onTrackPointerDown);
      thumb.removeEventListener("pointerdown", onThumbPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
    };
  }, [targetRef]);

  const trackTint = variant === "dark" ? "bg-white/12" : "bg-brand-900/10";

  return (
    // The track and thumb hit areas are taller than the visible bar (touch
    // target, not decoration) so the thumb stays draggable with a finger;
    // each wraps a thin inner bar that carries the actual colour/height.
    <div
      ref={trackRef}
      className="group/scrollbar relative mx-auto mt-3 flex h-6 w-full max-w-52 cursor-pointer items-center touch-none"
    >
      <div className={`h-[3px] w-full rounded-full ${trackTint}`} />
      <div
        ref={thumbRef}
        className="absolute top-0 left-0 flex h-6 w-16 cursor-grab items-center active:cursor-grabbing"
      >
        <span className="block h-[3px] w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-[height] duration-200 ease-out group-hover/scrollbar:h-[5px] [.is-dragging_&]:h-[5px]" />
      </div>
    </div>
  );
}
