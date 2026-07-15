"use client";

import { ArrowRight, Send } from "lucide-react";
import { useApplyModal } from "@/components/careers/ApplyModalContext";

interface ApplyButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
  position?: string;
  icon?: "arrow" | "send";
}

export function ApplyButton({
  variant = "primary",
  className = "",
  children = "Click to Apply",
  position,
  icon = "send",
}: ApplyButtonProps) {
  const { open } = useApplyModal();

  return (
    <button
      type="button"
      onClick={() => open(position)}
      className={`group ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children}
      {icon === "send" ? (
        <Send size={16} />
      ) : (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
