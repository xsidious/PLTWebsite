"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ApplyModalContext } from "@/components/careers/ApplyModalContext";
import { ApplyFormFields } from "@/components/careers/ApplyFormFields";

export function ApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("");

  const open = useCallback((pos?: string) => {
    setPosition(pos ?? "");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ApplyModalContext.Provider value={{ open, close, isOpen, position }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy-dark/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Apply for a position"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl shadow-navy/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden bg-navy px-8 py-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red/20 blur-3xl" />
                <div className="relative">
                  <p className="eyebrow mb-2 !text-red">Careers</p>
                  <h2 className="font-display text-2xl font-semibold text-white">
                    Apply to join our team.
                  </h2>
                  <p className="mt-2 text-sm text-white/60">
                    {position
                      ? `Applying for: ${position}`
                      : "Tell us about yourself and the role you're after."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-y-auto p-8">
                <ApplyFormFields
                  key={position}
                  defaultPosition={position}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ApplyModalContext.Provider>
  );
}
