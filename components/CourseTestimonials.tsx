"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { courseTestimonials } from "@/data/courseTestimonials";

export default function CourseTestimonials({
  courseId,
}: {
  courseId: keyof typeof courseTestimonials;
}) {
  const data = courseTestimonials[courseId];

  if (!data) return null;

  return (
    <section className="mt-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 text-yellow-500">
          <Star fill="currentColor" />
          <span className="font-semibold text-lg">{data.averageRating}</span>
          <span className="text-gray-500 text-sm">
            / 5 · {data.totalReviews}
          </span>
        </div>

        <h2 className="text-3xl font-bold mt-3">
          Loved by students & trusted by parents
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white border rounded-2xl pt-16 px-6 pb-6 shadow-sm"
          >
            {/* AVATAR */}
            <div className="absolute -top-10 left-6">
              <div className="h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-lg">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {Array.from({ length: Math.floor(t.rating) }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {t.rating}
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
