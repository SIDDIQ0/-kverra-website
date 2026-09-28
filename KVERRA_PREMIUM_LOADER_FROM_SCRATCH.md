# Kverra Infotech — Premium Full-Screen Loader Redesign
## Creative Direction: "THE IMAGE REVEALS"

## READ THIS FIRST

The current loading screen is not acceptable.

The latest implementation produced a large split composition where the property image occupied roughly half the desktop screen and the remaining area stayed deep navy. That is not the desired experience.

Do NOT patch the current loader.

Do NOT keep the current centered camera-interface concept.

Do NOT keep the current navy loading background.

**Rebuild the loading experience from scratch.**

The loading screen should feel like a premium brand opening sequence created by a top-tier real-estate photography/post-production company.

This is not a normal loader.

It should feel like a short visual film.

---

# 1. CORE CREATIVE IDEA

## Concept: "THE IMAGE REVEALS"

Kverra edits photographs.

The loading experience should therefore revolve around one idea:

**A photograph is being revealed, refined, and released into the world.**

The visitor begins on a warm editorial canvas.

A photographic frame appears.

The image develops.

A precise editorial scan passes through it.

The frame expands.

The photograph becomes full-screen.

The photograph then becomes the Kverra homepage.

The visitor should feel that they have entered the image itself.

The emotional progression is:

CALM
→
ANTICIPATION
→
DISCOVERY
→
REFINEMENT
→
REVEAL

---

# 2. MOST IMPORTANT VISUAL RULE

## DO NOT USE NAVY AS THE LOADING SCREEN BACKGROUND

The current dark navy loader must be removed.

Use the warm ivory brand tone:

`#F7F4EC`

This should be the dominant opening canvas.

Supporting colors:

- White: `#FFFFFF`
- Deep charcoal-navy: `#172033`
- Gold: `#C9A45C`
- Gold highlight: `#E2C477`
- Secondary text: `#667085`

The loader should feel warm, editorial and luxurious before the property image takes over.

The deep charcoal-navy may be used for small text/details, but NOT as a giant empty background.

---

# 3. ABSOLUTELY NO SPLIT-SCREEN LOADER

The current desktop bug appears as:

IMAGE | NAVY EMPTY SPACE

Do not create any fixed 50/50 image layout.

Do not use a left/right loader composition.

Do not pin the image to half the viewport.

Do not leave a large empty colored panel beside the image.

The loader must be a single visual canvas.

The property image should eventually occupy the **entire viewport**.

---

# 4. THINK LIKE A PREMIUM BRAND FILM

Do not think:

"How can I make the loading spinner more advanced?"

Think:

"How can I create a 2-second opening film for a luxury image-editing studio?"

Use the principles of premium brand experiences:

- restraint
- typography
- composition
- negative space
- one strong visual idea
- deliberate pacing
- smooth transitions
- no unnecessary UI

Do not imitate any specific brand.

The experience must be original to Kverra.

---

# 5. LOADING SCREEN STRUCTURE

The loader should progress through these visual states:

### FRAME 01
Warm ivory editorial canvas.

### FRAME 02
Kverra identity enters.

### FRAME 03
A photographic frame is introduced.

### FRAME 04
Property photograph develops inside the frame.

### FRAME 05
A precise editing scan crosses the image.

### FRAME 06
The frame expands dramatically.

### FRAME 07
The final edited photograph fills the entire viewport.

### FRAME 08
The homepage hero typography reveals directly over that same image.

The transitions must be continuous.

---

# 6. PHASE 01 — WARM IVORY CANVAS

Start with:

`#F7F4EC`

full viewport.

No dark navy.

No giant spinner.

No percentage.

No giant UI panel.

Almost empty.

At the center, introduce a very thin gold horizontal rule.

Then reveal:

**K V E R R A**

using the existing premium display typography.

Below it:

**INFOTECH**

Then a tiny line:

**REAL ESTATE IMAGE POST-PRODUCTION**

Keep everything small.

The first second should feel calm and expensive.

---

