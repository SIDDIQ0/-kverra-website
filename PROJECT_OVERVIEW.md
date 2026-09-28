# Kverra Infotech — Project Overview

This document is a complete, self-contained reference to the codebase in this
folder. It exists so an AI assistant (or a new developer) with no prior access
to the code can understand what the site is, how it's built, how the
animation system works, and where everything lives — without needing to open
a single source file first.

---

## 1. What this is

**Kverra Infotech** is a marketing website for a real estate photo-editing
service. The business edits listing photography for real estate agents,
photographers and brokerages in the USA, UK and India: HDR blending, twilight
(day-to-dusk) conversion, object removal, drone-image cleanup, sky/grass/pool
replacement, flambient blending, 360° panorama stitching, and day-and-dusk
dual delivery.

It is a **marketing site only** — there is no backend, no database, no user
accounts, no payment flow. The only "conversion" action anywhere on the site
is a **WhatsApp deep link** (`https://wa.me/...`) that opens a pre-filled
chat. All content (services, prices, testimonials, images) is static data
shipped inside the JavaScript bundle.

---

## 2. Tech stack

| Layer | Choice | Version | Notes |
|---|---|---|---|
| Framework | React | 18.3 | Function components + hooks only, no class components |
| Build tool | Vite | 6.0 | `@vitejs/plugin-react` for Fast Refresh |
| Routing | React Router | 7.18 | `BrowserRouter`, client-side only |
| Styling | Tailwind CSS | 4.0 | **CSS-first config** — no `tailwind.config.js` file at all. All theme tokens live in `src/index.css` inside an `@theme` block. Wired into Vite via the `@tailwindcss/vite` plugin. |
| Animation | GSAP | 3.12 | `gsap` core + the `ScrollTrigger` plugin, used everywhere; the `Flip` plugin is also registered, used only by `LoadingScreen.jsx` to grow its photographic frame to fullscreen |
| Smooth scroll | Lenis | 1.3 | One instance for the whole app, driven by GSAP's own ticker so it and ScrollTrigger never fall out of sync |
| Icons | Phosphor Icons (`@phosphor-icons/react`) | 2.1 | A real icon library, not emoji or custom SVGs |
| Fonts | `@fontsource/playfair-display`, `@fontsource/plus-jakarta-sans` | 5.x | Self-hosted via npm packages, not Google Fonts CDN |

There is **no test suite, no linter config, no TypeScript**. `npm run build`
is the only automated correctness check — it will fail on bad imports, JSX
errors, and Tailwind class typos that break the build.

### Commands

```bash
npm run dev       # Vite dev server, http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

---

## 3. Project structure

```
src/
  main.jsx                 # Entry point: mounts <App> inside BrowserRouter + LenisProvider
  App.jsx                  # Route table, Navbar/Footer/WhatsAppButton shell, loading screen
  index.css                # Tailwind v4 @theme tokens + all reusable utility classes
  assets/                  # Logo files (raster)

  lenis/
    LenisContext.jsx       # The single Lenis instance, wired to GSAP's ticker

  hooks/
    useReveal.js            # useReveal + useStaggerReveal — fade+lift scroll-in animations
    useBlurReveal.js         # Blur-to-sharp entrance for images
    useTilt.js                # Pointer-tracked 3D tilt for cards (desktop only)
    useMagnetic.js             # Cursor-pull effect for primary CTA buttons (desktop only)
    useVelocitySkew.js          # Skews an element based on Lenis scroll velocity

  components/               # Reusable pieces, see catalog in section 6
  pages/                    # Route-level components, see catalog in section 7
  data/                     # Static content — see section 5
