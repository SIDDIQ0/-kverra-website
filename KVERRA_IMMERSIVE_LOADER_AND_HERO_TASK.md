# Kverra Infotech — Immersive Cinematic Loading + Exact Editorial Hero Composition

## PURPOSE

The current implementation has two problems:

1. The loading screen still behaves like a small loading widget centered in a large empty page.
2. When loading finishes, the homepage content appears too abruptly, instead of feeling like one continuous cinematic transition.

The homepage composition is also still not matching the intended editorial layout.

This task is specifically about creating a **full-screen cinematic opening experience** and then handing off smoothly into an **editorial, image-first hero composition**.

The supplied visual reference is a composition reference only. Do not copy its branding, exact wording, logo, colors, or typography.

---

# 1. THE CORE EXPERIENCE

The visitor should feel as though they are entering Kverra's professional photo-editing world.

The experience should tell this visual story:

CAMERA
→
FOCUS
→
CAPTURE
→
RAW PHOTO
→
EDITING
→
REFINEMENT
→
FINAL IMAGE
→
Kverra HOMEPAGE

This is not a generic website loader.

It is a short cinematic opening sequence.

The loading screen should occupy the **entire viewport**.

Do not put a small loading card in the middle of an otherwise empty dark page.

---

# 2. FULL-SCREEN CINEMATIC LOADING SCREEN

## Current problem

The current loader looks like:

- dark background
- logo
- small photo in center
- progress percentage
- small labels
- done

This feels like a dashboard/loading widget.

Replace this approach.

## Required direction

The loading experience should feel like a **film title sequence / premium creative studio opening**.

Use the entire viewport.

There should be visual movement across the screen, not just content sitting in the middle.

---

# 3. LOADING SCREEN — PHASE 01: THE VOID

Start with a full-screen deep charcoal/navy background.

Almost nothing should be visible.

After a short moment:

- a very thin gold line appears
- a subtle focus point appears
- tiny technical typography fades in

Possible text:

K V E R R A

INFOTECH

POST-PRODUCTION / REAL ESTATE

Keep the typography extremely clean and restrained.

Do not immediately reveal the entire logo and interface.

Build anticipation.

---

# 4. LOADING SCREEN — PHASE 02: CAMERA / FOCUS

Create an immersive camera-viewfinder environment.

The viewport should begin to feel like the visitor is looking through a professional camera.

Use subtle:

- focus brackets
- crop marks
- framing lines
- focus reticle
- circular lens rings
- faint grid
- tiny exposure/f-stop labels
- small coordinates or frame indicators
- gold focus point

Do not make this look like a futuristic spaceship HUD.

The visual language should be inspired by **professional photography equipment and editorial post-production**.

---

# 5. LOADING SCREEN — PHASE 03: LENS / APERTURE

Create an advanced aperture-opening animation.

Use GSAP.

The central aperture should appear closed at first.

Then:

- aperture blades move
- rings rotate/scale
- central opening expands
- subtle light passes through the opening
- the property image begins to appear behind/inside the aperture

The key visual idea:

**The website is being viewed through a camera lens.**

The property image should be revealed through the lens instead of simply fading in.

Use CSS/SVG/DOM geometry where practical.

Do not add unnecessary heavy WebGL.

---

# 6. LOADING SCREEN — PHASE 04: ENTER THE IMAGE

Once the aperture opens, reveal a high-quality real-estate photograph.

At first the image should feel like a RAW capture:

- slightly muted
- slightly flat
- mild softness
- restrained contrast

Add tiny editorial markers:

RAW CAPTURE
FRAME 01
F 2.8
ISO 100

These are decorative and should remain subtle.

---

# 7. LOADING SCREEN — PHASE 05: THE EDITING PROCESS

Now the visitor should feel that the image is entering Kverra's editing environment.

Do NOT rely on a generic progress bar.

Instead, animate editing stages:

RAW
→
EXPOSURE
→
COLOR
→
DETAIL
→
REFINE
→
FINAL

Each stage becomes active one after another.