# 7. PHASE 02 — Kverra WORDMARK / IDENTITY

The Kverra logo can appear if it is already part of the project assets.

However, do not simply fade in a logo and stop there.

Use a refined identity sequence:

1. thin gold line draws
2. logo/wordmark appears
3. "INFOTECH" settles underneath
4. identity gently moves upward as the photographic frame starts to appear

The identity should feel like an opening title.

---

# 8. PHASE 03 — THE PHOTOGRAPHIC FRAME

A single rectangular photographic frame should begin forming near the center of the screen.

Important:

This is a **frame**, not a card.

Use:

- thin gold/charcoal border
- four small crop corners
- very subtle framing marks
- controlled proportions

The frame should start smaller than the viewport.

But it should NOT stay small.

It exists only as the visual starting point for the image reveal.

---

# 9. PHASE 04 — IMAGE DEVELOPMENT

Reveal the real-estate photograph inside the frame.

Do not fade it in normally.

Use an editorial development effect.

Recommended:

- image begins slightly desaturated
- mild blur
- low contrast
- slightly reduced saturation
- gradually becomes crisp
- gradually reaches the final natural color

The image should appear as though the photograph is being developed.

Use CSS filter transitions controlled by GSAP.

Keep the transformation subtle and realistic.

---

# 10. PHASE 05 — EDITING SCAN

Introduce one elegant scanning element.

A thin gold/ivory line moves vertically or horizontally across the image.

As the scan passes:

- image sharpness increases
- contrast settles
- color becomes richer
- shadows open
- highlights become controlled

The portion behind the scan represents:

**REFINED**

The portion ahead represents:

**RAW**

The effect should look like professional image processing.

Do not make it look like a sci-fi scanner.

No neon.

No blue laser.

No giant HUD.

---

# 11. OPTIONAL MICRO TYPOGRAPHY

During the image development, small editorial labels can briefly appear around the frame:

RAW
EXPOSURE
COLOR
DETAIL
FINAL

Only the current stage should be emphasized in gold.

Keep them quiet.

Do not fill the screen with technical data.

These labels should feel like a luxury photography workflow, not software interface text.

---

# 12. PHASE 06 — THE FRAME BREAKS OPEN

This is the signature transition.

Once the photograph is refined:

The frame begins expanding.

The image scales with it.

Crop marks move outward.

The border lines travel toward the edges.

The property photograph grows from:

small framed image
→
large framed image
→
full viewport image

Use GSAP transforms and clip-path.

The expansion should feel physical and cinematic.

---

# 13. FULL-SCREEN IMAGE TAKEOVER

The property photograph must reach:

**100% viewport width**
and
**100% viewport height**

before the loader hands control to the hero.

No blank navy side.

No ivory side.

No 50/50 split.

No visible loader panel.

The photograph should completely own the screen.

This must work correctly on large desktop displays.

---

# 14. HERO IMAGE CONTINUITY

The strongest implementation is:

**Loader image = Hero image**

Do not suddenly swap to another photograph.

The same property image that fills the loader should remain as the homepage hero background.

This is critical.

The visitor should feel:

"The loading photograph became the website."

Not:

"The loading screen ended and another page loaded."

---

# 15. IMAGE POSITIONING

Desktop:

- full viewport
- `object-fit: cover`
- intentional focal point
- property architecture remains visually strong
- center area should retain enough visual breathing room for typography

Mobile:

- use a mobile-appropriate `object-position`
- crop intelligently
- preserve the most important property details
- do not distort

Never use fixed pixel dimensions that only work at one desktop size.

---

# 16. PHASE 07 — CINEMATIC HANDOFF TO HOMEPAGE

This must be one continuous GSAP timeline.

Do not:

```
hide loader
wait
show hero
animate hero
```

Instead:

```
loader image
→
full-screen image
→
hero image settles
→
hero typography begins
```

The visitor should not perceive a hard page transition.

---

# 17. HERO TEXT REVEAL ORDER

After the full-screen image settles, reveal the homepage content exactly in this order:

### 01 — Eyebrow

