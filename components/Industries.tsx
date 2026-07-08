"use client";

import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/lib/site";

export function Industries() {
  const doubled = [...industries, ...industries];

  return (
    <section id="industries" className="section-padding overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">Industries We Serve</p>
          <h2 className="heading-section max-w-2xl">
            Built for every commercial sector.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent md:w-40" />

        <div className="flex animate-marquee gap-4">
          {doubled.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-white px-6 py-3 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              <span className="whitespace-nowrap text-sm font-medium text-navy">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide mt-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <Reveal key={industry} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-white/50 px-4 py-3 text-center text-xs font-medium text-navy/70 transition-colors hover:border-navy/20 hover:text-navy">
                {industry}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
