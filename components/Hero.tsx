"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin, ShieldCheck, Star } from "lucide-react";
import { BidButton } from "@/components/bid/BidButton";
import { Reveal } from "@/components/motion/Reveal";
import { heroContent, images } from "@/lib/site";

export function Hero() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const imageY = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-dark">
      <motion.div
        style={prefersReducedMotion ? undefined : { y: imageY }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <Image
          src={images.hero}
          alt="Commercial painting crew working on a job site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </motion.div>

      {/* Left-heavy overlay: dark on the left for text, clear on the right to show the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-navy-dark/10 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-red/10 blur-3xl animate-pulse-slow" />
      </div>

      <motion.div
        style={prefersReducedMotion ? undefined : { y, opacity }}
        className="container-wide relative z-10 w-full px-6 pb-32 pt-36 md:px-12 lg:px-20 lg:pt-44"
      >
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {heroContent.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              {heroContent.headline.split(". ").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 ? (
                    <>
                      .<br />
                    </>
                  ) : null}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              {heroContent.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <BidButton className="!px-8 !py-4">Request a Bid</BidButton>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Services
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-white/70">
                <ShieldCheck size={18} className="text-red" />
                <span className="text-sm font-medium">Insured and Bonded</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Star size={18} className="text-red" />
                <span className="text-sm font-medium">
                  GC-Trusted Subcontractor
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} className="text-red" />
                <span className="text-sm font-medium">
                  Broward &amp; Palm Beach County
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Premium floating card revealing over the right side of the image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 right-8 z-10 hidden max-w-xs rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md xl:right-20 xl:block"
      >
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-red" />
          <p className="text-sm font-semibold text-white">
            Based in Wellington, FL
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="font-display text-2xl font-bold text-white">4</p>
            <p className="text-xs text-white/60">Core Trades</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-white">2</p>
            <p className="text-xs text-white/60">Counties Served</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
