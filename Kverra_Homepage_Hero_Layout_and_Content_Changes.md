# Kverra Infotech — Homepage Hero Layout & Content Changes

## Scope

This is a targeted correction to the **homepage hero section only**.

There are three required changes:

1. **Mobile:** restore the intended three-image real-estate collage instead of the current single-image mobile layout.
2. **Desktop:** make the right-side image collage slightly wider.
3. **Content:** replace the current fancy/vague hero headline with direct, literal **real-estate photo-editing** messaging.

The reference images are **not being provided to Claude**. Claude must implement these requirements from this written specification.

---

## 1. Mobile Hero: Use the Three-Image Collage

### Current problem

The current mobile implementation collapses the hero photography into one large image directly below the CTA.

That is **not** the desired mobile design.

The mobile hero must retain the multi-image real-estate photography collage.

The intended structure is:

```text
Eyebrow
↓
Direct real-estate photo-editing headline
↓
Short supporting description
↓
Primary CTA
↓
Secondary action if retained
↓
Three-image collage
```

The collage should contain **three images**.

### Required collage arrangement

```text
┌──────────────────┐ ┌─────────────┐
│                  │ │             │
│   LARGE IMAGE    │ │             │
│                  │ │   TALL      │
├──────────────────┤ │   IMAGE     │
│                  │ │             │
│   LOWER IMAGE    │ │             │
│                  │ │             │
└──────────────────┘ └─────────────┘
```

Specifically:

- Left column: two stacked landscape/property images.
- Right column: one taller portrait-oriented property image spanning approximately the combined height of the two left images.
- Small, consistent gaps between images.
- Consistent rounded corners.
- `object-fit: cover`.
- The collage must fit entirely inside the mobile viewport.
- Do not replace this with a single large image.

The three images should read as one curated real-estate photography composition.

---

## 2. Mobile Hero Layout

Do not simply shrink the desktop hero.

Create an intentional mobile composition using the existing React component and existing image assets.

The mobile hierarchy should be:

```text
REAL ESTATE PHOTO EDITING

Professional Real Estate Photo Editing

Short, clear service description

[ Primary CTA ]

Secondary action

[ Three-image real-estate collage ]
```

Avoid excessive vertical whitespace.

The collage should appear naturally after the hero content and should not be pushed unnecessarily far down the page.

---

## 3. Desktop: Slightly Increase Right-Side Image Width

Keep the existing desktop two-column hero concept:

```text
LEFT                    RIGHT
Text/content             Image collage
```

However, the right-side image composition currently feels slightly too narrow.

Increase the **right-side collage width slightly**.

The adjustment should be subtle:

- Give the collage more visual presence.
- Reduce unnecessary whitespace around it.
- Keep the left text column comfortable.
- Do not make the text column cramped.
- Do not redesign the entire desktop hero.

The desktop should continue to use the three-image composition:

- One dominant landscape image.
- One secondary landscape image.
- One tall portrait image.

---

## 4. Homepage Content: Make It Explicitly About Real Estate Photo Editing

### Current problem

The current hero uses wording similar to:

**“Real Estate Photos That Look Exceptional.”**

Do **not** use this type of fancy or vague marketing language.

The visitor should immediately understand what Kverra does.

The hero should clearly communicate:

- This is a **real-estate photo-editing service**.
- Kverra edits property/listing photographs.
- The service is intended for real-estate agents, photographers and property marketing teams.
- The editing is professional, consistent, fast and affordable, using claims already supported by the existing project content.

The wording should be **direct and literal**.

---

## 5. Recommended Hero Copy

Use this as the primary content direction.

### Eyebrow

**REAL ESTATE PHOTO EDITING**

### Main heading

**Professional Real Estate Photo Editing**

### Supporting paragraph

**Professional real estate photo editing services. Enhance your real estate photos with our high-quality, fast, and affordable editing.**

This is intentionally straightforward.

Minor wording adjustments are acceptable for responsiveness or grammar, but do not turn it into a poetic/fancy marketing headline.

---

## 6. Do Not Use Vague/Fancy Headlines

Avoid headlines such as:

- “Real Estate Photos That Look Exceptional”
- “Transform Your Vision”
- “Bring Every Space to Life”
- “Make Every Listing Shine”
- “Where Properties Become Stories”
- Similar abstract or overly promotional phrases.

The headline should literally tell the visitor what the company provides.

### Preferred direction

