import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Programming for Kids (Beginner) | STEMxLearning",
  description:
    "Live 1:1 beginner Python classes for K-12 students. Learn Python programming, logical thinking, and build real projects from scratch. No prior coding experience needed.",
  alternates: {
    canonical: "/courses/ai-ml/beginner",
  },
};

export default function PythonBeginnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}