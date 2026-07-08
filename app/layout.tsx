import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { BidModalProvider } from "@/components/bid/BidModalProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
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

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "commercial painting",
    "drywall contractor",
    "finish carpentry",
    "commercial tile",
    "Broward County",
    "Palm Beach County",
    "commercial construction",
    "tenant improvement",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <BidModalProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </BidModalProvider>
      </body>
    </html>
  );
}
