"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Gift } from "lucide-react";

function getCountdown() {
  const now = new Date();
  let christmas = new Date(now.getFullYear(), 11, 25);

  if (now > christmas) {
    christmas = new Date(now.getFullYear() + 1, 11, 25);
  }

  const totalDays = Math.max(
    0,
    Math.ceil((christmas.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
  );

  return {
    days: totalDays,
    weeks: Math.floor(totalDays / 7),
    remainingDays: totalDays % 7,
    year: christmas.getFullYear(),
  };
}

export default function ChristmasCountdown() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(getCountdown()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="container-x pt-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry-700 via-bark-900 to-crust-700 p-6 text-cream-50 shadow-[0_24px_80px_-58px_rgba(38,23,11,0.75)] sm:p-8">
        <div className="grain absolute inset-0 opacity-60" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-crust-300/20 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="section-eyebrow text-crust-300">
              Countdown to Christmas
            </span>
            <h2 className="h-display text-4xl text-cream-50 sm:text-5xl">
              Stollen season is coming.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-cream-100/82">
              Christmas treats are seasonal and handmade in batches, so early
              orders are the safest way to reserve Stollen, gluten-free Stollen
              or Lebkuchen before the festive rush.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-cream-50/12 bg-cream-50/12 p-5 backdrop-blur">
              <CalendarDays className="h-5 w-5 text-crust-300" />
              <p className="mt-4 font-display text-6xl leading-none text-cream-50">
                {countdown.days}
              </p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-cream-100/75">
                days to Dec 25
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-cream-50/12 bg-cream-50/12 p-5 backdrop-blur">
              <Gift className="h-5 w-5 text-crust-300" />
              <p className="mt-4 font-display text-6xl leading-none text-cream-50">
                {countdown.weeks}
              </p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-cream-100/75">
                full weeks
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-cream-50/12 bg-cream-50/12 p-5 backdrop-blur">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-crust-300">
                plus
              </p>
              <p className="mt-4 font-display text-6xl leading-none text-cream-50">
                {countdown.remainingDays}
              </p>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-cream-100/75">
                extra days in {countdown.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
