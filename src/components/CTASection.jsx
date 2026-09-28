import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "../data/images";
import { whatsappLink } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import { useMagnetic } from "../hooks/useMagnetic";
import { WordReveal } from "./WordReveal";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const ref = useReveal({ y: 24 });
  const ctaRef = useMagnetic(0.2);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 sm:py-32">
      <img
        ref={bgRef}
        src={photos.twilight[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/80 to-brand-950/95" />

      <div ref={ref} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="accent-rule mx-auto w-16" />
        <WordReveal
          as="h2"
          text="Ready to make your listings look their best?"
          emphasize="best"
          className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
          Send your first three photos and we edit them for free, no card
          needed.
        </p>
        <a
          ref={ctaRef}
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass btn-glass--primary btn-liquid mt-8 px-8 py-4 text-sm"
        >
          Chat on WhatsApp
          <ArrowRight size={18} weight="bold" />
        </a>
      </div>
    </section>
  );
}
