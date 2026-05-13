import type { Metadata } from "next";
import WebDevCourseClient from "@/components/WebDevCourseClient";

export const metadata: Metadata = {
  title: "Web Development Course Coming Soon | STEMxLearning",
  description: "The STEMxLearning web development course for kids and teens is currently under preparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.stemxlearning.com/courses/web-dev/" },
};

export default function WebDevCoursePage() {
  return <WebDevCourseClient />;
}