```

---

## 4. Routing

Defined in `src/App.jsx` with `react-router-dom` v7:

| Path | Component | Purpose |
|---|---|---|
| `/` | `Home` | Composes every homepage section in order (see section 7) |
| `/services` | `Services` | Full list of all 8 services as rows |
| `/services/:slug` | `ServiceDetail` | One dynamic template for every service, driven entirely by `services.js` |
| `/portfolio` | `Portfolio` | Full masonry gallery |
| `/privacy-policy` | `PrivacyPolicy` | Static legal text |
| `/terms` | `Terms` | Static legal text |
| `*` (anything else) | `NotFound` | Custom 404 |

`App.jsx` also renders, outside the `<Routes>`: a fixed `Navbar`, a fixed
`WhatsAppButton` (bottom-right, pulsing), a `Footer`, a full-screen
`LoadingScreen` that plays once per hard page load, and a fixed
`grain-overlay` div (a subtle noise texture over the whole page, purely
decorative, `pointer-events: none`).

`ScrollToTop` (a small component defined inline in `App.jsx`) resets scroll
position to 0 on every route change, using the Lenis instance if one exists
or falling back to `window.scrollTo` under reduced motion.

---

## 5. Data layer (`src/data/`)

Everything content-related is a plain JS module exporting arrays/objects —
**no CMS, no fetch calls**.

- **`services.js`** — the single source of truth for all 8 services. Each
  entry has: `slug`, `name`, `tagline`, `icon` (a string name looked up
  against a Phosphor icon map — see the gotcha in section 9), `image` /
  `heroImage` / `gallery` (references into `images.js`), `price` (USD per
  image), `delivery` (a real turnaround string like "Under 24 hours"),
  `description`, `whatsIncluded` (array of bullet strings), and `faq` (one
  Q&A pair). This one file drives the Services index page, the
  `ServiceDetail` dynamic template, the Navbar's services dropdown, the
  homepage `ServicesGrid`, and the Footer's service links.
- **`images.js`** — exports a `photos` object keyed by scene
  (`livingRoom`, `kitchen`, `twilight`, `aerial`, `pool`, `bedroom`,
  `exteriorDay`, `bathroom`), each an array of curated, verified Unsplash
  photo URLs (real stock photography, not AI-generated). A small `u()`
  helper appends Unsplash's own sizing/quality query params.
- **`site.js`** — exports `WHATSAPP_NUMBER` (currently a placeholder,
  `"10000000000"`) and `whatsappLink(message)`, which builds a
  `https://wa.me/...` URL with a pre-filled message. Every WhatsApp CTA on
  the site calls this one function.
- **`testimonials.js`** — 6 fictional-but-realistic customer quotes (name,
  role, location, quote text), used only by the `Testimonials` component.

---

## 6. The scroll & animation architecture (read this first)

This is the part most worth understanding before touching any component.

### Lenis + GSAP ScrollTrigger are wired together deliberately

`src/lenis/LenisContext.jsx` creates **one** Lenis instance for the entire
app (`LenisProvider`, mounted once in `main.jsx`, wrapping `<App>`). Instead
of running its own `requestAnimationFrame` loop, Lenis is driven from
**GSAP's own ticker** (`gsap.ticker.add(tick)`), and every Lenis scroll event
calls `ScrollTrigger.update`. This is the standard "correct" way to combine
the two libraries — it guarantees Lenis's virtual scroll position and every
GSAP `ScrollTrigger`-based animation always agree on where the page actually
is, frame for frame.

`LenisProvider` also intercepts clicks on same-page `<a href="#id">` anchor
links and routes them through `lenis.scrollTo(target, { offset: -84 })`
(the `-84` compensates for the fixed navbar height) instead of letting the
browser jump instantly.

