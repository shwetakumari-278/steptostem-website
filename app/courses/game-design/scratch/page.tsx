import type { Metadata } from "next";
import ScratchCourseClient from "@/components/ScratchCourseClient";

export const metadata: Metadata = {
  title: "Scratch Game Development Course Coming Soon | STEMxLearning",
  description: "The STEMxLearning Scratch game development course for kids is currently under preparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.stemxlearning.com/courses/game-design/scratch/" },
};

export default function ScratchCoursePage() {
  return <ScratchCourseClient />;
}