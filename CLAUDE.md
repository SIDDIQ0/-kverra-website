# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Kverra Infotech marketing site: a real estate photo-editing service (HDR, twilight conversion, object removal, drone editing, virtual sky/pool replacement, 360° stitching, flambient, day-to-dusk). React + Vite SPA, no backend — all content is static data shipped in the bundle, and the only "conversion" path is a WhatsApp deep link.

## Commands

```bash
npm run dev       # Vite dev server (localhost:5173)
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

There is no test suite, linter, or type checker configured — don't invent commands for them. Always run `npm run build` after non-trivial changes; it's the only automated correctness check in this repo (Tailwind class typos, bad imports, and JSX errors surface there).

## Architecture

**Stack**: Vite + React 18 + React Router v7 (client-side routing, `BrowserRouter`) + Tailwind v4 (CSS-first config, no `tailwind.config.js`) + GSAP/ScrollTrigger for all animation + Lenis for smooth scroll.

### Tailwind v4 theming lives in `src/index.css`, not a config file

All design tokens (`brand-*` deep-navy scale, `blue-*` primary accent scale, `ink-900`, `paper-*`) are defined as CSS custom properties inside an `@theme` block in `src/index.css`. To change the palette or add a color, edit that block — there is no `tailwind.config.js`. Blue + white is the client-approved system (2026 redesign): `paper-50`/`paper-white` are pure white (the dominant surface), `paper-100` a subtle blue-tinted neutral for alternating sections, and `blue-*` is the single accent used everywhere a color used to be gold (CTAs, links, icon rings, active states) — there is no gold token anymore. The same file also defines the site's reusable visual-effect utility classes: `.glass-panel` / `.glass-panel-light` (frosted glassmorphism with an inner specular highlight), `.glass-overlay` (mobile menu, dark frosted), `.liquid-mesh` (animated gradient-blob background used on hero/banner sections instead of a flat fill), `.btn-liquid` (glossy sheen for solid blue CTAs), and `.accent-rule` (thin gradient divider line). Reuse these instead of writing new glass/gradient CSS inline. (The navbar itself is plain solid white, not a glass surface — `.glass-nav`/`.glass-nav-top` were retired.)

### Lenis + GSAP ScrollTrigger are wired together and must stay that way

`src/lenis/LenisContext.jsx` creates the single Lenis instance, drives it from `gsap.ticker` (not `requestAnimationFrame` directly), and forwards `lenis.on("scroll", ScrollTrigger.update)` so every scrub/pin animation stays in sync with Lenis's virtual scroll position. It also intercepts same-page `<a href="#id">` clicks and routes them through `lenis.scrollTo` (with a fixed `-84` offset for the navbar height) instead of the browser's instant hash jump. `App.jsx`'s `ScrollToTop` component uses the same Lenis instance (via `useLenis()`) to reset scroll position on route change, falling back to `window.scrollTo` only when Lenis isn't mounted (reduced-motion). Everything is skipped under `prefers-reduced-motion: reduce` — Lenis is never constructed, and components fall back to instant/static states individually (each animation hook checks the media query itself; there's no central "motion off" flag).

Animation primitives to reuse rather than re-implement, all in `src/hooks/` and `src/components/`:
- `useReveal` / `useStaggerReveal` (`src/hooks/useReveal.js`) — fade+lift on scroll-in, single element or staggered children.
- `useBlurReveal` + `BlurImage` — blur-to-sharp entrance for images.
- `useTilt` + `TiltCard` — pointer-tracked 3D card tilt (desktop/fine-pointer only).
- `useMagnetic` — cursor-pull effect for primary CTA buttons.
- `useVelocitySkew` — skews an element based on Lenis scroll velocity, eases flat when scrolling stops.
- `WordReveal` — splits a heading into words and reveals them individually (masked slide-up); takes an `emphasize="word"` prop to render one word in italic blue (matches only the first occurrence, so don't reuse the same word twice in one heading).
- `CameraDollyGallery` — the pattern for "gallery that reveals as you scroll" sections: cards sit in normal, unhijacked document flow (native horizontal drag/swipe), each scaling from blurred/small to sharp/full-size via a scrubbed ScrollTrigger as the row scrolls into view. A pinned scroll-hijacked horizontal carousel was tried first and replaced with this because remapping vertical scroll to horizontal motion read as disorienting — don't reintroduce that pattern.

### Services are data-driven from one file

`src/data/services.js` exports the `services` array (8 entries: slug, name, tagline, icon name, pricing, delivery time, description, `whatsIncluded`, FAQ, and image references into `src/data/images.js`) plus `getServiceBySlug`. This one file drives: the Services index page (`src/pages/Services.jsx`), the single dynamic detail template (`src/pages/ServiceDetail.jsx`, route `/services/:slug`), the Navbar's services dropdown, the homepage `ServicesGrid` (an image-led card showcase, one card per curated service), and the Footer's service links. Add or edit a service here rather than touching the page components.

The icon lookup (string name in data → Phosphor component) is duplicated as an identical `const icons = {...}` map in four files: `Navbar.jsx`, `ServicesGrid.jsx`, `Services.jsx`, `ServiceDetail.jsx`. If you add a service with a new icon, update all four maps (only icons already imported by Phosphor and referenced by name in `services.js` will render — a typo'd icon name just silently renders nothing).

### Images are real Unsplash photos, curated by category

`src/data/images.js` exports a `photos` object keyed by scene (`livingRoom`, `kitchen`, `twilight`, `aerial`, `pool`, `bedroom`, `exteriorDay`, `bathroom`), each an array of specific, verified Unsplash photo URLs (not random/generated). `BeforeAfterSlider` does **not** use real before/after pairs — there are none — it takes the same image for both `before` and `after` props and simulates the "raw" look with a CSS `filter` (desaturate/darken) on the before layer. Keep that in mind before "fixing" what looks like a duplicate-image bug there.

### Loading screen fires once per hard navigation, not per route

`App.jsx` holds a `loading` boolean shown via `LoadingScreen`; it's set on mount and cleared when the intro GSAP timeline completes. Because React Router does client-side transitions, this only replays on a full page reload, not when navigating between routes — that's intentional.

### Known placeholder data (do not treat as real)

- `src/data/site.js` — `WHATSAPP_NUMBER` is a placeholder (`"10000000000"`); every WhatsApp CTA site-wide (`whatsappLink()`) depends on it.
- `src/components/Footer.jsx` — the support email is a placeholder, marked with a `TODO` comment.

## A note on this dev environment

If you're driving the app via browser automation in this sandbox and GSAP-driven animations (hero reveal, loading screen, scroll-triggered stagger, Lenis's own scroll lerp) appear stuck at partial opacity/position, check `document.hasFocus()` — `requestAnimationFrame` is throttled in an unfocused automated tab, which stalls anything GSAP/Lenis-driven. This is a testing-environment artifact, not a regression; real users' focused tabs animate normally. Avoid force-resetting inline styles across the whole page to "fix" this for a screenshot — doing so on an element under an active `pin: true` ScrollTrigger (e.g. inside `CameraDollyGallery`) can desync that trigger's pin calculations for the rest of the session.
