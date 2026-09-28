import { photos } from "./images";

export const services = [
  {
    slug: "interior-retouching",
    name: "Interior Retouching",
    tagline: "Balanced exposure, natural colour, every room polished.",
    icon: "House",
    image: photos.livingRoom[0],
    heroImage: photos.livingRoom[1],
    gallery: [photos.livingRoom[2], photos.livingRoom[3]],
    span: "lg",
    price: "1.20",
    delivery: "Under 24 hours",
    description:
      "Interior Retouching blends your bracketed exposures into one balanced frame, correcting exposure and colour so every room reads clean and bright while still looking like the space in person, not an artificially lit render.",
    whatsIncluded: [
      "Exposure blending from your bracketed set",
      "Window pulls with visible sky and landscaping",
      "Natural white balance and colour correction",
      "Lens distortion and vertical line correction",
    ],
    faq: {
      q: "How many bracketed exposures do you need?",
      a: "Three to five brackets at one to two stops apart gives the cleanest blend. Two will still work if that is all your camera captured.",
    },
  },
  {
    slug: "exterior-retouching",
    name: "Exterior Retouching",
    tagline: "Corrected light, true colour and crisp exterior detail.",
    icon: "Buildings",
    image: photos.exteriorDay[1],
    heroImage: photos.exteriorDay[3],
    gallery: [photos.exteriorDay[0], photos.exteriorDay[2]],
    span: "md",
    price: "1.80",
    delivery: "Under 24 hours",
    description:
      "Exterior Retouching corrects lighting and colour balance across the facade and grounds, lifting detail and overall polish while keeping the property looking exactly as it does in person.",
    whatsIncluded: [
      "Exposure and colour balance correction",
      "Facade and landscaping detail enhancement",
      "Flat or uneven light evened across the frame",
      "Lens distortion and horizon correction",
    ],
    faq: {
      q: "Do you touch up the landscaping too?",
      a: "Yes. Lawns, hedges and pathways get the same exposure and colour pass as the facade, so the whole frame feels consistent.",
    },
  },
  {
    slug: "twilight",
    name: "Twilight Images",
    tagline: "Convincing dusk atmosphere from an ordinary daytime shot.",
    icon: "MoonStars",
    image: photos.twilight[0],
    heroImage: photos.twilight[1],
    gallery: [photos.twilight[2], photos.twilight[3]],
    span: "md",
    price: "6.00",
    delivery: "Under 36 hours",
    description:
      "A daytime exterior becomes a warm dusk shot: the sky shifts to a gradient blue, interior lights glow through the windows, and any landscape lighting switches on. It is the single edit that tends to get the most engagement on a listing.",
    whatsIncluded: [
      "Sky replaced with a natural dusk gradient",
      "Interior and exterior lights switched on",
      "Colour temperature balanced for a cohesive glow",
      "Reflections corrected in pools and windows",
    ],
    faq: {
      q: "Do I need a photo actually shot at dusk?",
      a: "No. We convert a well-exposed daytime exterior, so you do not need to schedule a second shoot at blue hour.",
    },
  },
  {
    slug: "day-to-dusk",
    name: "Day to Dusk",
    tagline: "One property, two moods: bright day and warm dusk.",
    icon: "CloudSun",
    image: photos.exteriorDay[0],
    heroImage: photos.exteriorDay[2],
    gallery: [photos.exteriorDay[1], photos.exteriorDay[3]],
    span: "md",
    price: "7.00",
    delivery: "Under 36 hours",
    description:
      "The full day-to-dusk treatment goes further than a sky swap: it resets the sky, switches on every visible light, warms the facade, and grades the whole frame so it reads as one intentional dusk photograph with premium evening appeal.",
    whatsIncluded: [
      "Complete sky and lighting conversion",
      "Facade and landscape lighting switched on",
      "Colour graded for a cohesive dusk mood",
      "Delivered alongside the original day version",
    ],
    faq: {
      q: "Can I get both the day and dusk versions?",
      a: "Yes, every day-to-dusk order includes the corrected daytime file as well as the converted dusk version.",
    },
  },
  {
    slug: "object-removal",
    name: "Object Removal",
    tagline: "Distracting clutter gone, textures kept natural.",
    icon: "Eraser",
    image: photos.bedroom[0],
    heroImage: photos.bedroom[2],
    gallery: [photos.bedroom[1], photos.bedroom[3]],
    span: "md",
    price: "3.00",
    delivery: "Under 24 hours",
    description:
      "Cars in the driveway, bins by the curb, cords across the floor, a pet bed in the corner: the small things that pull attention away from the property. We remove them frame by frame and rebuild the background so nothing looks patched, preserving realistic texture and perspective.",
    whatsIncluded: [
      "Vehicles, bins and clutter removed",
      "Cords, remotes and personal items cleared",
      "Background reconstructed to match texture and light",
      "Watermarks and lockboxes removed on request",
    ],
    faq: {
      q: "Is there anything you will not remove?",
      a: "Structural issues, like a sagging roofline, are not retouched. We flag those back to you rather than mask a real defect.",
    },
  },
  {
    slug: "aerial-image-editing",
    name: "Aerial Image Editing",
    tagline: "Clearer colour, exposure and presentation from above.",
    icon: "Drone",
    image: photos.aerial[0],
    heroImage: photos.aerial[1],
    gallery: [photos.aerial[2], photos.aerial[3]],
    span: "md",
    price: "2.50",
    delivery: "Under 24 hours",
    description:
      "Aerial files often arrive with a tilted horizon, flat colour and a sky that does not match the ground shots. We level every frame, match the colour to your interior set, and sharpen selectively so rooftops and landscaping hold detail at full zoom.",
    whatsIncluded: [
      "Horizon levelling and lens correction",
      "Colour matched to your ground-level shots",
      "Selective sharpening on structures and land",
      "Sky enhancement when the day was flat",
    ],
    faq: {
      q: "Do you fly the drone for us?",
      a: "No, we edit the files your pilot or photographer captures. We do not currently offer flight services.",
    },
  },
  {
    slug: "sky-grass-pool",
    name: "Sky, Grass & Pool Replacement",
    tagline: "Dull skies, patchy lawns and cloudy pools, refreshed.",
    icon: "Waves",
    image: photos.pool[0],
    heroImage: photos.pool[1],
    gallery: [photos.pool[2], photos.pool[3]],
    span: "lg",
    price: "4.50",
    delivery: "Under 24 hours",
    description:
      "An overcast sky, a patchy lawn and a pool that looks murky in person rarely photograph the way the property actually feels. We replace the sky with a natural-looking one, even out the grass, and correct the pool water to a clean, inviting tone, all while preserving the property's real structure.",
    whatsIncluded: [
      "Flat or grey sky replaced with a natural blue",
      "Grass evened out and greened where needed",
      "Pool water clarity and colour correction",
      "Reflections adjusted to match the new sky",
    ],
    faq: {
      q: "Will the grass end up looking fake?",
      a: "We work from the lawn that is already there, adjusting tone and fill rather than pasting in new texture, so it still reads as a real yard.",
    },
  },
  {
    slug: "panorama-360",
    name: "Panorama Editing (360°)",
    tagline: "Clean, consistent 360° tours ready to publish.",
    icon: "ArrowsClockwise",
    image: photos.livingRoom[1],
    heroImage: photos.livingRoom[0],
    gallery: [photos.livingRoom[2], photos.livingRoom[3]],
    span: "md",
    price: "8.00",
    delivery: "Under 48 hours",
    description:
      "Raw panorama captures come in with visible tripod legs, seams where the frames meet and an uneven horizon. We stitch, level and tone-map each one into a smooth 360 degree file ready to drop into a virtual tour platform.",
    whatsIncluded: [
      "Frame stitching with seam correction",
      "Tripod and equipment removed from the nadir",
      "Horizon levelling across the full sphere",
      "HDR tone mapping for balanced light",
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
    span: "md",
    price: "9.00",
    delivery: "Under 48 hours",
    description:
      "Virtual Staging adds tasteful, realistically scaled furniture and decor to an empty or awkward room, helping buyers picture how the space actually lives without the cost of physical staging.",
    whatsIncluded: [
      "Furniture and decor matched to the room's style",
      "Realistic scale, shadow and perspective",
      "A choice of a few style directions on request",
      "Empty-room version kept on file if needed later",
    ],
    faq: {
      q: "Can you match a specific furniture style?",
      a: "Yes, tell us the look you want, modern, transitional, coastal and we will style the room to match your listing's audience.",
    },
  },
  {
    slug: "flambient",
    name: "Flambient Image",
    tagline: "Flash and ambient blended for natural, even light.",
    icon: "Flame",
    image: photos.kitchen[0],
    heroImage: photos.kitchen[1],
    gallery: [photos.kitchen[2], photos.kitchen[3]],
    span: "md",
    price: "2.00",
    delivery: "Under 24 hours",
    description:
      "Flambient blends a flash exposure with the ambient light already in the room, keeping window views intact while lighting the interior evenly. It avoids the harsh shadows of flash-only shots and the blown-out windows of ambient-only ones.",
    whatsIncluded: [
      "Flash and ambient exposures blended",
      "Even, shadow-free interior lighting",
      "Window views preserved with visible detail",
      "Colour cast neutralised across mixed lighting",
    ],
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
