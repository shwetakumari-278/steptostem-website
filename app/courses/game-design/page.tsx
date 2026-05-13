import type { Metadata } from "next";
import GameDesignCourseClient from "@/components/GameDesignCourseClient";

export const metadata: Metadata = {
  title: "Game Design Course Coming Soon | STEMxLearning",
  description: "The STEMxLearning game design course for kids and teens is currently under preparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.stemxlearning.com/courses/game-design/" },
};

export default function GameDesignCoursePage() {
  return <GameDesignCourseClient />;
}