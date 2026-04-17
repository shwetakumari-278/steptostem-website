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
import Link from "next/link";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import CourseTestimonials from "@/components/CourseTestimonials";
import BookDemoButton from "@/components/BookDemoButton";

export default function GenerativeAICoursePage() {
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
                Students master prompt engineering and use tools like ChatGPT, Ollama, 
  and Gemini to build real AI-powered projects — across web development, 
  mobile apps, data science, and automation.
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
                <Feature icon={<Layers size={20} />} title="Program" value="40+ Gen AI activities & projects" />
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
    Generative AI is the technology behind tools like ChatGPT, image generators,
    and AI assistants. Students learn not just how to use these tools, but how
    they actually work and how to build applications using them. This helps them
    develop future-ready skills across web development, apps, data science, and
    automation.
  </p>
</section>
            {/* OUTCOMES */}
<section>
  <h2 className="text-2xl font-bold mb-4">
    After completing this program, your child will be able to:
  </h2>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      "Understand how Generative AI and large language models work",
      "Write effective prompts using advanced prompting techniques",
      "Build and deploy real AI-powered websites from scratch",
      "Integrate AI tools like ChatGPT, Ollama, and Gemini into projects",
      "Design intelligent mobile apps powered by Gen AI",
      "Analyze real datasets and generate insights using AI",
      "Build autonomous AI agents that complete tasks independently",
      "Create multi-step AI automation workflows and systems",
      "Deploy live projects using GitHub and Netlify",
      "Build a portfolio of real-world Gen AI projects",
    ].map((item, i) => (
      <li key={i} className="flex gap-3">
        <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</section>

            {/* COURSE PATHS */}
          <section className="mt-16">
  <h2 className="text-3xl font-bold mb-4 text-center">
    Choose Your Generative AI Learning Path
  </h2>

  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
    Students explore different domains of Generative AI including web,
    mobile apps, data science, and automation based on their interests.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

         <GenAiCard
  title="Gen AI for Web Development"
  subtitle="Prompt • Build • Deploy"
  description="Learn to build and deploy real AI-powered websites. Students use prompt engineering, connect AI APIs, and ship a live e-commerce store with a built-in chatbot."
  image="/asset/genai-webdev.png"
  href="/courses/generative-ai/web-dev"
  badge="Available Now"
  color="from-pink-500 to-orange-400"
/>



<GenAiCard
  title="Gen AI for Data Science"
  subtitle="AI + Data"
  description="Use Generative AI to analyze real datasets, generate insights, and extract meaningful information. Students learn to train and build AI models, ask questions of data using natural language, and present findings visually."
  image="/asset/genai-datascience.jpg"
  href="/courses/generative-ai/data-science"
  badge="Available Now"
  color="from-purple-500 to-violet-500"
/>

<GenAiCard
  title="Gen AI for Agentic AI"
  subtitle="Agents • Workflows"
  description="Build autonomous AI agents that think, plan, and act. Students create smart automation workflows that connect AI to real tools and complete complex tasks with minimal human input."
  image="/asset/genai-automation.jpg"
  href="/courses/generative-ai/automation"
  badge="Available Now"
  color="from-blue-500 to-cyan-500"
/>

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

  {/* Bundle Banner */}
  <div className="flex justify-center mb-6">
    <div className="bg-purple-100 text-purple-700 text-sm font-semibold px-6 py-2 rounded-full border border-purple-300">
      🎓 Complete Generative AI Bundle — Web Dev + Agentic AI + Data Science
    </div>
  </div>

  <div className="flex justify-center">
    <div className="w-full max-w-2xl rounded-2xl border border-purple-300 bg-purple-50 shadow-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-pink-500 text-white text-center py-3 text-xl font-semibold">
        Full Generative AI Plan
      </div>

      {/* Price */}
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <p className="text-2xl font-semibold text-gray-300 line-through">
            ₹2150 
          </p>
          <p className="text-4xl font-bold text-gray-900">
            ₹1075{" "}
            <span className="text-sm font-medium text-gray-700">/ session</span>
          </p>
        </div>
        <p className="text-md font-semibold mt-2">
          25 Live Sessions — Complete Bundle
        </p>
      </div>

      {/* Module Breakdown */}
      <div className="border-t px-6 py-4 bg-white">
        <h4 className="font-semibold mb-3 text-sm text-gray-500 uppercase tracking-wide">
          What's included
        </h4>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          {[
            { name: "Gen AI for Web Dev", lessons: 6 },
            { name: "Agentic AI", lessons: 5 },
            { name: "Gen AI for Data Science", lessons: 14 },
          ].map((module, i) => (
            <div key={i} className="bg-purple-50 rounded-xl p-3 border border-purple-200">
              <p className="font-bold text-purple-700 text-lg">{module.lessons}</p>
              <p className="text-xs text-gray-500">sessions</p>
              <p className="text-xs font-medium text-gray-700 mt-1">{module.name}</p>
            </div>
          ))}
        </div>
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
            "Build real projects across web, apps, data & automation",
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
                      text="1:1 Personalized Learning"
                    />
          
                    <SidebarRow
                      icon={<Layers size={16} />}
                      text="50+ hands-on Gen-AI activities & projects"
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
