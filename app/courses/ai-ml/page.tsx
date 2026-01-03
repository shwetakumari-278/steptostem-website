"use client";

import {
  Star,
  Users,
  Video,
  BookOpen,
  Layers,
  BarChart,
  CalendarCheck,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import CourseFeatureRow from "@/components/CourseFeatureRow";
import CourseTestimonials from "@/components/CourseTestimonials";

import BookDemoButton from "@/components/BookDemoButton";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import { courses } from "@/data/courses";

export default function AICoursePage() {
  return (
    <>
      <Header />

      <CourseOfferBar
        course="AI & Machine Learning"
        gradient="from-purple-600 to-pink-600"
      />
      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
              Courses &gt; AI & Machine Learning
            </p>
            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI & Machine Learning for Kids & Teens
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Loved by students & trusted by parents
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This course introduces students to Artificial Intelligence and
                Machine Learning through real-world projects, games, and
                hands-on activities. Students learn how AI systems like
                chatbots, face recognition, and recommendation engines actually
                work.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Designed to build confidence, creativity, and future-ready
                thinking.
              </p>
            </div>
            <CourseFeatureRow course={courses} />

            <div className="mt-10 flex items-center justify-between gap-6 text-sm text-gray-700">
              {/* STUDENTS */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">1000+</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
              </div>

              {/* COUNTRIES */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">4+</p>
                  <p className="text-xs text-gray-500">Countries</p>
                </div>
              </div>

              {/* GOOGLE */}
              <a
                href="https://www.google.com/search?q=StepToSTEM+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col leading-tight hover:opacity-80 transition"
              >
                <span className="text-lg font-semibold">Google</span>
                <span className="flex items-center gap-0.5 text-yellow-400 text-sm leading-none">
                  ★★★★★
                </span>
                <span className="text-gray-500 text-xs">
                  Reviews coming soon
                </span>
              </a>

              {/* TRUSTPILOT */}
              <a
                href="https://www.trustpilot.com/review/steptostem.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col leading-tight hover:opacity-80 transition"
              >
                <span className="flex items-center gap-1 font-semibold">
                  <span className="text-green-600">★</span>
                  Trustpilot
                </span>
                <div className="flex gap-1 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-green-500 text-green-600 text-xs"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs">
                  Reviews coming soon
                </span>
              </a>
            </div>

            {/* WHAT IS AI */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What does AI mean for students?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Artificial Intelligence helps machines learn from data and make
                smart decisions. In this course, students explore AI concepts
                through visuals, interactive tools, and guided projects —
                without heavy math or complex theory.
              </p>
            </section>
            {/* LEARNING OUTCOMES */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                After completing this course, your child can:
              </h2>

              <ul className="space-y-3">
                {[
                  "Build simple AI-powered games and applications",
                  "Create chatbots and intelligent assistants",
                  "Understand how AI learns from data",
                  "Explore how AI sees images and understands language",
                  "Apply AI concepts in school projects and competitions",
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
                  text="Introduction to AI & Human Intelligence"
                />
                <Curriculum
                  title="Module 2"
                  text="Data, Patterns & Machine Learning Basics"
                />
                <Curriculum
                  title="Module 3"
                  text="Neural Networks & Decision Making"
                />
                <Curriculum
                  title="Module 4"
                  text="Computer Vision & Image Recognition"
                />
                <Curriculum
                  title="Module 5"
                  text="Natural Language Processing & Chatbots"
                />
                <Curriculum
                  title="Module 6"
                  text="Capstone AI Project & Presentation"
                />
              </div>
            </section>
            {/* PROJECTS */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Projects students build
              </h2>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>AI Chatbot</li>
                <li>Image Classification System</li>
                <li>Smart Recommendation Engine</li>
              </ul>
            </section>
            {/* STEPTOSTEM GROWTH PATH */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                The StepToSTEM Learning Path
              </h2>

              <p className="text-gray-700 mb-8 max-w-3xl">
                At StepToSTEM, we don’t just teach a single course. We guide
                students through a structured growth journey — helping them
                build skills, confidence, and leadership over time.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {/* Stage 1 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">Stage 1: Explorer</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students begin their journey by understanding core concepts
                    through fun, interactive learning.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>AI fundamentals</li>
                    <li>Logical thinking</li>
                    <li>Curiosity-driven learning</li>
                  </ul>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">Stage 2: Builder</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students start building real projects and applying concepts
                    independently.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>AI mini-projects</li>
                    <li>Chatbots & tools</li>
                    <li>Problem-solving skills</li>
                  </ul>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">Stage 3: Innovator</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students learn to think creatively and apply AI to
                    real-world challenges.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>Advanced projects</li>
                    <li>Hackathon preparation</li>
                    <li>Portfolio building</li>
                  </ul>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">Stage 4: Leader</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students gain confidence to lead, mentor, and showcase their
                    work.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>Competitions & showcases</li>
                    <li>Mentoring juniors</li>
                    <li>Future-ready mindset</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* PRICING PLANS */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Choose the Right Learning Plan
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                Flexible learning options designed to match your child’s pace,
                learning style, and goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* STARTER PLAN */}
                <div className="rounded-2xl border border-red-300 bg-red-50 overflow-hidden">
                  <div className="bg-red-500 text-white text-center py-4 text-xl font-semibold">
                    Starter
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold">
                      ₹ 1,120{" "}
                      <span className="text-sm font-medium">/ session</span>
                    </p>

                    <p className="text-gray-500 line-through mt-1">₹ 1,600</p>

                    <span className="inline-block mt-2 px-4 py-1 rounded-full bg-white text-red-600 text-sm font-medium">
                      30% off
                    </span>

                    <p className="text-sm text-gray-600 mt-4">
                      ₹ 8,960 / month
                    </p>
                    <p className="text-xs text-gray-500">
                      (total discounted course fee: ₹ 53,760)
                    </p>

                    <div className="mt-6">
                      <BookDemoButton course="AI & Machine Learning" />
                    </div>
                  </div>

                  <div className="border-t p-6">
                    <h4 className="font-semibold mb-4">
                      1:1 Personalized Learning
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <PricingPoint text="1:1 live personalized AI & ML sessions" />
                      <PricingPoint text="Dedicated mentor for individual attention" />
                      <PricingPoint text="Flexible class scheduling" />
                      <PricingPoint text="Focused learning pace tailored to your child" />
                      <PricingPoint text="Best for beginners & fast learners" />
                    </ul>
                  </div>
                </div>

                {/* GROWTH PLAN */}
                <div className="rounded-2xl border border-purple-300 bg-purple-50 overflow-hidden">
                  <div className="bg-purple-500 text-white text-center py-4 text-xl font-semibold">
                    Growth
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-3xl font-bold">
                      ₹ 900{" "}
                      <span className="text-sm font-medium">/ session</span>
                    </p>

                    <p className="text-gray-500 line-through mt-1">₹ 1,200</p>

                    <span className="inline-block mt-2 px-4 py-1 rounded-full bg-white text-purple-600 text-sm font-medium">
                      25% off
                    </span>

                    <p className="text-sm text-gray-600 mt-4">
                      ₹ 7,200 / month
                    </p>
                    <p className="text-xs text-gray-500">
                      (total discounted course fee: ₹ 43,200)
                    </p>

                    <div className="mt-6">
                      <BookDemoButton course="AI & Machine Learning" />
                    </div>
                  </div>

                  <div className="border-t p-6">
                    <h4 className="font-semibold mb-4">
                      Small Group Learning (2–3 students)
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <PricingPoint text="Live interactive group classes" />
                      <PricingPoint text="Peer learning with guided mentor support" />
                      <PricingPoint text="Structured weekly schedule" />
                      <PricingPoint text="Engaging discussions & collaborative projects" />
                      <PricingPoint text="Budget-friendly learning option" />
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <CourseTestimonials />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:sticky lg:top- h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
              <BookDemoButton course="AI & Machine Learning" variant="inline" />

              <h3 className="font-bold text-lg mt-6 mb-4">
                This course includes:
              </h3>

              <ul className="space-y-4 text-sm text-gray-700">
                <SidebarRow
                  icon={<Video size={16} />}
                  text="Live instructor-led AI & ML classes"
                />
                <SidebarRow
                  icon={<Users size={16} />}
                  text="Option for 1:1 or small group learning"
                />
                <SidebarRow
                  icon={<BookOpen size={16} />}
                  text="Structured curriculum with real-world projects"
                />
                <SidebarRow
                  icon={<Layers size={16} />}
                  text="50+ hands-on activities & mini projects"
                />
                <SidebarRow
                  icon={<Award size={16} />}
                  text="Certificate after course completion"
                />
                <SidebarRow
                  icon={<BarChart size={16} />}
                  text="Progress tracking & parent updates"
                />
                <SidebarRow
                  icon={<CalendarCheck size={16} />}
                  text="Flexible scheduling options"
                />
              </ul>
            </div>
          </div>
        </div>

        <BookDemoButton course="AI & Machine Learning" />
      </div>
    </>
  );
}

/* SMALL COMPONENTS */

function TrustItem({ icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-purple-600">{icon}</div>
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
function FeatureCard({ icon, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-sm border">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
function SidebarRow({ icon, text }: any) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-0.5">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
function PricingPoint({ text }: any) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="text-green-600 mt-0.5" size={16} />
      <span>{text}</span>
    </li>
  );
}
