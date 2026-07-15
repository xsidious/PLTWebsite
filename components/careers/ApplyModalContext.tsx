"use client";

import { createContext, useContext } from "react";

interface ApplyModalContextValue {
  open: (position?: string) => void;
  close: () => void;
  isOpen: boolean;
  position: string;
}

export const ApplyModalContext = createContext<ApplyModalContextValue | null>(
  null,
);

export function useApplyModal() {
  const ctx = useContext(ApplyModalContext);
  if (!ctx) {
    throw new Error("useApplyModal must be used within an ApplyModalProvider");
  }
  return ctx;
}
