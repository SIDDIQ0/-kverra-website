# Kverra Infotech — Service Content, Pricing Removal & Mobile Navbar Fix

## Scope

This document covers three related updates:

1. Replace the current short service-page copy with **detailed, original service content** informed by the service topics and capabilities presented on Sculpture Crown.
2. **Remove pricing from every service-related UI section** across the Kverra website.
3. Fix the **mobile navbar** so the Portfolio option is always accessible and never disappears/clips.

### Source used for service research

The service topics and capability direction were researched from Sculpture Crown's public service pages. Their site currently lists services including Interior Retouching, Exterior Retouching, Twilight Images, Day to Dusk Images, Object Removal, Aerial Image Editing, Panorama Editing (360), Swimming Pool Replacement, Virtual Staging, Video Editing, Wet Look Editing, Sky Replacement and Grass Replacement.

Important: **Do not copy Sculpture Crown's wording, sentences, testimonials, company claims, statistics, branding or page structure.** Use the source only as research for understanding the types of real-estate editing services and the practical problems each service solves. Write fresh Kverra-specific copy.

---

# 1. Service Content Strategy

Kverra's service pages should stop feeling like short placeholder descriptions.

Each service page should contain enough useful information for a potential real-estate agent, photographer or property marketing team to understand:

- What the service is
- What problem it solves
- What the editor actually changes
- What the final image should achieve
- What kinds of property photos benefit from it
- What is included in the editing
- Why consistency matters across a listing
- A clear CTA to contact/order through WhatsApp

Keep the writing **direct and professional**.

Do not use exaggerated claims such as:

- Best in the world
- #1
- Guaranteed sales
- Industry-leading unless verified
- Guaranteed buyer engagement
- Guaranteed faster sales

Do not invent statistics.

---

# 2. Kverra Service Pages

Use the existing dynamic `ServiceDetail` template and `src/data/services.js`.

The following content is written for the eight service areas currently represented by Kverra's project overview:

1. HDR / Interior & Exterior Photo Editing
2. Twilight Conversion
3. Object Removal
4. Sky, Grass & Pool Replacement
5. Flambient / Multiple Exposure Blending
6. Drone / Aerial Image Enhancement
7. 360° Panorama Stitching
8. Day & Dusk Dual Delivery

Do not create eight separate React page templates. Keep one reusable dynamic template and put the content in the service data layer.

---

# 3. SERVICE 1 — HDR / INTERIOR & EXTERIOR PHOTO EDITING

## Page title

**HDR Real Estate Photo Editing**

## Short tagline

**Balanced exposure, accurate colour and clean property details for listing-ready images.**

## Hero description

Real estate interiors and exteriors often contain bright windows, dark corners, reflective surfaces and uneven natural light in the same frame. Our HDR editing combines the useful exposure information from multiple photographs and balances the final image so the property looks clear, natural and properly lit.

The goal is not to make the image look artificial. We preserve the property's real appearance while improving exposure, colour, contrast and visible detail so the photograph is ready for online listings, brochures and marketing materials.

## Detailed content

### What we do

Our editors work with bracketed or multiple-exposure photographs to create a balanced final image. Bright windows can retain detail while darker interior areas remain visible. Colour temperature, highlights, shadows and overall contrast are adjusted so the room looks consistent and natural.

For exterior photographs, we can also refine exposure, colour and contrast so the building, landscaping and surrounding environment are represented clearly.

### What is included

- Exposure balancing
- Highlight and shadow recovery
- Natural colour correction
- White-balance correction
- Contrast and tonal adjustment
- Interior brightness correction
- Window and exterior exposure balancing
- Detail enhancement
- Natural-looking final colour grading
- Consistent treatment across a property set

### Best for

- Interior listing photography
- Exterior property photography
- Bracketed exposures
- Rooms with bright windows
- Properties with mixed lighting
- Professional MLS/listing photography