**Everything is skipped under `prefers-reduced-motion: reduce`.** Lenis is
never constructed at all in that case (the provider's effect returns early),
so the page falls back to native browser scrolling. There is no single
global "motion off" flag — every animation hook independently checks
`window.matchMedia("(prefers-reduced-motion: reduce)")` itself and either
sets the final resting state immediately or skips the effect entirely.

### The five reusable animation hooks (`src/hooks/`)

1. **`useReveal({ y, delay, duration })`** — the workhorse. Fades an element
   from `opacity: 0` + a `y` px offset up to full opacity/position once it
   scrolls to 85% of the way up the viewport. Built on
   `gsap.fromTo(...)` with a `ScrollTrigger` (`toggleActions: "play none
   none none"`, i.e. fires once, never reverses). Used on almost every
   section heading.

2. **`useStaggerReveal(childSelector, { y, stagger })`** — same mechanic as
   `useReveal`, but targets all children matching a CSS selector inside the
   ref'd container and staggers their entrance (default `0.09s` between
   each). Used for grids of cards (services, value props, FAQ items, related
   services) so items cascade in rather than popping together.

3. **`useBlurReveal({ blur, y, duration, delay })`** — like `useReveal` but
   also animates a CSS `filter: blur(...)` from blurred to sharp. Powers the
   `BlurImage` component (see below), used for photos throughout the
   portfolio gallery and services list.

4. **`useTilt(max = 8)`** — 3D pointer-tracked tilt. Listens for
   `mousemove`/`mouseleave` on the element and uses `gsap.quickTo` to
   smoothly rotate it (`rotateX`/`rotateY`) toward the cursor, capped at
   `max` degrees, plus a slight scale-up. **Gated to
   `(hover: hover) and (pointer: fine)`** — a no-op on touch devices, so
   nothing gets stuck mid-tilt on mobile. Powers `TiltCard`.

5. **`useMagnetic(strength = 0.25)`** — the element's `x`/`y` position drifts
   toward the cursor as it approaches, via `gsap.quickTo`, snapping back to
   `0,0` on mouse-leave. Same hover/reduced-motion gating as `useTilt`.
   Reserved for primary call-to-action buttons only (Hero CTA, CTASection
   CTA, ServiceDetail CTA, Navbar mobile CTA) — deliberately not used on
   every clickable element, to keep it feeling special.

6. **`useVelocitySkew(ref, { max, factor })`** (not in `hooks/useReveal.js`,
   its own file) — reads Lenis's own reported scroll velocity and applies a
   proportional `skewY` to an element via `gsap.quickTo`, easing back to
   level the instant scrolling slows. Used on the horizontal photo-gallery
   rows (`CameraDollyGallery`) so they feel like they carry physical weight
   as you scroll past them, rather than being a flat 1:1 transform.

All five hooks return a `ref` (or take one) that you attach to a DOM node;
none of them render anything themselves — they're pure side-effect hooks
wrapped around `gsap.context()` for automatic cleanup on unmount.

### Bespoke, component-specific animations (not generalized into hooks)

- **`WordReveal`** (`components/WordReveal.jsx`) — splits a heading's text
  into words, each masked in its own `overflow: hidden` box, and slides them
  up into place word-by-word (`yPercent: 110 → 0`) via a GSAP timeline with
  stagger. Takes an `emphasize="word"` prop that renders one matching word in
  italic blue (first occurrence only). Can trigger either on scroll-in
  (`trigger="scroll"`, the default) or immediately on mount
  (`trigger="load"`, used for above-the-fold hero/page headings so they
  animate in without needing a scroll). This is the mechanism behind almost
  every large `<h1>`/`<h2>` on the site.

