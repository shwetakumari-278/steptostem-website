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

export default function GenAIDataScienceCoursePage() {
  const modules = curriculum["genai-data-science"]?.modules ?? [];

  return (
    <>
      <Header />
      <CourseOfferBar
        course="all our courses"
        gradient="from-blue-600 to-cyan-500"
      />

      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen pt-28">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">
              Courses &gt; Generative AI &gt; Gen AI for Data Science
            </p>

            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Gen AI for Data Science
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Analyze • Visualize • Predict
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Students learn how to think like real data scientists — from understanding raw data to building intelligent models.
                Using Generative AI, they analyze datasets, discover patterns, create visual insights, and make predictions on real-world problems.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                No prior coding or math experience required. Designed for beginners.
              </p>
            </div>

            {/* FEATURE BAR */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
              <Feature icon={<BarChart size={20} />} title="Suitable for" value="Grades 5–12" />
              <Feature icon={<Video size={20} />} title="Program Delivery" value="Online" />
              <Feature icon={<Award size={20} />} title="Certification" value="Provided" />
              <Feature icon={<Clock size={20} />} title="Duration" value="12 Sessions" />
              <Feature icon={<Layers size={20} />} title="Program" value="10+ activities & projects" />
            </div>

            {/* WHAT STUDENTS LEARN */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                What students will learn in this course
              </h2>

              <ul className="space-y-3">
                {[
                  "Understand how real-world data works and how datasets are structured",
                  "Clean messy data by handling missing values, duplicates, and inconsistencies",
                  "Analyze data using statistics like mean, correlation, and patterns",
                  "Create powerful visualizations like charts, graphs, and heatmaps",
                  "Understand Machine Learning — regression vs classification",
                  "Train real ML models and make predictions",
                  "Evaluate models using accuracy, precision, recall, and F1 score",
                  "Understand how AI works in computer vision and speech recognition",
                  "Solve a complete real-world problem end-to-end using AI",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1" size={18} />
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
                {(courseProjects["genai-data-science"] ?? [
                  {
                    title: "Student Performance Predictor",
                    description: "Predict pass/fail using ML models",
                  },
                  {
                    title: "Data Cleaning Engine",
                    description: "Clean messy real-world datasets using AI",
                  },
                  {
                    title: "Visual Analytics Dashboard",
                    description: "Create charts and extract insights",
                  },
                  {
                    title: "House Price Predictor",
                    description: "Use regression to predict prices",
                  },
                  {
                    title: "Image Classifier",
                    description: "Build a basic computer vision model",
                  },
                  {
                    title: "Speech to Text Analyzer",
                    description: "Convert and analyze voice data",
                  },
                ]).map((project, i) => (
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
                      14 Live Sessions — Complete Course
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
            <CourseTestimonials courseId="genai-data-science" />

            {/* FAQ */}
            <CourseFAQ courseKey="genaiDataScience" />
          </div>

          {/* SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* COMPONENTS */

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-blue-500 mt-1">{icon}</span>
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
       <BookDemoButton course="Gen AI for Data Science" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          {[
            "14 live 1-on-1 instructor-led sessions (60 mins each)",
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