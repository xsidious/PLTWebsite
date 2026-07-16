import type { Metadata } from "next";
import { Careers } from "@/components/Careers";
import { Commitment } from "@/components/Commitment";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { WhyUs } from "@/components/WhyUs";
import { seoDefaults } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoDefaults.title,
  description: seoDefaults.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <WhyUs />
        <Industries />
        <ServiceArea />
        <WhoWeWorkWith />
        <Commitment />
        <Careers />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
