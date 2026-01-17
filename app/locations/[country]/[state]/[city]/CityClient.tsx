"use client";

import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { courses } from "@/data/courses";
import Link from "next/link";

type Props = {
  cityName: string;
};

export default function CityClient({ cityName }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <BackgroundAnimation activeCourse={null} />
      <Header />

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          STEMxLearning in <span className="gradient-text">{cityName}</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering students in {cityName} with world-class learning in Python
          & Machine learning, Web Development, Game Design, and App Development.
        </p>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Courses Available in{" "}
            <span className="gradient-text">{cityName}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(courses).map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="cursor-pointer h-full">
                  <CourseCard course={course} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
