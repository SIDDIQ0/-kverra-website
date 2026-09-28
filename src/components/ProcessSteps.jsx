import { UploadSimple, MagicWand, DownloadSimple } from "@phosphor-icons/react";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";

const steps = [
  {
    icon: UploadSimple,
    title: "Upload your photos",
    body: "Drop raw files or brackets through your dashboard or WhatsApp.",
  },
  {
    icon: MagicWand,
    title: "We edit",
    body: "A dedicated editor works your file: HDR, retouching, staging.",
  },
  {
    icon: DownloadSimple,
    title: "Download & list",
    body: "Print-ready images land back in as little as 24 hours.",
  },
];

export function ProcessSteps() {
  const headerRef = useReveal();
  const stepsRef = useStaggerReveal(".process-step", { stagger: 0.12 });

  return (
    <section id="process" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          ref={headerRef}
          className="mx-auto max-w-sm text-center font-display text-[2.5rem] leading-[1.1] font-semibold tracking-tight text-ink-900 sm:mx-0 sm:max-w-none sm:text-left sm:text-5xl sm:leading-none"
        >
          From raw file to <em className="text-blue-600">listing-ready</em>.
        </h2>

        <div
          ref={stepsRef}
          className="relative mt-14 grid gap-10 text-center sm:grid-cols-3 sm:gap-6 sm:text-left"
        >
          <div
            aria-hidden="true"
            className="absolute top-8 right-0 left-0 hidden h-px bg-blue-500/20 sm:block"
          />
          {steps.map((step, i) => (
            <div key={step.title} className="process-step relative flex flex-col items-center sm:block">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-blue-400 shadow-lg shadow-brand-900/20 ring-1 ring-blue-500/30">
                <step.icon size={28} weight="bold" />
              </div>
              <p className="mt-5 font-display text-xl font-semibold text-ink-900">
                {step.title}
              </p>
              <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-ink-900/60 sm:mx-0 sm:text-sm">
                {step.body}
              </p>
              <span className="mt-4 block text-xs font-semibold tracking-wide text-brand-700/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