## Why it matters

A listing usually contains multiple rooms and exterior views. If every image has a different exposure or colour temperature, the listing feels inconsistent. HDR editing helps create a more uniform visual set while preserving the property's actual appearance.

## CTA direction

**Send your property photos for editing →**

---

# 4. SERVICE 2 — TWILIGHT CONVERSION

## Page title

**Twilight Photo Editing**

## Short tagline

**Turn a daytime exterior into a realistic evening property photograph.**

## Hero description

Twilight photography can give exterior property images a warmer evening atmosphere without requiring a second photo shoot. Our editors transform suitable daytime exterior photographs into realistic twilight scenes by adjusting the sky, ambient light, property illumination and overall colour balance.

The result should look like a believable evening photograph rather than an obvious digital effect.

## Detailed content

### What we do

We create a controlled transition from daylight to an evening appearance. The sky becomes deeper and more natural, exterior lighting is enhanced where appropriate, windows can receive realistic warm illumination, and the overall image is balanced so the property remains the focus.

### What is included

- Realistic twilight sky treatment
- Evening colour grading
- Window-light enhancement
- Exterior lighting enhancement
- Shadow and highlight balancing
- Colour temperature adjustment
- Contrast refinement
- Natural blending between sky and architecture
- Final image consistency across a twilight set

### Best for

- Residential listings
- Luxury properties
- Exterior hero images
- Evening marketing campaigns
- Properties with strong architectural lighting

## Important editing principle

The final photograph should retain realistic perspective, architecture and material colours. Avoid an exaggerated sunset or artificial glow that makes the property look digitally altered.

---

# 5. SERVICE 3 — OBJECT REMOVAL

## Page title

**Real Estate Object Removal**

## Short tagline

**Remove distracting objects while keeping the property natural and believable.**

## Hero description

Real estate photographs often contain temporary or unwanted objects that distract from the property. Cars, bins, signs, cables, construction materials, personal belongings and other visual distractions can be removed carefully while preserving the surrounding architecture and surfaces.

Our editors reconstruct the affected areas so the final photograph looks clean without making the edit obvious.

## Detailed content

### What we do

We identify distracting objects and remove them from the image while rebuilding the background using surrounding textures, lines, surfaces and architectural details.

The objective is not simply to erase an object. The surrounding area must remain visually believable.

### Common removal requests

- Garbage bins
- Parked vehicles
- Temporary signs
- Construction materials
- Cables and wires
- Small outdoor equipment
- Personal belongings
- Unwanted furniture
- Minor visual distractions
- Temporary objects around the property

### What is included

- Object masking
- Background reconstruction
- Texture matching
- Edge cleanup
- Perspective-aware reconstruction
- Colour matching
- Final detail cleanup

## Best for

Exterior property photography, vacant-property preparation, interior cleanup and listing images containing temporary distractions.

---

# 6. SERVICE 4 — SKY, GRASS & POOL REPLACEMENT

## Page title

**Sky, Grass & Pool Replacement**

## Short tagline

**Improve outdoor property photographs with realistic environmental replacements.**

## Hero description

Outdoor photographs can be affected by washed-out skies, dull lawns or pools that contain distracting equipment and reflections. Our editing service improves these elements while keeping the property itself unchanged.

Sky, grass and pool adjustments are carefully blended into the original photograph so the final result remains believable and appropriate for real-estate marketing.

## Detailed content

### Sky replacement

Overcast, pale or washed-out skies can reduce contrast in an exterior photograph. We can replace the sky with a suitable realistic sky while preserving rooflines, trees, buildings and other edges.

### Grass replacement

Lawns can appear dry, patchy or uneven depending on season and lighting. We can improve the appearance of grass while keeping the texture and perspective consistent with the original scene.

### Pool editing

Pool areas can be cleaned up by removing distracting equipment and improving the visual appearance of the water. Reflections and surrounding edges should remain natural.

