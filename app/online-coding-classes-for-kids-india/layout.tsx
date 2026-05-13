import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Coding Classes for Kids in India | STEMxLearning",
  description:
    "STEMxLearning offers live 1:1 online coding classes for kids in India. Learn Python, Machine Learning, and Generative AI through real projects with a mastery-based approach. Beginner-friendly for Grade 3–12.",
  alternates: {
    canonical: "/online-coding-classes-for-kids-india",
  },
};

export default function OnlineCodingClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}