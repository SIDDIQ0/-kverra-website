import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 7, suffix: "+", label: "Years editing real estate photos" },
  { value: 98, suffix: "%", label: "Delivered on or ahead of schedule" },
  { value: 1200, suffix: "+", label: "Photos edited every day" },
  { value: 3, suffix: "", label: "Countries served daily: US, UK, India" },
];

export function StatsBar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const numberEls = el.querySelectorAll("[data-count-to]");

    if (reduce) {
      numberEls.forEach((n) => {
        n.textContent = n.dataset.countTo;
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      numberEls.forEach((n) => {
        const target = Number(n.dataset.countTo);
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            n.textContent = Math.round(proxy.val).toLocaleString();
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="border-y border-gold-500/15 bg-paper-100 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold-500/20 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:px-8 lg:text-left first:lg:pl-0">
            <p className="font-display text-4xl font-semibold text-brand-800 sm:text-5xl">
              <span data-count-to={s.value}>0</span>
              {s.suffix}
            </p>
            <p className="mt-2 text-sm leading-snug text-ink-900/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
