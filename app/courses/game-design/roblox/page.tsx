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

export default function RobloxGameDevPage() {
  return (
    <>
      <Header />

      <CourseOfferBar
        course="Roblox Game Development"
        gradient="from-emerald-500 to-teal-600"
      />

      {/* ROBLOX BACKGROUND */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            {/* HERO */}
            <section>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Roblox Game Development
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Build immersive 3D games using Roblox Studio and Lua scripting.
                Students publish real multiplayer games on Roblox.
              </p>
            </section>

            {/* FEATURES */}
            <section>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
                <Feature
                  icon={<BarChart size={20} />}
                  title="Suitable for"
                  value="Ages 9–18"
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
                  value="4–5 Months"
                />
                <Feature
                  icon={<Layers size={20} />}
                  title="Program"
                  value="30+ Projects"
                />
              </div>
            </section>

            {/* WHAT IS ROBLOX */}
            <section>
              <h2 className="text-2xl font-bold mb-3">What is Roblox?</h2>
              <p className="text-gray-700 leading-relaxed">
                Roblox is a global online gaming platform where users create and
                play games made by other developers. Students learn Lua
                scripting, game logic, UI systems, multiplayer mechanics, and
                monetization.
              </p>
            </section>

            {/* CURRICULUM */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Our Roblox Curriculum</h2>

              <div className="space-y-4">
                {ROBLOX_CURRICULUM.map((mod) => (
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
                {ROBLOX_PROJECTS.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl shadow p-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-48 w-full object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <PricingSection course="Roblox Game Development" />

            <CourseTestimonials courseId="roblox" />
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
      <div className="text-emerald-600 mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function PricingSection({ course }: any) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Choose the Right Learning Plan
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        36 live 1:1 sessions • 45 mins each • Flexible scheduling
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PriceCard
          title="Starter"
          price="₹900"
          oldPrice="₹1,200"
          discount="1:1 Personalized"
          monthly="Total: ₹43,200 (36 sessions)"
          course={course}
          points={[
            "36 live 1:1 sessions",
            "Dedicated Roblox mentor",
            "Lua scripting foundations",
            "Flexible schedule",
            "Game publishing guidance",
          ]}
          color="emerald"
        />

        <PriceCard
          title="Growth"
          price="₹660"
          oldPrice="₹1,000"
          discount="Small Group (2–3 students)"
          monthly="Total: ₹31,680 (36 sessions)"
          course={course}
          points={[
            "Small group live classes",
            "Multiplayer game building",
            "Advanced scripting concepts",
            "Structured weekly plan",
            "Mentor-guided sessions",
            "Best value plan",
          ]}
          color="teal"
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
  const bg = color === "emerald" ? "bg-emerald-500" : "bg-teal-500";

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      <div
        className={`${bg} text-white text-center py-4 text-xl font-semibold`}
      >
        {title}
      </div>

      <div className="p-6 text-center">
        <p className="text-3xl font-bold">{price} / session</p>
        <p className="line-through text-gray-400">{oldPrice}</p>
        <p className="text-sm text-gray-600 mt-4">{monthly}</p>
        <p className="text-xs text-gray-400 mt-2">{course}</p>
      </div>

      <div className="border-t p-6">
        <ul className="space-y-3 text-sm text-gray-700">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex gap-3">
              <CheckCircle className="text-green-600" size={16} />
              {p}
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
        <BookDemoButton course="Roblox Game Development" variant="inline" />

        <h3 className="font-bold text-lg">This course includes:</h3>

        <ul className="space-y-3 text-sm text-gray-700">
          <SidebarRow
            icon={<Users size={16} />}
            text="36 live private 1-on-1 sessions"
          />
          <SidebarRow
            icon={<UserCheck size={16} />}
            text="Expert CS instructors"
          />
          <SidebarRow icon={<Layers size={16} />} text="8 detailed modules" />
          <SidebarRow
            icon={<BookOpen size={16} />}
            text="30+ activities & projects"
          />
          <SidebarRow icon={<Award size={16} />} text="STEM.org certificate" />
          <SidebarRow
            icon={<Award size={16} />}
            text="Roblox Developer Certificate"
          />
          <SidebarRow
            icon={<InfinityIcon size={16} />}
            text="Lifetime content access"
          />
          <SidebarRow
            icon={<Download size={16} />}
            text="Live class recordings"
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
      <span className="text-emerald-600">{icon}</span>
      <span>{text}</span>
    </li>
  );
}

/* ===================== DATA ===================== */
const ROBLOX_PROJECTS = [
  {
    title: "Obstacle Obby",
    desc: "Multi-level obstacle game with checkpoints and timers.",
    image: "/asset/roblox-obby.jpg",
  },
  {
    title: "2D Platformer",
    desc: "Side-scrolling platformer with enemies and power-ups.",
    image: "/asset/roblox-2d-platformer.jpg",
  },
  {
    title: "Tycoon Game",
    desc: "Money system based tycoon with upgrades and saves.",
    image: "/asset/roblox-tycoon.jpg",
  },
  {
    title: "Racing Game",
    desc: "Vehicle racing game with laps, tracks and checkpoints.",
    image: "/asset/roblox-racing.jpg",
  },
  {
    title: "Battle Royale",
    desc: "Multiplayer battle game with maps and combat systems.",
    image: "/asset/roblox-battle-royale.jpg",
  },
  {
    title: "Mini Multiplayer Game",
    desc: "Published Roblox game playable with friends online.",
    image: "/asset/roblox-multiplayer.jpg",
  },
];

const ROBLOX_CURRICULUM = [
  {
    module: "Module 1: Introduction to Roblox Studio",
    goal: "Platform basics & Lua scripting",
    outcomes: [
      "Discovering Roblox",
      "Basic Roblox Coding",
      "Advanced Obstacles",
      "User Interface (GUI)",
      "Model Creation",
      "Mini Game Project",
    ],
  },
  {
    module: "Module 2: Creating an Obby",
    goal: "Multi-level obstacle games",
    outcomes: [
      "Game Information Setup",
      "Level Building",
      "Checkpoints",
      "Shop System",
      "Dynamic Obstacles",
      "Timer Mechanics",
    ],
  },
  {
    module: "Module 3: 2D Platformer",
    goal: "Camera & enemy systems",
    outcomes: [
      "Camera Controls",
      "Level Design",
      "Enemies & Power-ups",
      "Boss Fight",
      "Multiple Levels",
      "Testing",
    ],
  },
  {
    module: "Module 4: Tycoon Game",
    goal: "Economy & data systems",
    outcomes: [
      "Tycoon Setup",
      "Leaderstats",
      "Money Systems",
      "Saving Data",
      "Game Passes",
      "Testing",
    ],
  },
  {
    module: "Module 5: Racing Game",
    goal: "Vehicle & physics mechanics",
    outcomes: [
      "Car Creation",
      "Race Tracks",
      "Game Loop",
      "Lap Systems",
      "Lobby Area",
      "Testing",
    ],
  },
  {
    module: "Module 6: Battle Royale",
    goal: "Multiplayer & combat systems",
    outcomes: [
      "Lobby System",
      "Map Creation",
      "Voting System",
      "Health & Combat",
      "Respawn Logic",
      "Testing",
    ],
  },
  {
    module: "Module 7: Monetization & Publishing",
    goal: "Real-world game deployment",
    outcomes: [
      "Game Passes",
      "Developer Products",
      "Publishing Games",
      "Analytics",
      "Player Retention",
      "Updates",
    ],
  },
  {
    module: "Module 8: Showcase & Certification",
    goal: "Confidence & presentation",
    outcomes: [
      "Game Polishing",
      "Final Testing",
      "Showcase Event",
      "Explaining Code",
      "Parent Demo",
      "Certification",
    ],
  },
];
