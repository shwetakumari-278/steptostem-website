import type { Metadata } from "next";
import RobloxCourseClient from "@/components/RobloxCourseClient";

export const metadata: Metadata = {
  title: "Roblox Game Development Course Coming Soon | STEMxLearning",
  description: "The STEMxLearning Roblox game development course for kids and teens is currently under preparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.stemxlearning.com/courses/game-design/roblox/" },
};

export default function RobloxCoursePage() {
  return <RobloxCourseClient />;
}