export type Product = {
  slug: string;
  name: string;
  weight: string;
  ingredients: string[];
  note?: string;
  image: string;
};

export const sourdoughs: Product[] = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    weight: "≈ 800 g",
    ingredients: ["Bread flour", "Brown / rye / malt flours", "Water", "Salt"],
    image: "/images/sourdough/san-francisco.jpg",
  },
  {
    slug: "multi-grain",
    name: "Multi Grain",
    weight: "≈ 820 g",
    ingredients: ["Bread flour", "Brown flour", "Various seeds", "Water", "Salt"],
    image: "/images/sourdough/multigrain.jpg",
  },
  {
    slug: "alices",
    name: "Alice's",
    weight: "≈ 850 g",
    ingredients: ["Bread flour", "Rye / brown flours", "Water", "Salt"],
    note: "24-hour cold fermentation",
    image: "/images/sourdough/alice.jpg",
  },
  {
    slug: "farmhouse",
    name: "Farmhouse",
    weight: "≈ 850 g",
    ingredients: ["Bread flour", "Rye flour", "Water", "Salt"],
    image: "/images/sourdough/farmhouse.jpg",
  },
  {
    slug: "rye",
    name: "Rye",
    weight: "≈ 840 g",
    ingredients: ["Rye flour", "Brown flour", "Yeast", "Water", "Salt"],
    image: "/images/sourdough/rye.jpg",
  },
  {
    slug: "whole-wheat",
    name: "Whole Wheat",
    weight: "≈ 900 g",
    ingredients: ["Whole wheat flour", "Bread / brown flours", "Malt flour", "Salt"],
    image: "/images/sourdough/whole-wheat.jpg",
  },
  {
    slug: "honey-whole-wheat",
    name: "Honey Whole Wheat",
    weight: "≈ 800 g",
    ingredients: [
      "Whole wheat flour",
      "Bread / brown flours",
      "Barley seeds",
      "Honey",
      "Olive oil",
      "Salt",
    ],
    image: "/images/sourdough/honey-whole-wheat.jpg",
  },
  {
    slug: "100-rye",
    name: "100% Rye",
    weight: "≈ 750 g",
    ingredients: ["Rye flour", "Roasted sunflower seeds", "Yeast", "Water", "Salt", "Spices"],
    image: "/images/sourdough/100-rye.jpg",
  },
];

export const glutenFrees: Product[] = [
  {
    slug: "rice-free",
    name: "Rice- & Starch-Free Whole Grain",
    weight: "Whole-grain loaf",
    ingredients: [
      "Millet flour",
      "Buckwheat flour",
      "Sorghum flour",
      "Sesame seeds",
      "Spices, honey & salt",
    ],
    note: "No rice flours and no extra starches",
    image: "/images/gluten-free/rice-free.jpg",
  },
  {
    slug: "gf-farmhouse",
    name: "Gluten-Free Farmhouse",
    weight: "Classic loaf",
    ingredients: [
      "White rice flour",
      "Sorghum flour",
      "Buckwheat flour",
      "Chia seed flour",
      "Starch, sugar & salt",
    ],
    image: "/images/gluten-free/gf-farmhouse.jpg",
  },
  {
    slug: "gf-buckwheat",
    name: "Gluten-Free Buckwheat",
    weight: "Hearty loaf",
    ingredients: [
      "Buckwheat flour",
      "Millet flour",
      "White rice flour",
      "Sorghum flour",
      "Soya & honey",
      "Starch & salt",
    ],
    image: "/images/gluten-free/gf-buckwheat.jpg",
  },
  {
    slug: "gf-seeded",
    name: "Gluten-Free Seeded",
    weight: "Seed-packed loaf",
    ingredients: [
      "Rice flour",
      "Pearl / finger millet flour",
      "Sorghum & chia flour",
      "Starch, sugar, salt",
      "Sunflower & sesame seeds",
      "Lin- & chia seeds",
    ],
    image: "/images/gluten-free/gf-seeded.png",
  },
];

export const buns: Product[] = [
  {
    slug: "whole-wheat-buns",
    name: "Whole Wheat Buns",
    weight: "≈ 85 g each",
    ingredients: [
      "Largely whole wheat flour",
      "A little brown flour",
      "Water, seeds, sugar, salt",
      "Sourdough-yeast combination",
    ],
    image: "/images/buns/whole-wheat.jpg",
  },
  {
    slug: "poppy-seed-buns",
    name: "Poppy Seed Buns",
    weight: "≈ 80 g each",
    ingredients: [
      "Largely bread flour",
      "A little brown flour",
      "Water, poppy seeds, sugar, salt",
      "Sourdough-yeast combination",
    ],
    image: "/images/buns/poppyseed.jpg",
  },
  {
    slug: "bread-bowls",
    name: "Bread Bowls",
    weight: "≈ 240 g each",
    ingredients: [
      "Whole wheat flour",
      "Bread flour",
      "Water and salt",
      "Sourdough-yeast combination",
    ],
    image: "/images/buns/bread-bowls.jpeg",
  },
  {
    slug: "laugenbrotchen",
    name: "Laugenbrötchen",
    weight: "≈ 80 g each",
    ingredients: [
      "Bread flour",
      "Diastatic malt powder",
      "Milk and butter",
      "Water and salt",
      "Dipped in lye",
    ],
    image: "/images/buns/laugenbrotchen.jpg",
  },
];

export const christmasTreats: Product[] = [
  {
    slug: "stollen",
    name: "Christmas Stollen",
    weight: "≈ 1000 g",
    ingredients: [
      "Bread flour",
      "Almonds",
      "Fruit mix",
      "Sugar",
      "Raisins",
      "Butter",
      "Homemade spice mix",
      "Madagascan vanilla",
    ],
    note: "Also available with marzipan!",
    image: "/images/christmas/stollen.jpg",
  },
  {
    slug: "gf-stollen",
    name: "Gluten-Free Christmas Stollen",
    weight: "≈ 1000 g",
    ingredients: [
      "Gluten-free flours",
      "Butter",
      "Fruit mix",
      "Sugar",
      "Raisins",
      "Almonds",
      "Spice mix",
      "Madagascan vanilla",
    ],
    note: "Also available with marzipan!",
    image: "/images/christmas/gf-stollen.jpg",
  },
  {
    slug: "lebkuchen",
    name: "Lebkuchen",
    weight: "≈ 200 g per bag",
    ingredients: [
      "Rye & bread flour",
      "Fruit mix",
      "Almonds",
      "Honey",
      "Butter",
      "Eggs",
      "Cocoa",
      "Homemade spice mix",
    ],
    note: "Also available with Belgian chocolate!",
    image: "/images/christmas/lebkuchen.png",
  },
];
