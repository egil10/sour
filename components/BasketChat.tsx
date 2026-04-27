"use client";

import { FormEvent, useMemo, useState } from "react";
import { Bot, Send, UserRound } from "lucide-react";
import { site } from "@/lib/site";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const prompts = [
  "How do I order?",
  "Do you bake gluten-free?",
  "Where are you?",
  "What should I try first?",
];

function answerQuestion(question: string) {
  const q = question.toLowerCase();

  if (q.includes("order") || q.includes("whatsapp") || q.includes("pre")) {
    return "Pre-order on WhatsApp at least two days ahead. Tell us the loaf, quantity, preferred day, and whether you want pickup or delivery details.";
  }

  if (q.includes("gluten") || q.includes("allergy") || q.includes("celiac") || q.includes("coeliac")) {
    return "We bake gluten-free options with special care, including rice-free, farmhouse, buckwheat and seeded loaves. If you have a severe allergy or medical intolerance, message us first so we can discuss the current bakery setup honestly.";
  }

  if (q.includes("where") || q.includes("location") || q.includes("map") || q.includes("lusaka")) {
    return `We bake in ${site.location}. You can pre-order direct, or look for selected breads at trusted Lusaka outlets listed on the site.`;
  }

  if (q.includes("sourdough") || q.includes("starter") || q.includes("culture")) {
    return "Sourdough is the heart of the bakery. The cultures are around 30 years old, and the slow fermentation gives the loaves their depth, texture and digestibility.";
  }

  if (q.includes("bun") || q.includes("pretzel") || q.includes("brötchen") || q.includes("brotchen")) {
    return "Buns and pretzels are best for groups. The minimum order is 20, and they need at least two days' notice like the breads.";
  }

  if (q.includes("christmas") || q.includes("stollen") || q.includes("lebkuchen")) {
    return "Christmas treats include Stollen and Lebkuchen, with gluten-free Stollen available too. Order early in season because festive batches fill quickly.";
  }

  if (q.includes("recommend") || q.includes("try") || q.includes("first") || q.includes("best")) {
    return "Start with San Francisco or Farmhouse if you want a classic sourdough, Multi Grain if you like seeds, and Alice's if you want the 24-hour cold-fermented loaf.";
  }

  if (q.includes("phone") || q.includes("email") || q.includes("contact")) {
    return `You can WhatsApp or call ${site.phone}, or email ${site.email}. WhatsApp is the fastest route for orders.`;
  }

  return "I can answer questions about the breads, gluten-free options, buns, Christmas treats, ordering, location and contact details. For anything specific, WhatsApp the bakery and the team will confirm.";
}

export default function BasketChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Ask me about breads, ordering, gluten-free loaves or where to find Stef's Sourdough Basket.",
    },
  ]);
  const [input, setInput] = useState("");

  const canSubmit = useMemo(() => input.trim().length > 0, [input]);

  function ask(question: string) {
    const clean = question.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "assistant", text: answerQuestion(clean) },
    ]);
    setInput("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="rounded-[2rem] border border-cream-50/15 bg-cream-50/10 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-cream-50 text-bark-900">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-2xl leading-none text-cream-50">
            Bread basket chat
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-crust-300">
            Website Q&A
          </p>
        </div>
      </div>

      <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
        {messages.slice(-6).map((message, index) => (
          <div
            key={`${message.role}-${index}-${message.text}`}
            className={`flex gap-2 ${message.role === "user" ? "justify-end" : ""}`}
          >
            {message.role === "assistant" && (
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-crust-400 text-bark-900">
                <Bot className="h-3.5 w-3.5" />
              </span>
            )}
            <p
              className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-cream-50 text-bark-900"
                  : "bg-bark-900/45 text-cream-100"
              }`}
            >
              {message.text}
            </p>
            {message.role === "user" && (
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-moss-400 text-bark-900">
                <UserRound className="h-3.5 w-3.5" />
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => ask(prompt)}
            className="rounded-full border border-cream-50/15 bg-cream-50/10 px-3 py-1.5 text-xs font-extrabold text-cream-100 transition hover:bg-cream-50/20"
          >
            {prompt}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about sourdough..."
          className="min-w-0 flex-1 rounded-full border border-cream-50/15 bg-cream-50 px-4 py-3 text-sm text-bark-900 outline-none placeholder:text-bark-700/55 focus:ring-2 focus:ring-crust-300"
        />
        <button
          type="submit"
          disabled={!canSubmit}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-crust-400 text-bark-900 transition hover:bg-crust-300 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send question"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
