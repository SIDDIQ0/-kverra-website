import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { photos } from "../data/images";
import { useReveal } from "../hooks/useReveal";
import { BlurImage } from "./BlurImage";

const gallery = [
  { src: photos.livingRoom[1], h: "h-72", alt: "Edited living room with balanced HDR lighting" },
  { src: photos.kitchen[2], h: "h-96", alt: "Bright, colour-corrected kitchen edit" },
  { src: photos.twilight[1], h: "h-80", alt: "Twilight-converted property exterior" },
  { src: photos.bedroom[3], h: "h-64", alt: "Retouched bedroom with even, natural light" },
  { src: photos.aerial[2], h: "h-96", alt: "Levelled and colour-matched drone exterior" },
  { src: photos.bathroom[1], h: "h-72", alt: "Enhanced bathroom interior edit" },
  { src: photos.pool[2], h: "h-80", alt: "Pool and backyard with corrected sky and water" },
  { src: photos.exteriorDay[2], h: "h-96", alt: "Daytime exterior with clean colour grade" },
  { src: photos.kitchen[3], h: "h-64", alt: "Flambient-edited kitchen interior" },
  { src: photos.bedroom[1], h: "h-80", alt: "Object-removed, staged bedroom edit" },
  { src: photos.livingRoom[2], h: "h-72", alt: "Wide-angle living room, HDR balanced" },
  { src: photos.bathroom[3], h: "h-96", alt: "Warm-toned bathroom retouch" },
  { src: photos.exteriorDay[1], h: "h-80", alt: "Daytime facade, colour graded" },
  { src: photos.pool[1], h: "h-72", alt: "Backyard pool, sky and water corrected" },
  { src: photos.aerial[1], h: "h-64", alt: "Aerial property overview, levelled" },
  { src: photos.bathroom[0], h: "h-80", alt: "Bathroom edit with balanced light" },
];

export function PortfolioGallery({ limit, showHeading = true, showViewAll = false }) {
  const headerRef = useReveal();
  const items = limit ? gallery.slice(0, limit) : gallery;

  return (
    <section id="portfolio" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div ref={headerRef} className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              A glimpse of the <em className="not-italic text-blue-600">edits</em>.
            </h2>
            {showViewAll && (
              <Link
                to="/portfolio"
                className="group btn-glass btn-glass--secondary-light px-5 py-2.5 text-sm"
              >
                View full portfolio
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        )}

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="gallery-item break-inside-avoid overflow-hidden rounded-2xl"
            >
              <BlurImage
                src={item.src}
                alt={item.alt}
                loading="lazy"
                delay={(i % 3) * 0.08}
                className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${item.h}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
