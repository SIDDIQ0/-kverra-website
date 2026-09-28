import { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { useReveal } from "../hooks/useReveal";
import { photos } from "../data/images";

const categories = [
  { key: "interior", label: "Interior Retouching", image: photos.livingRoom[2] },
  { key: "twilight", label: "Twilight Conversion", image: photos.twilight[2] },
  { key: "object", label: "Object Removal", image: photos.bedroom[2] },
  { key: "sky", label: "Sky, Grass & Pool", image: photos.pool[2] },
  { key: "dusk", label: "Day to Dusk", image: photos.exteriorDay[2] },
];

export function WhatWeDo() {
  const [active, setActive] = useState(categories[0].key);
  const headerRef = useReveal();
  const sliderRef = useReveal({ y: 40, delay: 0.1 });
  const current = categories.find((c) => c.key === active);

  return (
    <section id="what-we-do" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            One photo, two <em className="text-blue-600">outcomes</em>.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-900/65">
            Drag the handle. Same photo, two lives: the raw camera file on the
            left, the delivered edit on the right.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              aria-pressed={active === cat.key}
              className={`btn-glass shrink-0 px-5 py-2.5 text-sm ${
                active === cat.key ? "btn-glass--primary btn-liquid" : "btn-glass--secondary-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={sliderRef} className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <BeforeAfterSlider
            key={current.key}
            before={current.image}
            after={current.image}
            className="shadow-2xl shadow-brand-950/15"
          />
          <div className="rounded-2xl bg-brand-950 p-8 text-white lg:p-10">
            <p className="font-display text-2xl font-semibold">
              {current.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Delivered as print-ready JPEG or TIFF, colour matched across the
              full set so a whole listing feels shot in one session.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <span className="h-px flex-1 bg-blue-400/30" />
              <span>Drag anywhere on the photo</span>
              <span className="h-px flex-1 bg-blue-400/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
