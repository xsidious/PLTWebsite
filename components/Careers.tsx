"use client";

import {
  ClipboardList,
  Layers,
  Paintbrush,
  Phone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { careersContent, openPositions, siteConfig } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  paintbrush: Paintbrush,
  clipboard: ClipboardList,
  phone: Phone,
};

export function Careers() {
  return (
    <section id="careers" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">{careersContent.eyebrow}</p>
            <h2 className="heading-section">{careersContent.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {careersContent.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.contact.phoneHref} className="btn-primary group">
                Call to Apply
                <Phone size={16} />
              </a>
              <a href="#contact" className="btn-secondary group">
                Contact Us
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
              Open Positions
            </p>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {openPositions.map((position) => {
                const Icon = iconMap[position.icon];
                return (
                  <StaggerItem key={position.title}>
                    <div className="group h-full rounded-2xl border border-border bg-cream/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-navy/15 hover:bg-white hover:shadow-xl hover:shadow-navy/5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-red/10 group-hover:text-red">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                          {position.type}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {position.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {position.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
