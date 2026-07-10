export const products = [
  {
    name: "Terso Banana & Strawberry Dishwashing Soap (25L)",
    slug: "terso-banana-strawberry-dishwashing-soap-25l",
    description:
      "Large-volume liquid dishwashing soap with banana and strawberry fragrance. One drop washes more, stays tough on grease, and remains gentle on hands.",
    image: "/images/product1.png",
    tag: "Product",
    size: "25 litres",
    type: "Liquid dishwashing soap",
    bestFor: "Busy homes, food vendors, restaurants, and shared kitchens",
    highlights: [
      "Banana and strawberry fragrance with an original-cool finish.",
      "One-drop formula for plates, pots, pans, and utensils.",
      "Large 25-litre pack for steady commercial or household use.",
    ],
    usage:
      "Apply a small amount to a wet sponge or directly into dish water, wash dishes and kitchen surfaces, then rinse with clean water.",
  },
  {
    name: "Terso Citrus Dishwashing Soap (4L)",
    slug: "terso-citrus-dishwashing-soap-4l",
    description:
      "Yellow citrus-fragranced liquid dishwashing soap made for everyday cleaning, with reliable grease removal and a gentle hand feel.",
    image: "/images/product2.png",
    tag: "Product",
    size: "4 litres",
    type: "Liquid dishwashing soap",
    bestFor: "Daily household and small-business dishwashing",
    highlights: [
      "Citrus fragrance for a fresh wash.",
      "Tough on dirt and grease during regular dishwashing.",
      "Easy-handle 4-litre pack for repeat use.",
    ],
    usage:
      "Use with water and a sponge for everyday dish washing. Rinse washed items thoroughly after cleaning.",
  },
  {
    name: "Terso Banana & Strawberry Dishwashing Soap (4L)",
    slug: "terso-banana-strawberry-dishwashing-soap-4l",
    description:
      "Green liquid dishwashing soap with banana and strawberry fragrance. Built for everyday dish cleaning with a tough-on-grease, gentle-on-hands formula.",
    image: "/images/product3.png",
    tag: "Product",
    size: "4 litres",
    type: "Liquid dishwashing soap",
    bestFor: "Everyday dish washing where value and reliable cleaning matter",
    highlights: [
      "Banana and strawberry fragrance with an original-cool finish.",
      "One drop washes more on plates, pots, pans, and utensils.",
      "4-litre pack for homes, vendors, and small kitchens.",
    ],
    usage:
      "Use with water and a sponge for everyday dish washing. Rinse washed items thoroughly after cleaning.",
  },
  {
    name: "Terso Scouring Paste (500g)",
    slug: "terso-scouring-paste-500g",
    description:
      "Lemon-fresh scouring paste for tough grease, stains, and multi-surface cleaning. Gentle on surfaces while helping remove stubborn dirt.",
    image: "/images/product4.png",
    tag: "Product",
    size: "500g",
    type: "Scouring paste",
    bestFor: "Sinks, pots, tiles, cookers, and hard washable kitchen surfaces",
    highlights: [
      "Tough on grease and stains.",
      "Fresh fragrance for cleaned surfaces.",
      "Multi-surface cleaning for everyday kitchen care.",
    ],
    usage:
      "Apply a small amount on a wet sponge or cloth, rub gently on the surface to remove dirt or stains, then rinse off with water after use.",
  },
] as const

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductSlugs() {
  return [...new Set(products.map((product) => product.slug))]
}
