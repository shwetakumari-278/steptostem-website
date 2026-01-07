"use client";

import {
  Users,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
  Video,
  BookOpen,
  Layers,
  BarChart,
  CalendarCheck,
} from "lucide-react";
import BookDemoButton from "@/components/BookDemoButton";
import { curriculum } from "@/data/curriculum";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import CourseTestimonials from "@/components/CourseTestimonials";

import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";

export default function WebDevCoursePage() {
  const courseKey = "web-dev";

  return (
    <>
      {/* MAIN HEADER */}
      <Header />

      {/* OFFER BAR */}
      <CourseOfferBar
        course="Web Development"
        gradient="from-blue-600 to-cyan-600"
      />

      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
              Courses &gt; Web Development
            </p>

            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Web Development for Kids & Teens
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Build real websites from scratch
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This course teaches students how real websites work by designing
                and building responsive, interactive websites using HTML, CSS,
                and JavaScript.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beginner-friendly, hands-on, and project-focused learning.
              </p>
            </div>

            {/* FEATURE ROW – FLAT (NO BOX) */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <BarChart className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Suitable for</p>
                    <p className="text-xs text-gray-600">Grade 3–12</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Program Delivery</p>
                    <p className="text-xs text-gray-600">Online</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Certification by</p>
                    <p className="text-xs text-gray-600">STEM.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-xs text-gray-600">5–6 Months</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Program</p>
                    <p className="text-xs text-gray-600">
                      50+ activities & projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
              {/* STUDENTS */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">1000+</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
              </div>

              {/* COUNTRIES */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">4+</p>
                  <p className="text-xs text-gray-500">Countries</p>
                </div>
              </div>
            </div>

            {/* WHAT IS WEB DEV */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What does Web Development mean for students?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Web Development teaches students how the internet works and how
                websites are created. Learners build real projects while
                understanding structure, design, and interactivity — without
                heavy theory.
              </p>
            </section>

            {/* LEARNING OUTCOMES */}
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
                  "Confidently showcase projects online",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
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
                {curriculum[courseKey].modules.map((mod) => (
                  <CurriculumAccordion key={mod.module} module={mod} />
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Projects students build
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal portfolio website</li>
                <li>Interactive quiz website</li>
                <li>School or hobby project website</li>
              </ul>
            </section>

            {/* STEPTOSTEM LEARNING PATH */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                The StepToSTEM Learning Path
              </h2>

              <p className="text-gray-700 mb-8 max-w-3xl">
                Students grow from beginners to confident creators through
                guided, project-based learning.
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

            {/* PRICING */}
            <PricingSection />
            <CourseTestimonials courseId="web-development" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>

        <BookDemoButton course="Web Development" />
      </div>
    </>
  );
}

/* COMPONENTS */

function FeatureCard({ icon, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-xl px-5 py-4 shadow-sm">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
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

function PricingSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Choose the Right Learning Plan
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        One-hour live sessions • 48 sessions per course • UAE-friendly pricing
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* STARTER */}
        <PriceCard
          title="Starter"
          price="AED 37 "
          oldPrice="AED 50"
          discount="1:1 Personalized"
          monthly="Total: AED 1,776 (48 sessions)"
          course="App Development"
          points={[
            "1:1 live personalized sessions",
            "Dedicated personal mentor",
            "Flexible scheduling",
            "Custom learning pace",
            "Best for beginners & fast learners",
          ]}
          color="orange"
        />

        {/* GROWTH */}
        <PriceCard
          title="Growth"
          price="AED 27"
          oldPrice="AED 40"
          discount="Small Group (2–3 students)"
          monthly="Total: AED 1,296 (48 sessions)"
          course="App Development"
          points={[
            "Live small group classes (2–3 students)",
            "Peer learning & collaboration",
            "Structured weekly schedule",
            "Mentor-guided sessions",
            "Best value learning option",
          ]}
          color="purple"
        />
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  oldPrice,
  discount,
  monthly,
  course,
  points,
  color,
}: any) {
  const bg = color === "blue" ? "bg-blue-500" : "bg-cyan-500";
  const text = color === "blue" ? "text-blue-600" : "text-cyan-600";

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <div
        className={`${bg} text-white text-center py-4 text-xl font-semibold`}
      >
        {title}
      </div>

      <div className="p-6 text-center">
        <p className="text-3xl font-bold">
          {price} <span className="text-sm">/ session</span>
        </p>
        <p className="line-through text-gray-400">{oldPrice}</p>
        <span
          className={`inline-block mt-2 px-4 py-1 rounded-full bg-gray-100 ${text} text-sm`}
        >
          {discount}
        </span>
        <p className="text-sm text-gray-600 mt-4">{monthly}</p>

        <div className="mt-6">
          <BookDemoButton course={course} />
        </div>
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

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Web Development" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow
            icon={<Video size={16} />}
            text="Live instructor-led coding classes"
          />
          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group personalized learning"
          />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="HTML, CSS, JavaScript & React curriculum"
          />
          <SidebarRow
            icon={<Layers size={16} />}
            text="Real-world websites & portfolio projects"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Certificate on completion"
          />
          <SidebarRow
            icon={<BarChart size={16} />}
            text="Progress tracking & feedback"
          />
          <SidebarRow
            icon={<ShieldCheck size={16} />}
            text="100% money-back guarantee for assured satisfaction"
          />

          <SidebarRow
            icon={<CalendarCheck size={16} />}
            text="Flexible scheduling + lifetime access"
          />
          <SidebarRow
            icon={<Video size={16} />}
            text="Unlimited live doubt-solving sessions"
          />
        </ul>
      </div>
    </div>
  );
}

function SidebarRow({ icon, text }: any) {
  return (
    <li className="flex gap-3">
      <span className="text-green-600 mt-0.5">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