**REAL ESTATE PHOTO EDITING**

Reveal first.

Use small uppercase typography and letter spacing.

---

### 02 — Main heading

Reveal second.

Suggested Kverra headline:

**Real Estate Photos That**
**Look Exceptional.**

Use Playfair Display.

The emphasized word can use italic Playfair Display +:

`#C9A45C`

Use a masked reveal.

Do NOT pop the entire heading in at once.

---

### 03 — Supporting paragraph

Reveal third.

Use Plus Jakarta Sans.

Keep it concise.

Suggested direction:

Professional photo editing for real estate agents, photographers and property marketing teams, with consistent colour, lighting and detail across every listing.

Use a subtle fade/lift.

---

### 04 — WhatsApp CTA

Reveal fourth.

Use the existing glassmorphism button system.

Text:

**Chat on WhatsApp  →**

Use:

`+91 99524 18671`

through the existing centralized WhatsApp helper.

Use a subtle:

- fade
- upward movement
- tiny scale settle

No bounce.

---

### 05 — Small supporting line

Reveal fifth:

**EASILY ORDER IN UNDER 60 SECONDS**

---

### 06 — Left editorial text

Reveal sixth:

EDIT
ENHANCE
SELL FASTER

This should slide/fade gently from the left.

---

### 07 — Right editorial text

Reveal seventh:

BRIGHTER
CLEARER
HIGHER VALUE

This should slide/fade gently from the right.

---

# 18. HERO COMPOSITION

The final homepage hero must have this composition:

FULL PROPERTY IMAGE

                     REAL ESTATE PHOTO EDITING

                 Real Estate Photos That
                    Look Exceptional.

             supporting copy goes here

                [ Chat on WhatsApp → ]

              EASILY ORDER IN UNDER 60 SECONDS


   EDIT                                      BRIGHTER
   ENHANCE                                   CLEARER
   SELL FASTER                               HIGHER VALUE

The text is directly over the photograph.

Do NOT put all the content inside a large glass card.

---

# 19. NO GIANT HERO CARD

The previous implementation used a large rounded glass panel containing the entire hero.

Do NOT use that.

The final hero should be image-first and editorial.

Glass should be limited to:

- CTA
- small interface details
- appropriate cards elsewhere on the site

The central hero itself should breathe.

---

# 20. HERO READABILITY

Because the text is directly over a photograph, use a carefully controlled readability treatment.

Possible:

- very subtle black/charcoal gradient
- localized radial gradient behind the headline
- slight image darkening under the text area

Do not darken the entire photograph excessively.

The property must remain bright and beautiful.

Do not turn the hero into a dark cinematic poster.

---

# 21. ROYAL TYPOGRAPHY

Continue using:

### Display
Playfair Display

### Body
Plus Jakarta Sans

The feeling should be:

- editorial
- sophisticated
- architectural
- premium
- royal

Gold is an accent.

Do not make everything gold.

Use:

`#C9A45C`

for:

- highlighted word
- small editorial rules
- active micro labels
- subtle CTA details

---

# 22. TOP INFORMATION BAR

Above the white navbar, keep a slim utility bar.

Everything should be grouped around the center.

Use:

**Best Price Guarantee**
•
**WhatsApp: +91 99524 18671**
•
**Email: contect@kverra.com**

Desktop:
single centered line.

Mobile:
centered wrapping/stacking.

Do NOT place Best Price Guarantee on the far left and contact details on the far right.

---

# 23. LOADING SCREEN MUST NOT FEEL EMPTY

The warm ivory opening canvas should use negative space intentionally.

But it should still have visual movement.

The "empty" space should gradually come alive through:

- line draw
- wordmark reveal
- frame formation
- image reveal
- scan
- frame expansion

Do not fill empty areas with random UI.

---

# 24. LOADING SCREEN MUST NOT FEEL LIKE A DASHBOARD

Do NOT use:

- progress bar as the main element
- percentage counter
- small central preview card
- multiple rows of technical data
- standard spinner
- obvious loading icon
- giant dark panel
- small image surrounded by empty space
- split-screen layout

