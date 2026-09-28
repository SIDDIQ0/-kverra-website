# Kverra Infotech — Detailed Service Page Design Changes

## Scope

This change applies specifically to the **detailed service pages**:

`/services/:slug`

Examples include:

- Interior Retouching
- Twilight Conversion
- Object Removal
- Sky, Grass & Pool
- Day to Dusk
- and the other existing service-detail pages.

The goal is to make the detailed service pages visually consistent with the new **blue + white Kverra theme** and replace the current large before/after presentation with a more refined **card-based showcase**.

The two attached screenshots are the visual references for the current state and the proposed direction.

---

# 1. Change the Current Dark Service-Page Hero Background

## Current issue

The current detailed service page uses a very dark navy background across the main hero area.

The dark background worked with the previous royal/luxury theme, but it now feels disconnected from the new **blue + white visual direction** being established across Kverra.

### Required change

Replace the dark hero background with a **clean, bright, premium light background**.

The entire service-detail hero should feel like part of the same visual system as the redesigned homepage.

### Target direction

Use:

- White as the primary background
- Very light blue/blue-gray sections where useful
- Deep navy/blue for primary text
- Bright Kverra blue for accents and CTAs
- Subtle blue-tinted borders
- Soft shadows
- Clean white cards

Avoid:

- Large solid dark navy backgrounds
- Gold accents
- Gold borders
- Gold buttons
- Heavy dark gradients
- Excessive glow effects

The page should feel **modern, premium, clean and professional**, with the blue color providing the visual identity.

---

# 2. Redesign the Service Hero

The current service hero contains:

- Breadcrumbs
- Service icon
- Service title
- Service description
- Price
- Delivery time
- WhatsApp CTA
- Large service image

Keep this information architecture, but redesign the presentation.

## Recommended composition

Use a spacious two-column layout:

### Left

A clean content column containing:

- Breadcrumb
- Small service category/icon
- Large service title
- Short service description
- Price + delivery information
- Primary blue WhatsApp CTA

### Right

A large premium service image inside a polished card.

The image should:

- Have rounded corners
- Have a subtle shadow
- Feel like a premium property photography showcase
- Use the existing service image from the data layer
- Have a restrained hover/parallax treatment if appropriate

The image should feel integrated into a white/light page rather than floating against a dark canvas.

---

# 3. Service Hero Background System

Do not create a completely different background for every service.

Create one reusable service-detail visual system that works for every:

`/services/:slug`

Recommended structure:

```text
Light page background
        ↓
Service hero
        ↓
White/light content column
        +
Premium image card
        ↓
Blue CTA
```

A very subtle light-blue gradient or soft blue ambient shape may be used behind the hero image, but it must remain understated.

The goal is **clean premium depth**, not a flashy gradient background.

---

# 4. Redesign the "One Photo, Two Outcomes" Section

The second attached screenshot shows the current comparison section.

The current layout is:

- Large heading
- Description
- Service category pills
- Very large before/after image
- Dark information card beside the image

The functionality is useful, but the presentation should be redesigned.

## New direction

Turn this entire section into a **premium card-based comparison showcase**.

Instead of feeling like a large raw image placed directly on the page, it should feel like an intentional product/service demonstration card.

---

# 5. Recommended New Section Layout

Use a section heading such as:

## One photo. Two outcomes.

Keep the existing concept and copy direction.

Below the heading, use the service-selection pills/tabs:

- Interior Retouching
- Twilight Conversion
- Object Removal
- Sky, Grass & Pool
- Day to Dusk

Keep these connected to the existing comparison functionality.

Then place the comparison inside a **large elevated card**.

### Overall structure

```text
----------------------------------------------------
|                                                  |
|  One photo. Two outcomes.                        |
|  Supporting description                          |
|                                                  |
|  [ Interior ] [ Twilight ] [ Object ] ...       |
|                                                  |
|  ┌────────────────────────────────────────────┐  |
|  |                                            |  |
|  |          BEFORE / AFTER IMAGE              |  |
|  |                                            |  |
|  |                         ┌───────────────┐  |  |
|  |                         | Service info  |  |  |
|  |                         | card          |  |  |
|  |                         └───────────────┘  |  |
|  |                                            |  |
|  └────────────────────────────────────────────┘  |
|                                                  |
----------------------------------------------------
```

The exact placement can be adjusted based on the available viewport, but the key idea is that the comparison should belong to **one cohesive premium card system**.

---

# 6. New Comparison Card Design

Create a large white comparison card with:

- Large rounded corners
- Subtle border
- Soft shadow
- Clean blue accent
- Generous internal spacing
- Hidden native scrollbar if applicable
- Responsive behavior

The actual before/after slider remains functional.

Do **not** replace the existing comparison interaction with a static image.

The user must still be able to:

- Drag the comparison handle
- Use the existing keyboard interaction
- See the before/after difference clearly
- Interact naturally on mobile

---

# 7. Add a Premium Information Card

Instead of the current dark navy information panel, create a **light or blue-accented information card**.

The card can contain:

### Service name

Example:

**Interior Retouching**

### Short explanation

A concise explanation of what the editing service delivers.

### Supporting detail

For example:

**Delivered as print-ready JPEG or TIFF, colour matched across the full set.**

### Optional micro-label

Something like:

