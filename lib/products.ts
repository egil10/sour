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
    weight: "Circa 800 g",
    ingredients: ["Mainly bread flour", "Brown, rye and malt flours", "Water and salt"],
    image: "/images/sourdough/san-francisco.jpg",
  },
  {
    slug: "multi-grain",
    name: "Multi Grain",
    weight: "Circa 820 g",
    ingredients: ["Mainly bread flour", "Some brown flour", "Various seeds", "Water and salt"],
    image: "/images/sourdough/multigrain.jpg",
  },
  {
    slug: "alices",
    name: "Alice's",
    weight: "Circa 850 g",
    ingredients: ["Largely bread flour", "Some rye and brown flours", "Water and salt"],
    note: "24-hour cold fermentation",
    image: "/images/sourdough/alice.jpg",
  },
  {
    slug: "farmhouse",
    name: "Farmhouse",
    weight: "Circa 850 g",
    ingredients: ["Some bread flour", "Some rye flour", "Water and salt"],
    image: "/images/sourdough/farmhouse.jpg",
  },
  {
    slug: "rye",
    name: "Rye",
    weight: "Circa 840 g",
    ingredients: ["Mainly rye flour", "Some brown flour", "Yeast, water and salt"],
    image: "/images/sourdough/rye.jpg",
  },
  {
    slug: "whole-wheat",
    name: "Whole Wheat",
    weight: "Circa 900 g",
    ingredients: ["Mainly whole wheat flour", "Some bread and brown flours", "Malt flour and salt"],
    image: "/images/sourdough/whole-wheat.jpg",
  },
  {
    slug: "honey-whole-wheat",
    name: "Honey Whole Wheat",
    weight: "Circa 800 g",
    ingredients: [
      "Mainly whole wheat flour",
      "Some bread and brown flours",
      "Cooked barley seeds",
      "Honey, olive oil and salt",
    ],
    image: "/images/sourdough/honey-whole-wheat.jpg",
  },
  {
    slug: "100-rye",
    name: "100% Rye",
    weight: "Circa 750 g",
    ingredients: ["Only rye flour", "Roasted sunflower seeds", "Yeast, water, salt and spices"],
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
      "Spices, honey and salt",
    ],
    note: "No rice flours and extra starches!",
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
      "Starch, sugar and salt",
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
      "Soya and honey",
      "Starch and salt",
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
      "Sorghum and chia flour",
      "Starch, sugar, salt",
      "Sunflower and sesame seeds",
      "Lin- & chia seeds",
    ],
    image: "/images/gluten-free/gf-seeded.png",
  },
];

export const buns: Product[] = [
  {
    slug: "whole-wheat-buns",
    name: "Whole Wheat Buns",
    weight: "Circa 85 g",
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
    weight: "Circa 80 g",
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
    weight: "Circa 240 g",
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
    weight: "Circa 80 g",
    ingredients: [
      "Bread flour",
      "Diastetic malt powder",
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
    weight: "Circa 1000 g",
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
    weight: "Circa 1000 g",
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
    weight: "Circa 200 g per bag",
    ingredients: [
      "Rye and bread flour",
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
