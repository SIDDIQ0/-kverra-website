# Kverra Infotech — Cinematic Royal Experience & Hero Redesign

## PRIMARY GOAL

The current website is functional, but the visual direction still feels too basic in two important places:

1. The loading screen feels like a simple loading animation.
2. The homepage hero does not reproduce the strong editorial composition we want.

This task is a **visual and motion-direction reset** for the experience.

The website should feel like a premium real-estate photo-editing studio that is taking the visitor **inside its editing world**.

Think:

**Camera → Capture → Raw Image → Editing Lab → Refinement → Final Listing Image → Kverra**

The experience should feel cinematic, luxurious and technologically sophisticated.

Do NOT copy Marvel branding, logos, typography or any exact title-card design. The reference is only for the sense of scale, anticipation, cinematic reveal and visual storytelling.

---

# 1. EXISTING PROJECT ARCHITECTURE

This is an existing React + Vite application.

Continue using the project's existing stack and architecture:

- React 18.3
- Vite 6
- Tailwind CSS 4
- GSAP 3.12
- GSAP ScrollTrigger
- Lenis
- React Router
- Playfair Display
- Plus Jakarta Sans

Existing important files/components include:

- `src/App.jsx`
- `src/index.css`
- `src/components/Navbar.jsx`
- `src/components/LoadingScreen.jsx`
- `src/components/Hero.jsx`
- existing animation hooks in `src/hooks/`
- existing WhatsApp helper/data
- existing `services.js`

Do not rebuild the application from scratch.

Do not replace GSAP/Lenis with a different animation system.

Do not replace the current typography stack unless there is a specific technical reason.

---

# 2. DESIGN REFERENCES

The supplied reference images communicate two different things.

## Homepage reference

The desired homepage composition is:

- full-screen property photograph
- large centered typography
- centered supporting paragraph
- centered CTA
- tiny editorial text blocks in the upper/side corners
- small divider lines
- minimal interface around the photograph
- very strong image presence
- elegant typography over the image

The current Kverra implementation is too card-based and too conventional.

### IMPORTANT

Do NOT place the hero copy inside a large rounded glass card.

Do NOT create a centered beige/white floating rectangle behind the text.

The image itself should be the hero.

The typography should sit directly over the image with only a subtle readability treatment.

---

# 3. HOMEPAGE HERO — TARGET COMPOSITION

Build the homepage hero as a cinematic, full-viewport editorial composition.

## Required structure

At the top:

SMALL EYEBROW
REAL ESTATE PHOTO EDITING

Center:

REAL ESTATE PHOTOS
THAT LOOK EXCEPTIONAL.

Below:

A concise supporting paragraph.

Below:

Large premium glass CTA:

CHAT ON WHATSAPP  →

Below:

Small supporting line:

EASILY ORDER IN UNDER 60 SECONDS

Use the existing WhatsApp helper and the real Kverra number:

+91 99524 18671

---

# 4. HERO CORNER TYPOGRAPHY

The hero should contain subtle editorial labels similar in spirit to the supplied reference.

## Left side

Use a small stacked label:

EDIT
ENHANCE
SELL FASTER

With a tiny gold horizontal rule.

## Right side

Use:

BRIGHTER
CLEARER
HIGHER VALUE

With a tiny gold horizontal rule.

These are visual details, not primary content.

They should feel like luxury editorial typography.

Use:

- small font size
- generous letter spacing
- uppercase
- restrained gold/ivory treatment
- subtle opacity

Do not make them compete with the central headline.

### Mobile

Simplify or reposition these details.

They must never:

- overlap the headline
- collide with the CTA
- create horizontal overflow
- become unreadably tiny

It is acceptable to hide the side labels on very small screens if they interfere with the composition.

---

# 5. HERO IMAGE — CHANGE THE CURRENT BACKGROUND

The current homepage background image is not strong enough for the desired direction.

Replace it with ONE exceptional high-quality real-estate image.

The image should preferably show:

