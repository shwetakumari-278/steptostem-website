import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Facebook,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Code2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
} from "lucide-react";

import Header from "@/components/Header";
import BookDemoButton from "@/components/BookDemoButton";

const siteUrl = "https://www.stemxlearning.com";
const pageUrl = `${siteUrl}/about-stemxlearning/`;

export const metadata: Metadata = {
  title: "About STEMxLearning | Online Coding & AI Classes for Kids",
  description:
    "Learn about STEMxLearning, an online learning platform helping kids and teens build real skills in coding, AI, Python, machine learning, and technology through live 1:1 classes.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "STEMxLearning",
      url: siteUrl,
      logo: `${siteUrl}/favicon.png`,
      description:
        "STEMxLearning offers live online coding and AI classes for kids and teens through 1:1 personalized learning.",
      email: "info@stemxlearning.com",
      telephone: "+91 8289004978",
      founder: {
        "@id": `${pageUrl}#founder`,
      },
      sameAs: [
        "https://www.instagram.com/stemxlearning",
        "https://www.youtube.com/@stemxlearning",
        "https://www.linkedin.com/company/stemxlearning",
      ],
    },
    {
      "@type": "Person",
      "@id": `${pageUrl}#founder`,
      name: "Ekjot Singh Nanda",
      jobTitle: "Founder and CEO",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Punjab Engineering College",
      },
      sameAs: "https://www.linkedin.com/in/ekjot-singh-a4917b1aa/",
    },
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#aboutpage`,
      name: "About STEMxLearning",
      url: pageUrl,
      description:
        "About STEMxLearning and its live online coding and AI classes for kids and teens.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "STEMxLearning",
        url: siteUrl,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About STEMxLearning",
          item: pageUrl,
        },
      ],
    },
  ],
};

const activeCourses = [
  {
    title: "Python & Machine Learning",
    description:
      "Build a strong foundation in Python, problem-solving, data analysis, and machine learning through guided projects.",
    href: "/courses/ai-ml/",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Generative AI",
    description:
      "Learn to build with AI tools like ChatGPT, Gemini, automation platforms, and AI-powered project systems.",
    href: "/courses/generative-ai/",
    icon: Sparkles,
    color: "from-pink-500 to-orange-400",
  },
  {
    title: "Gen AI with Data Science",
    description:
      "Combine data, visualizations, AI insights, and practical machine learning workflows for real projects.",
    href: "/courses/gen-ai-data-science/",
    icon: BarChart3,
    color: "from-blue-500 to-purple-500",
  },
];

const targetPages = [
  {
    label: "Online Coding Classes for Kids in India",
    href: "/online-coding-classes-for-kids-india/",
  },
  {
    label: "Python Classes for Kids",
    href: "/python-classes-for-kids/",
  },
  {
    label: "AI Classes for Kids",
    href: "/ai-classes-for-kids/",
  },
];

const comingSoonCourses = ["Web Development", "Game Design", "App Development"];

const learningModel = [
  {
    title: "Live 1:1 Classes",
    description:
      "Students learn directly with a personal mentor instead of getting lost in a large group.",
    icon: UserCheck,
  },
  {
    title: "Mastery-Based Learning",
    description:
      "We move forward only when the child understands the concept clearly and can apply it.",
    icon: Target,
  },
  {
    title: "Real Projects",
    description:
      "Every course is built around practical projects students can explain, improve, and showcase.",
    icon: CheckCircle2,
  },
  {
    title: "Parent Progress Updates",
    description:
      "Parents get visibility into what their child is learning, building, and improving.",
    icon: CalendarCheck,
  },
];

