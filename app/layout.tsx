import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { BidModalProvider } from "@/components/bid/BidModalProvider";
import { ApplyModalProvider } from "@/components/careers/ApplyModalProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, seoDefaults } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const verification: Metadata["verification"] = {};
if (process.env.GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.GOOGLE_SITE_VERIFICATION;
}
if (process.env.BING_SITE_VERIFICATION) {
  verification.other = {
    "msvalidate.01": process.env.BING_SITE_VERIFICATION,
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: seoDefaults.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoDefaults.description,
  keywords: seoDefaults.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: absoluteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "construction",
  classification: "Commercial Finishing Contractor",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl(),
    siteName: siteConfig.name,
    title: seoDefaults.title,
    description: seoDefaults.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.title,
    description: seoDefaults.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Wellington",
    "geo.position": "26.6618;-80.2684",
    ICBM: "26.6618, -80.2684",
  },
  ...(Object.keys(verification).length > 0 ? { verification } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b1b33" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1b33" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <BidModalProvider>
          <ApplyModalProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </ApplyModalProvider>
        </BidModalProvider>
      </body>
    </html>
  );
}
