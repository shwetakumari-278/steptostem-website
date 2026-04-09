"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { locations } from "@/data/locations";
import CourseOfferBar from "@/components/CourseOfferBar";

export default function LocationsPage() {
  return (
    <>
      <Header />
      <CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />
      {/* Brand Intro */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          STEMxLearning <span className="gradient-text">Worldwide</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          STEMxLearning offers live online coding and AI programs for students
          across multiple countries. Choose your location to explore programs
          near you.
        </p>
      </section>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 text-center mb-3">
            Available Locations
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Choose Your <span className="gradient-text">Country</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(locations).map(([slug, country]) => (
              <Link key={slug} href={`/locations/${slug}`}>
                <div
                  className="
                        cursor-pointer
                        bg-white/80 backdrop-blur-sm
                        rounded-2xl p-8
                        shadow-lg
                        hover:-translate-y-1 hover:shadow-2xl
                        transition-all duration-300
                        text-center border
                    "
                >
                  <h2 className="text-2xl font-bold mb-2">{country.name}</h2>
                  <p className="text-gray-600">
                    {Object.keys(country.states).length}+ states
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