The active stage should have the gold accent.

Inactive stages should be subdued.

---

# 8. VISUAL IMAGE TRANSFORMATION

Animate the actual property image with GSAP.

The image can progressively move through:

### RAW

Flat, slightly muted, softer.

### EXPOSURE

Balanced brightness and shadow detail.

### COLOR

Natural color correction and richer tonal balance.

### DETAIL

Subtle clarity/sharpness refinement.

### FINAL

Professional listing-ready image.

The transformation should be elegant and believable.

Do not make it look like a heavy Instagram filter.

---

# 9. LOADING SCREEN — PHASE 06: SCAN

Add one strong cinematic scanning moment.

A thin gold/ivory scanning line should travel through the image.

As the line passes:

- image becomes sharper
- color becomes refined
- subtle details become clearer

The scan should feel like the photo is being professionally processed.

This is one of the key moments of the entire experience.

---

# 10. LOADING SCREEN — PHASE 07: CAMERA TO FULL SCREEN

This is the most important transition.

When editing finishes:

1. The camera/viewfinder frame begins expanding.
2. The property image scales beyond its frame.
3. Technical overlays fade away.
4. Aperture rings expand outward.
5. The edited property photograph fills the entire viewport.
6. The loading-screen image becomes the homepage hero background.
7. The loader itself disappears through a continuous mask/reveal.

There should be no obvious:

"LOADING SCREEN ENDS"

followed by:

"HOMEPAGE STARTS"

Instead it should feel like:

**the camera opens and reveals the website.**

---

# 11. NO POP-IN AFTER LOADING

The current problem is that after the loader finishes, the hero text appears suddenly from nowhere.

Do NOT do that.

The homepage content must be part of the same GSAP cinematic handoff.

The reveal order should be:

1. Background image settles.
2. Tiny top eyebrow fades/slides into position.
3. Main headline reveals from a masked position.
4. Supporting paragraph follows.
5. CTA button follows.
6. Small line/supporting caption appears.
7. Left editorial label reveals.
8. Right editorial label reveals.
9. Any bottom feature labels reveal last.

Everything should emerge from a single coordinated timeline.

---

# 12. HOMEPAGE REVEAL — EXACT ORDER

Use one master GSAP timeline for the post-loader hero reveal.

### Step 1 — Hero image

The final edited property image arrives from the loader.

Use a subtle scale settle:

slightly enlarged
→
final scale

Do not abruptly swap images.

### Step 2 — Eyebrow

Reveal first:

REAL ESTATE PHOTO EDITING

Use:

- uppercase
- letter spacing
- small size
- gold/ivory treatment

It should appear around the center/top of the hero content.

### Step 3 — Main headline

Then reveal the headline.

Suggested Kverra wording:

Real Estate Photos That
Look Exceptional.

Keep it in the existing Playfair Display font.

Use a masked upward word/line reveal.

Do not have the entire headline appear at once.

### Step 4 — Supporting copy

Reveal after the headline settles.

Use Plus Jakarta Sans.

Keep it short and readable.

### Step 5 — CTA

Reveal the WhatsApp CTA after the supporting copy.

Use a subtle scale/fade/lift combination.

It should feel like the next logical action rather than popping into existence.

### Step 6 — Supporting line

Reveal:

EASILY ORDER IN UNDER 60 SECONDS

Use tiny editorial typography.

### Step 7 — Corner labels

Reveal the left and right editorial labels separately.

Left:

EDIT
ENHANCE
SELL FASTER

Right:

BRIGHTER
CLEARER
HIGHER VALUE

These must be visibly present on desktop.

---

# 13. HOMEPAGE HERO — COMPOSITION

The hero must use the following composition.

## Full background

One large high-quality property photograph fills the hero.

The image is the primary visual element.

## Center

The central text stack is aligned to the exact visual center of the hero.

Structure:

SMALL EYEBROW

LARGE PLAYFAIR DISPLAY HEADLINE

SHORT SUPPORTING PARAGRAPH