- **Parallax / layered depth**, hand-rolled per component with
  `gsap.fromTo(..., { scrollTrigger: { scrub: true } })` (i.e. the animation
  is tied directly to scroll position, not time):
  - `Hero.jsx` — since the 2026 blue-and-white redesign, the hero is a
    two-column layout (copy left, a 3-image collage right: one dominant
    frame plus two smaller supporting frames in a `grid-cols-[1.6fr_1fr]
    grid-rows-[1.5fr_1fr]` layout). Only the dominant frame's image
    (`mainImgRef`) gets the scroll-scrubbed Ken-Burns drift now — it's
    contained inside a rounded card rather than bleeding to the viewport
    edges, so the effect is deliberately more restrained than before.
  - `WhyKverra.jsx` — a blurred background photo and a large blurred blue
    accent-glow circle move at two different speeds behind the value-prop
    cards.
  - `ServiceDetail.jsx` — since the hero was relighted (see below), down to
    two restrained layers: the sharp hero sample image and one understated
    ambient blue blob (`rgba(37,99,235,0.16)`), each drifting at a slightly
    different rate. The blurred full-bleed backdrop photo and second colour
    blob from the old dark hero were removed rather than just recoloured —
    a busy multi-layer glow doesn't fit "clean, bright, premium."
  - `CTASection.jsx` — the full-bleed background photo scales down from
    `1.1` to `1` as the section scrolls through view (a slow "settle" zoom).

- **`CameraDollyGallery.jsx`** — cards sit in normal document flow with
  native horizontal drag/swipe (`overflow-x: auto`, CSS scroll-snap), and as
  each card scrolls into view it animates from `scale: 0.8, opacity: 0.3,
  blur(14px)` up to fully sharp/full-size, scrubbed to scroll position
  (`scrub: 0.6`) — like a camera racking focus onto each card. This pattern
  deliberately **replaced an earlier pinned, scroll-hijacked horizontal
  carousel**, which was found disorienting; the "don't remap vertical scroll
  to horizontal" rule is intentional and documented in the code comments.
  Also carries a hover interaction (per card): the still image sits
  desaturated/dimmed at rest (`grayscale-[35%] brightness-[0.82]`) and
  color-grades up to full saturation on hover, with four small corner
  brackets (viewfinder-style) fading in — plus a per-card frame number
  (`01`, `02`, ...).

- **`HorizontalScrollbar.jsx`** — a bespoke, fully custom scroll-progress
  bar that replaces the plain native scrollbar on the two horizontally
  -scrolling rows (`CameraDollyGallery` and `Testimonials`). Not GSAP-scroll
  -triggered — it's driven by a native `scroll` event listener on the target
  row plus a `ResizeObserver`, with the *thumb's position* animated smoothly
  via `gsap.quickTo`. Supports click-anywhere-on-track-to-jump and
  drag-to-scroll (via Pointer Events, with `setPointerCapture` for reliable
  touch dragging), and hides itself entirely when the row doesn't actually
  overflow. The real draggable hit area is a full 24px tall (touch-target
  sized) even though the visible bar itself is a thin 3px blue pill — the
  hit area is invisible padding around the visible bar, not the bar itself.

