"use client";

import { MapPin } from "lucide-react";
import { ServiceMap } from "@/components/map/ServiceMap";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Service Area</p>
            <h2 className="heading-section">
              Proudly serving South Florida commercial clients.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Based in Wellington, PDT Unlimited serves commercial clients
              throughout Broward County and Palm Beach County, delivering
              professional finishing services for projects of every scale.
            </p>

            <div className="mt-8 space-y-4">
              {siteConfig.counties.map((county) => (
                <div
                  key={county}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-cream/60 p-5 transition-all duration-300 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-navy">
                      {county}
                    </p>
                    <p className="text-sm text-muted">Florida</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative isolate z-0 overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/5">
              <div className="h-[420px] w-full lg:h-[520px]">
                <ServiceMap />
              </div>
              <div className="pointer-events-none absolute left-5 top-5 z-[1000] rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy shadow-md backdrop-blur">
                Coverage Map
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
