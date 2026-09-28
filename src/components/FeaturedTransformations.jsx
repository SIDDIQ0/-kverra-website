import { FilmSlate } from "@phosphor-icons/react";
import { CameraDollyGallery } from "./CameraDollyGallery";
import { WordReveal } from "./WordReveal";
import { useReveal } from "../hooks/useReveal";
import { photos } from "../data/images";

const items = [
  { src: photos.livingRoom[1], title: "Living room, Austin TX", caption: "HDR enhancement" },
  { src: photos.twilight[2], title: "Colonial exterior, Surrey", caption: "Day-to-dusk conversion" },
  { src: photos.kitchen[1], title: "Kitchen remodel, Bengaluru", caption: "Flambient blend" },
  { src: photos.pool[3], title: "Backyard pool, Scottsdale AZ", caption: "Sky and pool replacement" },
  { src: photos.aerial[3], title: "Estate grounds, Cheshire", caption: "Drone colour matching" },
  { src: photos.bedroom[2], title: "Primary suite, Mumbai", caption: "Object removal" },
];

export function FeaturedTransformations() {
  const headerRef = useReveal();

  return (
    <section className="relative overflow-hidden bg-paper-100 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase">
            <FilmSlate size={16} weight="bold" />
            The showreel
          </p>
          <WordReveal
            as="h2"
            text="Recent transformations."
            emphasize="transformations"
            emphasisClassName="text-blue-600 italic"
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl"
          />
          <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-500">
            A handful of listings edited this quarter. Drag sideways to browse.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <CameraDollyGallery items={items} />
      </div>
    </section>
  );
}
