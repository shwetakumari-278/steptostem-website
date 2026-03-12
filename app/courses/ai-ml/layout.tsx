import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Programming & Machine Learning Course for Kids | STEMxLearning",
  description:
    "A structured Python and Machine Learning program where students build strong coding fundamentals, work with real datasets, and create meaningful projects. Designed to help students develop deep understanding, logical thinking, and real programming confidence step by step.",
};

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}