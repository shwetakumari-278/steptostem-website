"use client";

import {
  Users,
  Award,
  Clock,
  CheckCircle,
  Video,
  BookOpen,
  Layers,
  BarChart,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import CourseFAQ from "@/components/CourseFAQ";
import Link from "next/link";

import { projectsByCourse } from "@/data/projects";

import CurriculumAccordion from "@/components/CurriculumAccordion";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import CourseTestimonials from "@/components/CourseTestimonials";

import BookDemoButton from "@/components/BookDemoButton";

export default function AICoursePage() {
  const courseKey = "ai-ml";

  return (
    <>
      <Header />

      

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
                Python Programming & Machine Learning for Kids & Teens
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Learn to code with Python and build intelligent systems using
                data
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This program teaches students Python programming from scratch
                and then guides them into Machine Learning using real datasets
                and projects. Students learn how to write clean code, analyze
                data, and build smart systems step by step.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beginner-friendly, structured, and focused on real programming &
                data skills.
              </p>
            </div>

            {/* FEATURE ROW – FLAT */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grade 4–12"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Program Delivery"
                  value="Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certificates"
                  value="Provided on completion"
                />
               
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="50+ Python/Ml activities & projects"
                />
              </div>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
              <TrustStat
                icon={<Users size={18} />}
                title="70+"
                label="Students"
              />

              <TrustStat
                icon={<Layers size={18} />}
                title="4+"
                label="Countries"
              />
            </div>

            {/* WHAT IS AI */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What does Python & Machine Learning mean for students?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Python teaches students how to think logically and write
                programs. Machine Learning teaches them how to use data to make
                predictions and decisions. Together, students learn how modern
                apps, websites, and intelligent systems actually work.
              </p>
            </section>

            {/* LEARNING OUTCOMES */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                After completing this program, your child will be able to:
              </h2>

              <ul className="space-y-3">
                {[
                  "Write programs confidently using Python",
                  "Solve problems using loops, functions, and logic",
                  "Work with real datasets and clean data",
                  "Visualize data using charts and graphs",
                  "Build simple Machine Learning models",
                  "Understand how predictions and patterns work",
                  "Create real-world projects and present them confidently",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            {/* AI & ML COURSE PATHS */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Choose Your Python & Machine Learning Learning Path
              </h2>

              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Students begin with Python fundamentals, progress to advanced
                programming, and then move into Machine Learning based on their
                age and experience.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* PYTHON BEGINNER */}
                <GameCourseCard
                  title="Python Beginner"
                  subtitle="Programming Fundamentals"
                  description="Students learn Python basics, logic, variables, loops, and conditions through fun games  and mini
                  projects."
                  image="/asset/python-beginner.png"
                  href="/courses/ai-ml/beginner"
                  badge="Beginner Friendly"
                  color="from-green-500 to-emerald-500"
                />

                {/* PYTHON ADVANCED */}
                <GameCourseCard
                  title="Python Advanced"
                  subtitle="DSA • OOP • Data Analysis • Real Projects
"
                  description="Master Python through DSA, OOP, data analysis, and real-world projects. Build logic, solve problems, analyze data, and create complete applications with confidence.
"
                  image="/asset/python-advanced.png"
                  href="/courses/ai-ml/advanced"
                  badge="Advanced Track"
                  color="from-blue-600 to-indigo-600"
                />

                {/* MACHINE LEARNING */}
                <GameCourseCard
                  title="Machine Learning"
                  subtitle="Real ML Models & AI Systems"
                  description="Students learn to build machine learning models using Python, real datasets, and AI tools."
                  image="/asset/ml-course.jpg"
                  href="/courses/ai-ml/ml"
                  badge="Coming Soon
                  "
                  color="from-orange-500 to-red-500"
                />
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Projects students build
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectsByCourse["ai-ml"].map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </section>

            {/* STEMxLearning LEARNING PATH */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                The STEMxLearning Learning Path
              </h2>

              <p className="text-gray-700 mb-8 max-w-3xl">
                At STEMxLearning, we don’t just teach a single course. We guide
                students through a structured growth journey — helping them
                build skills, confidence, and leadership over time.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {/* Stage 1 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">
                    Stage 1: Python Explorer
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students learn Python basics and build confidence with
                    programming.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>Variables, loops, conditions</li>
                    <li>Logical thinking</li>
                    <li>Mini Python projects</li>
                  </ul>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">
                    Stage 2: Python Builder
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students create real applications using advanced Python
                    concepts.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>Functions & data structures</li>
                    <li>File handling</li>
                    <li>Real-world Python projects</li>
                  </ul>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">
                    Stage 3: Data & ML Analyst
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students learn to work with data and build Machine Learning
                    models.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>Data cleaning & visualization</li>
                    <li>Basic ML models</li>
                    <li>Real datasets & analysis</li>
                  </ul>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">
                    Stage 4: ML Innovator
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Students combine Python and Machine Learning to solve real
                    problems.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
                    <li>End-to-end projects</li>
                    <li>Portfolio building</li>
                    <li>Hackathon-ready skills</li>
                  </ul>
                </div>
              </div>
            </section>

            <CourseTestimonials courseId="python-ml" />
            <CourseFAQ courseKey="aiMl" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* SMALL INLINE COMPONENTS (SAME AS GAME DESIGN STYLE) */

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

function TrustStat({ icon, title, label }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold leading-none">{title}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

function ReviewBlock({ title, starsColor }: any) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="font-semibold">{title}</span>
      <span className={`${starsColor} text-sm`}>★★★★★</span>
      <span className="text-xs text-gray-500">Reviews coming soon</span>
    </div>
  );
}

function Stage({ title, color }: any) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow border-t-4 ${color}`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        Guided learning with hands-on AI projects.
      </p>
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
          

          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 Personalized Learning"
          />

        
          <SidebarRow
            icon={<Layers size={16} />}
            text="50+ hands-on Python/ML activities & projects"
          />

          <SidebarRow
            icon={<Award size={16} />}
            text="Globally recognized certificate on completion"
          />

          <SidebarRow
            icon={<BarChart size={16} />}
            text="Regular Parent-Teacher Meetings (PTMs) after every 8 sessions"
          />
          <SidebarRow
            icon={<ShieldCheck size={16} />}
            text="100% money-back guarantee for assured satisfaction"
          />

          <SidebarRow
            icon={<CalendarCheck size={16} />}
            text="Flexible scheduling + lifetime course access"
          />

          <SidebarRow
            icon={<Video size={16} />}
            text="Unlimited 1:1 live doubt-solving sessions"
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
function GameCourseCard({
  title,
  subtitle,
  description,
  image,
  href,
  age,
  badge,
  color,
}: any) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <span
          className={`absolute top-4 left-4 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${color}`}
        >
          {badge}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>

        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between pt-4">
          <span className="text-xs font-medium text-gray-500">{age}</span>

          <span className="text-purple-600 font-semibold group-hover:underline">
            View Course →
          </span>
        </div>
      </div>
    </Link>
  );
}
