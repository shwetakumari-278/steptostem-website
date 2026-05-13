"use client";

import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import Link from "next/link";
import { CheckCircle, Users, Award, Layers, Video, BarChart, ShieldCheck, CalendarCheck } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { courseFaqs } from "@/data/courseFaqs";
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stemxlearning.com/" },
    { "@type": "ListItem", position: 2, name: "Online Coding Classes for Kids in India", item: "https://www.stemxlearning.com/online-coding-classes-for-kids-india/" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Online Coding Classes for Kids in India",
  description: "Live 1:1 online coding classes for kids in India. Learn Python, Machine Learning, and Generative AI through real projects with a mastery-based approach.",
  url: "https://www.stemxlearning.com/online-coding-classes-for-kids-india/",
  provider: { "@type": "Organization", name: "STEMxLearning", url: "https://www.stemxlearning.com" },
};

const courses = [
  {
    title: "Python & Machine Learning",
    description: "Learn Python from scratch and progress into Machine Learning through real datasets and projects.",
    href: "/courses/ai-ml",
    badge: "Most Popular",
    color: "from-purple-500 to-pink-500",
    image: "/asset/py-ml.png",
  },
  {
    title: "Generative AI Tools & Systems",
    description: "Build with ChatGPT, Gemini, and Make.com. Create websites, automate workflows, and build AI agents.",
    href: "/courses/generative-ai",
    badge: "Trending",
    color: "from-pink-500 to-orange-400",
    image: "/asset/gen-ai.webp",
  },
  {
    title: "Generative AI with Data Science",
    description: "Combine AI with data science to analyze data, build predictive models, and create intelligent systems.",
    href: "/courses/gen-ai-data-science",
    badge: "Advanced",
    color: "from-purple-500 to-indigo-500",
    image: "/asset/genai-ds.jpg",
  },
];

const projects = [
  {
    image: "/projects/bank-management.jpg",
    title: "Bank Management System",
    description: "Students build a banking system with accounts, deposits, withdrawals — strengthening logic and functions.",
  },
  {
    image: "/projects/genai-online-shop.png",
    title: "AI-Powered E-commerce",
    description: "Students build a complete e-commerce store with a built-in AI chatbot deployed live on Netlify.",
  },
  {
    image: "/projects/data-analysis.png",
    title: "Data Analysis Project",
    description: "Students analyze real-world datasets using Pandas and Matplotlib to discover trends and insights.",
  },
  {
    image: "/projects/email-agent.jpg",
    title: "Email Analyzer Agent",
    description: "Students create an AI agent that reads emails, summarizes content, and suggests replies automatically.",
  },
  {
    image: "/projects/student-performance.jpeg",
    title: "Student Performance Predictor",
    description: "Students build an ML model to predict student pass/fail outcomes using real datasets.",
  },
  {
    image: "/projects/genai-automation-agent.webp",
    title: "AI Automation Agent",
    description: "Students build an AI agent that plans and completes multi-step tasks with minimal human input.",
  },
];

const faqs = courseFaqs["onlineCodingIndia"] || [];

export default function OnlineCodingClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <Header />
      <CourseOfferBar course="all our courses" gradient="from-violet-600 to-pink-500" />

      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-14">

            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">Home &gt; Online Coding Classes for Kids in India</p>

            {/* HERO */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Online Coding Classes for Kids in India
              </h1>
              <p className="text-sm text-gray-500 tracking-wide">
                Live 1:1 learning with mastery at its core
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                STEMxLearning offers live 1:1 online coding and AI classes for K-12 students across India.
                Students learn Python, Machine Learning, and Generative AI through real projects —
                at their own pace, with their own dedicated mentor.
              </p>
              <p className="text-sm text-gray-500">
                Beginner-friendly · No prior experience needed · 100% online
              </p>
            </div>

            {/* FEATURE ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-800">
              <Feature icon={<BarChart size={20} />} title="Suitable for" value="Grade 3–12" />
              <Feature icon={<Video size={20} />} title="Program Delivery" value="Online" />
              <Feature icon={<Award size={20} />} title="Certificates" value="Provided on completion" />
              <Feature icon={<Layers size={20} />} title="Learning" value="Mastery-based 1:1" />
            </div>

            {/* TRUST STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-700">
              <TrustStat icon={<Users size={18} />} title="100+" label="Students Nationwide" />
              <TrustStat icon={<Layers size={18} />} title="4+" label="Countries" />
              <TrustStat icon={<Award size={18} />} title="98%" label="Success Rate" />
            </div>

            {/* WHO IS THIS FOR */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Who is this for?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Students in Grade 3 to Grade 12",
                  "Complete beginners with no prior coding experience",
                  "Students who want to go beyond school tech education",
                  "Teens interested in AI, Python, and real-world tech",
                  "Parents looking for structured 1:1 online learning",
                  "Students preparing for future careers in technology",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* COURSES */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">What Your Child Can Learn</h2>
              <p className="text-gray-600">
                Choose from expertly designed courses focused on Python, AI, and Data Science —
                the most in-demand skills for the future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {courses.map((course, i) => (
                  <Link
                    key={i}
                    href={course.href}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition"
                  >
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${course.color}`}>
                        {course.badge}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-base">{course.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{course.description}</p>
                      <span className="inline-block pt-1 text-purple-600 font-semibold group-hover:underline text-sm">
                        View Course →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* WHAT STUDENTS LEARN */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">After completing, your child will be able to:</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Write Python programs independently with confidence",
                  "Build and analyze Machine Learning models",
                  "Use AI tools like ChatGPT, Gemini, and Make.com",
                  "Create AI-powered websites and automation workflows",
                  "Analyze real-world datasets and create visual insights",
                  "Build AI agents that complete tasks independently",
                  "Present portfolio-ready projects",
                  "Think logically and solve problems like a developer",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

         
            {/* PROJECTS */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Projects Students Build</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                  <ProjectCard key={i} {...project} />
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border p-5 shadow-sm">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-purple-500 mt-1">{icon}</span>
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
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-500">
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
        <BookDemoButton course="Online Coding Classes" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">Every course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow icon={<Users size={16} />} text="Live 1:1 instructor-led sessions (60 mins each)" />
          <SidebarRow icon={<Layers size={16} />} text="Real hands-on projects every session" />
          <SidebarRow icon={<Award size={16} />} text="Globally recognized certificate on completion" />
          <SidebarRow icon={<BarChart size={16} />} text="Parent-Teacher Meetings after every 8 sessions" />
          
          <SidebarRow icon={<CalendarCheck size={16} />} text="Flexible scheduling + lifetime course access" />
          <SidebarRow icon={<Video size={16} />} text="Unlimited 1:1 live doubt-solving sessions" />
        </ul>

        <div className="border-t pt-5 space-y-3">
          <p className="font-semibold text-sm">Explore Courses</p>
          <Link href="/courses/ai-ml" className="block text-sm text-purple-600 hover:underline">→ Python & Machine Learning</Link>
          <Link href="/courses/generative-ai" className="block text-sm text-purple-600 hover:underline">→ Generative AI Tools & Systems</Link>
          <Link href="/courses/gen-ai-data-science" className="block text-sm text-purple-600 hover:underline">→ Generative AI with Data Science</Link>
        </div>
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