const projects = [
  {
    image: "/projects/bank-management.jpg",
    title: "Bank Management System",
    tag: "Python",
    description:
      "Students build a Python banking system with accounts, deposits, withdrawals, and balance checks.",
  },
  {
    image: "/projects/algorithm-visualizer.png",
    title: "Algorithm Visualizer",
    tag: "Python Advanced",
    description:
      "Students create an interactive program to visualize how algorithms work step by step.",
  },
  {
    image: "/projects/student-performance.jpeg",
    title: "Student Performance Predictor",
    tag: "AI + Data Science",
    description:
      "Students train a machine learning model to predict student outcomes using real data.",
  },
  {
    image: "/projects/data-visualization.jpg",
    title: "Visual Insights Dashboard",
    tag: "Data Science",
    description:
      "Students create dashboards and use AI to turn data into clear insights.",
  },
  {
    image: "/projects/genai-online-shop.png",
    title: "AI-Powered E-Commerce Store",
    tag: "Generative AI",
    description:
      "Students build an online store with an AI chatbot and deploy it live.",
  },
  {
    image: "/projects/genai-portfolio.png",
    title: "AI-Built Developer Portfolio",
    tag: "Generative AI",
    description:
      "Students use AI and prompt engineering to design and publish a portfolio website.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 text-gray-950">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-20 pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
            <div className="absolute right-[-120px] top-28 h-80 w-80 rounded-full bg-purple-200/70 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500"
              >
                <Link href="/" className="hover:text-purple-700">
                  Home
                </Link>
                <span>/</span>
                <span className="font-medium text-gray-800">
                  About STEMxLearning
                </span>
              </nav>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                About STEMxLearning
              </p>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.22] tracking-normal text-gray-950 md:text-6xl md:leading-[1.18]">
                Helping kids build real skills in coding, AI, and technology.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-650 md:text-xl">
                STEMxLearning is an online learning platform for kids and teens.
                We teach Python, AI, machine learning, data science, and
                technology through live 1:1 classes, personal mentoring, and
                project-based learning.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="text-gray-950">
                  <BookDemoButton
                    course="General Enquiry"
                    variant="inline"
                    label="Book a Free Demo Class"
                  />
                </div>

                <Link
                  href="/online-coding-classes-for-kids-india/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-200 bg-white/75 px-6 py-3 text-sm font-semibold text-purple-700 shadow-sm transition hover:border-purple-300 hover:bg-white"
                >
                  Explore learning paths
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <Metric value="1:1" label="Live mentoring" />
                <Metric value="3-12" label="Grades supported" />
                <Metric value="AI" label="Future-ready skills" />
                <Metric value="Projects" label="Hands-on learning" />
              </div>

              <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-6 text-white shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Brain size={24} />
                </div>
                <h2 className="text-2xl font-bold leading-snug">
                  Technology education with depth, not just screen time.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  Students learn how technology works, how to create with it,
                  and how to think clearly while building useful projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-[2rem] border border-white bg-white/80 p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.24] tracking-normal text-gray-950 md:text-5xl md:leading-[1.18]">
                Turn students from technology users into technology creators.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-gray-650">
              <p>
                Children use apps, videos, games, and AI tools every day. But
                using technology is very different from understanding how it is
                built.
              </p>
              <p>
                STEMxLearning helps students move beyond passive screen time by
                making coding and AI practical, structured, and approachable.
              </p>
              <p>
                Our goal is simple: help every student build something real,
                understand the logic behind it, and grow more confident with
                every class.
              </p>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                What We Teach
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                Active learning paths at STEMxLearning
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our current courses focus on coding, AI, Python, machine
                learning, and data-driven projects for young learners.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {activeCourses.map((course) => {
                const Icon = course.icon;

                return (
                  <Link
                    key={course.title}
                    href={course.href}
                    className="group rounded-[1.5rem] border border-white bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-md`}
                    >
                      <Icon size={25} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-950">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {course.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-purple-700">
                      View course
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-dashed border-purple-200 bg-white/70 p-6">
              <h3 className="text-lg font-bold text-gray-950">
                More courses are being prepared
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                These courses are not active yet, but they are part of our
                upcoming roadmap.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {comingSoonCourses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
                  >
                    {course} coming soon
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gray-500">
                Popular pages
              </p>
              <div className="flex flex-wrap gap-3">
                {targetPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING MODEL */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Learning Model
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                A personal, project-first way to learn technology.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {learningModel.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white bg-white/85 p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/80 p-8 shadow-sm md:p-12">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Student Work
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                Students learn by building real projects.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Every learning path is designed around practical outcomes.
                Students build applications, AI projects, dashboards, and
                creative systems while learning the concepts behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-6">
                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                      {project.tag}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-gray-950">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Founder
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                Built with technology experience and a teaching-first mindset.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white bg-white/85 p-7 shadow-xl md:p-9">
              <div className="flex flex-col gap-8 md:flex-row">
                <img
                  src="/asset/founder.png"
                  alt="Ekjot Singh Nanda, Founder and CEO of STEMxLearning"
                  className="h-40 w-40 shrink-0 rounded-[1.5rem] object-cover shadow-md"
                />

                <div>
                  <h3 className="text-3xl font-extrabold leading-tight text-gray-950">
                    Ekjot Singh Nanda
                  </h3>
                  <p className="mt-2 text-base font-bold text-purple-700">
                    Founder and CEO, STEMxLearning
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <FounderBadge icon={<Award size={18} />} text="PEC alumnus" />
                    <FounderBadge
                      icon={<Brain size={18} />}
                      text="AI and technology background"
                    />
                    <FounderBadge
                      icon={<Users size={18} />}
                      text="3+ years of industry experience"
                    />
                    <FounderBadge
                      icon={<GraduationCap size={18} />}
                      text="2+ years of research experience"
                    />
                  </div>

                  <p className="mt-6 leading-7 text-gray-650">
                    Ekjot Singh Nanda is a Punjab Engineering College alumnus
                    with more than 3 years of industry experience, including
                    work with CaaStle, and more than 2 years of research
                    exposure across institutions including IIT Ropar and
                    Nanyang Technological University, Singapore.
                  </p>

                  <p className="mt-4 leading-7 text-gray-650">
                    He started STEMxLearning with a clear belief: students
                    should not only use technology, they should understand it,
                    build with it, and gain the confidence to create real
                    projects.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/ekjot-singh-a4917b1aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:shadow-lg"
                  >
                    <Linkedin size={17} />
                    View LinkedIn profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Why Families Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                Structured learning with personal attention.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <TrustItem
                icon={<ShieldCheck size={22} />}
                title="Safe beginner-friendly learning"
                description="Students can ask questions freely and learn without pressure."
              />
              <TrustItem
                icon={<CalendarCheck size={22} />}
                title="Flexible scheduling"
                description="Live sessions can be planned around school and family routines."
              />
              <TrustItem
                icon={<Bot size={22} />}
                title="Modern AI exposure"
                description="Students learn practical AI tools and how to use them responsibly."
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 rounded-[2rem] bg-white/85 p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-normal text-gray-950 md:text-5xl">
                Get in touch with STEMxLearning
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Have questions about courses, age groups, schedules, or the
                right learning path for your child? Reach out to us.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ContactLink
                icon={<Mail size={20} />}
                label="Email"
                value="info@stemxlearning.com"
                href="mailto:info@stemxlearning.com"
              />
              <ContactLink
                icon={<Phone size={20} />}
                label="Phone"
                value="+91 82890 04978"
                href="tel:+918289004978"
              />
              <ContactLink
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="STEMxLearning"
                href="https://www.linkedin.com/company/stemxlearning"
              />
              <ContactLink
                icon={<Instagram size={20} />}
                label="Instagram"
                value="@stemxlearning"
                href="https://www.instagram.com/stemxlearning/"
              />
              <ContactLink
                icon={<PlayCircle size={20} />}
                label="YouTube"
                value="@stemxlearning"
                href="https://www.youtube.com/@stemxlearning"
              />
              <ContactLink
  icon={<Facebook size={20} />}
  label="Facebook"
  value="STEMxLearning"
  href="https://www.facebook.com/STEMxLearning/"
/>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 pt-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-8 py-14 text-center text-white shadow-xl">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.16] tracking-normal md:text-5xl">
              Start your child’s learning journey with STEMxLearning.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
              Book a free demo class and find the right coding or AI learning
              path for your child.
            </p>
            <div className="mt-8 inline-flex text-gray-950">
              <BookDemoButton
                course="General Enquiry"
                variant="inline"
                label="Book a Free Demo Class"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
      <p className="text-3xl font-extrabold text-purple-700">{value}</p>
      <p className="mt-1 text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}

function FounderBadge({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-purple-50 px-4 py-3 text-sm font-bold text-purple-800">
      <span className="text-purple-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white bg-white/85 p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="rounded-[1.5rem] border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-1 break-words font-bold text-gray-950">{value}</p>
    </a>
  );
}