- **`BeforeAfterSlider.jsx`** — a drag-to-reveal comparison slider. **Not a
  real before/after pair** — see the gotcha in section 9. Implemented with a
  `clip-path: inset(...)` on the "before" layer, updated on pointer drag
  (`pointermove`/`pointerup` on `window`, not just the element, so a fast
  drag off the slider doesn't get lost) and on arrow-key presses for
  keyboard accessibility (`role="slider"` with proper ARIA attributes). On
  first scroll into view it also runs one automatic demo sweep
  (50% → 20% → 80% → 50%) via a GSAP timeline, so first-time visitors see
  that it's interactive before they have to discover it themselves.

- **`StatsBar.jsx`** — four stats (`7+ years`, `98%`, `1,200+`, `3
  countries`) count up from 0 to their real value once scrolled into view,
  via a GSAP tween on a plain `{ val: 0 }` proxy object with
  `onUpdate` writing `Math.round(proxy.val).toLocaleString()` into the DOM
  directly (not React state, for performance).

- **`LoadingScreen.jsx`** — a fixed, full-screen overlay shown once per
  **hard** page load (tracked by a `loading` boolean in `App.jsx`'s state,
  set on mount and cleared when the intro GSAP timeline's `onComplete`
  fires). Because routing is client-side, this does **not** replay when
  navigating between pages within the SPA — only on an actual browser
  refresh. Current concept is **"the image reveals"**: a clean white
  (`bg-paper-50`) opening canvas, not a dark UI widget. One timeline plays,
  in order: a thin blue line draws in → the Kverra wordmark/"Infotech"/tagline
  settle → the identity moves up and out of the way as a bordered
  photographic frame forms → a second copy of the same hero photo
  (`photos.pool[1]`, the exact image `Hero.jsx`'s dominant collage frame
  uses) wipes in over a raw/desaturated copy via an animated `clip-path:
  inset()`, with the blue line reused as the wipe boundary → crop-mark
  corners fade → GSAP's `Flip`
  plugin grows the frame to fill the viewport (`Flip.getState` is captured,
  a `.loader-frame--full` class — defined in `index.css`, `position: fixed;
  inset: 0` — is applied instantly, then `Flip.from` animates the inverse
  transform) → `onReveal()` fires so the homepage hero is already mid-reveal
  underneath before this overlay finishes fading out. Using Flip for the
  frame-to-fullscreen step (rather than hand-tweening `top`/`left`/`width`/
  `height`) is a deliberate fix for an earlier bug where the image drifted
  toward one side on wide desktop viewports, leaving empty canvas beside it.
  `prefers-reduced-motion` skips straight to the final fullscreen state.

- **`Navbar.jsx`** — slides/fades in on mount; toggles between two
  background states (`glass-nav` vs `glass-nav-top`, both CSS utility
  classes — see section 8) based on Lenis scroll position past 40px; the
  desktop services mega-menu and the full-screen mobile menu both have their
  own small GSAP entrance timelines.

---

## 7. Page-by-page breakdown

### `Home` (`/`)
Composes, in order: `Hero` → `StatsBar` → `WhatWeDo` → `WhyKverra` →
`ServicesGrid` → `FeaturedTransformations` → `ProcessSteps` →
`PortfolioGallery` (limited to 6 + "view all") → `Testimonials` → `FAQ` →
`CTASection`.

- **`Hero`** — since the 2026 blue-and-white redesign, a two-column
  editorial layout on a plain white background (not a full-bleed photo):
  left column is eyebrow + `WordReveal` headline ("Real Estate Photos That
  Look *Exceptional*.") + subtext + two CTAs (WhatsApp primary button, "See
  it in action" → `/portfolio` secondary link) + a small "under 60 seconds"
  line; right column is the 3-image collage described above. Below the
  `sm:` breakpoint the collage collapses to a single image so mobile stays
  one clean column instead of a cramped multi-image grid. There is no
  review/rating badge anywhere in the hero — none exists in the data, and
  none should be invented.
- **`StatsBar`** — the four count-up stats, in a 2-col (mobile) / 4-col
  (desktop, divided by hairlines) grid.
- **`WhatWeDo`** — a category-pill switcher (HDR / Twilight / Object Removal
  / Sky & Pool / Day-to-Dusk) that swaps which photo feeds the
  `BeforeAfterSlider`. Heading is "One photo, two outcomes." — deliberately
  *not* "This is what we do" (that heading belongs to `ServicesGrid` below;
  keep them distinct so the homepage never shows the same heading twice).
- **`WhyKverra`** — four value-prop cards (dedicated editor, turnaround,
  volume, revisions) over the two-layer parallax background described above.
- **`ServicesGrid`** — since the 2026 redesign, an image-led card showcase
  ("This is what we do.", `sm:grid-cols-2 lg:grid-cols-3`) of the curated
  homepage service subset, each card a `TiltCard` linking to its
  `ServiceDetail` page: a `BlurImage` service photo (blur-to-sharp reveal,
  staggered per card via its `delay` prop) with a small circular icon badge
  overlapping its corner, then name, tagline, a price/delivery metadata
  row, and a "View service" link pinned to the card's bottom edge via
  `mt-auto` so CTAs line up across a row regardless of tagline length. The
  first curated service renders as a `featured` card (`lg:col-span-2`, a
  wider `aspect-[16/9]` image) so the grid reads as a curated showcase
  rather than nine uniformly repeated tiles — a size break only, no
  "Featured"-style label or claim invented on top of the data.
- **`FeaturedTransformations`** — "the showreel": a dark, cinematic section
  (deep navy, blue accents, a `FilmSlate` icon eyebrow reading "THE
  SHOWREEL") wrapping `CameraDollyGallery` with 6 curated transformation
  examples. This section and its gallery were redesigned in this project to
  read as a literal film-negative/showreel motif (desaturated-to-colour
  hover grade, corner brackets, frame numbers).
- **`ProcessSteps`** — "From raw file to listing-ready": three numbered
  steps (Upload → We edit → Download). **Centered text-align on mobile**
  (below 640px), reverting to the original left-aligned 3-column layout with
  a connecting hairline at `sm:` and above — this was a deliberate mobile
  -specific fix (see section 10).
- **`PortfolioGallery`** — a CSS multi-column (`columns-*`) masonry grid of
  16 portfolio images with varied fixed heights, each entrance-animated via
  `BlurImage`.
- **`Testimonials`** — 6 quote cards in a horizontally-scrolling,
  snap-aligned row (same `HorizontalScrollbar` pattern as the gallery
  above), on a light `paper-100` background (contrast with the dark gallery
  section above it).
- **`FAQ`** — 6 Q&A pairs in a 2-column grid (1 column on mobile), each with
  a top hairline.
- **`CTASection`** — full-bleed background photo with the slow zoom-out
  parallax, centered headline + WhatsApp CTA. Reused verbatim at the bottom
  of `Services`, `ServiceDetail`, and `Portfolio` too.

### `Services` (`/services`)
A hero (dark gradient, centered) followed by all 8 services as full-width
clickable rows (thumbnail, name, tagline, price, delivery time), each
linking to `ServiceDetail`.

### `ServiceDetail` (`/services/:slug`)
One template that reads everything from `getServiceBySlug(slug)`. Since a
2026 redesign it's light end-to-end (`bg-paper-50`, no dark hero): a bright
two-column hero (title/description/price/WhatsApp CTA left, one premium
`BlurImage` in a rounded shadowed card right) with the restrained 2-layer
parallax described above; then a **"One photo. Two outcomes."** comparison
section — a row of quick-switcher pills (`comparisonShowcaseSlugs` in
`services.js`, a 5-service curated subset distinct from
`homepageServiceSlugs`; the current service renders as a non-clickable
active `<span>`, the rest as `Link`s that navigate to that service's own
detail page) above one elevated white card containing the `BeforeAfterSlider`
plus a floating info card (micro-label, name, tagline, a static
print-ready/colour-matched line, and a "Drag to compare" hint) — the info
card is `lg:absolute` over the slider's corner and collapses to a normal
stacked card below `lg:`, per the "don't force desktop layout onto mobile"
rule; then the 2-image gallery, a light blue-tinted "included" checklist
card (no longer dark navy) and one FAQ card; then 3 related services; then
`CTASection`. Renders `<NotFound />` if the slug doesn't match any service.

### `Portfolio` (`/portfolio`)
Hero + the full (unfiltered) `PortfolioGallery` + `CTASection`.

### `PrivacyPolicy` / `Terms` (`/privacy-policy`, `/terms`)
Static legal text pages, no special animation.

### `NotFound` (any unmatched route)
Simple centered 404 card with a "Back to home" CTA.

---

## 8. Design system

Every design token lives in **`src/index.css`**, inside a Tailwind v4
`@theme` block — there is no `tailwind.config.js`.

- **Colour**: a "premium blue + white" palette (2026 client-approved
  redesign, replacing an earlier navy + gold system) — a deep-navy scale
  (`--color-brand-950` through `--color-brand-500`) kept for high-contrast
  text and dark UI chrome (utility bar, footer, mobile menu), a single blue
  accent scale (`--color-blue-300` through `--color-blue-600`) used
  everywhere a color used to be gold (CTAs, links, icon rings, active
  states, dividers), a near-black ink (`--color-ink-900`), and white/near
  -white surfaces (`--color-paper-50`/`--color-paper-white` are pure white,
  `--color-paper-100` a subtle blue-tinted neutral for alternating
  sections). Sections alternate between dark (`bg-brand-950`) and light
  (`bg-paper-50`/`bg-paper-100`/`bg-white`) for rhythm. There is no gold
  token left anywhere in the codebase — don't reintroduce one.
- **Type**: `--font-display` = Playfair Display (serif, used for every
  heading and any emphasized/italic word), `--font-body` = Plus Jakarta Sans
  (sans, body copy).
- **Reusable visual-effect utility classes** (also defined in
  `index.css`, meant to be reused rather than re-implemented inline):
  - `.glass-panel` / `.glass-panel-light` — true glassmorphism (blur +
    saturation + gradient fill + inner specular highlight line), dark and
    light variants.
  - `.glass-overlay` — the mobile menu's full-screen frosted backdrop. (The
    navbar itself is plain solid white, not a glass surface — `.glass-nav`
    / `.glass-nav-top` were retired.)
  - `.liquid-mesh` — an animated, slowly-drifting multi-blob gradient
    background (used behind hero/banner sections instead of a flat fill).
  - `.btn-liquid` — a glossy diagonal sheen overlay for solid blue buttons.
  - `.accent-rule` — a thin horizontal gradient divider line.
  - `.no-scrollbar` — hides the native scrollbar on an `overflow-x: auto`
    element (used together with `HorizontalScrollbar` so there's no double
    scrollbar).
  - `.grain-overlay` — the fixed, full-page subtle noise texture.
  - All of the above respect `@media (prefers-reduced-transparency:
    reduce)` and `prefers-reduced-motion: reduce` with simplified
    fallbacks.

---

## 9. Known gotchas / placeholder data (do not "fix" these by accident)

- **`WHATSAPP_NUMBER` in `src/data/site.js` is a placeholder**
  (`"10000000000"`). Every WhatsApp button/link on the entire site depends
  on this one value — replace it there once and it updates everywhere.
- **The Footer's support email is a placeholder**
  (`hello@kverrainfotech.com`), marked with a `TODO` comment in
  `Footer.jsx`.
- **`BeforeAfterSlider` does not use real before/after photo pairs** —
  there are none in the dataset. It's given the *same* image for both
  `before` and `after` props, and fakes the "raw/unedited" look on the
  before layer with a CSS `filter` (desaturate, darken, slight sepia). This
  is intentional, not a bug to fix.
- **The icon lookup (string name in `services.js` → Phosphor component) is
  duplicated as an identical `const icons = {...}` map in four separate
  files**: `Navbar.jsx`, `ServicesGrid.jsx`, `Services.jsx`,
  `ServiceDetail.jsx`. If a new service is added with a new icon name, all
  four maps need updating, or that icon silently renders nothing.
- **The loading screen only replays on a full browser refresh**, not on
  in-app navigation — this is intentional, driven by `App.jsx`'s `loading`
  state living above the router.
- **`.loader-frame--full` in `index.css` is deliberately written as a plain,
  unlayered class** (not inside a Tailwind `@layer`), so it reliably beats
  the loading frame's own Tailwind utility classes (`w-[...]`, `border`,
  etc.) without needing `!important` — Tailwind v4 wraps its utilities in a
  CSS layer that unlayered rules always outrank regardless of source order.
  Don't "clean this up" into a Tailwind utility or arbitrary-value class; it
  will silently stop overriding and the fullscreen Flip step will break.
- **A `grid`/`flex` item that contains a horizontally-scrollable row
  (`overflow-x-auto` + `shrink-0` children, like the service-detail
  comparison pills) needs an explicit mobile-safe column track, or the row
  stops scrolling internally and pushes the whole page wider instead.**
  Grid/flex items default to `min-width: auto` — they refuse to shrink
  below their content's natural width. Nest an unconstrained
  `overflow-x-auto` row a couple of levels inside a `grid` that has no base
  `grid-cols-*` (only an `lg:grid-cols-*` override, as several sections on
  this site use for a mobile-stacks/desktop-columns layout) and that
  implicit auto-sized mobile column can grow to fit the row's full
  unscrolled width. This was a real bug on `ServiceDetail.jsx`'s mobile
  layout (content clipped on the left, navbar/logo appearing shifted) fixed
  by giving that grid — and every other multi-column grid on the page, as a
  precaution — an explicit base `grid-cols-1` (Tailwind's
  `repeat(1, minmax(0, 1fr))`, which actually caps the track, unlike the
  implicit `auto` track you get by leaving `grid-cols-*` unset below the
  breakpoint) plus `min-w-0` on the grid items in the ancestor chain down to
  the scrollable row. `CameraDollyGallery`, `Testimonials`'s row and
  `HorizontalScrollbar`'s target aren't nested inside a grid/flex ancestor
  today, so they don't hit this, but the same fix applies if one ever is.
  Reach for this pattern rather than `overflow-x: hidden` on `body`/`html`,
  which only hides the symptom.
- **Testing caveat (only relevant to automated/headless browser testing,
  not real users):** GSAP/Lenis-driven animations can appear stuck
  mid-transition in an unfocused automated browser tab, because
  `requestAnimationFrame` gets throttled when a tab lacks real OS focus.
  This has been hit repeatedly during this project's own QA passes and is
  not a code defect — a real visitor's focused tab animates normally.

---

## 10. Mobile responsiveness

The site is built mobile-first with Tailwind's responsive prefixes
throughout (unprefixed = mobile, `sm:` = ≥640px, `md:` = ≥768px, `lg:` =
≥1024px) — there is no separate mobile codebase or component set.

A dedicated pass was done to guarantee the layout works cleanly at
320/360/375/390/412/430px specifically (the common real phone widths),
verified with **zero horizontal overflow on every page at every one of
those widths**. Two real bugs were found and fixed during that pass:

1. **`ProcessSteps.jsx`** ("From raw file to listing-ready.") was
   left-aligned and cramped on mobile; it now centers its heading and
   3-step layout below the `sm:` breakpoint (reverting to the original
   left-aligned 3-column desktop layout unchanged at `sm:` and above), with
   slightly larger mobile type.
2. **`Hero.jsx`**'s floating twilight-photo thumbnail used a fixed negative
   left offset that pushed it a few pixels past the left edge of the
   viewport below 640px, clipping its rounded corner. Fixed to a safe
   positive offset on mobile only; the original desktop offset is
   unchanged from `sm:` up.

Every other component/page was audited and found to already use fluid
percentage/`vw`-based sizing with no fixed pixel widths or un-guarded
negative offsets, so nothing else needed changing.

---

## 11. If you're extending this site

- Add or edit a **service** in `src/data/services.js` only — never hardcode
  service data in a component. Remember to also add its icon to all four
  `icons` maps (see section 9) if it's a new icon.
- Reuse the existing **animation hooks** (section 6) before writing new
  scroll logic. A new "fade up on scroll" anywhere should be `useReveal`,
  not a bespoke `ScrollTrigger`.
- Reuse the existing **utility CSS classes** (section 8) before writing new
  glass/gradient/blur CSS inline.
- Any new horizontally-scrolling row should reuse `HorizontalScrollbar` +
  `.no-scrollbar`, matching the existing gallery/testimonials pattern.
- Keep new sections mobile-first and verify no horizontal overflow is
  introduced (a quick check: `document.documentElement.scrollWidth ===
  document.documentElement.clientWidth` at each target width should always
  be true).
