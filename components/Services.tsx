"use client";

import {
  Check,
  Grid3x3,
  Layers,
  Paintbrush,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { services } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  paintbrush: Paintbrush,
  layers: Layers,
  ruler: Ruler,
  grid: Grid3x3,
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">Our Services</p>
          <h2 className="heading-section max-w-3xl">
            Complete commercial finishing under one roof.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Four core trades, one accountable partner. Every service is delivered
            to commercial standards, on schedule, and built to spec.
          </p>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <StaggerItem key={service.id}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy/15 hover:shadow-2xl hover:shadow-navy/10">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-red shadow-lg backdrop-blur">
                      <Icon size={22} />
                    </div>
                    <h3 className="absolute bottom-5 left-6 font-display text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-border pt-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-navy/50">
                        Services Include
                      </p>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-charcoal/80"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-red"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