GLASSMORPHISM WHATSAPP CTA

SMALL ORDER-TIME LINE

The center content should occupy a controlled width.

Do not make it too narrow.

Do not place it inside a big glass card.

---

# 14. THE HERO MUST NOT LOOK LIKE A STANDARD CARD LAYOUT

Do NOT use:

- large beige card
- large white glass rectangle
- dashboard panel
- floating UI box behind all text
- excessive rounded containers

The image itself is the hero.

The text is editorial typography over the photograph.

Only subtle gradient/overlay treatment may be used for readability.

---

# 15. CORNER TEXT — MUST BE VISIBLE

The previous implementation is failing to show these properly.

These are not optional decorative details.

They are part of the intended hero composition.

## LEFT SIDE

Place the editorial label around the mid-left area of the hero:

EDIT
ENHANCE
SELL FASTER

Add a tiny gold horizontal rule.

## RIGHT SIDE

Place:

BRIGHTER
CLEARER
HIGHER VALUE

Add a tiny gold horizontal rule.

### Positioning

Use absolute positioning relative to the hero.

The labels should be vertically balanced with the center content.

Do not position them so low that they disappear behind other sections.

Do not position them so close to the edge that browser cropping hides them.

Use safe viewport-relative insets.

---

# 16. CORNER TEXT ANIMATION

Do not make the corner labels appear at page load before everything else.

They belong to the hero reveal sequence.

Recommended:

Left label:

fade + small horizontal movement from left

Right label:

fade + small horizontal movement from right

Duration should be shorter than the headline.

They should settle into place after the main CTA begins appearing.

This creates a cinematic composition assembling piece by piece.

---

# 17. BOTTOM HERO DETAIL

A restrained bottom detail may be used if already part of the visual system.

Example:

FAST TURNAROUND
PREMIUM QUALITY
REAL ESTATE FOCUSED

Use small editorial labels and subtle separators.

Do not overcrowd the hero.

If these elements interfere on mobile, simplify them.

---

# 18. HERO IMAGE SELECTION

Replace the current homepage hero background.

Choose ONE excellent real-estate photograph.

The image should have:

- premium architecture
- strong visual depth
- clean composition
- natural light
- high-end property feeling
- enough negative space around the center for typography

Avoid generic travel/lifestyle imagery.

Avoid multiple images.

Avoid collage layouts.

Avoid a property image with important architectural details directly underneath the text if they become visually confusing.

---

# 19. HERO IMAGE ANIMATION AFTER LOAD

Once revealed:

- allow a very subtle scale settle
- optional gentle parallax as the user scrolls
- keep movement extremely restrained

The property image must remain the focus.

Do not turn the hero into a continuously moving background.

---

# 20. NAVBAR + HERO RELATIONSHIP

The navbar should remain clean and separate from the hero.

The utility bar remains above the navbar.

The main navbar remains white.

Hero starts below the navbar.

Do not let the loading transition accidentally place the hero underneath the navbar.

---

# 21. TOP UTILITY BAR

The top utility bar should continue to use centered information.

Everything must be grouped in the visual center:

Best Price Guarantee
•
WhatsApp: +91 99524 18671
•
Email: contect@kverra.com

Do NOT put Best Price Guarantee on the far left and contact details on the far right.

Desktop:
single centered line.

Mobile:
centered wrapping/stacked layout.

---

# 22. ROYAL TYPOGRAPHY

Use the project's existing typography.

### Display

Playfair Display

### Body/UI

Plus Jakarta Sans

Do not replace these fonts.

The main headline should feel:

- royal
- editorial
- premium
- architectural
- confident

The word "Exceptional" may be italic/gold if appropriate.

Use:

`#C9A45C`

for the premium accent.

Do not make the entire headline gold.

---

# 23. COLOR DIRECTION

Use the existing updated palette:

Main background:
`#F7F4EC`

Navbar:
`#FFFFFF`

Primary text:
`#172033`

Gold:
`#C9A45C`

Gold highlight:
`#E2C477`

Secondary:
`#667085`