- luxury residence
- architectural lines
- large windows
- sophisticated exterior/interior connection
- pool or terrace where appropriate
- beautiful natural light
- premium property photography
- cinematic depth
- visually interesting foreground/background separation

Avoid:

- generic tourist photos
- lifestyle portraits
- cluttered city scenes
- multiple small images
- collage layouts

The property itself should immediately communicate real estate.

### Image treatment

Use:

- `object-fit: cover`
- responsive focal positioning
- subtle cinematic color grading
- gentle dark/contrast overlay only where required for readability

Do not make the image muddy or overly dark.

The property must remain clearly visible.

Desktop and mobile may use different `object-position` values.

---

# 6. HERO TYPOGRAPHY — ROYAL STYLE

Keep the existing font system:

### Headings
Playfair Display

### Body/UI
Plus Jakarta Sans

The hero heading should feel:

- royal
- editorial
- expensive
- architectural
- confident

Use a large Playfair Display treatment.

An emphasized word can use Playfair Display italic with:

`#C9A45C`

Do not replace Playfair Display with a random luxury font.

Do not use generic modern SaaS typography for the main headline.

---

# 7. HERO COLOR TREATMENT

Use the project's new palette:

Main background:
`#F7F4EC`

Navbar:
`#FFFFFF`

Primary text:
`#172033`

Gold accent:
`#C9A45C`

Gold highlight:
`#E2C477`

Secondary text:
`#667085`

Glass/card:
`rgba(255,255,255,0.65)`

Borders:
`rgba(201,164,92,0.25)`

For the hero image, the image itself provides most of the color.

Use ivory/white text where necessary for contrast and deep navy/gold where the image has sufficient light space.

---

# 8. HERO SHOULD FEEL LIKE A MAGAZINE COVER, NOT A SAAS CARD

Avoid:

- giant rounded hero card
- excessive shadows
- generic centered dashboard UI
- excessive glass
- many floating widgets
- overdecorated interface

Instead use:

- one exceptional photograph
- one powerful headline
- one concise paragraph
- one clear CTA
- a few editorial micro-details

Large amounts of empty/visual space are intentional.

---

# 9. ADVANCED LOADING EXPERIENCE — MAIN FEATURE

The current loading screen is too basic.

It currently reads like:

logo
+
static image
+
progress
+
"Listing Ready"

That is not enough.

Replace it with a cinematic **"Enter the Editing World"** experience.

The visitor should feel as though they are moving from the real-world camera capture into Kverra's professional editing environment.

---

# 10. LOADING CONCEPT

Working title:

## THE Kverra EDITING LAB

Sequence concept:

**FOCUS → CAPTURE → RAW → EDIT → REFINE → FINAL**

The loading screen should feel like a cinematic title sequence mixed with a professional photography/editing interface.

It must be original to Kverra.

Do not imitate Marvel directly.

---

# 11. LOADING PHASE 01 — BLACK / VOID

Start with a near-black/deep charcoal-navy screen.

Very little is visible.

A tiny gold line appears in the center.

Then small typography fades in:

K V E R R A

Below:

INFOTECH

Keep it restrained.

Do NOT immediately show the entire website.

Build anticipation.

---

# 12. LOADING PHASE 02 — CAMERA FOCUS

Introduce a sophisticated camera-viewfinder system.

Create a central composition inspired by professional camera optics:

- thin circular focus rings
- corner crop marks
- center focus point
- tiny framing grid
- subtle gold/ivory lines
- small technical labels

Possible technical labels:

FOCUS
01 / 35MM
F 2.8
RAW CAPTURE
ISO 100

These are aesthetic details and should remain subtle.

Do not turn the screen into a noisy sci-fi HUD.

---

# 13. LOADING PHASE 03 — APERTURE / LENS REVEAL

Create an abstract camera-aperture animation.

The visitor sees dark overlapping aperture blades.

Using GSAP:

- aperture blades rotate/open
- focus rings scale
- central opening expands
- background light leaks through
- the property image becomes visible through the opening

The important effect is:

**The image is not simply faded in.**

It should feel like the visitor is physically looking through a camera lens.

Use CSS transforms/SVG or lightweight DOM geometry.

Do not use a heavy WebGL engine unless the existing site truly requires it.

---

# 14. LOADING PHASE 04 — RAW PROPERTY IMAGE

Reveal a beautiful property photograph inside the camera frame.

At first:

- slightly desaturated
- lower contrast
- mild softness
- RAW label
- subtle technical overlay

Then the editing process begins.

---

# 15. LOADING PHASE 05 — ENTER THE EDITING WORLD

This is the key moment.

Do not simply animate a progress bar.

Make the visitor feel like the camera view is becoming an editing workspace.

Possible transition:

1. focus frame locks onto the property
2. camera interface expands
3. image zooms forward
4. crop marks enlarge
5. a scanning line sweeps horizontally
6. color/exposure changes
7. subtle editing guides appear
8. image becomes more refined
9. the camera frame expands beyond the viewport

The user should feel:

"I'm entering the image."

Then:

"I'm inside Kverra's editing process."

---

# 16. EDITING STAGES

Use clear but minimal stage labels:

RAW
EXPOSURE
COLOR
DETAIL
REFINE
FINAL

Animate them sequentially.

Only one stage should feel active at a time.

Example:

RAW
→
EXPOSURE
→
COLOR
→
DETAIL
→
FINAL

Use gold for the active stage.

Use muted ivory/grey for inactive stages.

Avoid using a generic percentage as the main storytelling device.

A percentage can exist quietly as secondary detail.

---

# 17. IMAGE TRANSFORMATION

Use GSAP to visually transform the property image.

Possible transformations:

### RAW

Slightly flat / muted.

### EXPOSURE

Brighter windows and shadows.

### COLOR

More balanced white balance and richer but natural color.

### DETAIL

Sharper architectural edges.

### FINAL

Balanced highlights, shadows, color and clarity.

The transformation must remain realistic.

Do not make it look like an Instagram filter.

The final image should look like professionally edited real-estate photography.

---

# 18. CINEMATIC ZOOM TRANSITION

At the climax:

The edited image fills more and more of the screen.

Use a GSAP timeline to:

- scale the image upward
- push the camera frame outward
- fade technical labels
- increase clarity
- reveal the final composition
- transition directly into the homepage hero image

This should create a seamless visual connection:

LOADING IMAGE
→
FULL-SCREEN IMAGE
→
HOMEPAGE HERO

The visitor should not feel like one screen suddenly disappeared and another appeared.

It should feel like one continuous camera-to-website transition.

---

# 19. FINAL LOADING MOMENT

At the end, show a restrained final status:

LISTING READY

Possibly:

Kverra EDITING COMPLETE

Then use a GSAP mask/reveal to transition into the homepage.

The transition should feel like the camera aperture opening fully into the website.

---

# 20. LOADING SCREEN TIMING

Keep the experience cinematic but fast.

Target approximately:

1.0–2.5 seconds

Do not force users to wait through a long intro.

The loading experience must not make the site feel slow.

If assets are not ready, the UI must gracefully finish without stalling.

---

# 21. LOADING SCREEN MOBILE

For mobile:

- simplify camera rings if necessary
- reduce technical labels
- keep logo readable
- keep image frame within viewport
- keep aperture animation centered
- preserve the feeling of entering the editing world

No horizontal overflow.

No tiny unreadable UI.

No oversized animation extending outside the viewport.

---

# 22. REDUCED MOTION

Respect:

`prefers-reduced-motion: reduce`

In reduced-motion mode:

- skip elaborate aperture/zoom choreography
- quickly show the final state
- perform only a simple fade/reveal
- do not trap the visitor behind animation

---

# 23. ADVANCED SCROLL ANIMATION — ENTIRE WEBSITE

The rest of the website should feel alive as the visitor scrolls.

Currently there are already GSAP/ScrollTrigger and Lenis systems.

Build on those.

Do NOT add random animation everywhere.

