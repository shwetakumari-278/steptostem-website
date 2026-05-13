import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Python Programming Course for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 Advanced Python classes for K-12 students. Master OOP, data structures, data analysis, and build real-world applications through a mastery-based learning approach.",
  alternates: {
    canonical: "/courses/ai-ml/advanced",
  },
};

export default function PythonAdvancedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}