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

export default function AIMLCoursePage() {
  return (
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

            <div className="flex items-center gap-3 text-sm mb-4">
              <div className="flex text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <span className="text-gray-600">
                Loved by students & trusted by parents
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              This course introduces students to Artificial Intelligence and
              Machine Learning through real-world projects, games, and hands-on
              activities. Students learn how AI systems like chatbots, face
              recognition, and recommendation engines actually work.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Designed to build confidence, creativity, and future-ready
              thinking.
            </p>
          </div>

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">
            <TrustItem icon={<Users />} title="Student-Focused Learning" />
            <TrustItem icon={<Award />} title="Certificate on Completion" />
            <TrustItem icon={<Clock />} title="12-Week Structured Program" />
            <TrustItem icon={<ShieldCheck />} title="Safe & Age-Appropriate" />
          </div>

          {/* WHAT IS AI */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              What does AI mean for students?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Artificial Intelligence helps machines learn from data and make
              smart decisions. In this course, students explore AI concepts
              through visuals, interactive tools, and guided projects — without
              heavy math or complex theory.
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
            <h2 className="text-2xl font-bold mb-4">Projects students build</h2>

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
              students through a structured growth journey — helping them build
              skills, confidence, and leadership over time.
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
                  Students learn to think creatively and apply AI to real-world
                  challenges.
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
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
            <BookDemoButton course="AI & Machine Learning" variant="inline" />

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

      <BookDemoButton course="AI & Machine Learning" />
    </div>
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
