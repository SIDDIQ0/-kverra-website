import { useEffect } from "react";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { CTASection } from "../components/CTASection";
import { useReveal } from "../hooks/useReveal";
import { WordReveal } from "../components/WordReveal";

export function Portfolio() {
  const headerRef = useReveal();

  useEffect(() => {
    document.title = "Portfolio | Kverra Infotech";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-paper-50 pt-16 pb-20 sm:pt-24">
        <div aria-hidden="true" className="liquid-mesh pointer-events-none absolute inset-x-0 top-0 -z-10 h-[75%] opacity-70" />
        <div ref={headerRef} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300">
            Selected work
          </p>
          <WordReveal
            as="h1"
            text="Real listings, honest edits."
            emphasize="edits"
            trigger="load"
            delay={0.15}
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
            A cross-section of HDR, twilight and staging work delivered for
            agents and photographers this year.
          </p>
        </div>
      </section>
      <PortfolioGallery showHeading={false} />
      <CTASection />
    </>
  );
}