### What is included

- Realistic sky replacement
- Sky-to-building edge refinement
- Grass colour and texture improvement
- Pool cleanup
- Pool equipment removal where appropriate
- Water colour refinement
- Reflection preservation
- Colour matching
- Natural environmental blending

## Important principle

Do not make the landscape look unrealistically saturated. The purpose is to improve presentation while keeping the property believable.

---

# 7. SERVICE 5 — FLAMBIENT / MULTIPLE EXPOSURE BLENDING

## Page title

**Flambient & Multiple Exposure Blending**

## Short tagline

**Combine multiple exposures and flash frames into one balanced real-estate photograph.**

## Hero description

Flambient and multiple-exposure workflows are commonly used by real-estate photographers to capture interior spaces with difficult lighting. Multiple frames can contain different exposure levels and flash information, and combining them correctly requires careful masking, blending and colour balancing.

Our editors combine the useful information from those frames into one clean final image.

## Detailed content

### What we do

We work with multiple exposures and, where provided, flash frames to balance natural and artificial light. The goal is to preserve window views, room detail, accurate colour and natural-looking illumination without making the final image look over-processed.

### What is included

- Multiple-exposure blending
- Flash-frame blending
- Exposure balancing
- Window pull
- Highlight recovery
- Shadow recovery
- Colour correction
- White-balance correction
- Mask refinement
- Edge cleanup
- Consistent treatment across the full property

## Best for

- Professional real-estate photographers
- Interior photography
- High-contrast rooms
- Rooms with bright windows
- Mixed natural/artificial lighting
- Premium property listings

## Quality principle

Every frame in the property set should feel like it belongs to the same shoot. Consistent colour, exposure and contrast are as important as the individual image.

---

# 8. SERVICE 6 — DRONE / AERIAL IMAGE ENHANCEMENT

## Page title

**Drone & Aerial Photo Editing**

## Short tagline

**Clean, balance and enhance aerial property photography for marketing use.**

## Hero description

Aerial photographs show a property from a perspective that ground-level photographs cannot provide. They also expose large areas of sky, landscape, rooftops, roads and surrounding properties, making exposure and colour consistency particularly important.

Our editors refine drone photographs so the property and its surroundings are presented clearly and professionally.

## Detailed content

### What we do

We improve exposure, colour, contrast and detail while keeping the aerial perspective intact. Where appropriate, distracting elements can be cleaned up and skies or landscape areas can be refined.

### What is included

- Exposure correction
- Colour correction
- White-balance correction
- Contrast refinement
- Shadow/highlight adjustment
- Sky enhancement
- Landscape refinement
- Minor object cleanup
- Detail enhancement
- Consistent treatment across aerial sets

## Best for

- Residential drone photography
- Large properties
- Land and acreage listings
- Commercial real estate
- Resort and hospitality properties
- Property marketing campaigns

---

# 9. SERVICE 7 — 360° PANORAMA STITCHING & ENHANCEMENT

## Page title

**360° Panorama Editing**

## Short tagline

**Clean, balance and prepare panoramic property images for immersive viewing.**

## Hero description

360° photography allows potential buyers to explore a room or property from a wider perspective. The quality of the panorama depends on clean stitching, consistent exposure, balanced colour and careful handling of the full image.

Our editing process improves the visual consistency of 360° property imagery while preserving the panoramic view.

## Detailed content

### What we do

We work on panoramic images to improve exposure, colour, contrast and overall presentation. Where source material requires it, the workflow can include stitching-related cleanup and correction of visible inconsistencies.

### What is included

- 360° image enhancement
- Exposure balancing
- Colour correction
- White-balance correction
- Contrast adjustment
- Stitching cleanup where applicable
- Seam/transition cleanup
- Detail refinement
- Consistent treatment across multiple panoramas

## Best for

- Real-estate virtual tours
- Interior panoramas
- Commercial properties
- Hospitality properties
- Architectural photography
- Interactive property experiences

