"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { courseTestimonials } from "@/data/courseTestimonials";

export default function CourseTestimonials() {
  return (
    <section className="mt-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 text-yellow-500">
          <Star fill="currentColor" />
          <span className="font-semibold text-lg">
            {courseTestimonials.averageRating}
          </span>
          <span className="text-gray-500 text-sm">
            / 5 · {courseTestimonials.totalReviews}
          </span>
        </div>

        <h2 className="text-3xl font-bold mt-3">
          Loved by students & trusted by parents
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {courseTestimonials.testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* RATING */}
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

            <p className="text-gray-700 text-sm leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
