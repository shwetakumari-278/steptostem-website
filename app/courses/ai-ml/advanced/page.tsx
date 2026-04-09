"use client";

import {
  Award,
  Clock,
  Video,
  Layers,
  BarChart,
  CheckCircle,
} from "lucide-react";
import CourseFAQ from "@/components/CourseFAQ";
import Header from "@/components/Header";

import BookDemoButton from "@/components/BookDemoButton";
import CourseTestimonials from "@/components/CourseTestimonials";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import CourseOfferBar from "@/components/CourseOfferBar";
import { curriculum } from "@/data/curriculum";
import StaticProjectCard from "@/components/StaticProjectCard";
import { courseProjects } from "@/data/courseProjects";
export default function AIAdvancedCoursePage() {
  const modules = curriculum["python-advanced"].modules;

  return (
    <>
      {/* HEADER */}
      <Header />
<CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />
      {/* MAIN */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* HERO */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Python Programming (Advanced)
                </h1>

                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">
                  Advanced
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Build professional level applications using advanced Python
                concepts
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This advanced Python program is designed for students who
                already know the basics and want to build real-world,
                professional-level applications. Students strengthen
                problem-solving and program design skills, learn to work with
                structured data, analyze and present information, and build
                complete applications through guided projects that reflect real
                software systems.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Prior knowledge of Python basics is required.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grades 5–12"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Program Delivery"
                  value="Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certification "
                  value="Provided on Completion"
                />
                <Feature
                  icon={<Clock size={20} />}
                  title="Duration"
                  value="2–3 Months"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="50+ advanced Python projects"
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
                  "Strengthen advanced programming logic and structured coding skills",
                  "Design scalable applications using object-oriented principles",
                  "Apply algorithmic thinking to solve complex problems",
                  "Work with structured data for analysis and insights",
                  "Prepare and organize real-world data for meaningful use",
                  "Present information clearly using visual representations",
                  "Develop complete end-to-end software applications",
                  "Build a strong portfolio of real-world projects that demonstrate advanced skills",
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
                Python Advanced Programming Curriculum
              </h2>

              <div className="space-y-4">
                {modules.map((module: any, index: number) => (
                  <CurriculumAccordion key={index} module={module} />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Advanced Python Projects You’ll Build
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courseProjects["python-advanced"].map((project, i) => (
                  <StaticProjectCard key={i} {...project} />
                ))}
              </div>
            </section>
            {/* PRICING PLANS */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Choose the Right Learning Plan
              </h2>

              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                Simple and transparent pricing. One-hour live sessions.
              </p>

              <div className="flex justify-center">
                <div className="w-full max-w-2xl rounded-2xl border border-purple-300 bg-purple-50 shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 text-xl font-semibold">
                    Starter Plan
                  </div>

                  {/* Body */}
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3">
  <p className="text-2xl font-semibold text-gray-300 line-through">
    ₹1599
  </p>
  <p className="text-4xl font-bold text-gray-900">
    ₹799{" "}
    <span className="text-sm font-medium text-gray-700">/ session</span>
  </p>
</div>

                    <p className="text-md font-semibold mt-2">
                      32 Live Sessions + 3 Bonus Sessions
                    </p>
                  </div>

                  {/* Features */}
                  <div className="border-t px-6 py-5">
                    <h4 className="font-semibold mb-4 text-left">
                      1:1 Personalized Learning
                    </h4>

                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        "1:1 live instructor-led learning",
                        "Personal mentor focused on mastery",
                        "Sessions tailored to your learning pace",
                        "Flexible scheduling for students",
                        "Best for students preparing for higher-level coding and data skills",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            className="text-green-600 mt-0.5"
                            size={16}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <CourseTestimonials courseId="python-advance" />
            <CourseFAQ courseKey="pyhtonAdvanced" />
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
        <BookDemoButton course="Python Advance " variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          {[
            "32 live 1-on-1 instructor-led classes (60 mins each) + 3 bonus sessions (total 35 sessions)",
            "Learn live with an experienced mentors",
            "8 advanced AI modules",
            "50+ real-world Python projects",

            "Lifetime course access",
            "Unlimited 1:1 doubt sessions",
            "live 1:1 Class recordings",
            "Regular Parent-Teacher Meetings (PTMs) after every 8 sessions",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle
                size={16}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PriceCard({ title, price, points, gradient }: any) {
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
