import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative AI with Data Science Course for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 Generative AI and Data Science classes for K-12 students. Learn data analysis, visualization, machine learning, and build real AI-powered projects. No prior experience needed.",
  alternates: {
    canonical: "/courses/gen-ai-data-science",
  },
};

export default function GenAIDataScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}