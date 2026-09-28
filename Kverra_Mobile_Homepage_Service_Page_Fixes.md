# Kverra Infotech — Mobile Layout & Service-Page Overflow Fixes

## Scope

This document covers **only two current problems**:

1. The homepage mobile hero layout needs to be redesigned because the current mobile composition does not look polished.
2. All service-detail pages have a horizontal/layout overflow glitch on mobile, clearly visible in the supplied screenshots.

Do not redesign unrelated desktop sections as part of this task.

---

# 1. HOMEPAGE — REDESIGN THE MOBILE HERO

## Current problem

The current mobile homepage hero is technically stacked, but visually it feels like a compressed desktop design.

The supplied mobile screenshot shows:

- Very small eyebrow text
- Large unused white space
- Headline hierarchy that does not feel strong enough
- Supporting text that is too small
- CTA area that feels compressed
- Secondary links competing with the primary CTA
- Small supporting text underneath
- A large image pushed far below the content
- The overall hero feels vertically stretched rather than intentionally designed for mobile

The desktop hero can remain as it is conceptually. The mobile hero needs its **own deliberate responsive composition**.

---

## Required mobile hero direction

Create a purpose-built mobile hero layout rather than simply shrinking the desktop layout.

The mobile experience should feel:

- Premium
- Clean
- Editorial
- Spacious
- Easy to scan
- Strongly branded
- Optimized for one-handed mobile use

The page should immediately communicate:

**Real-estate photo editing + strong visual quality + clear WhatsApp CTA.**

---

# 2. Mobile Hero Layout

Use this approximate order:

```text
┌─────────────────────────────┐
│                             │
│  REAL ESTATE PHOTO EDITING  │
│                             │
│  Real Estate Photos         │
│  That Look Exceptional.     │
│                             │
│  Short supporting           │
│  description                │
│                             │
│  ┌───────────────────────┐  │
│  │ Chat on WhatsApp  →   │  │
│  └───────────────────────┘  │
│                             │
│  See it in action →         │
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   REAL ESTATE IMAGE   │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

The exact spacing can be adjusted, but the hierarchy should remain.

---

# 3. Mobile Typography

Do not make the mobile typography tiny.

### Eyebrow

Use a small uppercase label such as:

`REAL ESTATE PHOTO EDITING`

It should be clearly visible without being oversized.

### Main headline

The headline should be the dominant text element.

Keep the current messaging:

**Real Estate Photos That Look Exceptional.**

The emphasized word can continue using the existing brand styling.

The headline should:

- Be large enough to immediately establish hierarchy
- Wrap naturally
- Not require horizontal scrolling
- Have comfortable line-height
- Avoid excessive empty space above/below it

Do not simply reduce the desktop heading to a tiny mobile font.

---

# 4. Mobile Supporting Copy

The supporting paragraph should be:

- Readable
- Short
- Comfortable line length
- Around 2–4 lines depending on device width

Avoid very small text.

The user should be able to understand the value proposition without zooming.

---

# 5. Mobile CTA Hierarchy

The primary CTA should clearly dominate.

### Primary

Blue button:

**Chat on WhatsApp →**

Requirements:

- Full or near-full available width
- Comfortable touch height
- Strong blue background
- White text
- Rounded shape consistent with the new Kverra design
- Existing WhatsApp link/functionality must remain unchanged

### Secondary

Keep:

**See it in action →**

but make it visually secondary.

It should not compete with the primary CTA.

---

# 6. Mobile Hero Image

The hero image should appear directly after the main CTA content with intentional spacing.

Do not push the image unnecessarily far down the page.

Use:

- Full available content width
- Consistent side padding
- Rounded corners
- Soft shadow
- Proper aspect ratio
- `object-fit: cover`
- No horizontal clipping

The image should feel like an important part of the hero, not an afterthought.

---

# 7. Remove Unnecessary Mobile Hero Clutter

On mobile, simplify anything that is only useful on desktop.

Do not force desktop-only visual elements into the mobile hero if they make the composition cramped.

The mobile hero should prioritize:

1. Brand label
2. Headline
3. Supporting copy
4. Primary CTA
5. Secondary action
6. Hero image

Keep the floating WhatsApp button if it is part of the global site, but make sure it does not overlap important content.

---

# 8. Mobile Spacing

Avoid the current feeling of excessive vertical whitespace.

Use intentional spacing between:

- Eyebrow → headline
- Headline → paragraph
- Paragraph → CTA
- CTA → secondary action
- Secondary action → hero image

The complete hero should feel like one coherent visual composition.

Do not use desktop-sized margins/paddings on mobile.

---

# 9. Important Responsive Rule

Do not create a separate mobile page.

Keep the same React component and content, but use responsive styling to create a deliberate mobile composition.

Desktop and mobile may have different:

- Spacing
- Typography scale
- Image dimensions
- Alignment
- Grid behavior
- Visibility of secondary decorative elements

But the underlying content and conversion flow should remain the same.

---

# 10. SERVICE PAGES — FIX THE MOBILE LAYOUT GLITCH

## Current problem

The supplied second and third screenshots clearly show a serious horizontal layout/overflow problem on the service pages.

Examples visible in the screenshots:

- The left side of the content is cut off.
- The service title begins outside the visible viewport.
- Hero text is partially missing.
- The price/delivery row is clipped.
- The WhatsApp CTA is partially outside the viewport.
- The hero image begins from an incorrect horizontal position.
- The navigation/logo area is also partially clipped in one screenshot.
- The service comparison section appears shifted horizontally.
- Content is not aligned to the mobile viewport.

This is **not** a visual preference issue. It is a responsive layout bug and must be fixed properly.

---

# 11. Root Cause Investigation

Do not simply hide the overflow with:

```css
overflow-x: hidden;
```

That can conceal the symptom while leaving the layout broken.

First identify which element is causing the horizontal width.

Audit:

- `ServiceDetail.jsx`
- Service-detail hero wrapper
- Hero image container
- Breadcrumb container
- Service information column
- Price/delivery row
- CTA
- Before/after comparison section
- Comparison card
- Service tabs/pills
- Navbar
- Any absolute-positioned decorative elements
- Any negative margins
- Any fixed widths
- Any `min-width`
- Any `width: 100vw`
- Any transforms that extend beyond the viewport
- Any desktop grid/flex sizing that remains active on mobile

---

# 12. Mobile Service Page Width Rules

On mobile, every primary content wrapper must respect the viewport.

Use a structure equivalent to:

```css
width: 100%;
max-width: 100%;
box-sizing: border-box;
```

with appropriate mobile horizontal padding.

The service page should effectively behave like:

```text
Viewport
│
├── left padding
│
├── content width
│
└── right padding
```

Nothing important should extend outside those boundaries.

---

# 13. Fix the Service Hero Specifically

The mobile service hero should become a clean single-column layout.

Recommended order:

```text
Breadcrumb
↓
Service icon/category
↓
Service title
↓
Service description
↓
Price + delivery
↓
WhatsApp CTA
↓
Hero image
```

Do not preserve the desktop two-column geometry on mobile.

The image should move below the content naturally.

---

# 14. Fix Service Hero Text Clipping

The title must always begin inside the viewport.

For example:

```text
Interior Retouching
```

must never render partially as:

```text
terior Retouching
```

or be shifted outside the left edge.

Check for:

- Negative `translateX`
- Negative left margins
- Absolute positioning
- Desktop grid offsets
- Fixed container widths
- `margin-left`
- `left`
- `transform`
- Incorrect `max-width`
- Parent flex/grid sizing

Remove or override these at the mobile breakpoint.

---

# 15. Fix Navbar on Service Pages

The supplied screenshots also show the mobile navbar/logo area becoming clipped.

The navbar must:

- Fit entirely within the viewport
- Keep the logo visible
- Keep the menu button visible
- Never create horizontal scrolling
- Never shift because of the service-page layout
- Maintain consistent left/right padding

The navbar should be independently responsive from the service hero.

Do not let service-page styles affect navbar width.

---

# 16. Fix Service Price / Delivery Row

The price and delivery information currently becomes partially clipped.

On mobile, make this row responsive.

If the two items cannot comfortably fit side by side, allow them to wrap or stack.

For example:

```text
┌──────────────┐
│ $1.20 /image │
└──────────────┘

◷ Under 24 hours
```

Do not force desktop spacing on mobile.

---

# 17. Fix WhatsApp CTA

The service CTA must remain completely visible.

It should:

- Fit within the content width
- Have a comfortable touch target
- Not be clipped on either side
- Not inherit desktop positioning
- Remain visually prominent

Use a responsive width rather than a fixed desktop width.

---

# 18. Fix the Service Comparison Section

The comparison section shown in the third screenshot must also respect the mobile viewport.

The following must stay inside the viewport:

- Section heading
- Service tabs
- Comparison card
- Before/after image
- Comparison handle
- Information card
- Supporting text

The comparison card must never extend beyond the screen.

---

# 19. Service Tabs on Mobile

The service tabs can remain horizontally scrollable because there may be several services.

However:

**The tabs must scroll inside their own container.**

Do not allow the entire page to become horizontally scrollable.

Use a structure conceptually like:

```text
Page viewport
└── Tabs viewport
    └── Horizontally scrollable tabs
