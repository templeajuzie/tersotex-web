export const products = [
  {
    name: "Terso Dish Washing (25Ltr)",
    slug: "terso-dish-washing-25ltr",
    description:
      "Effective on grease and grime, dissolves dirt quickly while remaining mild and gentle on hands. Safe for use on all kitchen surfaces, safe on hands.",
    image: "/images/product-equilibrium.png",
    tag: "Products",
    size: "25 litres",
    type: "Liquid dish washing detergent",
    bestFor: "Busy homes, food vendors, restaurants, and shared kitchens",
    highlights: [
      "Breaks down oil, grease, and food residue quickly.",
      "Mild feel for hands during repeated washing.",
      "Large-volume packaging for steady daily use.",
    ],
    usage:
      "Apply a small amount to a wet sponge or directly into dish water, wash dishes and kitchen surfaces, then rinse with clean water.",
  },
  {
    name: "Terso Dish Washing (41C)",
    slug: "terso-dish-washing-41c",
    description:
      "Cost effective quality detergent. Gentle on the hand, tough on dirt and grease.",
    image: "/images/product-serenity1.png",
    tag: "Process",
    size: "41C pack",
    type: "Liquid dish washing detergent",
    bestFor: "Everyday dish washing where value and reliable cleaning matter",
    highlights: [
      "Designed for daily plates, pots, pans, and utensils.",
      "Tough on dirt and grease without feeling harsh on hands.",
      "A cost-effective option for regular household or small-business use.",
    ],
    usage:
      "Use with water and a sponge for everyday dish washing. Rinse washed items thoroughly after cleaning.",
  },
  {
    name: "Terso Dish Washing (25Ltr)",
    slug: "terso-dish-washing-25ltr",
    description:
      "Effective on grease and grime, dissolves dirt quickly while remaining mild and gentle on hands. Safe for use on all kitchen surfaces, safe on hands.",
    image: "/images/product-equilibrium.png",
    tag: "Products",
    size: "25 litres",
    type: "Liquid dish washing detergent",
    bestFor: "Busy homes, food vendors, restaurants, and shared kitchens",
    highlights: [
      "Breaks down oil, grease, and food residue quickly.",
      "Mild feel for hands during repeated washing.",
      "Large-volume packaging for steady daily use.",
    ],
    usage:
      "Apply a small amount to a wet sponge or directly into dish water, wash dishes and kitchen surfaces, then rinse with clean water.",
  },
] as const

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductSlugs() {
  return [...new Set(products.map((product) => product.slug))]
}
