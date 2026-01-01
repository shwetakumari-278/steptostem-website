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
import BookDemoButton from "@/components/BookDemoButton";

export default function GameDesignCoursePage() {
  return (
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

          {/* FEATURE ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Users size={22} />}
              title="Student-Focused"
              subtitle="For kids & teens"
            />
            <FeatureCard
              icon={<Award size={22} />}
              title="Certified"
              subtitle="Completion certificate"
            />
            <FeatureCard
              icon={<Clock size={22} />}
              title="12-Week Program"
              subtitle="Structured learning"
            />
            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Safe Learning"
              subtitle="Age-appropriate"
            />
          </div>

          {/* TRUST STRIP */}
          <div className="flex flex-wrap items-center gap-10 text-sm text-gray-700">
            <a
              href="https://www.google.com/search?q=StepToSTEM+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <span className="font-semibold">Google</span>{" "}
              <span className="text-gray-500">Reviews coming soon</span>
            </a>

            <a
              href="https://www.trustpilot.com/review/steptostem.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <span className="font-semibold">
                <span className="text-green-600">★</span> Trustpilot
              </span>{" "}
              <span className="text-gray-500">Reviews coming soon</span>
            </a>
          </div>

          {/* WHAT IS GAME DESIGN */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              What does Game Design mean for students?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Game Design teaches students how games are created — from ideas
              and rules to visuals and interactivity. Students learn by building
              real games using modern tools, without complex theory.
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

          {/* CURRICULUM */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Course curriculum</h2>

            <div className="space-y-4">
              <Curriculum
                title="Module 1"
                text="Introduction to Games & Design"
              />
              <Curriculum
                title="Module 2"
                text="Game Rules, Mechanics & Logic"
              />
              <Curriculum
                title="Module 3"
                text="Characters, Levels & Scoring"
              />
              <Curriculum title="Module 4" text="Game Programming Basics" />
              <Curriculum title="Module 5" text="Animations & Interactivity" />
              <Curriculum
                title="Module 6"
                text="Final Game Project & Showcase"
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Projects students build</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>2D arcade game</li>
              <li>Obstacle & scoring game</li>
              <li>Final custom game project</li>
            </ul>
          </section>

          {/* STEPTOSTEM LEARNING PATH */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              The StepToSTEM Learning Path
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              At StepToSTEM, students go beyond just playing games — they learn
              to design, build, and think like creators through a structured
              growth journey.
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

          {/* PRICING – SAME AS OTHER COURSES */}
          <PricingSection />
        </div>

        {/* RIGHT SIDEBAR */}
        <RightSidebar />
      </div>

      <BookDemoButton course="Game Design" />
    </div>
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

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PriceCard
          title="Starter"
          price="₹ 1,120"
          oldPrice="₹ 1,600"
          discount="30% off"
          monthly="₹ 8,960 / month"
          course="Game Design"
          points={[
            "1:1 live personalized game design sessions",
            "Dedicated mentor",
            "Flexible scheduling",
            "Focused individual attention",
            "Best for beginners",
          ]}
          color="green"
        />

        <PriceCard
          title="Growth"
          price="₹ 900"
          oldPrice="₹ 1,200"
          discount="25% off"
          monthly="₹ 7,200 / month"
          course="Game Design"
          points={[
            "Small group live game classes",
            "Peer learning & collaboration",
            "Structured weekly schedule",
            "Mentor-guided sessions",
            "More affordable option",
          ]}
          color="emerald"
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

        <div className="mt-6">
          <BookDemoButton course={course} />
        </div>
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
    <div className="lg:sticky lg:top-24 h-fit">
      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <BookDemoButton course="Game Design" variant="inline" />

        <h3 className="font-bold text-lg mt-6 mb-4">This course includes:</h3>

        <ul className="space-y-4 text-sm text-gray-700">
          <SidebarRow
            icon={<Video size={16} />}
            text="Live instructor-led classes"
          />
          <SidebarRow
            icon={<Users size={16} />}
            text="1:1 or small group learning"
          />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="Structured curriculum"
          />
          <SidebarRow
            icon={<Layers size={16} />}
            text="Hands-on game projects"
          />
          <SidebarRow
            icon={<Award size={16} />}
            text="Certificate on completion"
          />
          <SidebarRow icon={<BarChart size={16} />} text="Progress tracking" />
          <SidebarRow
            icon={<CalendarCheck size={16} />}
            text="Flexible scheduling"
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
