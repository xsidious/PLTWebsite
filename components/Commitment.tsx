"use client";

import Image from "next/image";
import { BidButton } from "@/components/bid/BidButton";
import { Reveal } from "@/components/motion/Reveal";
import { commitmentContent, images } from "@/lib/site";

export function Commitment() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24 lg:px-24">
          <Image
            src={images.commitment}
            alt="Commercial tenant improvement with polished finishes"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-6 !text-red">{commitmentContent.eyebrow}</p>
              <h2 className="heading-section !text-white">
                {commitmentContent.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-white/75">
                {commitmentContent.body}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <BidButton className="!px-8 !py-4">
                  Partner With Us
                </BidButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
