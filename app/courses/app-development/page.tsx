"use client";

import {
  Star,
  Users,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";

export default function AppDevelopmentCoursePage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500">Courses &gt; App Development</p>

          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              App Development for Kids & Teens
            </h1>

            <div className="flex items-center gap-3 text-sm mb-4">
              <div className="flex text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <span className="text-gray-600">
                Build real mobile apps from idea to launch
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              This course teaches students how mobile applications are designed
              and built. Students learn to create interactive, real-world apps
              while understanding how popular apps actually work behind the
              scenes.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Hands-on, beginner-friendly, and focused on real app creation.
            </p>
          </div>

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">
            <TrustItem icon={<Users />} title="Live Classes" />
            <TrustItem icon={<Award />} title="Certificate on Completion" />
            <TrustItem icon={<Clock />} title="12-Week Structured Program" />
            <TrustItem icon={<ShieldCheck />} title="Safe for Kids" />
          </div>

          {/* WHAT IS APP DEV */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              What does App Development mean for students?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              App Development helps students understand how mobile apps are
              designed, structured, and built. Students learn through visual
              tools and projects — without complex theory — focusing on logic,
              design, and user experience.
            </p>
          </section>

          {/* LEARNING OUTCOMES */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              After completing this course, your child can:
            </h2>

            <ul className="space-y-3">
              {[
                "Design interactive mobile app screens",
                "Build functional mobile apps",
                "Understand app logic and navigation",
                "Create apps using real-world ideas",
                "Present and showcase app projects confidently",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CURRICULUM */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Course curriculum</h2>

            <div className="space-y-4">
              <Curriculum title="Module 1" text="Introduction to Mobile Apps" />
              <Curriculum title="Module 2" text="UI Design & App Screens" />
              <Curriculum
                title="Module 3"
                text="User Interaction & Navigation"
              />
              <Curriculum title="Module 4" text="App Logic & Functionality" />
              <Curriculum title="Module 5" text="Testing & Improving Apps" />
              <Curriculum
                title="Module 6"
                text="Final App Project & Showcase"
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Projects students build</h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal Utility App</li>
              <li>Quiz or Game App</li>
              <li>Final Custom Mobile App</li>
            </ul>
          </section>

          {/* STEPTOSTEM LEARNING PATH */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              The StepToSTEM Learning Path
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              At StepToSTEM, students grow from beginners to confident creators
              — building apps, confidence, and leadership skills along the way.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <Stage
                title="Stage 1: Explorer"
                color="border-orange-500"
                desc="Students explore how mobile apps work through guided activities."
                points={[
                  "Understanding apps",
                  "UI basics",
                  "Creative thinking",
                ]}
              />

              <Stage
                title="Stage 2: Builder"
                color="border-amber-500"
                desc="Students start building simple, functional apps."
                points={[
                  "App screens",
                  "Navigation logic",
                  "Hands-on projects",
                ]}
              />

              <Stage
                title="Stage 3: Innovator"
                color="border-yellow-500"
                desc="Students design creative apps solving real problems."
                points={[
                  "Advanced app features",
                  "User experience focus",
                  "Portfolio apps",
                ]}
              />

              <Stage
                title="Stage 4: Leader"
                color="border-red-500"
                desc="Students gain confidence to present and guide others."
                points={[
                  "App showcases",
                  "Mentoring juniors",
                  "Future-ready mindset",
                ]}
              />
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
            <BookDemoButton course="App Development" variant="inline" />

            <h3 className="font-bold text-lg">What your child gets</h3>

            <ul className="space-y-3 text-sm">
              <SidebarItem text="Live, instructor-led sessions" />
              <SidebarItem text="Hands-on, project-based learning" />
              <SidebarItem text="Certificate after course completion" />
              <SidebarItem text="Beginner-friendly teaching approach" />
              <SidebarItem text="Mentor guidance & doubt support" />
              <SidebarItem text="Access to learning resources" />
            </ul>
          </div>
        </div>
      </div>
      <BookDemoButton course="App Development" />
    </div>
  );
}

/* SMALL COMPONENTS */

function TrustItem({ icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-orange-600">{icon}</div>
      <span className="font-medium">{title}</span>
    </div>
  );
}

function Curriculum({ title, text }: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <strong>{title}:</strong> {text}
    </div>
  );
}

function SidebarItem({ text }: any) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle className="text-green-600 mt-0.5" size={16} />
      <span>{text}</span>
    </li>
  );
}

function Stage({ title, desc, points, color }: any) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow border-t-4 ${color}`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{desc}</p>
      <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
        {points.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
