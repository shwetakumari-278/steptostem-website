import type { Metadata } from "next";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import Link from "next/link";
import { CheckCircle, Users, Award, Layers, Video, BarChart, ShieldCheck, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Python Classes for Kids & Teens | STEMxLearning",
  description:
    "Live 1:1 Python programming classes for kids and teens in India. Learn Python from scratch through real projects with a mastery-based approach. Beginner-friendly for Grade 4–12.",
  alternates: {
    canonical: "/python-classes-for-kids",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stemxlearning.com/" },
    { "@type": "ListItem", position: 2, name: "Python Classes for Kids", item: "https://www.stemxlearning.com/python-classes-for-kids/" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Python Classes for Kids & Teens",
  description: "Live 1:1 Python programming classes for kids and teens. Learn Python from scratch through real projects with a mastery-based approach.",
  provider: { "@type": "Organization", name: "STEMxLearning", url: "https://www.stemxlearning.com" },
  url: "https://www.stemxlearning.com/python-classes-for-kids/",
  educationalLevel: "Grade 4-12",
  teaches: ["Python Programming", "Logical Thinking", "Data Analysis", "Object Oriented Programming", "Machine Learning"],
};

const paths = [
  {
    title: "Python Beginner",
    description: "Learn Python basics, logic, variables, loops, and conditions through fun mini projects. Perfect for absolute beginners.",
    href: "/courses/ai-ml/beginner",
    badge: "Start Here",
    color: "from-green-500 to-emerald-500",
    image: "/asset/python-beginner.png",
  },
  {
    title: "Python Advanced",
    description: "Master OOP, data structures, algorithms, data analysis, and build complete real-world applications.",
    href: "/courses/ai-ml/advanced",
    badge: "Level Up",
    color: "from-blue-600 to-indigo-600",
    image: "/asset/python-advanced.png",
  },

];

const projects = [
  { image: "/projects/bank-management.jpg", title: "Bank Management System", description: "Students build a banking system with accounts, deposits, and withdrawals — strengthening logic and functions." },
  { image: "/projects/movie-ticket-booking.jpg", title: "Movie Ticket Booking System", description: "Students design a booking app with show selection, seat booking, and price calculation." },
  { image: "/projects/student-attendance.png", title: "Student Attendance Tracker", description: "Students create an attendance tracker to mark, update, and view records using dictionaries and file handling." },
  { image: "/projects/data-analysis.png", title: "Data Analysis Project", description: "Students analyze real-world datasets using Pandas and Matplotlib to discover trends and insights." },
  { image: "/projects/algorithm-visualizer.png", title: "Algorithm Visualizer", description: "Students design an interactive program to visualize how different algorithms work step by step." },
  { image: "/projects/python-game.jpg", title: "Game Project", description: "Students build a complete game using conditions, loops, and functions — combining all core Python concepts." },
];

const faqs = [
  { question: "What age is best to start Python classes for kids?", answer: "Kids can start Python from Grade 4 onwards (around age 9–10). Our beginner course is designed to make Python easy and fun from day one with no prior experience needed." },
  { question: "Is Python difficult for beginners?", answer: "No. Python is one of the easiest programming languages for beginners. Its simple, English-like syntax lets kids focus on logic instead of memorizing complex rules." },
  { question: "Do kids need any prior coding experience?", answer: "No prior coding experience is required. Our Python Beginner course starts from absolute scratch and guides students step by step through every concept." },
  { question: "What is the difference between Python Beginner and Python Advanced?", answer: "Python Beginner covers fundamentals like variables, loops, conditions, and functions. Python Advanced moves into OOP, data structures, algorithms, data analysis, and full application development." },
  { question: "How long does it take to complete the Python course?", answer: "Python Beginner and Advanced each run for 32 live 1:1 sessions. Students progress at their own pace with a dedicated mentor." },
  { question: "Can Python help kids in their future career?", answer: "Absolutely. Python is the most widely used programming language in AI, data science, web development, and automation. Learning Python early gives students a huge advantage." },
  { question: "Are classes 1:1 or group?", answer: "All our sessions are live 1:1 — one student, one dedicated mentor. This ensures personalized attention and a mastery-based learning pace tailored to each child." },
  { question: "What projects do kids build in Python classes?", answer: "Students build real projects like banking systems, games, attendance trackers, data analysis dashboards, and algorithm visualizers — all using Python." },
];

export default function PythonClassesPage() {
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
            <p className="text-sm text-gray-500">Home &gt; Python Classes for Kids</p>

            {/* HERO */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Python Classes for Kids & Teens
              </h1>
<p className="text-sm text-gray-500 tracking-wide">
  Build strong coding foundations through live Python learning
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  Our live 1:1 Python classes help students learn programming step by step through
  interactive coding exercises, mini applications, and real-world projects.
  Students develop logical thinking, problem-solving skills, and confidence in coding
  while learning one of the world’s most in-demand programming languages.
</p>

<p className="text-sm text-gray-500">
  Designed for beginners · Interactive live sessions · For students in Grade 4–12
</p>
            </div>

            {/* FEATURE ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-800">
              <Feature icon={<BarChart size={20} />} title="Suitable for" value="Grade 4–12" />
              <Feature icon={<Video size={20} />} title="Program Delivery" value="Online" />
              <Feature icon={<Award size={20} />} title="Certificates" value="Provided on completion" />
              <Feature icon={<Layers size={20} />} title="Sessions" value="32 live 1:1 sessions" />
            </div>

            {/* TRUST STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-700">
              <TrustStat icon={<Users size={18} />} title="100+" label="Students Nationwide" />
              <TrustStat icon={<Layers size={18} />} title="4+" label="Countries" />
              <TrustStat icon={<Award size={18} />} title="98%" label="Success Rate" />
            </div>

            {/* WHAT IS PYTHON */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Why Python is the best first language for kids</h2>
              <p className="text-gray-700 leading-relaxed">
                Python is the world's most popular programming language — and for good reason.
                Its clean, simple syntax reads almost like English, making it the perfect first language
                for kids and teens. Python powers AI, data science, automation, web development, and more.
                By learning Python early, students build strong logical thinking skills and a foundation
                that opens doors to every area of modern technology.
              </p>
            </section>

            {/* WHO IS THIS FOR */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Who is this for?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
  "Kids who want to start coding from scratch",
  "Students interested in building apps and games",
  "Beginners looking for structured programming guidance",
  "Teens exploring future careers in technology and AI",
  "Students who enjoy logical thinking and creativity",
  "Parents searching for personalized coding classes online",
].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* PYTHON LEARNING PATHS */}
<section className="space-y-6">
  <h2 className="text-2xl font-bold">Choose Your Python Learning Path</h2>
  <p className="text-gray-600">
    Two structured paths — start from the basics or level up to advanced Python.
    Students can progress from beginner to machine learning at their own pace.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {paths.map((path, i) => (
      <Link
        key={i}
        href={path.href}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition"
      >
        <div className="relative">
          <img
            src={path.image}
            alt={path.title}
            className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${path.color}`}>
            {path.badge}
          </span>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-base">{path.title}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">{path.description}</p>
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
  "Understand Python syntax and coding fundamentals",
  "Write programs using loops, conditions, and functions",
  "Build interactive applications and mini games",
  "Work with files, lists, dictionaries, and data",
  "Apply problem-solving techniques through projects",
  "Create structured applications using OOP concepts",
  "Build confidence through hands-on coding activities",,
  "Develop confidence in writing code independently",
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
              <BookDemoButton course="Python Classes" variant="inline" />

              <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  { icon: <Users size={16} />, text: "Live 1:1 instructor-led sessions (60 mins each)" },
                  { icon: <Layers size={16} />, text: "50+ hands-on Python activities & projects" },
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
                <p className="font-semibold text-sm">Explore Python Paths</p>
                <Link href="/courses/ai-ml/beginner" className="block text-sm text-purple-600 hover:underline">→ Python Beginner</Link>
                <Link href="/courses/ai-ml/advanced" className="block text-sm text-purple-600 hover:underline">→ Python Advanced</Link>
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