```

The body/document itself must remain locked to the viewport width.

---

# 20. Before/After Card on Mobile

The comparison card should use:

- `width: 100%`
- `max-width: 100%`
- `box-sizing: border-box`

The image must not create overflow.

The information card should stack below the image if the desktop floating/side-by-side layout does not fit comfortably.

Recommended mobile order:

```text
Section heading
↓
Service tabs
↓
Comparison image
↓
Service information card
```

---

# 21. Do Not Use a Band-Aid Fix

Do not solve the issue only by adding:

```css
body {
  overflow-x: hidden;
}
```

or:

```css
html {
  overflow-x: hidden;
}
```

Those may be used as a defensive safeguard only after the actual offending layout is fixed.

The actual layout must fit correctly inside the viewport.

---

# 22. Responsive QA Requirements

Test the homepage and service pages at:

- 320px
- 360px
- 375px
- 390px
- 412px
- 430px

At every width verify:

```js
document.documentElement.scrollWidth ===
document.documentElement.clientWidth
```

There should be no unexpected horizontal overflow.

Also verify:

- Navbar fully visible
- Logo fully visible
- Menu button fully visible
- Service title fully visible
- Description fully visible
- Price fully visible
- Delivery fully visible
- CTA fully visible
- Hero image fully visible
- Comparison card fully visible
- No content starts outside the viewport

---

# 23. Important: Preserve Desktop

The screenshots show a **mobile-specific problem**.

Do not unnecessarily redesign the desktop service pages while fixing this.

The desktop layout should remain visually intact unless a shared CSS change is genuinely required.

Use mobile-specific responsive rules where necessary.

---

# 24. Final Expected Result

## Homepage mobile

The mobile homepage should feel intentionally designed:

```text
REAL ESTATE PHOTO EDITING

Real Estate Photos
That Look Exceptional.

Short readable description

[ Chat on WhatsApp → ]

See it in action →

┌────────────────────────┐
│                        │
│    Real estate photo   │
│                        │
└────────────────────────┘
```

Clean, compact, premium and easy to scan.

## Service-page mobile

The service pages should feel properly contained:

```text
┌─────────────────────────┐
│ Logo              Menu  │
├─────────────────────────┤
│ Breadcrumb              │
│                         │
│ Interior Retouching     │
│ Description             │
│                         │
│ $1.20 / image           │
│ ◷ Under 24 hours        │
│                         │
│ [ Chat on WhatsApp → ]  │
│                         │
│ ┌─────────────────────┐ │
│ │                     │ │
│ │   Service Image     │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ One photo, two outcomes │
│ [tabs → → →]            │
│ ┌─────────────────────┐ │
│ │ Before / After      │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Service info        │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

No clipping. No sideways page movement. No elements hanging outside the viewport.

---

# Acceptance Checklist

- [ ] Homepage mobile hero is redesigned specifically for mobile.
- [ ] Mobile hero no longer feels like a compressed desktop layout.
- [ ] Headline is clearly readable and visually dominant.
- [ ] Supporting text is readable.
- [ ] Primary WhatsApp CTA is prominent and fully visible.
- [ ] Hero image appears at the correct width and position.
- [ ] No unnecessary vertical whitespace in the hero.
- [ ] Service-page horizontal overflow is fixed at the root cause.
- [ ] Service title is never clipped on the left.
- [ ] Service description is fully visible.
- [ ] Price and delivery information are fully visible.
- [ ] Service CTA is fully visible.
- [ ] Service hero image fits inside the viewport.
- [ ] Mobile navbar/logo/menu remain fully visible.
- [ ] Service comparison card fits within the viewport.
- [ ] Service tabs can scroll independently without causing page-level horizontal overflow.
- [ ] No band-aid-only `overflow-x: hidden` solution.
- [ ] Desktop service layout remains intact.
- [ ] Tested at 320px, 360px, 375px, 390px, 412px and 430px.
- [ ] No unexpected horizontal overflow at any target width.
- [ ] Existing GSAP, Lenis and reduced-motion behavior remains intact.
