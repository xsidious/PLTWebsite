"use client";

import { BidButton } from "@/components/bid/BidButton";
import { Reveal } from "@/components/motion/Reveal";
import { ctaContent } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="section-padding !py-20">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-8 py-16 text-center md:px-16 md:py-20">
            <div className="absolute inset-0 gradient-mesh opacity-50" />
            <div className="relative">
              <h2 className="heading-section mx-auto max-w-2xl">
                {ctaContent.title}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                {ctaContent.body}
              </p>
              <div className="mt-10">
                <BidButton className="!px-8 !py-4">{ctaContent.button}</BidButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
