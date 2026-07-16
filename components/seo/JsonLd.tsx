import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const logoUrl = absoluteUrl("/logo.png");

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${absoluteUrl()}/#business`,
    name: siteConfig.name,
    alternateName: "PDT Unlimited LLC",
    description: siteConfig.description,
    url: absoluteUrl(),
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    email:
      siteConfig.contact.email.includes("[")
        ? undefined
        : siteConfig.contact.email,
    image: logoUrl,
    logo: logoUrl,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.addressLocality,
      addressRegion: siteConfig.contact.addressRegion,
      addressCountry: siteConfig.contact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.6618,
      longitude: -80.2684,
    },
    areaServed: siteConfig.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    knowsAbout: [
      ...siteConfig.services,
      "Tenant Improvements",
      "Multifamily Construction",
      "Commercial Renovations",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Finishing Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: siteConfig.name,
          },
        },
        position: index + 1,
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl()}/#website`,
    name: siteConfig.name,
    url: absoluteUrl(),
    description: siteConfig.description,
    publisher: {
      "@id": `${absoluteUrl()}/#business`,
    },
    inLanguage: "en-US",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl()}/#organization`,
    name: siteConfig.name,
    url: absoluteUrl(),
    logo: logoUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
