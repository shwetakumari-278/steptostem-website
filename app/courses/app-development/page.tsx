import type { Metadata } from "next";
import AppDevCourseClient from "@/components/AppDevCourseClient";

export const metadata: Metadata = {
  title: "App Development Course Coming Soon | STEMxLearning",
  description: "The STEMxLearning app development course for kids and teens is currently under preparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.stemxlearning.com/courses/app-development/" },
};

export default function AppDevCoursePage() {
  return <AppDevCourseClient />;
}