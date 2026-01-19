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
  User,
} from "lucide-react";
import CourseFAQ from "@/components/CourseFAQ";
import Header from "@/components/Header";
import CourseTestimonials from "@/components/CourseTestimonials";
import ComingSoonCard from "@/components/ComingSoonCard";

import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import { curriculum } from "@/data/curriculum";
export default function AppDevCoursePage() {
  const courseKey = "app-development";
  const COMING_SOON = true;

  return (
    <>
      <Header />

      {COMING_SOON ? (
        <ComingSoonCard title="App Development Course" />
      ) : (
        <>
          <CourseOfferBar
            course="App Development"
            gradient="from-orange-600 to-red-600"
          />
          <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-2 space-y-10">
                {/* BREADCRUMB */}
                <p className="text-sm text-gray-500">
                  Courses &gt; App Development
                </p>

                {/* HERO */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    App Development for Kids & Teens
                  </h1>

                  <p className="text-sm text-gray-500 mb-4 tracking-wide">
                    Build real mobile apps from idea to launch
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    This course teaches students how mobile applications are
                    designed and built. Learners create real apps while
                    understanding logic, design, and user experience.
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Hands-on, beginner-friendly, and focused on real app
                    creation.
                  </p>
                </div>

                {/* FEATURE ROW – FLAT (NO BOX) */}
                <div className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                    <div className="flex items-start gap-3">
                      <BarChart className="text-blue-500 mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Suitable for</p>
                        <p className="text-xs text-gray-600">Grade 3–8</p>
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
                        <p className="text-xs text-gray-600">4–5 Months</p>
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

                {/* WHAT IS APP DEV */}
                <section>
                  <h2 className="text-2xl font-bold mb-3">
                    What does App Development mean for students?
                  </h2>
                  <p className="text-gray-700">
                    Students learn how real mobile apps are designed and built
                    using logic, creativity, and problem-solving — without
                    complex theory.
                  </p>
                </section>

                {/* LEARNING OUTCOMES */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    After completing this course, your child can:
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Design interactive app screens",
                      "Build functional mobile apps",
                      "Understand navigation and app logic",
                      "Create apps based on real ideas",
                      "Confidently present app projects",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="text-green-600 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">
                    {curriculum[courseKey].title}
                  </h2>

                  <div className="space-y-4">
                    {curriculum[courseKey].modules.map((module) => (
                      <CurriculumAccordion
                        key={module.module}
                        module={module}
                      />
                    ))}
                  </div>
                </section>

                {/* PROJECTS */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">
                    Projects Students Build
                  </h2>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {APP_DEV_PROJECTS.map((p, i) => (
                      <div key={i} className="bg-white rounded-xl shadow p-4">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-36 w-full object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-sm text-gray-600">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* STEMxLearning LEARNING PATH */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    The STEMxLearning Learning Path
                  </h2>

                  <p className="text-gray-700 mb-8 max-w-3xl">
                    At STEMxLearning, students grow from beginners to confident
                    app creators through guided, hands-on learning and
                    real-world projects.
                  </p>

                  <div className="grid md:grid-cols-4 gap-6">
                    <Stage
                      title="Stage 1: Explorer"
                      color="border-orange-500"
                      desc="Students explore how mobile apps work through simple, visual activities."
                      points={[
                        "Understanding mobile apps",
                        "UI basics & layouts",
                        "Creative thinking",
                      ]}
                    />

                    <Stage
                      title="Stage 2: Builder"
                      color="border-amber-500"
                      desc="Students start building functional mobile apps step by step."
                      points={[
                        "App screens & navigation",
                        "User interactions",
                        "Hands-on mini apps",
                      ]}
                    />

                    <Stage
                      title="Stage 3: Innovator"
                      color="border-yellow-500"
                      desc="Students design creative apps that solve real-world problems."
                      points={[
                        "Advanced app features",
                        "User experience focus",
                        "Portfolio-ready apps",
                      ]}
                    />

                    <Stage
                      title="Stage 4: Leader"
                      color="border-red-500"
                      desc="Students gain confidence to present apps and guide others."
                      points={[
                        "App showcases",
                        "Explaining app logic",
                        "Future-ready mindset",
                      ]}
                    />
                  </div>
                </section>

                {/* PRICING */}
                <PricingSection />
                <CourseTestimonials courseId="app-development" />
                <CourseFAQ courseKey="appDevelopment" />
              </div>

              {/* RIGHT SIDEBAR */}
              <RightSidebar />
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* COMPONENTS */

function FeatureCard({ icon, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-xl px-5 py-4 shadow-sm">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-50 text-orange-600">
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
          price="₹900"
          oldPrice="₹1,200"
          discount="1:1 Personalized"
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
          price="₹660"
          oldPrice="₹1,000"
          discount="Small Group (2–3 students)"
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
  const bg = color === "orange" ? "bg-orange-500" : "bg-purple-500";
  const text = color === "orange" ? "text-orange-600" : "text-purple-600";

  return (
    <div className="rounded-2xl border overflow-hidden bg-white">
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

        <div className="mt-6"></div>
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
        <BookDemoButton course="App Development" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow
            icon={<Users size={16} />}
            text="36 live private 1-on-1 sessions (45 mins)"
          />
          <SidebarRow
            icon={<Video size={16} />}
            text="Live mobile app development classes"
          />
          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group learning"
          />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="App UI design & navigation logic"
          />
          <SidebarRow
            icon={<Layers size={16} />}
            text="Mini mobile app projects"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Certificate on completion"
          />
          <SidebarRow
            icon={<BarChart size={16} />}
            text="Progress tracking & mentor feedback"
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
const APP_DEV_PROJECTS = [
  {
    title: "Utility Mobile App",
    desc: "A real-world utility app like calculator, notes, or to-do list.",
    image: "/asset/app-utility.png",
  },
  {
    title: "Game or Quiz App",
    desc: "Interactive game or quiz app with score logic and UI.",
    image: "/asset/app-game-quiz.jpg",
  },
  {
    title: "Final Custom App Project",
    desc: "Student-designed mobile app built from idea to launch.",
    image: "/asset/app-final-project.jpg",
  },
];
