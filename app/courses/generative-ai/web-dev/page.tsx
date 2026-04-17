"use client";

import {
  Award,
  Clock,
  Video,
  Layers,
  BarChart,
  CheckCircle,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import CourseFAQ from "@/components/CourseFAQ";
import Header from "@/components/Header";
import BookDemoButton from "@/components/BookDemoButton";
import CourseTestimonials from "@/components/CourseTestimonials";
import StaticProjectCard from "@/components/StaticProjectCard";
import { courseProjects } from "@/data/courseProjects";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import CourseOfferBar from "@/components/CourseOfferBar";

export default function GenAIWebDevCoursePage() {
  const modules = curriculum["genai-web-dev"]?.modules ?? [];

  return (
    <>
      <Header />
      <CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />

      <div className="bg-gradient-to-br from-slate-50 via-pink-50 to-orange-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
              Courses &gt; Generative AI &gt; Gen AI for Web Development
            </p>

            {/* HERO */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Gen AI for Web Development
                </h1>
                
              </div>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Prompt • Build •  Deploy
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Students learn to think like developers, master prompt
                engineering, and use AI tools like Ollama to build and deploy
                real websites — finishing with a fully live AI-powered
                e-commerce store complete with a built-in chatbot.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Suitable for absolute beginners. No prior coding experience
                required.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grades 3–12"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Program Delivery"
                  value="Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certification"
                  value="Provided on Completion"
                />
                <Feature
                  icon={<Clock size={20} />}
                  title="Duration"
                  value="5 Sessions"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="Build & deploy real AI websites"
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
                  "Think and work like a real software developer from day one",
                  "Write effective AI prompts using professional prompting techniques",
                  "Build a real website from scratch using AI tools",
                  "Deploy a live website using GitHub and Netlify",
                  "Create a complete professional e-commerce store with AI",
                  "Set up and run a local AI model using Ollama",
                  "Integrate an AI chatbot directly into a real website",
                  "Understand the full journey from code to live product on the internet",
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
    Course Sessions
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
                {(courseProjects["genai-web-dev"] ?? []).map((project, i) => (
                  <StaticProjectCard key={i} {...project} />
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
    ₹2299
  </p>
  <p className="text-4xl font-bold text-gray-900">
    ₹1149{" "}
    <span className="text-sm font-medium text-gray-700">/ session</span>
  </p>
</div>
                    <p className="text-md font-semibold mt-2">
                      6 Live Sessions — Complete Course
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

            {/* TESTIMONIALS */}
            <CourseTestimonials courseId="genai-web-dev" />
            <CourseFAQ courseKey="genaiWebDev" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

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

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Gen AI for Web Development" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          {[
            "6 live 1-on-1 instructor-led sessions (60 mins each)",
            "Learn with an experienced Gen AI mentor",
            "Hands-on project every session",
            
            "Lifetime access to course content",
            "Unlimited 1:1 live doubt sessions",
            "Live 1:1 class recordings",
            "Parent-Teacher Meeting (PTM) where students showcase their projects and progress",
            "Certificate of completion",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle
                size={16}
                className="text-green-600 mt-0.5 shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}