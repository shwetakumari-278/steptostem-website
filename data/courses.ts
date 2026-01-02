import { Brain, Globe, Gamepad2, Smartphone } from "lucide-react";

export const courses = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Learn the future of technology with hands-on AI projects and ML algorithms",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    image: "/asset/theme_halo.png",
    features: [
      "Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications from scratch",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    image: "/asset/Picture4.webp",
    features: [
      "HTML/CSS/JavaScript",
      "React & Next.js",
      "Backend Development",
      "Full-Stack Projects",
    ],
  },
  {
    id: "game-design",
    title: "Game Design",
    description:
      "Create engaging games and interactive experiences with modern tools",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    image: "/asset/game_design.png",
    features: [
      "Game Mechanics",
      "Unity/Unreal Engine",
      "3D Modeling",
      "Game Programming",
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Design and build interactive mobile apps from idea to launch.",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    image: "/asset/app-development.jpeg",
    features: [
      "App UI & User Interaction",
      "App Logic & Navigation",
      "Mini Mobile App Projects",
    ],
  },
];
