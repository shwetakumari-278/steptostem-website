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

import { curriculum } from "@/data/curriculum";
import StaticProjectCard from "@/components/StaticProjectCard";
import { courseProjects } from "@/data/courseProjects";

export default function AIBeginnerCoursePage() {
  const modules = curriculum["python-beginner"].modules;

  return (
    <>
      {/* HEADER */}
      <Header />

      

      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Python Programming for Kids (Beginner)
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Strengthen your logic, improve problem-solving, and turn ideas into code with Python
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This beginner Python course introduces students to programming
                using simple, clear syntax and hands-on projects. Children learn
                how to write real code, build programs, and develop logical
                thinking skills through fun, guided activities.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Perfect for absolute beginners. No prior coding experience
                required.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grades 4–12"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Program Delivery"
                  value="Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certification "
                  value="Provided on completion"
                />
                <Feature
                  icon={<Clock size={20} />}
                  title="Duration"
                  value="2–3 Months"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="50+ activities & Python projects"
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
  "Write complete Python programs independently with confidence",
  "Break down real-world problems and solve them logically",
  "Build structured programs using conditions, loops, and functions",
  "Work with data, files, and collections like a real programmer",
  "Design and build interactive desktop applications",
  "Understand how real software projects are structured and developed",
  "Debug errors and improve code on their own",
  "Create and present fully working Python projects"
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
                Our Python Beginner Curriculum
              </h2>

              <div className="space-y-4">
                {modules.map((module: any, index: number) => (
                  <CurriculumAccordion key={index} module={module} />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Projects students build
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courseProjects["python-beginner"].map((project, i) => (
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
        <p className="text-4xl font-bold text-gray-900">
          ₹799 <span className="text-sm font-medium text-gray-700">/ session</span>
        </p>

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
  "Best for beginners and fast learners",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-0.5" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>



            {/* TESTIMONIALS */}
            <CourseTestimonials courseId="python-beginner" />
            <CourseFAQ courseKey="pythonBeginner" />
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
          <SidebarRow text="32 live 1-on-1 instructor-led classes (60 mins each) + 3 bonus sessions (total 35 sessions)" />
          <SidebarRow text="Learn live with experienced mentors" />
          <SidebarRow text="8 detailed modules" />
          <SidebarRow text="50+ activities & projects" />

          <SidebarRow text="Lifetime access to course content" />
          <SidebarRow text="Unlimited 1:1 live doubt sessions" />
          <SidebarRow text="Live 1:1 class recordings" />
          <SidebarRow text="Regular Parent-Teacher Meetings (PTMs) after every 8 sessions" />
        </ul>
      </div>
    </div>
  );
}

function SidebarRow({ text }: any) {
  return (
    <li className="flex gap-3">
      <CheckCircle
        size={16}
        className="text-green-600 mt-0.5 shrink-0"
      />
      <span>{text}</span>
    </li>
  );
}

function PricingSection() {
  return (
    <section className="mt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choose the Right Learning Plan
        </h2>

        <p className="text-gray-600 text-lg">
          Flexible options based on your child’s learning style.
        </p>
      </div>
    </section>
  );
}
