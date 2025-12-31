"use client";

import {
  Star,
  Users,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
  Gamepad2,
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

            <div className="flex items-center gap-3 text-sm mb-4">
              <div className="flex text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <span className="text-gray-600">
                Create games students love to play
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              This course introduces students to the exciting world of game
              design and development. Students learn how games are planned,
              designed, and built — from characters and mechanics to logic and
              gameplay.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Designed to build creativity, logic, and problem-solving skills.
            </p>
          </div>

          {/* TRUST STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">
            <TrustItem icon={<Users />} title="Live Classes" />
            <TrustItem icon={<Award />} title="Certificate on Completion" />
            <TrustItem icon={<Clock />} title="12-Week Structured Program" />
            <TrustItem icon={<ShieldCheck />} title="Safe for Kids" />
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
                text="Introduction to Games & Game Design"
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

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>2D Arcade Game</li>
              <li>Obstacle & Scoring Game</li>
              <li>Final Custom Game Project</li>
            </ul>
          </section>

          {/* STEPTOSTEM LEARNING PATH */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              The StepToSTEM Learning Path
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              At StepToSTEM, students grow beyond just playing games — they
              learn to design, build, and lead through a structured journey.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <Stage
                title="Stage 1: Explorer"
                color="border-green-500"
                desc="Students explore how games work through fun activities."
                points={[
                  "Game fundamentals",
                  "Logical thinking",
                  "Creativity-driven learning",
                ]}
              />

              <Stage
                title="Stage 2: Builder"
                color="border-emerald-500"
                desc="Students start building their own playable games."
                points={[
                  "Game mechanics",
                  "Basic programming",
                  "Hands-on projects",
                ]}
              />

              <Stage
                title="Stage 3: Innovator"
                color="border-teal-500"
                desc="Students design creative and advanced games."
                points={[
                  "Advanced gameplay",
                  "Animations & levels",
                  "Portfolio games",
                ]}
              />

              <Stage
                title="Stage 4: Leader"
                color="border-lime-500"
                desc="Students gain confidence to showcase and guide others."
                points={[
                  "Game showcases",
                  "Mentoring juniors",
                  "Future-ready mindset",
                ]}
              />
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
            <BookDemoButton course="Game Design" variant="inline" />

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
      <BookDemoButton course="Game Design" />
    </div>
  );
}

/* SMALL COMPONENTS */

function TrustItem({ icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-green-600">{icon}</div>
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
