"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { bidSchema, type BidFormData } from "@/lib/bid";
import { projectTypes } from "@/lib/site";

interface BidFormFieldsProps {
  onSuccess?: () => void;
}

export function BidFormFields({ onSuccess }: BidFormFieldsProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BidFormData>({
    resolver: zodResolver(bidSchema),
  });

  async function onSubmit(data: BidFormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/bid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:border-navy/30 focus:outline-none focus:ring-2 focus:ring-navy/10";
  const labelClass = "mb-1.5 block text-sm font-medium text-navy";
  const errorClass = "mt-1 text-xs text-red";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 px-8 py-14 text-center">
        <CheckCircle className="mb-4 text-green-600" size={44} />
        <h3 className="font-display text-2xl font-semibold text-navy">
          Request Submitted
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Thank you for your interest. Our team will review your project details
          and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-8"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            {...register("name")}
            className={inputClass}
            placeholder="John Smith"
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company *
          </label>
          <input
            id="company"
            {...register("company")}
            className={inputClass}
            placeholder="ABC Construction"
          />
          {errors.company && (
            <p className={errorClass}>{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={inputClass}
            placeholder="john@company.com"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project Type *
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className={`${inputClass} appearance-none`}
          defaultValue=""
        >
          <option value="" disabled>
            Select project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className={errorClass}>{errors.projectType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project Details *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project scope, location, timeline, and any specific requirements..."
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red/20 bg-red/5 px-4 py-3 text-sm text-red">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Bid Request
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted">
        We typically respond within one business day.
      </p>
    </form>
  );
}
