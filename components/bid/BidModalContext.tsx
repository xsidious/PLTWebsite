"use client";

import { createContext, useContext } from "react";

interface BidModalContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export const BidModalContext = createContext<BidModalContextValue | null>(null);

export function useBidModal() {
  const ctx = useContext(BidModalContext);
  if (!ctx) {
    throw new Error("useBidModal must be used within a BidModalProvider");
  }
  return ctx;
}
