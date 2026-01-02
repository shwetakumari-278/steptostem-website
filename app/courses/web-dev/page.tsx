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

import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";

export default function WebDevCoursePage() {
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

            {/* FEATURE ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Users size={22} />}
                title="Student-Focused"
                subtitle="For kids & teens"
              />
              <FeatureCard
                icon={<Award size={22} />}
                title="Certified"
                subtitle="Completion certificate"
              />
              <FeatureCard
                icon={<Clock size={22} />}
                title="12-Week Program"
                subtitle="Structured learning"
              />
              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Safe Learning"
                subtitle="Age-appropriate"
              />
            </div>

            {/* TRUST STRIP */}
            <div className="flex flex-wrap items-center gap-10 text-sm text-gray-700">
              <a
                href="https://www.google.com/search?q=StepToSTEM+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <span className="font-semibold">Google</span>{" "}
                <span className="text-gray-500">Reviews coming soon</span>
              </a>

              <a
                href="https://www.trustpilot.com/review/steptostem.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <span className="font-semibold">
                  <span className="text-green-600">★</span> Trustpilot
                </span>{" "}
                <span className="text-gray-500">Reviews coming soon</span>
              </a>
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
                <Curriculum
                  title="Module 1"
                  text="Introduction to the Web & Internet"
                />
                <Curriculum title="Module 2" text="HTML – Website Structure" />
                <Curriculum title="Module 3" text="CSS – Styling & Layouts" />
                <Curriculum
                  title="Module 4"
                  text="JavaScript – Interactivity"
                />
                <Curriculum title="Module 5" text="Responsive Web Design" />
                <Curriculum
                  title="Module 6"
                  text="Final Personal Website Project"
                />
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

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PriceCard
          title="Starter"
          price="₹ 1,120"
          oldPrice="₹ 1,600"
          discount="30% off"
          monthly="₹ 8,960 / month"
          course="Web Development"
          points={[
            "1:1 live personalized sessions",
            "Dedicated mentor",
            "Flexible scheduling",
            "Focused individual attention",
            "Best for beginners",
          ]}
          color="blue"
        />

        <PriceCard
          title="Growth"
          price="₹ 900"
          oldPrice="₹ 1,200"
          discount="25% off"
          monthly="₹ 7,200 / month"
          course="Web Development"
          points={[
            "Small group live classes",
            "Peer learning & collaboration",
            "Structured weekly schedule",
            "Mentor-guided sessions",
            "More affordable option",
          ]}
          color="cyan"
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
            text="Live instructor-led classes"
          />
          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group learning"
          />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="Structured curriculum"
          />
          <SidebarRow
            icon={<Layers size={16} />}
            text="Hands-on web projects"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Certificate on completion"
          />
          <SidebarRow icon={<BarChart size={16} />} text="Progress tracking" />
          <SidebarRow
            icon={<CalendarCheck size={16} />}
            text="Flexible scheduling"
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
