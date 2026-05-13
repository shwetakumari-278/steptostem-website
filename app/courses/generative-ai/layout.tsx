import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative AI Classes for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 Generative AI classes for K-12 students. Learn ChatGPT, Gemini, prompt engineering, AI automation, websites, and AI agents through real projects. Beginner-friendly. No prior experience needed.",
  alternates: {
    canonical: "/courses/generative-ai",
  },
};

export default function GenerativeAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}