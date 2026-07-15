"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { applySchema, type ApplyFormData } from "@/lib/apply";
import { openPositions } from "@/lib/site";

interface ApplyFormFieldsProps {
  defaultPosition?: string;
  onSuccess?: () => void;
}

export function ApplyFormFields({
  defaultPosition = "",
  onSuccess,
}: ApplyFormFieldsProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: { position: defaultPosition },
  });

  async function onSubmit(data: ApplyFormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
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
          Application Sent
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Thank you for your interest in joining PDT Unlimited. Our team will
          review your application and reach out soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-8"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="apply-name"
            {...register("name")}
            className={inputClass}
            placeholder="John Smith"
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="apply-position" className={labelClass}>
            Position *
          </label>
          <select
            id="apply-position"
            {...register("position")}
            className={`${inputClass} appearance-none`}
            defaultValue={defaultPosition}
          >
            <option value="" disabled>
              Select a position
            </option>
            {openPositions.map((p) => (
              <option key={p.title} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Other / General">Other / General</option>
          </select>
          {errors.position && (
            <p className={errorClass}>{errors.position.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-email" className={labelClass}>
            Email *
          </label>
          <input
            id="apply-email"
            type="email"
            {...register("email")}
            className={inputClass}
            placeholder="john@email.com"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="apply-phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="apply-phone"
            type="tel"
            {...register("phone")}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="apply-experience" className={labelClass}>
          Years of Experience
        </label>
        <input
          id="apply-experience"
          {...register("experience")}
          className={inputClass}
          placeholder="e.g. 5 years"
        />
      </div>

      <div>
        <label htmlFor="apply-message" className={labelClass}>
          About You *
        </label>
        <textarea
          id="apply-message"
          rows={4}
          {...register("message")}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your experience, availability, and why you'd be a great fit..."
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
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Application
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted">
        We review every application and respond promptly.
      </p>
    </form>
  );
}
