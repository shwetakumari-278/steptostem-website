import type { Metadata } from "next";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import Link from "next/link";
import { CheckCircle, Users, Award, Layers, Video, BarChart, ShieldCheck, CalendarCheck } from "lucide-react";
import { courseFaqs } from "@/data/courseFaqs";

export const metadata: Metadata = {
  title: "AI Classes for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 AI classes for K-12 students in India. Learn Generative AI, Machine Learning, and Data Science through real projects with a mastery-based approach. Beginner-friendly. No prior experience needed.",
  alternates: {
    canonical: "/ai-classes-for-kids",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stemxlearning.com/" },
    { "@type": "ListItem", position: 2, name: "AI Classes for Kids", item: "https://www.stemxlearning.com/ai-classes-for-kids/" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Classes for Kids & Teens",
  description:
    "Live 1:1 AI classes for K-12 students in India. Learn Generative AI, Machine Learning, and Data Science through real projects.",
  url: "https://www.stemxlearning.com/ai-classes-for-kids/",
  provider: { "@type": "Organization", name: "STEMxLearning", url: "https://www.stemxlearning.com" },
};

const courses = [
  {
    title: "Generative AI Tools & Systems",
    description:
      "Build with ChatGPT, Gemini, Runway, and Make.com. Create AI-powered websites, automate workflows, and build AI agents.",
    href: "/courses/generative-ai",
    badge: "Trending",
    color: "from-pink-500 to-orange-400",
    image: "/asset/gen-ai.webp",
  },
  {
    title: "Generative AI with Data Science",
    description:
      "Combine AI tools with data science to analyze real datasets, build ML models, and create intelligent systems.",
    href: "/courses/gen-ai-data-science",
    badge: "Advanced",
    color: "from-purple-500 to-indigo-500",
    image: "/asset/genai-ds.jpg",
  },

];

const projects = [
  {
    image: "/projects/genai-online-shop.png",
    title: "AI-Powered E-commerce",
    description:
      "Students build a complete e-commerce store with a built-in AI chatbot, deployed live on Netlify.",
  },
  {
    image: "/projects/genai-automation-agent.webp",
    title: "AI Automation Agent",
    description:
      "Students build an AI agent that researches topics, summarizes findings, and formats reports autonomously.",
  },
  {
    image: "/projects/ai-product-advertisement.jpg",
    title: "AI Product Advertisement Video",
    description:
      "Students create a cinematic product ad using Runway ML — generating visuals and storytelling using only AI tools.",
  },
  {
    image: "/projects/student-performance.jpeg",
    title: "Student Performance Predictor",
    description:
      "Students train an ML model to predict whether a student will pass or fail based on real-world data.",
  },
  {
    image: "/projects/data-visualization.jpg",
    title: "Visual Insights Dashboard",
    description:
      "Students create bar charts, heatmaps, and scatter plots — then use AI to generate human-readable insights.",
  },
  {
    image: "/projects/house-price.jpg",
    title: "House Price Prediction Model",
    description:
      "Students build a regression model to predict house prices using real-world data and ML techniques.",
  },
];

const faqs = [
  ...(courseFaqs["generativeAi"] || []),
  ...(courseFaqs["genAiDataScience"] || []),
];

export default function AIClassesPage() {
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
            <p className="text-sm text-gray-500">Home &gt; AI Classes for Kids</p>

            {/* HERO */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                AI Classes for Kids & Teens
              </h1>
<p className="text-sm text-gray-500 tracking-wide">
  Explore the world of Artificial Intelligence through real projects
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  STEMxLearning helps students learn modern AI skills through live 1:1 online classes.
  Students work with tools like ChatGPT, Gemini, and Machine Learning models to create
  AI-powered applications, intelligent systems, and creative digital projects in a
  structured hands-on environment.
</p>

<p className="text-sm text-gray-500">
  Future-focused learning · Beginner-friendly AI education · Grade 3–12
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

            {/* WHAT IS AI */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Why should kids learn AI?</h2>
              <p className="text-gray-700 leading-relaxed">
  Artificial Intelligence is transforming how people learn, create, communicate,
  and solve problems. Students who understand AI early gain an advantage in future
  careers across technology, business, healthcare, design, and many other industries.
  Our AI classes introduce students to real AI concepts in a simple and practical way,
  helping them move from passive users of technology to confident creators and innovators.
</p>
            </section>

            {/* WHO IS THIS FOR */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Who is this for?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
  "Students curious about Artificial Intelligence and future technology",
  "Kids who want to create with AI instead of only consuming content",
  "Beginners interested in Artificial Intelligence and future technologies",
  "Teens curious about AI agents, automation, and smart systems",
  "Students who enjoy creativity, innovation, and digital creation",
  "Parents looking for future-ready AI education with real-world exposure",
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
              <h2 className="text-2xl font-bold">Choose Your AI Learning Path</h2>
              <p className="text-gray-600">
                Students can begin with beginner-friendly Generative AI tools and gradually
progress into Machine Learning, intelligent systems, and AI-powered data analysis
through guided project-based learning.
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
  "Use ChatGPT, Gemini, and 20+ AI tools for real-world projects",
  "Understand prompt engineering and how to guide AI effectively",
  "Create AI-powered websites, apps, and digital experiences",
  "Build automation workflows and beginner AI agents",
  "Generate images, presentations, and creative content using AI",
  "Analyze datasets and discover insights through visualizations",
  "Explore Machine Learning concepts and predictive models",
  "Develop portfolio-ready AI projects with confidence",
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
                  <div key={i} className="bg-white rounded-2xl shadow-md border overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-36 w-full object-cover" />
                    <div className="p-4 space-y-1">
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
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
          <div className="lg:sticky lg:top-40 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
              <BookDemoButton course="AI Classes" variant="inline" />

              <h3 className="font-bold text-lg mt-6 mb-4">Every AI course includes:</h3>

              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  { icon: <Users size={16} />, text: "Live 1:1 instructor-led sessions (60 mins each)" },
                  { icon: <Layers size={16} />, text: "Real hands-on AI projects every session" },
                  { icon: <Award size={16} />, text: "Globally recognized certificate on completion" },
                  { icon: <BarChart size={16} />, text: "Parent-Teacher Meetings after every 8 sessions" },

                  { icon: <CalendarCheck size={16} />, text: "Flexible scheduling + lifetime course access" },
                  { icon: <Video size={16} />, text: "Unlimited 1:1 live doubt-solving sessions" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-5 space-y-3">
                <p className="font-semibold text-sm">Explore AI Courses</p>
                <Link href="/courses/generative-ai" className="block text-sm text-purple-600 hover:underline">→ Generative AI Tools & Systems</Link>
                <Link href="/courses/gen-ai-data-science" className="block text-sm text-purple-600 hover:underline">→ Generative AI with Data Science</Link>
                <Link href="/courses/ai-ml" className="block text-sm text-purple-600 hover:underline">→ Python & Machine Learning</Link>
              </div>
            </div>
          </div>

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