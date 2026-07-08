"use client";

import { ArrowRight } from "lucide-react";
import { useBidModal } from "@/components/bid/BidModalContext";

interface BidButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
}

export function BidButton({
  variant = "primary",
  className = "",
  children = "Request a Bid",
  showArrow = true,
}: BidButtonProps) {
  const { open } = useBidModal();

  return (
    <button
      type="button"
      onClick={open}
      className={`group ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