Motion should communicate hierarchy and transformation.

---

# 24. SECTION REVEALS

As each section enters the viewport:

- headings should reveal elegantly
- supporting text should follow
- images should reveal through masks/clips
- cards should enter with subtle stagger
- dividers can draw progressively

Use existing animation hooks where appropriate.

Prefer reusable patterns.

---

# 25. TEXT REVEAL

For major headings:

Use the existing word reveal architecture where appropriate.

Recommended behavior:

- words begin slightly below their final position
- masked by an overflow container
- rise into place
- stagger gently

Do not make every paragraph animate word-by-word.

Use stronger effects for major titles.

---

# 26. IMAGE REVEALS

Use cinematic image reveals:

- clip-path reveal
- masked vertical/horizontal reveal
- subtle scale settle
- blur-to-sharp
- opacity progression

The image should feel "developed" into view.

This is especially appropriate for a photo-editing company.

---

# 27. SERVICES ANIMATION

For the services section:

Each service row/card should reveal progressively.

Possible:

- number fades in
- divider draws
- service title rises
- description follows
- arrow enters
- image/hover preview reveals on desktop

Keep the layout clean.

Do not create distracting animations on every mouse movement.

---

# 28. BEFORE/AFTER / EDITING SECTIONS

Where the site displays before/after imagery:

Make the reveal feel like editing.

Examples:

- split image reveal
- scan-line movement
- mask expansion
- image sharpen
- subtle color transformation

The animation language should reinforce:

RAW → EDITED

---

# 29. GALLERY ANIMATION

For photography galleries:

- images should reveal progressively
- stagger should feel controlled
- use scale/blur reduction where appropriate
- hover can subtly reveal richer color/details

Do not make gallery movement excessive.

Photography itself should remain the focus.

---

# 30. PARALLAX

Continue using GSAP ScrollTrigger for tasteful parallax where already implemented.

Use small differences in movement between:

- image
- foreground
- text
- decorative elements

Avoid excessive parallax that causes nausea or layout instability.

---

# 31. SCROLL-TRIGGERED MICRO INTERACTIONS

Good candidates:

- gold divider drawing
- eyebrow fading in
- number counters
- image framing lines
- subtle text lift
- CTA highlight
- section background transitions

The goal is to make scrolling feel intentional.

---

# 32. NAVBAR DURING SCROLL

Keep the navbar clean and premium.

When scrolling:

- transition from top state into frosted/glass state
- subtle shadow/border change
- maintain readability
- do not produce a dramatic jump

Mobile menu behavior must remain reliable.

---

# 33. BUTTON ANIMATION

All CTA buttons should use the unified glassmorphism system.

Hover on pointer devices:

- subtle lift
- controlled highlight
- gentle sheen
- tiny scale change

Active:

- subtle press

Focus:

- clear `focus-visible`

Touch:

- no reliance on hover

Do not overanimate the buttons.

---

# 34. IMPORTANT: KEEP THE WEBSITE ROYAL

Royal does NOT mean:

- bright yellow everywhere
- giant gold gradients
- excessive glow
- luxury clichés
- ornamental UI everywhere

Instead:

Royal means:

- strong typography
- disciplined spacing
- premium photography
- restrained gold
- deep charcoal-navy
- warm ivory
- elegant glass
- cinematic motion
- confidence

---

# 35. MOBILE RESPONSIVENESS

Verify at:

320px
360px
375px
390px
412px
430px

At every size:

- navbar works
- mobile menu works
- hero remains centered
- hero image remains readable
- hero CTA fits
- corner typography is handled appropriately
- loading screen remains centered
- loading animation does not overflow
- all buttons fit
- scroll animations do not create horizontal overflow

Also verify desktop.

---

# 36. PERFORMANCE

Because GSAP is already used extensively:

- reuse timelines where possible
- clean up GSAP contexts
- kill ScrollTriggers on unmount when appropriate
- avoid unnecessary React state updates during animation
- avoid expensive filters running continuously
- do not create hundreds of animated DOM elements
- avoid unnecessary RAF loops
- keep the loading experience short
- optimize animation only after visual behavior is correct

