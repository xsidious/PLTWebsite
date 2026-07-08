"use client";

import dynamic from "next/dynamic";

const ServiceMapInner = dynamic(() => import("./ServiceMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-dark">
      <span className="text-sm text-muted">Loading map…</span>
    </div>
  ),
});

export function ServiceMap() {
  return <ServiceMapInner />;
}
