# Stef's Sourdough Basket — modern site

A reimagined version of [stefssourdoughbasket.weebly.com](https://stefssourdoughbasket.weebly.com), rebuilt as a fast, modern Next.js app and ready to deploy on Vercel. All copy, products and imagery are taken from the original site.

## Tech

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS — custom warm "bakery" palette
- `next/image` for optimised image delivery
- `next/font` (Playfair Display + Inter)
- `lucide-react` icons

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel    # if needed
vercel             # interactive — accept defaults
vercel --prod      # promote
```

…or push this repo to GitHub and click **Import Project** at vercel.com.

## Pages

- `/` — hero, why-us, categories, story, stockists, CTA
- `/about` — Who's the baker
- `/sourdough` — 8 sourdough loaves
- `/gluten-free` — 4 gluten-free options
- `/buns` — Brötchen & pretzels
- `/christmas-treats` — Stollen & Lebkuchen
- `/contact` — phone, WhatsApp, email, Google Maps embed
