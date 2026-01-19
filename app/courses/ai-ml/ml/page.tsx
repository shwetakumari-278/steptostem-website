"use client";

import Header from "@/components/Header";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function MLPage() {
  const COMING_SOON = true;

  return (
    <>
      <Header />

      {COMING_SOON ? (
        <ComingSoonCard title="Machine Learning Course" />
      ) : (
        <>{/* KEEP YOUR FULL ML COURSE CODE HERE */}</>
      )}
    </>
  );
}
