"use client";

import {
  Award,
  Clock,
  Video,
  Layers,
  BarChart,
  CheckCircle,
} from "lucide-react";

import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import CourseTestimonials from "@/components/CourseTestimonials";
import CurriculumAccordion from "@/components/CurriculumAccordion";

import { curriculum } from "@/data/curriculum";
import StaticProjectCard from "@/components/StaticProjectCard";
import { courseProjects } from "@/data/courseProjects";
export default function AIAdvancedCoursePage() {
  const modules = curriculum["ai-ml-advanced"].modules;

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* OFFER BAR */}
      <CourseOfferBar
        course="AI & Machine Learning (Advanced)"
        gradient="from-blue-600 to-cyan-600"
      />

      {/* MAIN */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* HERO */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  AI & Machine Learning for Teens
                </h1>
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">
                  Advanced
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Build real-world AI models using Python, ML & modern tools
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This advanced AI course is designed for students ready to go
                beyond basics. Learners work with Python, Computer Vision, NLP,
                Generative AI, and real-world datasets to build production-level
                AI applications.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Prior coding experience recommended.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grades 8–12"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Program Delivery"
                  value="Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certification by"
                  value="STEM.org"
                />
                <Feature
                  icon={<Clock size={20} />}
                  title="Duration"
                  value="5–6 Months"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="50+ advanced AI projects"
                />
              </div>
            </div>

            {/* WHAT STUDENTS LEARN */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What students will master in this course
              </h2>

              <ul className="space-y-3">
                {[
                  "Build AI models using Python",
                  "Work with Computer Vision & OpenCV",
                  "Create NLP & chatbot systems",
                  "Develop Generative AI applications",
                  "Design a real-world AI capstone project",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CURRICULUM */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Advanced AI & Machine Learning Curriculum
              </h2>

              <div className="space-y-4">
                {modules.map((module: any, index: number) => (
                  <CurriculumAccordion key={index} module={module} />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Advanced AI Projects You’ll Build
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courseProjects["ai-ml-advanced"].map((project, i) => (
                  <StaticProjectCard key={i} {...project} />
                ))}
              </div>
            </section>
            {/* PRICING */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Choose the Right Learning Plan
              </h2>

              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                Advanced AI learning with expert instructors and real-world
                projects.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* STARTER */}
                <PriceCard
                  title="Starter"
                  price="AED 37"
                  total="AED 1,776"
                  points={[
                    "1:1 expert-led sessions",
                    "Advanced AI mentorship",
                    "Flexible scheduling",
                    "Portfolio-focused learning",
                  ]}
                  gradient="from-blue-600 to-cyan-600"
                />

                {/* GROWTH */}
                <PriceCard
                  title="Growth"
                  price="AED 27"
                  total="AED 1,296"
                  points={[
                    "Small group AI classes",
                    "Peer collaboration",
                    "Weekly structured roadmap",
                    "Affordable advanced learning",
                  ]}
                  gradient="from-cyan-600 to-teal-600"
                />
              </div>
            </section>

            {/* TESTIMONIALS */}
            <CourseTestimonials courseId="ai-ml" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-blue-600 mt-1">{icon}</span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="AI & Machine Learning" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          {[
            "48 live private 1-on-1 sessions (45 mins)",
            "Expert AI & ML instructors",
            "8 advanced AI modules",
            "50+ real-world AI projects",
            "STEM.org accredited certificate",
            "AI Expert Certification",
            "Lifetime course access",
            "Unlimited 1:1 doubt sessions",
            "Class recordings",
            "Monthly progress reports",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PriceCard({ title, price, total, points, gradient }: any) {
  return (
    <div className="rounded-2xl border overflow-hidden shadow-xl">
      <div
        className={`bg-gradient-to-r ${gradient} text-white text-center py-4 text-xl font-semibold`}
      >
        {title}
      </div>

      <div className="p-6 text-center">
        <p className="text-3xl font-bold">
          {price} <span className="text-sm">/ session</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Total Course Fee: <strong>{total}</strong>
        </p>
      </div>

      <div className="border-t p-6">
        <ul className="space-y-3 text-sm text-gray-700">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex gap-3">
              <CheckCircle className="text-green-600 mt-0.5" size={16} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
