"use client";

import Image from "next/image";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <section id="work" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="heading-section max-w-3xl">
            Finishes that elevate every commercial space.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            From build-outs to full developments, our crews deliver clean lines,
            durable finishes, and results that reflect well on every general
            contractor we partner with.
          </p>
        </Reveal>

        <StaggerContainer
          className="mt-16 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {gallery.map((item, i) => (
            <StaggerItem
              key={item.src}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <div className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-red" />
                    {item.tag}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
