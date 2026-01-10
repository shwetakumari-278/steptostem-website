"use client";

import {
  BarChart,
  Video,
  Award,
  Clock,
  Layers,
  Users,
  CheckCircle,
  BookOpen,
  ShieldCheck,
  CalendarCheck,
  Download,
  Trophy,
  UserCheck,
} from "lucide-react";
import { Infinity as InfinityIcon } from "lucide-react";

import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import CourseTestimonials from "@/components/CourseTestimonials";

/* ===================== PAGE ===================== */

export default function ScratchGameDevPage() {
  return (
    <>
      <Header />

      {/* OFFER BAR – SAME AS GAME DEV */}
      <CourseOfferBar
        course="Scratch Game Development"
        gradient="from-orange-500 to-pink-500"
      />

      <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-50 min-h-screen pt-20">



        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            {/* HERO */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Scratch Game Development for Kids
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Learn to build games, animations, and interactive stories using
                Scratch’s block-based coding environment.
              </p>
            </section>

            {/* FEATURE ROW – SAME AS GAME DEV */}
            <section>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Grade 1–8"
                />
                <Feature
                  icon={<Video size={20} />}
                  title="Delivery"
                  value="Live Online"
                />
                <Feature
                  icon={<Award size={20} />}
                  title="Certification"
                  value="STEM.org"
                />
                <Feature
                  icon={<Clock size={20} />}
                  title="Duration"
                  value="4 Months"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="50+ Activities"
                />
              </div>
            </section>

            {/* WHAT IS SCRATCH */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What is Scratch Coding?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Scratch is a free, block-based programming language developed by
                MIT for kids. Students learn coding by dragging and connecting
                blocks—just like solving a puzzle—while creating games,
                animations, and stories.
              </p>
            </section>

            {/* CURRICULUM */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Our Scratch Curriculum
              </h2>

              <div className="space-y-4">
                {SCRATCH_CURRICULUM.map((mod) => (
                  <CurriculumAccordion key={mod.module} module={mod} />
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Projects Built by Students
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {PROJECTS.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl shadow p-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-36 w-full object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <PricingSection course="Scratch Game Development" />

            <CourseTestimonials courseId="scratch" />
          </div>

          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/* ===================== COMPONENTS ===================== */

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-500 mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-600">{value}</p>
      </div>
    </div>
  );
}
function PricingSection({ course = "Scratch Game Development" }) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Choose the Right Learning Plan
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        36 live 1:1 sessions • 45 mins each • Flexible scheduling
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* STARTER */}
        <PriceCard
          title="Starter"
          price="AED 37"
          oldPrice="AED 50"
          discount="1:1 Personalized"
          monthly="Total: AED 1,332 (36 sessions)"
          course={course}
          points={[
            "36 live 1:1 private sessions",
            "Dedicated Scratch mentor",
            "Beginner-friendly teaching",
            "Flexible scheduling",
            "Perfect for Grades 1–8",
          ]}
          color="orange"
        />

        {/* GROWTH */}
        <PriceCard
          title="Growth"
          price="AED 27"
          oldPrice="AED 40"
          discount="Small Group (2–3 students)"
          monthly="Total: AED 972 (36 sessions)"
          course={course}
          points={[
            "Live small group Scratch classes",
            "Peer learning & collaboration",
            "Structured weekly plan",
            "Mentor-guided sessions",
            "Best value for young learners",
          ]}
          color="purple"
        />
      </div>
    </section>
  );
}
function PriceCard({
  title,
  price,
  oldPrice,
  discount,
  monthly,
  course,
  points,
  color,
}: any) {
  const bg =
    color === "orange"
      ? "bg-orange-500"
      : color === "purple"
      ? "bg-purple-500"
      : "bg-cyan-500";

  const text =
    color === "orange"
      ? "text-orange-600"
      : color === "purple"
      ? "text-purple-600"
      : "text-cyan-600";

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <div
        className={`${bg} text-white text-center py-4 text-xl font-semibold`}
      >
        {title}
      </div>

      <div className="p-6 text-center">
        <p className="text-3xl font-bold">
          {price} <span className="text-sm">/ session</span>
        </p>

        <p className="line-through text-gray-400">{oldPrice}</p>

        <span
          className={`inline-block mt-2 px-4 py-1 rounded-full bg-gray-100 ${text} text-sm`}
        >
          {discount}
        </span>

        <p className="text-sm text-gray-600 mt-4">{monthly}</p>
        <p className="text-xs text-gray-400 mt-2">{course}</p>
      </div>

      <div className="border-t p-6">
        <ul className="space-y-3 text-sm text-gray-700">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex gap-3">
              <CheckCircle className="text-green-600 mt-0.5" size={16} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ===================== SIDEBAR ===================== */

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Scratch Game Development" variant="inline" />

        <h3 className="font-bold text-lg">This course includes:</h3>

        <ul className="space-y-3 text-sm text-gray-700">
          <SidebarRow
            icon={<Users size={16} />}
            text="36 live private 1-on-1 sessions (45 mins)"
          />
          <SidebarRow
            icon={<UserCheck size={16} />}
            text="Learn live with expert CS teacher"
          />
          <SidebarRow icon={<Layers size={16} />} text="8 detailed modules" />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="50+ activities & projects"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="STEM.org accredited certificate"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Scratch Developer Certificate"
          />
          <SidebarRow
            icon={<InfinityIcon size={16} />}
            text="Lifetime access to course content"
          />

          <SidebarRow
            icon={<Video size={16} />}
            text="Unlimited 1:1 live doubt sessions"
          />
          <SidebarRow
            icon={<Download size={16} />}
            text="Live 1:1 class recordings"
          />
          <SidebarRow
            icon={<Trophy size={16} />}
            text="Monthly progress reports"
          />
        </ul>
      </div>
    </div>
  );
}

function SidebarRow({ icon, text }: any) {
  return (
    <li className="flex gap-3">
      <span className="text-green-600">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

/* ===================== DATA ===================== */

const PROJECTS = [
  {
    title: "Snake Game",
    desc: "Classic snake game using logic & loops.",
    image: "/asset/snake.png",
  },
  {
    title: "Car Racing",
    desc: "Speed-based racing game with controls.",
    image: "/asset/car.png",
  },
  {
    title: "Pacman",
    desc: "Maze-based game with scoring logic.",
    image: "/asset/pacman.png",
  },
  {
    title: "Paint App",
    desc: "Creative drawing app using pen blocks.",
    image: "/asset/paint.jpg",
  },
  {
    title: "AI Friend",
    desc: "Interactive AI character project.",
    image: "/asset/ai.webp",
  },
  {
    title: "Quiz Game",
    desc: "Logic-based quiz using variables.",
    image: "/asset//quiz.jpg",
  },
];

const SCRATCH_CURRICULUM = [
  {
    module: "Module 1: Scratch Programming Fundamentals",
    goal: "Platform familiarity & movement",
    outcomes: [
      "Introduction to Scratch",
      "Direction Sense",
      "Moving & Gliding",
      "Tour the Solar System",
      "Transitions & Motion",
      "Conditional Statements & Loops",
    ],
  },
  {
    module: "Module 2: Scratch Intermediate Concepts",
    goal: "Interaction & logic building",
    outcomes: [
      "Mario Dash Game",
      "Catch Game (Cloning Basics)",
      "DJ Cat (Sounds & Looks)",
      "Drawing with Pen",
      "Interlink Characters (Broadcast)",
      "Create a Quiz (Variables + Events)",
    ],
  },
  {
    module: "Module 3: Scratch Advanced Games",
    goal: "Real game mechanics",
    outcomes: [
      "Snake and Food Game",
      "Integer Game (Number Line)",
      "Fundamentals of Game Building",
      "Car Racing Game",
      "Hungry Casey – Part I",
      "Hungry Casey – Part II",
    ],
  },
  {
    module: "Module 4: Scratch Specialization",
    goal: "Advanced creativity & AI intro",
    outcomes: [
      "Build Your Microscope",
      "My AI Friend GIGA",
      "Pacman – Part I",
      "Pacman – Part II",
      "Paint Project – Part I",
      "Paint Project – Part II",
    ],
  },
  {
    module: "Module 5: Animation & Visual Effects",
    goal: "Animation mastery",
    outcomes: [
      "Costume Switching & Effects",
      "Background Animations",
      "Character Expressions",
      "Scene Transitions",
      "Interactive Stories",
      "Mini Animation Project",
    ],
  },
  {
    module: "Module 6: Game Logic & Challenges",
    goal: "Thinking like a game designer",
    outcomes: [
      "Scoring Systems",
      "Timers & Levels",
      "Difficulty Scaling",
      "Game Rules & Conditions",
      "Multi-Level Games",
      "Challenge-Based Game",
    ],
  },
  {
    module: "Module 7: Creative Projects Lab",
    goal: "Independent creation",
    outcomes: [
      "Idea to Game Planning",
      "Character Design",
      "Game Flow Design",
      "Debugging & Improvements",
      "Testing with Friends",
      "Final Game Build",
    ],
  },
  {
    module: "Module 8: Showcase & Certification",
    goal: "Confidence & presentation",
    outcomes: [
      "Game Polishing",
      "Adding Final Touches",
      "Game Showcase Preparation",
      "Explaining Game Logic",
      "Parent Demo Day",
      "Certification & Feedback",
    ],
  },
];