**Professional Real Estate Photo Editing**

Not:

**Real Estate Photos That Look Exceptional**

The design can remain premium. The language should remain simple.

---

## 7. Supporting Copy

The supporting copy should remain short and easy to scan.

It can communicate that Kverra serves:

- Real-estate agents
- Real-estate photographers
- Property marketing teams

But do not make the hero paragraph unnecessarily long.

The core message should be immediately obvious:

> Kverra professionally edits real-estate photographs.

---

## 8. CTA

Keep the CTA focused on taking action.

A suitable direction is:

**Easily Order in Under 60 Seconds →**

or the existing:

**Chat on WhatsApp →**

Use whichever matches the current established conversion flow.

Do not replace the CTA with a vague marketing phrase.

Keep the existing WhatsApp functionality.

---

## 9. Preserve the Premium Visual Design

Making the wording more direct does **not** mean making the hero visually plain.

Keep:

- Premium typography
- Blue-and-white theme
- High-quality real-estate imagery
- Clean spacing
- Rounded image cards
- Subtle shadows
- Smooth GSAP animation
- Professional CTA styling
- Strong visual hierarchy

Only the **messaging** needs to become more direct.

---

## 10. Do Not Invent New Claims

Do not add new:

- Ratings
- Customer counts
- Awards
- Guarantees
- Statistics
- Certifications
- Turnaround promises

Use existing project data/content only.

---

## 11. Responsive Requirements

Test at:

- 320px
- 360px
- 375px
- 390px
- 412px
- 430px
- Tablet
- Desktop

### Mobile checks

Verify:

- Three-image collage is visible.
- Two images are stacked on the left.
- One tall image is on the right.
- No image is clipped.
- No page-level horizontal overflow.
- Headline wraps naturally.
- Supporting paragraph is readable.
- CTA is fully visible.
- Collage fits within the viewport.
- Hero does not become excessively tall.

### Desktop checks

Verify:

- Right-side collage is slightly wider than the current version.
- Left text column remains comfortable.
- Image composition remains balanced.
- No horizontal overflow.
- Hero height remains reasonable.

---

## 12. Implementation Notes

Before editing:

1. Inspect the existing `Hero.jsx`.
2. Identify the existing three hero image elements and their classes.
3. Reuse the existing image assets/data.
4. Adjust responsive positioning and sizing rather than replacing the image system.
5. Keep the existing GSAP/parallax behavior where appropriate.
6. Use responsive Tailwind/CSS rules to create the mobile collage.
7. Do not collapse the three images into one image on mobile.
8. Preserve `prefers-reduced-motion` behavior.
9. Do not redesign unrelated homepage sections.

---

## 13. Final Expected Result

### Mobile

The hero should communicate:

**REAL ESTATE PHOTO EDITING**

**Professional Real Estate Photo Editing**

A short, direct explanation.

A clear CTA.

Then the three-image collage:

```text
┌──────────────────┐ ┌─────────────┐
│                  │ │             │
│   PROPERTY       │ │             │
│   IMAGE          │ │   TALL      │
│                  │ │   PROPERTY  │
├──────────────────┤ │   IMAGE     │
│   SECOND         │ │             │
│   PROPERTY       │ │             │
│   IMAGE          │ │             │
└──────────────────┘ └─────────────┘
```

### Desktop

Keep the two-column editorial hero but make the right-side image collage **slightly wider**.

Use direct copy such as:

**Professional Real Estate Photo Editing**

instead of:

**Real Estate Photos That Look Exceptional**

---

## Acceptance Checklist

- [ ] Mobile hero uses the three-image collage.
- [ ] Mobile has two stacked images on the left.
- [ ] Mobile has one tall image on the right.
- [ ] Mobile does not use a single large hero image.
- [ ] Collage fits completely inside the viewport.
- [ ] Desktop right-side collage is slightly wider.
- [ ] Desktop text column remains comfortable.
- [ ] Main headline explicitly describes real-estate photo editing.
- [ ] “Real Estate Photos That Look Exceptional” is removed.
- [ ] No vague/fancy replacement headline is introduced.
- [ ] Supporting copy clearly explains the actual service.
- [ ] CTA remains action-oriented and functional.
- [ ] Existing images/data are reused.
- [ ] GSAP/Lenis architecture remains intact.
- [ ] Reduced-motion behavior remains intact.
- [ ] No horizontal overflow at 320px–430px.
