"use client";

import ComingSoonCard from "@/components/ComingSoonCard";

export default function MLPage() {
  const COMING_SOON = true;

  if (COMING_SOON) {
    return <ComingSoonCard title="Machine Learning Course" />;
  }

  return <>{/* KEEP YOUR FULL ML COURSE CODE HERE */}</>;
}
