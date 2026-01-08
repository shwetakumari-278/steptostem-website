"use client";

import {
  Users,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
  Video,
  BookOpen,
  Layers,
  BarChart,
  CalendarCheck,
} from "lucide-react";
import Header from "@/components/Header";


import Link from "next/link";

import CourseOfferBar from "@/components/CourseOfferBar";
import BookDemoButton from "@/components/BookDemoButton";

export default function GameDesignCoursePage() {
  

  return (
    <>
      <Header />

      <CourseOfferBar
        course="Game Design"
        gradient="from-green-600 to-emerald-600"
      />
      <div className="bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* BREADCRUMB */}
            <p className="text-sm text-gray-500">Courses &gt; Game Design</p>

            {/* HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Game Design for Kids & Teens
              </h1>

              <p className="text-sm text-gray-500 mb-4 tracking-wide">
                Create games students love to play
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                This course introduces students to the exciting world of game
                design and development. Learners build real games while
                understanding characters, mechanics, logic, and gameplay.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Designed to build creativity, logic, and problem-solving skills.
              </p>
            </div>
            {/* FEATURE ROW – FLAT (NO BOX) */}
            <div className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <BarChart className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Suitable for</p>
                    <p className="text-xs text-gray-600">Grade 1–12</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Program Delivery</p>
                    <p className="text-xs text-gray-600">Online</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Certification by</p>
                    <p className="text-xs text-gray-600">STEM.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-xs text-gray-600">5–6 Months</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Program</p>
                    <p className="text-xs text-gray-600">
                      50+ activities & projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-700">
              {/* STUDENTS */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">1000+</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
              </div>

              {/* COUNTRIES */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="font-semibold leading-none">4+</p>
                  <p className="text-xs text-gray-500">Countries</p>
                </div>
              </div>
            </div>

            {/* WHAT IS GAME DESIGN */}
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What does Game Design mean for students?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Game Design teaches students how games are created — from ideas
                and rules to visuals and interactivity. Students learn by
                building real games using modern tools, without complex theory.
              </p>
            </section>

            {/* LEARNING OUTCOMES */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                After completing this course, your child can:
              </h2>

              <ul className="space-y-3">
                {[
                  "Design and build playable games",
                  "Understand game mechanics and logic",
                  "Create characters, levels, and scoring systems",
                  "Apply programming concepts through games",
                  "Showcase games to friends and family",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-green-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

           

            {/* STEPTOSTEM LEARNING PATH */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                The StepToSTEM Learning Path
              </h2>

              <p className="text-gray-700 mb-8 max-w-3xl">
                At StepToSTEM, students go beyond just playing games — they
                learn to design, build, and think like creators through a
                structured growth journey.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <Stage
                  title="Stage 1: Explorer"
                  color="border-green-500"
                  desc="Students explore how games work through fun, guided activities."
                  points={[
                    "Understanding games & rules",
                    "Basic logic & sequencing",
                    "Creativity-driven learning",
                  ]}
                />

                <Stage
                  title="Stage 2: Builder"
                  color="border-emerald-500"
                  desc="Students start building their own playable games step by step."
                  points={[
                    "Game mechanics",
                    "Player controls & scoring",
                    "Hands-on game projects",
                  ]}
                />

                <Stage
                  title="Stage 3: Innovator"
                  color="border-teal-500"
                  desc="Students design creative and advanced games using logic and design."
                  points={[
                    "Levels & challenges",
                    "Animations & interactions",
                    "Portfolio-ready games",
                  ]}
                />

                <Stage
                  title="Stage 4: Leader"
                  color="border-lime-500"
                  desc="Students gain confidence to showcase their games and guide others."
                  points={[
                    "Game showcases",
                    "Explaining game logic",
                    "Future-ready mindset",
                  ]}
                />
              </div>
            </section>
{/* GAME DEV COURSE PATHS */}
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-4 text-center">
    Choose Your Game Development Path
  </h2>

  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
    Students start their game development journey based on age, experience,
    and learning style.
  </p>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {/* SCRATCH CARD */}
    <GameCourseCard
      title="Scratch Programming"
      subtitle="Game Development for Kids"
      age="Ages 6–10"
      description="Kids learn game logic, creativity, and problem-solving by building fun 2D games using block-based coding."
      image="/asset/scratch-game-dev.jpg"
      href="/courses/game-design/scratch"
      badge="Beginner Friendly"
      color="from-orange-400 to-pink-500"
    />

    {/* ROBLOX CARD */}
    <GameCourseCard
      title="Roblox Champions"
      subtitle="Game Development (Basic → Advanced)"
      age="Ages 9–18"
      description="Students build immersive 3D games, learn Lua scripting, and publish their own Roblox experiences."
      image="/asset/roblox-game-dev.webp"
      href="/courses/game-design/roblox"
      badge="Most Popular"
      color="from-emerald-500 to-teal-600"
    />
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

/* COMPONENTS */

function FeatureCard({ icon, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-xl px-5 py-4 shadow-sm">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
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

function Stage({ title, desc, points, color }: any) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow border-t-4 ${color}`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{desc}</p>
      <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
        {points.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Choose the Right Learning Plan
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        One-hour live sessions • 48 sessions per course • UAE-friendly pricing
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* STARTER */}
        <PriceCard
          title="Starter"
          price="AED 37 "
          oldPrice="AED 50"
          discount="1:1 Personalized"
          monthly="Total: AED 1,776 (48 sessions)"
          course="App Development"
          points={[
            "1:1 live personalized sessions",
            "Dedicated personal mentor",
            "Flexible scheduling",
            "Custom learning pace",
            "Best for beginners & fast learners",
          ]}
          color="orange"
        />

        {/* GROWTH */}
        <PriceCard
          title="Growth"
          price="AED 27"
          oldPrice="AED 40"
          discount="Small Group (2–3 students)"
          monthly="Total: AED 1,296 (48 sessions)"
          course="App Development"
          points={[
            "Live small group classes (2–3 students)",
            "Peer learning & collaboration",
            "Structured weekly schedule",
            "Mentor-guided sessions",
            "Best value learning option",
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
  const bg = color === "green" ? "bg-green-500" : "bg-emerald-500";
  const text = color === "green" ? "text-green-600" : "text-emerald-600";

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

        <div className="mt-6"></div>
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

function RightSidebar() {
  return (
    <div className="lg:sticky lg:top-40 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Game Design" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow
            icon={<Video size={16} />}
            text="Live game design & development classes"
          />
          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group mentoring"
          />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="Game mechanics, logic & level design"
          />
          <SidebarRow
            icon={<Layers size={16} />}
            text="Hands-on game projects & playable levels"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Game development certificate"
          />
          <SidebarRow
            icon={<BarChart size={16} />}
            text="Progress reports & skill assessments"
          />
          <SidebarRow
            icon={<ShieldCheck size={16} />}
            text="100% money-back guarantee for assured satisfaction"
          />

          <SidebarRow
            icon={<CalendarCheck size={16} />}
            text="Flexible class scheduling"
          />
          <SidebarRow
            icon={<Video size={16} />}
            text="Unlimited 1:1 live doubt sessions"
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
function GameCourseCard({
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
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
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

        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4">
          <span className="text-xs font-medium text-gray-500">{age}</span>

          <span className="text-green-600 font-semibold group-hover:underline">
            View Course →
          </span>
        </div>
      </div>
    </Link>
    
  );
}