`PROFESSIONAL EDITING`

or

`LISTING READY`

### Interaction hint

Instead of the current dark card's:

> Drag anywhere on the photo

use a subtle blue-accented instruction such as:

**Drag to compare**

with a small comparison icon.

---

# 8. Card Visual Language

The new card should match the redesigned blue-and-white website.

### Use

- White
- Very light blue
- Deep navy text
- Kverra blue
- Soft gray
- Subtle blue borders
- Soft shadows

### Avoid

- Dark navy information panels
- Gold
- Heavy gradients
- Large glowing effects
- Excessive glassmorphism

The card should look like a premium SaaS/product interface while still feeling appropriate for a real-estate photography company.

---

# 9. Service Tabs / Pills

Keep the existing service-selection pills because they are useful.

Redesign them to match the new blue theme.

### Inactive

White background with:

- Thin light-blue border
- Dark navy text

### Active

Blue background with:

- White text
- Soft blue shadow
- Slightly stronger visual weight

### Hover

Subtle blue border/background transition.

Do not use gold for active or hover states.

On mobile, the pills may become horizontally scrollable, but they must not cause page-level horizontal overflow.

---

# 10. Suggested Card Composition

A strong desktop version could look like:

```text
             ONE PHOTO. TWO OUTCOMES.
       Supporting description goes here.

 [Interior] [Twilight] [Object] [Sky] [Day to Dusk]


 ┌──────────────────────────────────────────────────────┐
 │                                                      │
 │                                                      │
 │              BEFORE / AFTER SLIDER                   │
 │                                                      │
 │                           ┌───────────────────────┐  │
 │                           │ Interior Retouching   │  │
 │                           │                       │  │
 │                           │ Professional editing  │  │
 │                           │ for listing-ready     │  │
 │                           │ photography.          │  │
 │                           │                       │  │
 │                           │ Drag to compare  ⇄    │  │
 │                           └───────────────────────┘  │
 │                                                      │
 └──────────────────────────────────────────────────────┘
```

The information card can either:

1. Float over a lower/right area of the image, or
2. Sit beside the image inside the same outer card.

Choose whichever produces the cleanest responsive result.

---

# 11. Mobile Design

The new card system must work extremely well on mobile.

Recommended mobile order:

```text
Heading
↓
Description
↓
Scrollable service pills
↓
Comparison image card
↓
Service information card
```

Do not force the desktop side-by-side layout onto small screens.

The comparison image should remain large enough to actually demonstrate the editing difference.

The information card should become a normal card below the image rather than floating over it if the floating version becomes cramped.

---

# 12. Animation

Keep the existing GSAP/ScrollTrigger/Lenis architecture.

Use restrained animation:

- Section heading reveal
- Service pill transition
- Card entrance reveal
- Image blur-to-sharp reveal
- Very subtle image/card movement
- Existing before/after automatic demonstration

Do not create a new animation framework.

Do not remove the existing `BeforeAfterSlider` functionality.

Keep:

- Pointer interaction
- Keyboard accessibility
- ARIA slider behavior
- Automatic demonstration sweep
- Reduced-motion support

---

# 13. Service Detail Page Consistency

This redesign must apply to **every service detail page**, not just Interior Retouching.

The visual system should be driven by the existing dynamic service template:

`ServiceDetail.jsx`

Do not create separate hardcoded layouts for individual services.

The same reusable structure should work with the existing service data:

- Title
- Tagline
- Description
- Price
- Delivery
- Hero image
- Gallery
- Included items
- FAQ
- Related services

---

# 14. What Must Stay Unchanged

Do not change:

- Service-detail routing
- `services.js` as the source of truth
- Existing WhatsApp CTA flow
- Existing `BeforeAfterSlider` functionality
- Existing GSAP setup
- Existing Lenis setup
- Existing reduced-motion support
- Existing accessibility behavior
- Existing dynamic service template architecture

This is a **visual and UX redesign**, not a rewrite of the service-detail functionality.

---

# 15. Final Design Goal

The detailed service page should now feel like this:

**Bright white + premium blue + professional real-estate imagery + elegant typography + refined cards.**

The old dark service page should no longer feel like a separate website.

The hero and the comparison section should visually belong to the same Kverra design system as the redesigned homepage.

The key transformation is:

```text
OLD

Dark navy hero
+
Dark information card
+
Large standalone comparison area


NEW

Bright premium hero
+
White/light service cards
+
Blue accents
+
Elevated comparison card
+
Integrated service information card
+
Consistent blue-and-white design system
```

## Acceptance Checklist

- [ ] Dark navy service hero background removed.
- [ ] All service-detail pages use the new light blue/white visual system.
- [ ] Hero image is presented in a premium image card.
- [ ] Existing service information remains available.
- [ ] Existing WhatsApp CTA remains functional.
- [ ] "One photo, two outcomes" section redesigned as an elevated card-based showcase.
- [ ] Existing before/after slider remains fully functional.
- [ ] Dark information card replaced with a light/blue premium card.
- [ ] Service pills updated to the new blue theme.
- [ ] Mobile layout does not overflow horizontally.
- [ ] Existing GSAP/Lenis animation architecture remains intact.
- [ ] Reduced-motion behavior remains intact.
- [ ] Same reusable design works across every `/services/:slug` page.