---

# 10. SERVICE 8 — DAY & DUSK DUAL DELIVERY

## Page title

**Day & Dusk Dual Delivery**

## Short tagline

**Create both a natural daytime version and an evening-style version from suitable exterior photography.**

## Hero description

Some property listings benefit from showing the same exterior in two different lighting moods. Our Day & Dusk service provides a natural daytime treatment together with a professionally edited evening version, giving you two useful marketing images from the same source photography.

The daytime version keeps the property's natural appearance, while the dusk version introduces a realistic evening atmosphere.

## Detailed content

### What we do

We prepare the exterior image for two distinct presentations.

The day version focuses on:

- Natural exposure
- Clear architecture
- Accurate colours
- Landscape visibility
- Balanced daylight

The dusk version focuses on:

- Deeper evening sky
- Warm property lighting
- Controlled shadows
- Realistic ambient colour
- Natural exterior illumination

### What is included

- Daytime image refinement
- Dusk conversion
- Sky treatment
- Window-light enhancement
- Colour balancing
- Exposure correction
- Shadow/highlight control
- Consistent architectural colour
- Final matching between day and dusk versions

## Best for

- Property hero images
- Luxury listings
- Exterior marketing campaigns
- Agent websites
- Brochures
- Social media property promotion

---

# 11. Remove Pricing From ALL Service UI

This is a separate required change.

The current project overview states that `services.js` contains a `price` field and that the Services page, ServiceDetail and related UI display pricing.

Remove pricing from the **entire visible website**.

## Remove price from:

- Homepage service cards
- Homepage service sections
- `/services` service list
- Service detail hero
- Service detail badges
- Related service cards
- Navbar service dropdown if present
- Any service comparison card
- Any service metadata row
- Any CTA section that displays a service price
- Any mobile version of the above
- Any desktop version of the above

Do not leave placeholders such as:

- `$1.20 / image`
- `From $...`
- `Starting at...`
- `Price`
- `Per image`

The service pages should instead focus on:

- What the service does
- What is included
- Delivery information if the existing data supports it
- Quality/technical details
- CTA to contact Kverra

## Data-layer instruction

If the `price` field is no longer used anywhere, it can be removed from `services.js`.

If removing it would unnecessarily break existing logic, leave the field in the data temporarily but **do not render it anywhere**.

The visible website must contain no service pricing.

---

# 12. Service CTA After Pricing Removal

The CTA should become more important after removing prices.

Use a clear action such as:

**Get a Quote on WhatsApp →**

or:

**Discuss Your Project →**

Keep the existing WhatsApp deep-link function.

Do not invent an online checkout or payment flow.

---

# 13. Mobile Navbar — Portfolio Visibility Fix

There is an intermittent mobile navigation problem where the **Portfolio** option is not visible.

Fix the mobile navbar so the menu always contains:

- Home
- Services
- Portfolio
- Any other existing navigation items
- Contact / CTA where applicable

## Required behavior

Portfolio must never be hidden because of:

- Menu height
- Overflow clipping
- Incorrect flex sizing
- Z-index
- Animation state
- Services submenu height
- Viewport height
- Fixed positioning
- Transform/translate animation
- Scroll locking
- An item being pushed below the visible menu

---

# 14. Mobile Menu Structure

The mobile menu should be allowed to scroll internally if its content exceeds the viewport height.

Conceptually:

```text
┌─────────────────────────────┐
│ Logo                    X   │
├─────────────────────────────┤
│ Home                        │
│ Services                    │
│   service links...          │
│ Portfolio                   │
│ About                       │
│ Contact                     │
│                             │
│ [ CTA ]                     │
└─────────────────────────────┘
```

If the services submenu makes the menu too tall:

- The mobile menu itself should scroll.
- Portfolio must remain reachable.
- The body/page should not become horizontally scrollable.
- The close button should remain usable.
- The CTA should remain accessible.

