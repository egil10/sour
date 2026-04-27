import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-moss-600 px-5 py-3 text-sm font-medium text-cream-50 shadow-[0_18px_40px_-15px_rgba(38,23,11,0.6)] transition hover:scale-105 hover:bg-moss-500"
    >
      <MessageCircle className="h-4 w-4" />
      Pre-order
    </a>
  );
}