The visitor should never think:

"this is a loader widget."

They should think:

"something is being created."

---

# 25. OPTIONAL BRAND SIGNATURE

Add one tasteful recurring Kverra motion motif.

Recommended:

### The Gold Line

A very thin gold line can:

- begin the experience
- frame the image
- become the scan
- become a divider
- disappear into the hero

This creates a visual signature across the loading sequence.

Use it subtly.

---

# 26. ADVANCED GSAP IMPLEMENTATION

Use one master GSAP timeline.

The timeline should conceptually contain:

1. ivory canvas
2. identity line draw
3. logo/wordmark reveal
4. frame formation
5. image development
6. scan
7. final image state
8. frame expansion
9. full-screen image takeover
10. hero image settle
11. eyebrow reveal
12. headline reveal
13. paragraph reveal
14. CTA reveal
15. supporting line
16. left label
17. right label

Do not make these independent animations that fight each other.

They should feel choreographed.

---

# 27. GSAP TECHNIQUES

Prefer:

- timelines
- `clip-path`
- transforms
- opacity
- scale
- subtle filter transitions
- masked text
- stagger
- `gsap.set`
- `gsap.fromTo`

Use existing animation helpers where appropriate.

Do not introduce a second animation architecture.

---

# 28. PERFORMANCE

The loader should be impressive but fast.

Target approximately:

**1.5–3 seconds**

Do not intentionally make visitors wait for a long animation.

If the image is ready quickly, the sequence can finish quickly.

Avoid:

- WebGL
- giant image processing libraries
- canvas-heavy systems
- hundreds of DOM nodes
- continuous expensive filters
- unnecessary React state updates

Use the existing GSAP/React architecture.

---

# 29. MOBILE VERSION

The same creative concept must work on:

320px
360px
375px
390px
412px
430px

### Mobile loader

Use:

- warm ivory background
- centered identity
- single image frame
- controlled reveal
- simplified crop marks
- image expands to full screen
- same image becomes hero

Avoid:

- tiny text
- cramped technical labels
- oversized logo
- side-by-side panels
- horizontal overflow

---

# 30. DESKTOP VERSION

This issue is especially important.

At large desktop sizes:

- loader must fill the complete viewport
- image must not be stuck to the left
- no empty navy region may remain
- no split-screen composition
- image must expand to the full viewport before hero handoff
- all elements must remain centered/aligned intentionally

Test on wide desktop displays, not only 1280px.

Think about 1440px, 1600px and wider screens.

---

# 31. ACCESSIBILITY

Respect:

`prefers-reduced-motion: reduce`

When reduced motion is enabled:

- skip complex image choreography
- skip dramatic frame expansion
- reveal the final hero quickly
- retain a simple fade
- keep the site fully usable

Do not trap the visitor behind the loader.

---

# 32. EXISTING PROJECT FILES TO INSPECT

Before implementing, inspect:

- `src/components/LoadingScreen.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/App.jsx`
- `src/index.css`
- existing GSAP hooks
- existing image data
- existing WhatsApp helper

Understand how the current loader controls when the app becomes visible.

Then replace the existing loader architecture cleanly.

---

# 33. IMPORTANT: FIX THE CURRENT BUG, NOT JUST THE LOOK

The current screenshot shows the image occupying only the left portion of the desktop viewport.

Find the CSS/DOM cause.

Possible causes to inspect:

- fixed width
- `width: 50%`
- grid/flex column sizing
- incorrect absolute positioning
- wrapper max-width
- clip-path geometry
- transform origin
- stale split-layout markup

Do not hide the problem with:

`overflow: hidden`

Do not simply increase the image width until it visually covers something.

Fix the actual layout architecture.

---

# 34. HERO / LOADER IMAGE HANDOFF

If the same image is used in both:

- loader
- hero

make the visual transition seamless.

If technically impossible with the current React structure, create a carefully timed crossfade/mask transition.

Do not show a sudden flash of a different image.

---

