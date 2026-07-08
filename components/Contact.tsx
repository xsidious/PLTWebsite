"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BidButton } from "@/components/bid/BidButton";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-navy px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow mb-4 !text-red">Get in Touch</p>
                <h2 className="heading-section !text-white">
                  Request a bid on your next project.
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                  Tell us about your scope and timeline. Our team responds
                  promptly with a competitive, detailed bid tailored to your
                  project.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10">
                  <BidButton className="!px-8 !py-4">Request a Bid</BidButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={siteConfig.contact.phone}
                  href={siteConfig.contact.phoneHref}
                />
                <ContactCard
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={siteConfig.contact.address}
                />
                <ContactCard
                  icon={<Mail size={18} />}
                  label="Email"
                  value={siteConfig.contact.email}
                  href={`mailto:${siteConfig.contact.email}`}
                />
                <ContactCard
                  icon={<Clock size={18} />}
                  label="Response Time"
                  value="Within 1 business day"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red/20 text-red">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
