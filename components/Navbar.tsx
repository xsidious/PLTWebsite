"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useBidModal } from "@/components/bid/BidModalContext";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openBid } = useBidModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "border-border bg-cream/90"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-wide grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <span className="relative block h-10 w-[124px] md:h-12 md:w-[150px]">
            <Image
              src="/logo.png"
              alt="PDT Unlimited"
              fill
              sizes="150px"
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-navy/70 hover:text-navy"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <button
            type="button"
            onClick={openBid}
            className="btn-primary !py-2.5 !text-xs"
          >
            Request a Bid
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-10 col-start-3 justify-self-end rounded-lg p-2 lg:hidden ${
            scrolled || mobileOpen ? "text-navy" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-40 bg-cream pt-24 lg:hidden"
        >
          <div className="flex flex-col gap-6 px-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-semibold text-navy"
              >
                {link.label}
              </motion.a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openBid();
              }}
              className="btn-primary mt-4 w-full justify-center text-center"
            >
              Request a Bid
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