Do not introduce WebGL simply for spectacle.

---

# 37. ACCESSIBILITY

Do not sacrifice usability for animation.

Ensure:

- CTA remains keyboard accessible
- focus states remain visible
- menu buttons have correct labels
- reduced motion is respected
- text remains readable
- animations do not trap interaction
- mobile controls remain usable

---

# 38. IMPLEMENTATION ORDER

Follow this order:

1. Inspect `Hero.jsx`.
2. Inspect `LoadingScreen.jsx`.
3. Inspect `Navbar.jsx`.
4. Inspect `src/index.css`.
5. Inspect existing animation hooks.
6. Replace the current hero composition.
7. Replace the current hero background image.
8. Remove the large hero glass card approach.
9. Implement centered editorial hero typography.
10. Add left/right micro-labels.
11. Fix the top utility information alignment if still required.
12. Build the new cinematic camera/aperture loading sequence.
13. Connect the final loading frame into the homepage hero.
14. Refine section scroll reveals.
15. Refine image/mask reveals.
16. Refine service/gallery animations.
17. Refine navbar scroll transition.
18. Verify mobile.
19. Verify desktop.
20. Run `npm run build`.

---

# 39. DO NOT BREAK EXISTING FUNCTIONALITY

Do not break:

- React Router
- Services pages
- Service detail pages
- WhatsApp CTA
- Lenis
- ScrollTrigger
- reduced motion
- mobile navigation
- footer
- existing content/data architecture

Do not hardcode duplicated service/contact data where the project already has centralized helpers.

---

# 40. FINAL ACCEPTANCE CRITERIA

## Homepage

[ ] One excellent property image dominates the hero
[ ] Hero composition closely follows the supplied editorial reference
[ ] Main text is centered
[ ] CTA is centered
[ ] Left editorial label exists
[ ] Right editorial label exists
[ ] Hero does not use a giant glass content card
[ ] Playfair Display remains the display font
[ ] Hero feels royal/premium
[ ] Background image is replaced with a stronger real-estate image

## Loading

[ ] Current basic loading screen is replaced
[ ] New experience begins in a dark cinematic state
[ ] Kverra identity appears
[ ] Camera/viewfinder language appears
[ ] Aperture/lens effect is present
[ ] Property image is revealed through the lens
[ ] Editing stages are animated
[ ] Image visibly transforms from raw to refined
[ ] Camera frame expands into the website
[ ] Final image transitions into the homepage hero
[ ] Loading feels cinematic rather than like a spinner
[ ] Loading remains fast
[ ] Mobile loading works
[ ] Reduced motion works

## Scroll animation

[ ] Section headings reveal
[ ] Supporting text reveals
[ ] Images reveal through masks/clips
[ ] Service rows animate
[ ] Galleries animate
[ ] Before/after sections feel like photo editing
[ ] Parallax remains controlled
[ ] No animation causes horizontal overflow

## UI

[ ] Navbar remains functional
[ ] Glass UI remains visible
[ ] Buttons remain glassmorphic
[ ] Buttons remain readable
[ ] Mobile menu remains functional

## Responsive

[ ] 320px
[ ] 360px
[ ] 375px
[ ] 390px
[ ] 412px
[ ] 430px
[ ] Desktop

No horizontal overflow at any target size.

## Build

[ ] `npm run build` passes

---

# FINAL CREATIVE DIRECTION

The site should tell a story without saying it explicitly:

A photographer captures a property.

Kverra takes that raw frame.

The image enters the editing process.

Light is balanced.

Color is refined.

Details are sharpened.

The property becomes presentation-ready.

Then the visitor arrives inside the Kverra website.

The loading screen should feel like the **doorway into that process**.

The homepage should then feel like the finished photograph: spacious, precise, elegant, confident and premium.

The final experience should feel like a **real-estate photo studio with an editorial design language**, not a generic SaaS template.