Do not simply reduce font size until everything fits.

---

# 15. Investigate the Actual Navbar Bug

Inspect `Navbar.jsx` and its mobile-menu CSS/classes.

Specifically check:

- `height`
- `max-height`
- `overflow`
- `overflow-y`
- `position: fixed`
- `z-index`
- `transform`
- GSAP menu entrance/exit timeline
- Services dropdown expansion
- Flex/grid sizing
- `100vh` / `100dvh`
- Safe-area padding
- Bottom CTA positioning

Do not assume the problem is Portfolio itself.

The likely issue is that another menu element is consuming or clipping the available mobile-menu space.

Fix the underlying layout.

---

# 16. Mobile Navbar Acceptance

Test the mobile menu at:

- 320px
- 360px
- 375px
- 390px
- 412px
- 430px

And test with:

- Services menu closed
- Services menu opened
- Menu near the top of the page
- Menu after scrolling
- Short viewport height
- Tall viewport height

Portfolio must be visible or reachable by internal scrolling in every case.

---

# 17. Content Tone

The new service copy should follow the same direction as the homepage redesign:

**Clear, direct, professional and service-focused.**

Avoid overly poetic copy.

For example:

### Prefer

**Professional real estate photo editing for balanced exposure, accurate colour and consistent property images.**

### Avoid

**Transform every frame into a breathtaking visual masterpiece.**

The visitor should understand the service immediately.

---

# 18. Do Not Copy Sculpture Crown

The source website was used for research into:

- Service categories
- Common real-estate editing use cases
- Editing techniques
- Practical problems these services address

The Kverra copy must be newly written.

Do not copy:

- Sentences
- Paragraphs
- Testimonials
- Company claims
- Statistics
- Brand language
- Copyrighted wording
- Their page structure

Kverra should have its own voice and content.

---

# 19. Technical Preservation

Do not replace the existing service architecture.

The project overview states that:

- `services.js` is the single source of truth for the eight current services.
- `ServiceDetail` is one dynamic template driven by the service data.
- The site uses React Router.
- GSAP + ScrollTrigger are used throughout.
- Lenis is the single smooth-scroll instance.
- Reduced-motion behavior is already implemented.

Preserve these decisions.

Only update the service data/content and the relevant presentation components.

---

# 20. Final Implementation Checklist

## Service content

- [ ] Every existing service page has detailed, useful copy.
- [ ] Copy is original and Kverra-specific.
- [ ] Content is informed by real-estate editing capabilities researched from Sculpture Crown.
- [ ] No Sculpture Crown wording is copied.
- [ ] Each service explains what it does.
- [ ] Each service explains what is included.
- [ ] Each service identifies appropriate use cases.
- [ ] Each service has a clear WhatsApp CTA.

## Pricing

- [ ] Pricing removed from homepage service cards.
- [ ] Pricing removed from `/services`.
- [ ] Pricing removed from ServiceDetail hero.
- [ ] Pricing removed from related-service cards.
- [ ] Pricing removed from service metadata.
- [ ] Pricing removed from mobile layouts.
- [ ] No visible `$` service prices remain.
- [ ] No "starting from" price remains.

## Navbar

- [ ] Portfolio is visible/reachable on mobile.
- [ ] Mobile menu scrolls internally when necessary.
- [ ] Portfolio remains reachable with Services submenu expanded.
- [ ] No menu clipping.
- [ ] No z-index issue.
- [ ] No viewport-height clipping.
- [ ] Tested at 320–430px widths.
- [ ] Desktop navbar remains unchanged unless required.

## Build / QA

- [ ] `npm run build` passes.
- [ ] All service routes work.
- [ ] No broken service links.
- [ ] WhatsApp CTA still works.
- [ ] No horizontal overflow introduced.
- [ ] Reduced-motion behavior remains intact.
