"use client";

import {
  Users,
  Award,
  CheckCircle,
  Video,
  Layers,
  BarChart,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { projectsByCourse } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CourseFAQ from "@/components/CourseFAQ";
import { curriculum } from "@/data/curriculum";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import Link from "next/link";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import CourseTestimonials from "@/components/CourseTestimonials";
import BookDemoButton from "@/components/BookDemoButton";

export default function GenerativeAICoursePage() {
  const modules = curriculum["generative-ai"]?.modules ?? [];
  return (
    <>
      <Header />
      <CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />

      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen pt-24">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
              Courses &gt; Generative AI
            </p>

            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Generative AI for Kids & Teens
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
               Go beyond using AI — learn to build with it
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Students learn to use powerful AI tools like ChatGPT, Gemini, Runway, and Make.com 
to build real-world projects — from websites and automation systems to animations, content creation, and AI agents. 
Along the way, they also learn how to guide AI effectively using prompt engineering.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Beginner-friendly. No prior AI knowledge required.
              </p>
            </div>

            {/* FEATURE ROW */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature icon={<BarChart size={20} />} title="Suitable for" value="Grade 3–12" />
                <Feature icon={<Video size={20} />} title="Program Delivery" value="Online" />
                <Feature icon={<Award size={20} />} title="Certificates" value="Provided on completion" />
                <Feature icon={<Layers size={20} />} title="Program" value="20+ Gen AI activities & projects" />
              </div>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
              <TrustStat icon={<Users size={18} />} title="70+" label="Students" />
              <TrustStat icon={<Layers size={18} />} title="4+" label="Countries" />
            </div>
{/* WHAT IS GENERATIVE AI */}
<section>
  <h2 className="text-2xl font-bold mb-3">
    What does Generative AI mean for students?
  </h2>

 <p className="text-gray-700 leading-relaxed">
  Generative AI helps students turn ideas into real creations using powerful tools. 
From writing and research to websites, automation, and intelligent systems — students 
learn how to build, create, and solve real-world problems using AI.

They explore content creation like images and animations as part of the process, while also learning 
how to guide AI effectively through prompt engineering. Instead of just using AI tools like ChatGPT, 
Gemini, Runway, and Make.com, students learn how to build meaningful projects and systems with them.
</p>
</section>
            {/* OUTCOMES */}
<section>
  <h2 className="text-2xl font-bold mb-4">
    After completing this program, your child will be able to:
  </h2>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
  "Research, write, and generate ideas using AI tools like ChatGPT, Gemini and NotebookLM",
  "Understand and apply prompt engineering to guide AI for better results",
  "Create images, posters, and visual content using AI tools",
  "Build animations and AI avatar presentations without a camera",
  "Generate voiceovers, clone voices, and create audio content using AI",
  "Create professional level music, songs, and complete audio-visual projects using AI tools",
  "Design professional presentations and storytelling decks using AI",
  "Build and launch live websites using no-code AI tools",
  "Add automation and smart AI features to websites using tools like Make.com",
  "Build AI agents that can perform tasks like research, writing, and automation",
  "Create comic stories and visual narratives using AI",
  "Explore 3D, animation, and future technologies like holographic AI content",
  "Use AI tools like Codex to generate and work with code efficiently",
].map((item, i) => (
      <li key={i} className="flex gap-3">
        <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</section>

     {/* CURRICULUM */}
<section>
  <h2 className="text-2xl font-bold mb-6">
    Course Curriculum
  </h2>

  <div className="space-y-4">
    {modules.map((module: any, index: number) => (
      <CurriculumAccordion key={index} module={module} />
    ))}
  </div>
</section>                  
{/* PROJECTS */}
<section>
  <h2 className="text-2xl font-bold mb-6">
    Projects students build
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projectsByCourse["generative-ai"].map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
</section>
  {/* PRICING */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Simple & Transparent Pricing
              </h2>

              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                One-hour live 1:1 sessions. No hidden fees.
              </p>

              <div className="flex justify-center">
                <div className="w-full max-w-2xl rounded-2xl border border-pink-300 bg-pink-50 shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center py-3 text-xl font-semibold">
                    Starter Plan
                  </div>

                  {/* Body */}
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3">
  <p className="text-2xl font-semibold text-gray-300 line-through">
    ₹2100 
  </p>
  <p className="text-4xl font-bold text-gray-900">
    ₹1050{" "}
    <span className="text-sm font-medium text-gray-700">/ session</span>
  </p>
</div>
                    <p className="text-md font-semibold mt-2">
                      12 Live Sessions — Complete Course
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
                        "Build and deploy a real AI-powered website",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            className="text-green-600 mt-0.5 shrink-0"
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

            <CourseTestimonials courseId="generative-ai" />
            <CourseFAQ courseKey="generativeAi" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* SAME COMPONENTS (DO NOT CHANGE STRUCTURE) */

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-pink-500 mt-1">{icon}</span>
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
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
        {icon}
      </div>
      <div>
        <p className="font-semibold leading-none">{title}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Generative AI" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow
                      icon={<Users size={16} />}
                      text="12 live 1-on-1 instructor-led sessions (60 mins each)"
                    />
          
                    <SidebarRow
                      icon={<Layers size={16} />}
                      text="20+ hands-on Gen-AI activities & projects"
                    />
          
                    <SidebarRow
                      icon={<Award size={16} />}
                      text="Globally recognized certificate on completion"
                    />
          
                    <SidebarRow
                      icon={<BarChart size={16} />}
                      text="Parent-Teacher Meetings (PTMs) with progress updates"
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

function GenAiCard({
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
