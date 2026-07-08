"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useBidModal } from "@/components/bid/BidModalContext";
import { siteConfig } from "@/lib/site";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const { open, isOpen } = useBidModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-border bg-cream/95 p-3 backdrop-blur-xl lg:hidden"
        >
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy"
            aria-label="Call us"
          >
            <Phone size={16} />
            Call
          </a>
          <button
            type="button"
            onClick={open}
            className="btn-primary flex-1 justify-center"
          >
            Request a Bid
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
