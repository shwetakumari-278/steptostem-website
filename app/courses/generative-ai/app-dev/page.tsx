"use client";

import Header from "@/components/Header";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function GenAIAppDevPage() {
  const COMING_SOON = true;

  return (
    <>
      <Header />

      {COMING_SOON ? (
        <ComingSoonCard title="Gen AI for App Development" />
      ) : (
        <>{/* FULL COURSE CODE HERE IN FUTURE */}</>
      )}
    </>
  );
}