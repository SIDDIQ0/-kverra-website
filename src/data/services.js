import { photos } from "./images";

// Content strategy: each service carries a short `tagline` (cards, nav),
// a longer `description` (detail-page hero paragraph), a `whatWeDo`
// paragraph, an expanded `whatsIncluded` list, a `bestFor` list, and an
// optional `principle` (a named caveat/quality note - "Why it matters",
// "Important editing principle", etc., not every service has one). This
// is original Kverra-specific copy, researched against the category of
// real-estate editing services generally offered in the industry -
// nothing here is copied from any third party's wording, claims or
// structure. There is deliberately no pricing field: pricing was removed
// from the entire visible site, so nothing here should be re-added to
// render a price anywhere.
export const services = [
  {
    slug: "interior-retouching",
    name: "Interior Retouching",
    tagline: "Balanced exposure, accurate colour and clean detail for listing-ready interiors.",
    icon: "House",
    image: photos.livingRoom[0],
    heroImage: photos.livingRoom[1],
    gallery: [photos.livingRoom[2], photos.livingRoom[3]],
    delivery: "Under 24 hours",
    description:
      "Real estate interiors often contain bright windows, dark corners, reflective surfaces and uneven natural light in the same frame. Our HDR editing combines the useful exposure information from multiple photographs and balances the final image so the room looks clear, natural and properly lit. The goal is not to make the image look artificial - we preserve the room's real appearance while improving exposure, colour, contrast and visible detail so the photograph is ready for online listings, brochures and marketing materials.",
    whatWeDo:
      "Our editors work with your bracketed or multiple-exposure photographs to build one balanced final image. Bright windows can retain detail while darker interior areas remain visible, and colour temperature, highlights, shadows and overall contrast are adjusted so the room looks consistent and natural rather than artificially lit.",
    whatsIncluded: [
      "Exposure blending from your bracketed set",
      "Highlight and shadow recovery",
      "Natural colour and white-balance correction",
      "Contrast and tonal adjustment",
      "Interior brightness correction",
      "Window pulls with visible sky and landscaping",
      "Lens distortion and vertical line correction",
      "Consistent treatment across the full property set",
    ],
    bestFor: [
      "Interior listing photography",
      "Bracketed exposures",
      "Rooms with bright windows",
      "Properties with mixed lighting",
      "Professional MLS/listing photography",
    ],
    principle: {
      label: "Why it matters",
      text: "A listing usually contains multiple rooms. If every image has a different exposure or colour temperature, the listing feels inconsistent. HDR editing helps create a more uniform visual set while preserving the property's actual appearance.",
    },
    faq: {
      q: "How many bracketed exposures do you need?",
      a: "Three to five brackets at one to two stops apart gives the cleanest blend. Two will still work if that is all your camera captured.",
    },
  },
  {
    slug: "exterior-retouching",
    name: "Exterior Retouching",
    tagline: "Corrected light, true colour and crisp detail across the facade and grounds.",
    icon: "Buildings",
    image: photos.exteriorDay[1],
    heroImage: photos.exteriorDay[3],
    gallery: [photos.exteriorDay[0], photos.exteriorDay[2]],
    delivery: "Under 24 hours",
    description:
      "Real estate exteriors often contain a bright sky, dark shadow lines along the facade and uneven light across the same frame. Our HDR editing combines the useful exposure information from multiple photographs and balances the final image so the property looks clear, natural and properly lit. The goal is not to make the image look artificial - we preserve the property's real appearance while improving exposure, colour, contrast and visible detail so the photograph is ready for online listings, brochures and marketing materials.",
    whatWeDo:
      "We refine exposure, colour and contrast so the building, landscaping and surrounding environment are represented clearly, working from bracketed or multiple-exposure captures wherever they're available and from a single well-exposed frame when they're not.",
    whatsIncluded: [
      "Exposure and colour balance correction",
      "Highlight and shadow recovery",
      "White-balance correction",
      "Facade and landscaping detail enhancement",
      "Flat or uneven light evened across the frame",
      "Lens distortion and horizon correction",
      "Contrast and tonal adjustment",
      "Consistent treatment across a property set",
    ],
    bestFor: [
      "Exterior property photography",
      "Bracketed exposures",
      "Properties with mixed lighting",
      "Professional MLS/listing photography",
      "Curb-appeal hero images",
    ],
    principle: {
      label: "Why it matters",
      text: "A listing usually contains multiple exterior angles alongside the interior set. If every image has a different exposure or colour temperature, the listing feels inconsistent. HDR editing helps create a more uniform visual set while preserving the property's actual appearance.",
    },
    faq: {
      q: "Do you touch up the landscaping too?",
      a: "Yes. Lawns, hedges and pathways get the same exposure and colour pass as the facade, so the whole frame feels consistent.",
    },
  },
  {
    slug: "twilight",
    name: "Twilight Photo Editing",
    tagline: "Turn a daytime exterior into a realistic evening property photograph.",
    icon: "MoonStars",
    image: photos.twilight[0],
    heroImage: photos.twilight[1],
    gallery: [photos.twilight[2], photos.twilight[3]],
    delivery: "Under 36 hours",
    description:
      "Twilight photography can give exterior property images a warmer evening atmosphere without requiring a second photo shoot. Our editors transform suitable daytime exterior photographs into realistic twilight scenes by adjusting the sky, ambient light, property illumination and overall colour balance. The result should look like a believable evening photograph rather than an obvious digital effect.",
    whatWeDo:
      "We create a controlled transition from daylight to an evening appearance. The sky becomes deeper and more natural, exterior lighting is enhanced where appropriate, windows can receive realistic warm illumination, and the overall image is balanced so the property remains the focus.",
    whatsIncluded: [
      "Realistic twilight sky treatment",
      "Evening colour grading",
      "Window-light enhancement",
      "Exterior lighting enhancement",
      "Shadow and highlight balancing",
      "Colour temperature adjustment",
      "Contrast refinement",
      "Natural blending between sky and architecture",
      "Final image consistency across a twilight set",
    ],
    bestFor: [
      "Residential listings",
      "Luxury properties",
      "Exterior hero images",
      "Evening marketing campaigns",
      "Properties with strong architectural lighting",
    ],
    principle: {
      label: "Important editing principle",
      text: "The final photograph should retain realistic perspective, architecture and material colours. We avoid an exaggerated sunset or artificial glow that makes the property look digitally altered.",
    },
    faq: {
      q: "Do I need a photo actually shot at dusk?",
      a: "No. We convert a well-exposed daytime exterior, so you do not need to schedule a second shoot at blue hour.",
    },
  },
  {
    slug: "day-to-dusk",
    name: "Day & Dusk Dual Delivery",
    tagline: "A natural daytime version and an evening-style version from the same exterior photo.",
    icon: "CloudSun",
    image: photos.exteriorDay[0],
    heroImage: photos.exteriorDay[2],
    gallery: [photos.exteriorDay[1], photos.exteriorDay[3]],
    delivery: "Under 36 hours",
    description:
      "Some property listings benefit from showing the same exterior in two different lighting moods. Our Day & Dusk service provides a natural daytime treatment together with a professionally edited evening version, giving you two useful marketing images from the same source photography. The daytime version keeps the property's natural appearance, while the dusk version introduces a realistic evening atmosphere.",
    whatWeDo:
      "We prepare the exterior image for two distinct presentations. The day version focuses on natural exposure, clear architecture, accurate colours and balanced daylight. The dusk version focuses on a deeper evening sky, warm property lighting, controlled shadows and realistic ambient colour - graded to match the day version so together they read as one intentional pair.",
    whatsIncluded: [
      "Daytime image refinement",
      "Dusk conversion",
      "Sky treatment",
      "Window-light enhancement",
      "Colour balancing",
      "Exposure correction",
      "Shadow and highlight control",
      "Consistent architectural colour",
      "Final matching between day and dusk versions",
    ],
    bestFor: [
      "Property hero images",
      "Luxury listings",
      "Exterior marketing campaigns",
      "Agent websites",
      "Brochures",
      "Social media property promotion",
    ],
    faq: {
      q: "Can I get both the day and dusk versions?",
      a: "Yes, every day-to-dusk order includes the corrected daytime file as well as the converted dusk version.",
    },
  },
  {
    slug: "object-removal",
    name: "Real Estate Object Removal",
    tagline: "Remove distracting objects while keeping the property natural and believable.",
    icon: "Eraser",
    image: photos.bedroom[0],
    heroImage: photos.bedroom[2],
    gallery: [photos.bedroom[1], photos.bedroom[3]],
    delivery: "Under 24 hours",
    description:
      "Real estate photographs often contain temporary or unwanted objects that distract from the property. Cars, bins, signs, cables, construction materials, personal belongings and other visual distractions can be removed carefully while preserving the surrounding architecture and surfaces. Our editors reconstruct the affected areas so the final photograph looks clean without making the edit obvious.",
    whatWeDo:
      "We identify distracting objects and remove them from the image while rebuilding the background using the surrounding textures, lines, surfaces and architectural details. The objective is not simply to erase an object - the surrounding area must remain visually believable.",
    whatsIncluded: [
      "Object masking",
      "Background reconstruction",
      "Texture matching",
      "Edge cleanup",
      "Perspective-aware reconstruction",
      "Colour matching",
      "Final detail cleanup",
    ],
    bestFor: [
      "Exterior property photography",
      "Vacant-property preparation",
      "Interior cleanup",
      "Listings with temporary distractions",
    ],
    faq: {
      q: "Is there anything you will not remove?",
      a: "Structural issues, like a sagging roofline, are not retouched. We flag those back to you rather than mask a real defect.",
    },
  },
  {
    slug: "aerial-image-editing",
    name: "Drone & Aerial Photo Editing",
    tagline: "Clean, balance and enhance aerial property photography for marketing use.",
    icon: "Drone",
    image: photos.aerial[0],
    heroImage: photos.aerial[1],
    gallery: [photos.aerial[2], photos.aerial[3]],
    delivery: "Under 24 hours",
    description:
      "Aerial photographs show a property from a perspective that ground-level photographs cannot provide. They also expose large areas of sky, landscape, rooftops, roads and surrounding properties, making exposure and colour consistency particularly important. Our editors refine drone photographs so the property and its surroundings are presented clearly and professionally.",
    whatWeDo:
      "We improve exposure, colour, contrast and detail while keeping the aerial perspective intact. Where appropriate, distracting elements can be cleaned up and skies or landscape areas can be refined so the frame matches the rest of your property set.",
    whatsIncluded: [
      "Exposure correction",
      "Colour correction",
      "White-balance correction",
      "Contrast refinement",
      "Shadow/highlight adjustment",
      "Horizon levelling and lens correction",
      "Sky enhancement",
      "Landscape refinement",
      "Minor object cleanup",
      "Consistent treatment across aerial sets",
    ],
    bestFor: [
      "Residential drone photography",
      "Large properties",
      "Land and acreage listings",
      "Commercial real estate",
      "Resort and hospitality properties",
      "Property marketing campaigns",
    ],
    faq: {
      q: "Do you fly the drone for us?",
      a: "No, we edit the files your pilot or photographer captures. We do not currently offer flight services.",
    },
  },
  {
    slug: "sky-grass-pool",
    name: "Sky, Grass & Pool Replacement",
    tagline: "Improve outdoor property photographs with realistic environmental replacements.",
    icon: "Waves",
    image: photos.pool[0],
    heroImage: photos.pool[1],
    gallery: [photos.pool[2], photos.pool[3]],
    delivery: "Under 24 hours",
    description:
      "Outdoor photographs can be affected by washed-out skies, dull lawns or pools that contain distracting equipment and reflections. Our editing service improves these elements while keeping the property itself unchanged. Sky, grass and pool adjustments are carefully blended into the original photograph so the final result remains believable and appropriate for real-estate marketing.",
    whatWeDo:
      "Overcast, pale or washed-out skies can reduce contrast in an exterior photograph, so we replace them with a suitable, realistic sky while preserving rooflines, trees and other edges. Lawns that look dry, patchy or uneven are refined to a more even, natural colour and texture without looking artificial. Pool areas are cleaned up by removing distracting equipment and improving the water's appearance, while reflections and surrounding edges stay natural.",
    whatsIncluded: [
      "Realistic sky replacement",
      "Sky-to-building edge refinement",
      "Grass colour and texture improvement",
      "Pool cleanup",
      "Pool equipment removal where appropriate",
      "Water colour refinement",
      "Reflection preservation",
      "Colour matching",
      "Natural environmental blending",
    ],
    bestFor: [
      "Exterior listing photography",
      "Overcast or flat-sky shoots",
      "Backyard and pool-area photography",
      "Seasonal lawns needing a refresh",
    ],
    principle: {
      label: "Important principle",
      text: "We don't make the landscape look unrealistically saturated. The purpose is to improve presentation while keeping the property believable.",
    },
    faq: {
      q: "Will the grass end up looking fake?",
      a: "We work from the lawn that is already there, adjusting tone and fill rather than pasting in new texture, so it still reads as a real yard.",
    },
  },
  {
    slug: "panorama-360",
    name: "360° Panorama Editing",
    tagline: "Clean, balance and prepare panoramic property images for immersive viewing.",
    icon: "ArrowsClockwise",
    image: photos.livingRoom[1],
    heroImage: photos.livingRoom[0],
    gallery: [photos.livingRoom[2], photos.livingRoom[3]],
    delivery: "Under 48 hours",
    description:
      "360° photography allows potential buyers to explore a room or property from a wider perspective. The quality of the panorama depends on clean stitching, consistent exposure, balanced colour and careful handling of the full image. Our editing process improves the visual consistency of 360° property imagery while preserving the panoramic view.",
    whatWeDo:
      "We work on panoramic images to improve exposure, colour, contrast and overall presentation. Where the source material requires it, the workflow can include stitching-related cleanup and correction of visible inconsistencies at the seams.",
    whatsIncluded: [
      "360° image enhancement",
      "Exposure balancing",
      "Colour correction",
      "White-balance correction",
      "Contrast adjustment",
      "Frame stitching with seam correction where applicable",
      "Tripod and equipment removed from the nadir",
      "Horizon levelling across the full sphere",
      "Consistent treatment across multiple panoramas",
    ],
    bestFor: [
      "Real-estate virtual tours",
      "Interior panoramas",
      "Commercial properties",
      "Hospitality properties",
      "Architectural photography",
      "Interactive property experiences",
    ],
    faq: {
      q: "Which virtual tour platforms does this work with?",
      a: "The delivered file is a standard equirectangular JPEG, compatible with Matterport, Zillow 3D Home and most other panorama viewers.",
    },
  },
  {
    slug: "virtual-staging",
    name: "Virtual Staging",
    tagline: "Tasteful digital furnishing for empty or awkward rooms.",
    icon: "Armchair",
    image: photos.bedroom[3],
    heroImage: photos.bedroom[1],
    gallery: [photos.bedroom[0], photos.bedroom[2]],
    delivery: "Under 48 hours",
    description:
      "Empty rooms and awkward layouts are difficult for buyers to picture as a finished home. Virtual staging adds realistically scaled furniture and decor to a vacant or under-furnished room, so the space photographs the way it would look lived in, without the cost or scheduling of physical staging. The result should look like a real room that happens to be furnished, not an obvious digital overlay - scale, shadow, perspective and lighting are matched carefully to the original photograph so the furniture sits naturally in the space.",
    whatWeDo:
      "We furnish an empty or sparsely furnished room with digitally placed furniture and decor chosen to suit the property's style and likely buyer. Shadows, reflections and perspective are matched to the original photograph so the added pieces read as part of the room rather than a layer placed on top of it.",
    whatsIncluded: [
      "Furniture and decor matched to the room's style",
      "Realistic scale and proportion for the space",
      "Shadow and reflection matching",
      "Perspective-accurate placement",
      "Colour and lighting matched to the original photograph",
      "A choice of a few style directions on request",
      "Empty-room version kept on file for reference",
      "Final detail cleanup",
    ],
    bestFor: [
      "Vacant listings",
      "New-build properties with no furniture",
      "Awkward or hard-to-read room layouts",
      "Listings competing with staged comparables",
    ],
    principle: {
      label: "Important principle",
      text: "The furniture should help a buyer read the room, not distract from it. We stage for scale and function first, style second, so the space still looks like somewhere a buyer could actually move in.",
    },
    faq: {
      q: "Can you match a specific furniture style?",
      a: "Yes, tell us the look you want, modern, transitional, coastal and we will style the room to match your listing's audience.",
    },
  },
  {
    slug: "flambient",
    name: "Flambient & Multiple Exposure Blending",
    tagline: "Combine multiple exposures and flash frames into one balanced real-estate photograph.",
    icon: "Flame",
    image: photos.kitchen[0],
    heroImage: photos.kitchen[1],
    gallery: [photos.kitchen[2], photos.kitchen[3]],
    delivery: "Under 24 hours",
    description:
      "Flambient and multiple-exposure workflows are commonly used by real-estate photographers to capture interior spaces with difficult lighting. Multiple frames can contain different exposure levels and flash information, and combining them correctly requires careful masking, blending and colour balancing. Our editors combine the useful information from those frames into one clean final image.",
    whatWeDo:
      "We work with multiple exposures and, where provided, flash frames to balance natural and artificial light. The goal is to preserve window views, room detail, accurate colour and natural-looking illumination without making the final image look over-processed.",
    whatsIncluded: [
      "Multiple-exposure blending",
      "Flash-frame blending",
      "Exposure balancing",
      "Window pull",
      "Highlight recovery",
      "Shadow recovery",
      "Colour and white-balance correction",
      "Mask refinement",
      "Edge cleanup",
      "Consistent treatment across the full property",
    ],
    bestFor: [
      "Professional real-estate photographers",
      "Interior photography",
      "High-contrast rooms",
      "Rooms with bright windows",
      "Mixed natural/artificial lighting",
      "Premium property listings",
    ],
    principle: {
      label: "Quality principle",
      text: "Every frame in the property set should feel like it belongs to the same shoot. Consistent colour, exposure and contrast are as important as any individual image.",
    },
    faq: {
      q: "Do I need to shoot flambient brackets myself?",
      a: "Yes, we blend the flash and ambient frames you capture. We can share a quick shot list if this is new to your workflow.",
    },
  },
];

// The seven-through-ten homepage rows are a curated subset of the full
// catalog above (source-derived core categories), in display order. Every
// other service stays reachable via the nav dropdown, footer and /services.
export const homepageServiceSlugs = [
  "interior-retouching",
  "exterior-retouching",
  "twilight",
  "day-to-dusk",
  "object-removal",
  "aerial-image-editing",
  "sky-grass-pool",
  "panorama-360",
  "virtual-staging",
];

// A smaller curated subset used as the quick-switcher pills on every
// ServiceDetail page's "One photo. Two outcomes." comparison section -
// deliberately not the full catalog, so the pill row stays a manageable
// handful of common categories rather than all ten services.
export const comparisonShowcaseSlugs = [
  "interior-retouching",
  "twilight",
  "object-removal",
  "sky-grass-pool",
  "day-to-dusk",
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
