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

import Link from "next/link";

import { projectsByCourse } from "@/data/projects";

import CurriculumAccordion from "@/components/CurriculumAccordion";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import CourseTestimonials from "@/components/CourseTestimonials";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";

export default function AICoursePage() {
  const courseKey = "ai-ml";

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
                Build intelligent systems that think and learn
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This course introduces students to Artificial Intelligence and
                Machine Learning through hands-on projects. Students learn how
                smart systems like chatbots, image recognition, and
                recommendation engines actually work.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beginner-friendly, practical, and focused on real AI creation.
              </p>
            </div>

            {/* FEATURE ROW – FLAT */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grade 3–12"
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
                  value="50+ AI activities & projects"
                />
              </div>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
              <TrustStat
                icon={<Users size={18} />}
                title="1000+"
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
                What does AI & Machine Learning mean for students?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AI helps machines learn from data and make smart decisions.
                Students explore AI concepts through visuals and hands-on
                projects — without complex math or theory.
              </p>
            </section>

            {/* LEARNING OUTCOMES */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                After completing this course, your child can:
              </h2>
              <ul className="space-y-3">
                {[
                  "Build AI-powered games and apps",
                  "Create chatbots and smart assistants",
                  "Understand how machines learn from data",
                  "Explore computer vision and language AI",
                  "Confidently present AI projects",
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
                Choose Your AI Learning Path
              </h2>

              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Students progress in AI based on age, experience, and learning
                depth.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <GameCourseCard
                  title="AI Genius"
                  subtitle="AI-Powered Apps & Games"
                  age="Grades 3–7"
                  description="Students learn AI concepts through games, image recognition, chatbots, and fun hands-on projects without heavy coding."
                  image="/asset/ai-genius.png"
                  href="/courses/ai-ml/beginner"
                  badge="Beginner Friendly"
                  color="from-purple-500 to-pink-500"
                />

                <GameCourseCard
                  title="AI Expert"
                  subtitle="Hands-On AI, ML & Python"
                  age="Grades 8–12"
                  description="Students build real AI models using Python, APIs, NLP, and computer vision while solving real-world problems."
                  image="/asset/ai-expert.jpg"
                  href="/courses/ai-ml/advanced"
                  badge="Advanced Track"
                  color="from-blue-600 to-cyan-600"
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

            {/* STEPTOSTEM LEARNING PATH */}
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
                    Students begin their journey by understanding core AI
                    concepts through fun, interactive learning.
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
                    Students start building real AI projects and applying
                    concepts independently.
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
                    <li>Advanced AI projects</li>
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
           

            
            <CourseTestimonials courseId="ai-ml" />
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
            icon={<Video size={16} />}
            text="48 live 1-on-1 instructor-led classes (45 mins)"
          />

          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group personalized learning"
          />

          <SidebarRow
            icon={<BookOpen size={16} />}
            text="Structured curriculum with 8 detailed modules"
          />

          <SidebarRow
            icon={<Layers size={16} />}
            text="50+ hands-on AI activities & projects"
          />

          <SidebarRow
            icon={<Award size={16} />}
            text="Globally recognized certificate on completion"
          />

          <SidebarRow
            icon={<BarChart size={16} />}
            text="Monthly progress reports & skill tracking"
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
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
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
