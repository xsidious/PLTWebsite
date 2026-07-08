import Image from "next/image";
import { BidButton } from "@/components/bid/BidButton";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-wide section-padding !pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="relative mb-6 block h-14 w-[164px]">
              <Image
                src="/logo.png"
                alt="PDT Unlimited"
                fill
                sizes="164px"
                className="object-contain object-left brightness-0 invert"
              />
            </span>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Commercial Painting &bull; Drywall &bull; Finish Carpentry &bull;
              Tile
            </p>
            <p className="mt-2 text-sm text-white/50">
              Serving {siteConfig.counties.join(" & ")}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              Licensed &amp; Insured
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h3>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <BidButton
            variant="secondary"
            className="!border-white/20 !bg-white/5 !py-2.5 !text-xs !text-white hover:!bg-white/10"
          >
            Request a Bid
          </BidButton>
        </div>
      </div>
    </footer>
  );
}
