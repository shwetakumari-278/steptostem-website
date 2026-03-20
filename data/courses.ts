import { Brain, Globe, Gamepad2, Smartphone, Sparkles  } from "lucide-react";

export const courses = {
  "ai-ml": {
    id: "ai-ml",
 title: "Python & Machine Learning",
  description:
    "Build strong programming skills with Python and explore Machine Learning through real projects",
  icon: Brain,
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  image: "/asset/theme_halo.png",
  features: [
    "Python Programming",
    "Data Analysis & Visualization",
    "Machine Learning Basics",
    "Real-World Projects",
  ],
  rating: 4.9,

  students: "70+",
    
  },
  "generative-ai": {
  id: "generative-ai",
  title: "Generative AI",
  description:
    "Build real AI-powered apps using modern Gen AI tools, APIs, and large language models",
  icon: Sparkles,
  color: "from-pink-500 to-orange-400",
  bgColor: "bg-pink-50",
  image: "/asset/gen-ai.png",
  duration: "12 weeks",
  rating: 4.9,
  students: "50+",
  features: [
    "Prompt Engineering",
    "AI-Powered Web Apps",
    "Gen AI APIs & Tools",
    "Automation with AI",
  ],
},

  "web-dev": {
    id: "web-dev",
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications from scratch.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    image: "/asset/Picture4.webp",
    duration: "12 weeks",
    rating: 4.9,
    students: "500+",
    features: [
      "HTML, CSS & JavaScript",
      "React & Next.js",
      "Backend Development",
      "Full-Stack Projects",
    ],
  },

  "game-design": {
    id: "game-design",
    title: "Game Design",
    description:
      "Create engaging games and interactive experiences with modern tools.",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    image: "/asset/game_design.png",
    duration: "12 weeks",
    rating: 4.9,
    students: "500+",
    features: [
      "Game Mechanics",
      "Unity / Unreal Engine",
      "3D Modeling",
      "Game Programming",
    ],
  },

  "app-development": {
    id: "app-development",
    title: "App Development",
    description:
      "Design and build interactive mobile apps from idea to launch.",
    icon: Smartphone,

    /* 🔥 IMPORTANT CHANGE */
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",

    image: "/asset/app-development.jpeg",
    duration: "12 weeks",
    rating: 4.9,
    students: "500+",
    features: [
      "App UI & User Interaction",
      "App Logic & Navigation",
      "Mini Mobile App Projects",
    ],
  },
};

export type Course = (typeof courses)[keyof typeof courses];