Glass:
`rgba(255,255,255,0.65)`

Borders:
`rgba(201,164,92,0.25)`

The hero photograph should provide the main visual color.

---

# 24. GLOBAL SCROLL REVEALS

The whole website should feel cinematic as the visitor scrolls.

Build on the existing GSAP + ScrollTrigger + Lenis system.

Do not replace it.

Use a consistent reveal language:

TEXT:
masked rise / fade

IMAGES:
clip-path / scale / blur-to-sharp

LINES:
draw/reveal

CARDS:
subtle stagger + lift

---

# 25. SECTION ENTRY SYSTEM

For each major section:

1. eyebrow appears
2. heading reveals
3. paragraph follows
4. image/content reveals
5. supporting details appear

Do not animate everything simultaneously.

Create a staggered hierarchy.

---

# 26. IMAGE REVEAL LANGUAGE

Because Kverra is a photo-editing company, image reveals should feel connected to editing.

Use where appropriate:

- mask reveal
- crop-frame reveal
- blur-to-sharp
- subtle saturation refinement
- slight scale settle
- scan-line effect

Do not use all effects on every image.

---

# 27. SERVICES SCROLL EXPERIENCE

Each service can reveal like a professional editing stage.

For example:

SERVICE NUMBER
→
TITLE
→
DESCRIPTION
→
IMAGE / VISUAL
→
ARROW

Dividers can draw as they enter.

On desktop, hover can add a very restrained visual preview or image shift if the existing component supports it.

On mobile, use scroll reveal only.

---

# 28. PORTFOLIO EXPERIENCE

Portfolio images should not simply appear as static tiles.

Use controlled reveal:

- mask opens
- image sharpens
- title/metadata follows

Keep the actual photography dominant.

---

# 29. BEFORE / AFTER EXPERIENCE

When the website presents transformations, reinforce the editing concept.

The transition can visually move:

RAW
→
EDITED

Use scan/mask/reveal behavior.

Keep it subtle and premium.

---

# 30. MOBILE EXPERIENCE

At:

320px
360px
375px
390px
412px
430px

The experience must remain elegant.

### On mobile:

- simplify the camera technical UI
- keep the logo readable
- keep the property image large enough
- keep hero text centered
- stack CTA naturally
- hide or reposition side labels if necessary
- never allow corner text to overlap the main content
- never allow horizontal overflow
- keep loading animation centered
- preserve the cinematic feeling

Do not simply shrink the desktop version.

Adapt the composition intelligently.

---

# 31. PERFORMANCE

The cinematic experience should be impressive but fast.

Use the existing GSAP system.

Avoid:

- huge new libraries
- unnecessary WebGL
- hundreds of animated DOM nodes
- continuous expensive filters
- unnecessary React state updates during animation

Use GSAP timelines and transforms efficiently.

Loading sequence should feel roughly 1–2.5 seconds depending on asset readiness.

Never make users wait just for an animation.

---

# 32. REDUCED MOTION

Respect:

`prefers-reduced-motion: reduce`

When reduced motion is enabled:

- skip aperture choreography
- skip dramatic zoom
- skip complex text choreography
- show final hero quickly
- retain a simple fade/reveal
- never trap the user in the loader

---

# 33. IMPORTANT IMPLEMENTATION RULE

Before changing anything:

Inspect:

- `src/components/LoadingScreen.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/index.css`
- existing animation hooks
- `src/App.jsx`

Understand how the current loader hands off to the homepage.

Do not create a second animation system.

Create one coordinated sequence using the current GSAP infrastructure.

---

# 34. MASTER TIMELINE

The preferred architecture is conceptually:

LOADING MASTER TIMELINE

01. dark void
02. Kverra identity
03. focus frame
04. aperture opens
05. image reveal
06. RAW state
07. scan
08. EXPOSURE
09. COLOR
10. DETAIL
11. FINAL
12. image expands
13. loader mask opens
14. homepage hero image settles
15. eyebrow reveals
16. headline reveals
17. paragraph reveals
18. CTA reveals
19. order-time line reveals
20. left editorial label reveals
21. right editorial label reveals
22. bottom micro-details reveal

