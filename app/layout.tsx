import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Stef's Sourdough Basket — Artisan sourdough in Lusaka",
    template: "%s · Stef's Sourdough Basket",
  },
  description:
    "A small artisan bakery in Foxdale Forest, Lusaka. Hand-crafted, slow-fermented sourdough — including gluten-free — rooted in German baking traditions.",
  metadataBase: new URL("https://stefssourdoughbasket.vercel.app"),
  openGraph: {
    title: "Stef's Sourdough Basket",
    description:
      "Hand-crafted, slow-fermented sourdough in Lusaka — rooted in German baking traditions.",
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
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
