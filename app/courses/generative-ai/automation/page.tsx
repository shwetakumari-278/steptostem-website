"use client";

import Header from "@/components/Header";
import ComingSoonCard from "@/components/ComingSoonCard";

export default function GenAIAutomationPage() {
  const COMING_SOON = true;

  return (
    <>
      <Header />

      {COMING_SOON ? (
        <ComingSoonCard title="Gen AI for Automation" />
      ) : (
        <>{/* FULL COURSE CODE HERE IN FUTURE */}</>
      )}
    </>
  );
}