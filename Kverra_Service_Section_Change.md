# Kverra Infotech — Homepage Services Section Change

## Objective

Replace the current homepage `ServicesGrid` bento-style layout with a premium, image-led service showcase inspired by the attached third reference image.

The section should communicate clearly:

> **This is what we do**

This is a visual redesign of the existing service section only. Keep the existing service data, routing, architecture, and animation system.

---

## 1. Section Structure

Redesign the homepage services section so it has:

- A strong, clean section heading such as **“This is what we do”**.
- A short supporting line explaining Kverra's real-estate photo-editing services.
- A premium grid of service cards.
- Large, high-quality real-estate imagery as the main visual element of each card.
- Clear service names and concise supporting information.
- A strong blue CTA/action element on each card.
- Clean white card surfaces with subtle borders/shadows.
- A polished, modern blue-and-white visual language.

The overall feeling should be closer to a premium property/service showcase than the current bento grid.

---

## 2. Use Existing Service Data

**Do not hardcode service information into the component.**

Continue using:

`src/data/services.js`

The existing service dataset remains the single source of truth for:

- Service name
- Tagline
- Price
- Delivery time
- Description
- Images
- Service slug
- Other existing service metadata

Each card must continue linking to:

`/services/:slug`

Do not change the existing `ServiceDetail` routing architecture.

---

## 3. Card Design

Each service card should be visually similar in spirit to the third reference image, but adapted specifically for Kverra.

### Card layout

A card should generally contain:

1. Large service image
2. Optional small category/status label
3. Service name
4. Short tagline or value proposition
5. Useful existing metadata such as turnaround or price, if appropriate
6. Clear blue CTA/action

Use strong spacing and typography so the image remains the dominant visual element.

### Visual treatment

- White background
- Rounded corners
- Subtle shadow
- Very subtle border
- Blue accent color
- Blue CTA button
- Smooth hover interaction
- Slight image zoom or lift on hover
- Clean, premium typography
- Avoid excessive gradients or visual clutter

---

## 4. Services to Represent

The section should visually showcase the existing Kverra services, including concepts such as:

- HDR Photo Editing
- Twilight / Day-to-Dusk
- Object Removal
- Sky, Grass & Pool Replacement
- Flambient Blending
- Drone / Aerial Image Enhancement
- 360° Panorama Stitching
- Day & Dusk Dual Delivery

**Important:** These are only the service concepts. Use the actual records already present in `services.js` rather than creating duplicate content.

---

## 5. Layout

Do not simply reproduce the current 4-column bento grid.

Create a more editorial, premium card layout inspired by the reference:

- Desktop: balanced multi-column service-card grid
- Cards should have strong image proportions
- Visual hierarchy should feel intentional rather than uniformly repetitive
- Remaining services can continue onto a second row
- Avoid excessive card sizes that create huge empty areas
- Maintain consistent card heights where practical
- The layout should feel like a curated showcase

The section should look visually complete even before the user interacts with it.

---

## 6. Interaction

Reuse the existing animation architecture.

Where appropriate:

- Use `useStaggerReveal` for cards entering the viewport.
- Use `useBlurReveal` for service imagery if appropriate.
- Use `useTilt` only if the effect improves the premium feel.
- Add a subtle image scale/zoom on hover.
- Add a restrained blue accent transition on hover.
- Keep interactions smooth and sophisticated.

Do **not** introduce aggressive 3D effects.

Do **not** introduce scroll hijacking.

Do **not** create a new animation system when an existing hook already provides the required behavior.

---

## 7. Reference Image Rule

The third reference image is a **design reference only**.

Do NOT copy:

- Travel-related content
- Property prices
- Bedroom/bathroom information
- Locations
- Travel labels
- Travel branding
- Any text from the reference

Only take inspiration from its:

- Card composition
- Image-first presentation
- Typography hierarchy
- Spacing
- CTA treatment
- Premium property-showcase feel

The final section must clearly represent **Kverra's real-estate photo-editing services**.

---

## 8. Mobile

The section must be mobile-first.

At approximately 320px–430px:

- Cards should become a clean single-column layout.
- Images should remain visually prominent.
- Text must remain readable.
- CTAs must be easy to tap.
- No horizontal overflow.
- Avoid tiny metadata or cramped card layouts.

Tablet layouts should transition naturally between mobile and desktop.

---

## 9. What Must Stay Unchanged

Do not change:

- `src/data/services.js` architecture
- `/services/:slug` routing
- `ServiceDetail`
- Existing WhatsApp conversion flow
- Existing GSAP setup
- Existing Lenis setup
- Existing reduced-motion support
- Existing service content unless required purely for presentation

This task is specifically a **homepage service-section visual redesign**.

---

## 10. Final Result

The finished section should feel like a premium branded showcase titled:

### “This is what we do”

It should immediately communicate what Kverra does through **large real-estate imagery + concise service information + strong blue CTAs**, while remaining fully connected to the existing service data and detail pages.

Do not rebuild the rest of the homepage as part of this task.
