"use client";

import {
  Award,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { images, whyUs } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  message: MessageSquare,
  award: Award,
  shield: Shield,
  building: Building2,
};

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden section-padding bg-navy text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src={images.whyUs}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      <div className="container-wide relative">
        <Reveal>
          <p className="eyebrow mb-4 !text-red">Why General Contractors Choose Us</p>
          <h2 className="heading-section max-w-3xl !text-white">
            PDT Unlimited
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div
                  className={`group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${
                    i === whyUs.length - 1 && whyUs.length % 3 !== 0
                      ? "sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red/20 text-red transition-colors group-hover:bg-red group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
