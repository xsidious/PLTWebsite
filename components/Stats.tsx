"use client";

import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { builtForContent, stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="relative border-y border-border bg-white">
      <div className="container-wide section-padding !py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="font-display text-4xl font-bold text-navy md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-wide px-6 pb-24 md:px-12 lg:px-20 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{builtForContent.eyebrow}</p>
            <h2 className="heading-section">{builtForContent.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-muted">
              {builtForContent.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
