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

export default function WebDevCoursePage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500">Courses &gt; Web Development</p>

          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web Development for Kids & Teens
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
                Build real websites from scratch
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              This course teaches students how real websites work by designing
              and building responsive, interactive websites using modern tools
              like HTML, CSS, and JavaScript.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Beginner-friendly, hands-on, and project-focused learning.
            </p>
          </div>

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">
            <TrustItem icon={<Users />} title="Live Classes" />
            <TrustItem icon={<Award />} title="Certificate on Completion" />
            <TrustItem icon={<Clock />} title="12-Week Structured Program" />
            <TrustItem icon={<ShieldCheck />} title="Safe for Kids" />
          </div>

          {/* WHAT IS WEB DEV */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              What does Web Development mean for students?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Web Development teaches students how the internet works and how
              websites are created. Students learn by building real projects —
              without heavy theory — focusing on creativity, logic, and problem
              solving.
            </p>
          </section>

          {/* LEARNING OUTCOMES — SAME STYLE AS AI-ML */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              After completing this course, your child can:
            </h2>

            <ul className="space-y-3">
              {[
                "Create real, functional websites",
                "Design responsive layouts for all devices",
                "Understand HTML, CSS & JavaScript",
                "Build interactive web features",
                "Showcase projects online with confidence",
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
              <Curriculum
                title="Module 1"
                text="Introduction to the Web & Internet"
              />
              <Curriculum
                title="Module 2"
                text="HTML – Structure of Websites"
              />
              <Curriculum title="Module 3" text="CSS – Styling & Layouts" />
              <Curriculum title="Module 4" text="JavaScript – Interactivity" />
              <Curriculum title="Module 5" text="Responsive Design" />
              <Curriculum
                title="Module 6"
                text="Final Personal Website Project"
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Projects students build</h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal Portfolio Website</li>
              <li>Interactive Quiz Website</li>
              <li>School Project Website</li>
            </ul>
          </section>

          {/* STEPTOSTEM LEARNING PATH — IDENTICAL STRUCTURE */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              The StepToSTEM Learning Path
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              At StepToSTEM, we guide students through a structured growth
              journey — building technical skills, confidence, and leadership
              over time.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <Stage
                title="Stage 1: Explorer"
                color="border-blue-500"
                desc="Students begin their journey by understanding how the web works."
                points={[
                  "Internet basics",
                  "HTML fundamentals",
                  "Curiosity-driven learning",
                ]}
              />

              <Stage
                title="Stage 2: Builder"
                color="border-blue-600"
                desc="Students start building real websites independently."
                points={[
                  "HTML & CSS projects",
                  "JavaScript basics",
                  "Hands-on practice",
                ]}
              />

              <Stage
                title="Stage 3: Innovator"
                color="border-green-500"
                desc="Students design creative, real-world web solutions."
                points={[
                  "Responsive layouts",
                  "Interactive features",
                  "Portfolio projects",
                ]}
              />

              <Stage
                title="Stage 4: Leader"
                color="border-orange-500"
                desc="Students gain confidence to present and guide others."
                points={[
                  "Project showcases",
                  "Mentoring juniors",
                  "Future-ready mindset",
                ]}
              />
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR — SAME AS AI-ML */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
            <BookDemoButton course="Web Development" variant="inline" />

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
      <BookDemoButton course="Web Development" />
    </div>
  );
}

/* SMALL COMPONENTS */

function TrustItem({ icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
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