The final loader transition and hero reveal should feel like a single film sequence.

---

# 35. DO NOT DO

Do not:

- keep the current tiny centered loading widget
- simply fade the loader out
- suddenly pop the hero content into place
- hide the corner labels
- use a large glass card behind the entire hero
- use generic SaaS hero layout
- use a collage of images
- replace the existing Playfair font
- add excessive neon/cyberpunk effects
- make the loader longer just for spectacle
- introduce unnecessary dependencies

---

# 36. FINAL ACCEPTANCE CRITERIA

## Loading

[ ] Full viewport cinematic loader
[ ] Not a small centered widget
[ ] Dark cinematic opening
[ ] Kverra identity reveal
[ ] Professional camera/focus visual language
[ ] Aperture/lens animation
[ ] Property image revealed through lens
[ ] RAW → EXPOSURE → COLOR → DETAIL → FINAL progression
[ ] Visible image refinement
[ ] Cinematic scan
[ ] Camera frame expands into full screen
[ ] Loader image transitions into hero image
[ ] No hard cut between loader and homepage

## Homepage reveal

[ ] Hero image is already visible as the loader transitions
[ ] Eyebrow reveals first
[ ] Main heading reveals second
[ ] Supporting copy follows
[ ] CTA follows
[ ] Supporting caption follows
[ ] Left corner text reveals
[ ] Right corner text reveals
[ ] All elements use one coordinated GSAP timeline
[ ] Nothing abruptly pops into existence

## Hero composition

[ ] One large premium property image
[ ] Centered editorial typography
[ ] Centered CTA
[ ] Left label: EDIT / ENHANCE / SELL FASTER
[ ] Right label: BRIGHTER / CLEARER / HIGHER VALUE
[ ] Tiny gold rules
[ ] No giant glass card behind the hero content
[ ] Existing Playfair Display font preserved
[ ] Hero feels royal and editorial
[ ] Current hero background replaced with a stronger real-estate photograph

## Navigation

[ ] Utility information centered
[ ] Best Price Guarantee visible
[ ] WhatsApp +91 99524 18671 visible
[ ] contect@kverra.com visible
[ ] Navbar remains white
[ ] Mobile navbar works

## Scroll experience

[ ] Major headings reveal
[ ] Text follows with stagger
[ ] Images reveal through masks
[ ] Portfolio images reveal
[ ] Services reveal progressively
[ ] Before/after sections feel like editing
[ ] Existing GSAP/Lenis architecture preserved
[ ] Motion remains controlled

## Responsive

[ ] 320px
[ ] 360px
[ ] 375px
[ ] 390px
[ ] 412px
[ ] 430px
[ ] Desktop

[ ] No horizontal overflow at any target width

## Accessibility

[ ] Reduced motion supported
[ ] Buttons remain keyboard accessible
[ ] Mobile controls remain usable
[ ] Text remains readable

## Build

[ ] `npm run build` passes

---

# FINAL CREATIVE DIRECTION

Do not think of this as:

"make my website animated."

Think of it as:

**Create a cinematic entrance into a professional real-estate photo-editing studio.**

The visitor should begin in darkness.

They see the Kverra identity.

A camera focuses.

The lens opens.

A raw property photograph appears.

The editing process begins.

Exposure changes.

Color is refined.

Details sharpen.

The final image expands beyond the frame.

That image becomes the website.

Then, one by one:

REAL ESTATE PHOTO EDITING

appears.

Then:

REAL ESTATE PHOTOS THAT
LOOK EXCEPTIONAL.

Then the supporting message.

Then the WhatsApp CTA.

Then the small editorial labels around the composition.

The entire hero should feel like it was **revealed from the photograph itself**, not rendered suddenly after a loader.

The final impression should be:

ROYAL
CINEMATIC
EDITORIAL
PHOTOGRAPHIC
PRECISE
IMMERSIVE
