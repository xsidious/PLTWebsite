"use client";

import {
  Building,
  HardHat,
  Home,
  Key,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/Reveal";
import { audiences } from "@/lib/site";

const audienceIcons: LucideIcon[] = [
  HardHat,
  Wrench,
  Building,
  Home,
  Key,
  Users,
];

export function WhoWeWorkWith() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">Who We Work With</p>
          <h2 className="heading-section max-w-2xl">
            Partners who demand reliability at scale.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = audienceIcons[i];
            return (
              <StaggerItem key={audience}>
                <div className="card-surface group flex items-center gap-4 p-6 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-red/10 group-hover:text-red">
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-navy">{audience}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
