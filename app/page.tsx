"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Brain,
  Globe,
  Gamepad2,
  Cpu,
  Trophy,
  Users,
  Target,
  Sparkles,
  ChevronDown,
  Play,
  Star,
  ArrowRight,
  Smartphone,
  Award,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookDemoButton from "@/components/BookDemoButton";
import ChatButton from "@/components/ChatButton";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ContactBlock from "@/components/components/ContactBlock";
import Link from "next/link";

export default function Home() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
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
        "Design and build interactive mobile apps while learning how real apps work from idea to launch.",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      image: "/asset/app-development.jpeg",
      features: [
        "App UI & User Interaction",
        "App Logic & Navigation",
        "Mini Mobile App Projects",
      ],
    },
  ];
  const features = [
    {
      icon: Trophy,
      title: "Hackathon Ready",
      description:
        "Compete in national and international hackathons with confidence",
      image: "/asset/hackathon.jpeg",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description:
        "Learn from industry professionals and experienced educators",
      image: "/asset/chatbot.jpg",
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Build real-world projects that showcase your skills",
      image: "/asset/download.png",
    },
    {
      icon: Sparkles,
      title: "Latest Tech Trends",
      description:
        "Stay updated with cutting-edge technology and industry practices",
      image: "/asset/game_design.png",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 16,
      course: "AI/ML",
      content:
        "StepToSTEM helped me build my first AI chatbot! The mentors are amazing.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      age: 14,
      course: "Web Development",
      content:
        "I learned to code websites and even won a hackathon! Best learning experience ever.",
      rating: 5,
    },
    {
      name: "Zara Khan",
      age: 17,
      course: "Game Design",
      content:
        "Creating games is so much fun! The instructors make complex concepts simple.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <BackgroundAnimation activeCourse={activeCourse} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme_halo.png"
            alt="Hero Background Theme"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/75 to-purple-50/80" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white overflow-hidden relative">
                <img
                  src="/asset/logo.webp"
                  alt="StepToSTEM Logo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Mask bottom text */}
                <div className="absolute bottom-0 left-0 w-full h-6 bg-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              <span className="gradient-text">StepToSTEM</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering students aged 7-18 to become tech innovators through
              <span className="font-semibold text-primary-600"> AI/ML</span>,
              <span className="font-semibold text-secondary-600">
                {" "}
                Web Development
              </span>
              ,
              <span className="font-semibold text-green-600"> Game Design</span>
              , and
              <span className="font-semibold text-orange-600">
                {" "}
                App Development
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="button-primary text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Learning
              </button>
              <button className="button-secondary text-lg px-8 py-4">
                <Trophy className="w-5 h-5 mr-2 inline" />
                Join Hackathons
              </button>
            </div>

            <div className="text-gray-600">
              <p className="text-lg mb-4">
                Trusted by 1000+ students nationwide
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">30+</div>
                  <div className="text-sm">Hackathon Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">
                    100+
                  </div>
                  <div className="text-sm">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white/50 backdrop-blur-sm">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme7.jpg"
            alt="Courses Background Theme"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Explore Our <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive courses designed to make you
              hackathon-ready and future-proof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveCourse(course.id)}
                onHoverEnd={() => setActiveCourse(null)}
              >
                <Link href={`/courses/${course.id}`}>
                  <div className="h-full cursor-pointer">
                    <CourseCard course={course} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme2.jpg"
            alt="Features Background Theme"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Why Choose <span className="gradient-text">StepToSTEM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just teaching coding - we're building the next
              generation of tech innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme3.jpg"
            alt="AI Showcase Background Theme"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/70 via-pink-50/65 to-purple-50/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              AI-Powered <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our students use cutting-edge AI tools to create amazing
              projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Image Generation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/qwen-image-prompt-extend_make_for_the_robotic.png"
                  alt="AI Generated Robotics Image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">AI Image Generation</h3>
                  <p className="text-sm opacity-90">Using Qwen AI</p>
                </div>
              </div>
              <p className="text-gray-600 text-center">
                Students learn to generate creative images using advanced AI
                models
              </p>
            </motion.div>

            {/* GPT Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/gpt-image-1_make_for_the_robotic.png"
                  alt="GPT Generated Robotics Image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">GPT Integration</h3>
                  <p className="text-sm opacity-90">Using GPT Models</p>
                </div>
              </div>
              <p className="text-gray-600 text-center">
                Build intelligent chatbots and AI assistants with GPT technology
              </p>
            </motion.div>
            {/* AI Content & Creativity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/ai_creativity_students.jpg"
                  alt="AI Content & Creativity"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">AI Content & Creativity</h3>
                  <p className="text-sm opacity-90">
                    Images • Posters • Stories
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-center">
                Create images, posters, stories, and presentations using
                powerful AI tools
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Design Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme4.jpg"
            alt="Game Design Background Theme"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/75 via-emerald-50/70 to-green-50/75" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Game Design <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to creation - learn the art and science of game
              development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Game Design Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/asset/game_design.png"
                alt="Game Design Showcase"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-2xl mb-2">Game Development</h3>
                <p className="text-lg opacity-90">
                  Create immersive gaming experiences
                </p>
              </div>
            </motion.div>

            {/* Game Design Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gamepad2 className="w-6 h-6 text-green-600 mr-3" />
                  Game Mechanics & Design
                </h3>
                <p className="text-gray-600">
                  Learn fundamental game design principles, level design, and
                  player experience optimization
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                  Programming & Development
                </h3>
                <p className="text-gray-600">
                  Master game programming with Unity, Unreal Engine, and modern
                  development tools
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
                  3D Modeling & Animation
                </h3>
                <p className="text-gray-600">
                  Create stunning 3D assets, characters, and environments for
                  your games
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Your Child Will Learn Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme.jpg"
            alt="Learning Background Theme"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Your Child Will <span className="gradient-text">Learn</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive journey from understanding intelligence to
              building smart AI-powered projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Children working on electronics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/asset/Ai_children.png"
                alt="Children learning artificial intelligence"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Right: Learning modules */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* AI Learning Modules */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      AI Fundamentals
                    </h3>
                    <p className="text-gray-600">
                      Understand how machines think, learn, and make decisions
                      using simple, real-life examples.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Machine Learning Basics
                    </h3>
                    <p className="text-gray-600">
                      Learn how computers improve with data by training simple
                      machine learning models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Computer Vision & NLP
                    </h3>
                    <p className="text-gray-600">
                      Explore how AI can see images, recognize faces, and
                      understand human language.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      AI Projects & Challenges
                    </h3>
                    <p className="text-gray-600">
                      Build exciting AI projects like chatbots, smart
                      recommendations, and mini AI games.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Robotics Course Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme2.jpg"
            alt="Robotics Course Background Theme"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Why Choose Our <span className="gradient-text">AI Course</span>?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help young minds understand artificial intelligence through
              guided exploration, creativity, and real-world problem solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100/50 text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Project-Based Learning & Certification
              </h3>
              <p className="text-gray-600">
                Every student builds real projects, creates a strong portfolio,
                and receives certification after course completion — helping in
                school projects, competitions, and future profiles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100/50 text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guided & Structured Learning
              </h3>
              <p className="text-gray-600">
                Step-by-step guidance ensures students never feel lost while
                gradually gaining confidence to solve problems independently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-purple-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Age-Appropriate & Safe AI Usage
              </h3>
              <p className="text-gray-600">
                Students learn what AI should and should not be used for,
                understand dangers like deepfakes and misinformation, and
                practice using AI ethically and safely — becoming smart and
                responsible digital citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amazing Projects Students Build Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme3.jpg"
            alt="Projects Background Theme"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Amazing Projects{" "}
              <span className="gradient-text">Students Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects that students take home and show off to family and
              friends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100/50"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/ai_project.png"
                  alt="AI Smart Assistant Project"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart AI Assistant
                </h3>
                <p className="text-gray-600 mb-4">
                  Build an intelligent assistant that can recognize patterns,
                  answer questions, and make smart decisions using basic AI
                  concepts.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span className="mr-2">⏰</span>
                  Week 2–3 Project
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100/50"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/web_project.png"
                  alt="Student Built Website Project"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personal Portfolio Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Design and build a responsive website using HTML, CSS, and
                  JavaScript to showcase ideas, projects, and creativity.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span className="mr-2">⏰</span>
                  Week 4–5 Project
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100/50"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/asset/game_project.png"
                  alt="Interactive Game Development Project"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Interactive Arcade Game
                </h3>
                <p className="text-gray-600 mb-4">
                  Create a fun interactive game with scoring, animations, and
                  player controls while learning core game design principles.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span className="mr-2">⏰</span>
                  Week 6–7 Project
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme5.jpg"
            alt="Testimonials Background Theme"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real students who have transformed their tech
              journey with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme6.jpg"
            alt="CTA Background Theme"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/75 via-blue-50/70 to-purple-50/75" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to <span className="gradient-text">Transform</span> Your
              Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who are already building the future
              with StepToSTEM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="button-primary text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="button-secondary text-lg px-8 py-4">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactBlock />

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="w-20 h-20 rounded-full mb-4 overflow-hidden bg-white flex items-center justify-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white overflow-hidden relative">
                  <img
                    src="/asset/logo.webp"
                    alt="StepToSTEM Logo"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Mask bottom text */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">StepToSTEM</h3>
              <p className="text-gray-300 mb-4">
                Empowering the next generation of tech innovators through
                comprehensive STEM education.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-300">
                <li>AI & Machine Learning</li>
                <li>Web Development</li>
                <li>Game Design</li>
                <li>App-Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>ekjotnanda9@gmail.com</li>
                <li>+91 82890 04978</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 StepToSTEM. All rights reserved. Empowering students,
              building futures.
            </p>
          </div>
        </div>
      </footer>

      <ChatButton />
      <BookDemoButton course="General Enquiry" />
    </div>
  );
}
