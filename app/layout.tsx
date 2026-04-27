import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: false,
});

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Stef's Sourdough Basket | Artisan sourdough in Lusaka",
    template: "%s · Stef's Sourdough Basket",
  },
  description:
    "A small artisan bakery in Foxdale Forest, Lusaka. Hand-shaped, slow-fermented sourdough, gluten-free loaves, buns and German Christmas treats.",
  metadataBase: new URL("https://stefssourdoughbasket.vercel.app"),
  openGraph: {
    title: "Stef's Sourdough Basket",
    description:
      "Hand-shaped, slow-fermented sourdough in Lusaka, rooted in German baking traditions.",
    type: "website",
    images: ["/images/home/sourdough-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-cream-100 text-bark-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