# 35. DO NOT CHANGE THE ENTIRE WEBSITE DESIGN

This task is specifically about:

- loading experience
- loader-to-hero transition
- hero composition
- hero reveal choreography

Preserve existing:

- routes
- service functionality
- cards
- footer
- data architecture
- animation hooks
- typography
- navigation functionality

unless a change is directly required.

---

# 36. FINAL QUALITY BAR

Before declaring this complete, ask:

### Would this look appropriate as the opening of a premium real-estate photography company?

### Does the first 2 seconds communicate photography and refinement?

### Does the image feel like it is being created rather than merely loaded?

### Does the transition make the visitor curious about the website?

### Does the hero feel like a polished editorial campaign rather than a SaaS template?

### Does the motion have restraint?

If the answer is no, keep refining the visual choreography.

Do not stop simply because the code works.

---

# 37. FINAL ACCEPTANCE CRITERIA

## Loader

[ ] Rebuilt from scratch
[ ] Warm ivory `#F7F4EC` is the primary loader background
[ ] No giant navy background
[ ] No split-screen layout
[ ] No image stuck to the left
[ ] No large blank navy region
[ ] No basic spinner
[ ] No generic progress bar as the primary visual
[ ] Kverra identity reveal
[ ] Gold-line visual motif
[ ] Editorial photographic frame
[ ] Property image development effect
[ ] RAW → refined feeling
[ ] Editing scan
[ ] Frame expansion
[ ] Image reaches full viewport
[ ] Same image becomes homepage hero where possible

## Hero handoff

[ ] No hard cut
[ ] Image settles first
[ ] Eyebrow reveals first
[ ] Headline reveals second
[ ] Supporting copy reveals third
[ ] CTA reveals fourth
[ ] Supporting line reveals fifth
[ ] Left editorial label reveals sixth
[ ] Right editorial label reveals seventh
[ ] No content pops suddenly into existence

## Hero composition

[ ] Full-screen property photograph
[ ] Centered editorial copy
[ ] Playfair Display headline
[ ] Gold italic emphasis where appropriate
[ ] Left: EDIT / ENHANCE / SELL FASTER
[ ] Right: BRIGHTER / CLEARER / HIGHER VALUE
[ ] No giant glass hero card
[ ] CTA uses glassmorphism
[ ] Image remains visible and beautiful

## Desktop

[ ] Full viewport loader
[ ] Correct on wide displays
[ ] No split layout
[ ] No overflow
[ ] No clipping

## Mobile

[ ] 320px
[ ] 360px
[ ] 375px
[ ] 390px
[ ] 412px
[ ] 430px
[ ] No overflow
[ ] No overlaps
[ ] Image remains visually strong
[ ] Hero remains centered

## Scroll

[ ] Existing GSAP/ScrollTrigger system preserved
[ ] Section headings reveal
[ ] Supporting text reveals
[ ] Images reveal through masks/blur-to-sharp
[ ] Services reveal progressively
[ ] Portfolio/gallery reveals progressively
[ ] Motion remains restrained and coherent

## Accessibility

[ ] Reduced motion supported
[ ] CTA keyboard accessible
[ ] Menu remains usable
[ ] Loader does not trap users

## Technical

[ ] GSAP timelines cleaned up
[ ] No unnecessary dependencies
[ ] `npm run build` passes

---

# FINAL CREATIVE DIRECTIVE

The goal is NOT:

"make the loader more complicated."

The goal is:

**Make the first few seconds feel like the opening scene of Kverra.**

Start with warm ivory.

Introduce the Kverra identity.

Draw one precise gold line.

Create a photographic frame.

Reveal one beautiful property photograph.

Let the photograph develop.

Run one elegant editing scan through it.

Let the frame expand.

Let the photograph take over the entire screen.

Then let the hero emerge from that photograph:

REAL ESTATE PHOTO EDITING

Real Estate Photos That
Look Exceptional.

Supporting copy.

Chat on WhatsApp.

Editorial corner text.

The visitor should feel that Kverra did not merely load.

**Kverra revealed the image.**
