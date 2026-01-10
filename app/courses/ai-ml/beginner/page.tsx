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

export default function AIBeginnerCoursePage() {
  const modules = curriculum["ai-ml"].modules;

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* OFFER BAR */}
      <CourseOfferBar
        course="AI & Machine Learning (Beginner)"
        gradient="from-purple-600 to-pink-600"
      />

      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI & Machine Learning for Kids (Beginner)
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Learn Artificial Intelligence through games, visuals & fun
                projects
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This beginner AI course introduces children to Artificial
                Intelligence using block-based programming and hands-on
                activities. Students explore how machines recognize images,
                text, sounds, and patterns.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                No prior coding experience required.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grades 3–7"
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
                  value="50+ activities & projects"
                />
              </div>
            </div>

            {/* WHAT STUDENTS LEARN */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What students will learn in this course
              </h2>

              <ul className="space-y-3">
                {[
                  "Understand AI fundamentals using visuals",
                  "Build AI-powered games and activities",
                  "Work with image, text, and sound recognition",
                  "Create interactive AI projects",
                  "Develop logical and creative thinking skills",
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
                Our AI & Machine Learning Curriculum
              </h2>

              <div className="space-y-4">
                {modules.map((module: any, index: number) => (
                  <CurriculumAccordion key={index} module={module} />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Projects students build (Beginner)
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courseProjects["ai-ml-beginner"].map((project, i) => (
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
                Simple, transparent pricing designed for UAE & international
                students. One-hour live sessions. 48 sessions per course.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* STARTER PLAN */}
                <div className="rounded-2xl border border-purple-300 bg-purple-50 overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 text-xl font-semibold">
                    Starter
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold">
                      AED 37{" "}
                      <span className="text-sm font-medium">/ session</span>
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      (≈ 10 USD per hour)
                    </p>

                    <p className="text-lg font-semibold mt-4">
                      48 Live Sessions
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      Total Course Fee: <strong>AED 1,776</strong>
                    </p>

                    <div className="mt-6"></div>
                  </div>

                  <div className="border-t p-6">
                    <h4 className="font-semibold mb-4">
                      1:1 Personalized Learning
                    </h4>

                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        "1:1 live instructor-led sessions",
                        "Dedicated personal mentor",
                        "Flexible scheduling",
                        "Custom learning pace",
                        "Best for beginners & fast learners",
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

                {/* GROWTH PLAN */}
                <div className="rounded-2xl border border-blue-300 bg-blue-50 overflow-hidden shadow-xl">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 text-xl font-semibold">
                    Growth
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold">
                      AED 27{" "}
                      <span className="text-sm font-medium">/ session</span>
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      (Small group learning)
                    </p>

                    <p className="text-lg font-semibold mt-4">
                      48 Live Sessions
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      Total Course Fee: <strong>AED 1,296</strong>
                    </p>

                    <div className="mt-6"></div>
                  </div>

                  <div className="border-t p-6">
                    <h4 className="font-semibold mb-4">
                      Small Group Learning (2–3 students)
                    </h4>

                    <ul className="space-y-3 text-sm text-gray-700">
                      {[
                        "Live interactive group classes",
                        "Peer learning & collaboration",
                        "Structured weekly schedule",
                        "Mentor-guided sessions",
                        "More affordable option",
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
            <CourseTestimonials courseId="ai-ml" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-purple-600 mt-1">{icon}</span>
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
          <SidebarRow text="48 live private 1-on-1 sessions (45 mins)" />
          <SidebarRow text="Learn live with expert Computer Science teacher" />
          <SidebarRow text="8 detailed modules" />
          <SidebarRow text="50+ activities & projects" />
          <SidebarRow text="STEM.org accredited certificate" />
          <SidebarRow text="AI & ML expert certificates" />
          <SidebarRow text="Lifetime access to course content" />
          <SidebarRow text="Unlimited 1:1 live doubt sessions" />
          <SidebarRow text="Live 1:1 class recordings" />
          <SidebarRow text="Monthly progress reports" />
        </ul>
      </div>
    </div>
  );
}

function SidebarRow({ text }: any) {
  return (
    <li className="flex gap-3">
      <CheckCircle size={16} className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
function PricingSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Choose the Right Learning Plan
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Flexible options based on your child’s learning style.
      </p>
    </section>
  );
}
