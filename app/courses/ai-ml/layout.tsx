import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python & Machine Learning Classes for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 Python and Machine Learning classes for K-12 students. Learn Python programming, data analysis, and ML through real projects with a mastery-based approach. Beginner-friendly. No prior experience needed.",
  alternates: {
    canonical: "/courses/ai-ml",
  },
};

export default function AiMlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}