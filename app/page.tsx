"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseFAQ from "@/components/CourseFAQ";
import HomeBlogs from "@/components/HomeBlogs";

import {
  Brain,
  Globe,
  Code,
  Gamepad2,
  Cpu,
  Trophy,
  Users,
  Hammer,
  Target,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  User,
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

import BackgroundAnimation from "@/components/BackgroundAnimation";
import ContactBlock from "@/components/components/ContactBlock";
import Link from "next/link";
import CourseOfferBar from "@/components/CourseOfferBar";
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
      title: "Python & Machine Learning",
      description:
        "Build strong programming skills with Python and explore Machine Learning through real projects",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      image: "/asset/py-ml.png",
      features: [
        "Python Programming",
        "Data Analysis & Visualization",
        "Machine Learning Basics",
        "Real-World Projects",
      ],
      rating: 4.9,
    },
    // After the ai-ml object, before web-dev:
{
  id: "generative-ai",
  title: "Generative AI Tools & Systems",
  description:
    "Learn to build with AI — create websites, automate workflows, generate content, and develop intelligent AI-powered systems using modern tools",

  icon: Sparkles,
  color: "from-pink-500 to-orange-400",
  bgColor: "bg-pink-50",
  image: "/asset/gen-ai.webp",

  features: [
    "AI Websites & Real Projects",
    "Automation & AI Workflows",
    "Content, Video & Image Creation",
    "AI Tools for Research & Productivity",
  ],

  rating: 4.9,
},
{
  id: "gen-ai-data-science",
  title: "Generative AI with Data Science",
  description:
    "Combine AI tools with data science to build intelligent systems, analyze data, and create real-world AI-powered solutions",

  icon: Cpu,
  color: "from-purple-500 to-indigo-500",
  bgColor: "bg-purple-50",
  image: "/asset/genai-ds.jpg", 

  features: [
    "Data Analysis with Python",
    "AI + Data Integration",
    "Predictive & Smart Systems",
    "Real-world AI Projects",
  ],

  rating: 4.85,
},
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Learn how websites are built from scratch using core web technologies",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      image: "/asset/Picture4.jpg",
      features: [
        "HTML – Structure of web pages",
        "CSS – Styling and layouts",
        "Backend Development",
        "JavaScript – Interactivity and logic",
      ],
      rating: 4.8,
    },
    {
      id: "game-design",
      title: "Game Design",
      description:
        "Create fun and interactive games while learning the basics of logic and design",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      image: "/asset/game_design.png",
      features: [
        "Scratch – Visual, block-based coding",
        "Roblox – Game creation with scripting",
        "Game logic & mechanics",
      ],
      rating: 4.9,
    },
    {
      id: "app-development",
      title: "App Development For Kids",
      description: "Design and build mobile apps using simple, visual tools.",
      icon: Smartphone,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      image: "/asset/app-development.jpeg",
      features: [
        "MIT App Inventor",
        "App screens & navigation",
        "Logic using blocks",
      ],
      rating: 4.85,
    },
  ];

  const features = [
    {
      icon: User,
      title: "1:1 Personalized Learning",
      description:
        "Every student learns differently — we teach accordingly. Mentors adapt lessons to the student’s pace, level, and learning style.",
      image: "/asset/personalized_learning.png",
    },
    {
      icon: CheckCircle2,
      title: "Mastery-Based Learning",
      description:
        "We move forward only when concepts are clear, ensuring strong fundamentals with no gaps in understanding.",
      image: "/asset/mastery_learning.png",
    },
    {
      icon: Hammer,
      title: "Project-Based Understanding",
      description:
        "Learn by building, not memorizing. Students create real projects that reinforce concepts and build confidence.",
      image: "/asset/project_based.png",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description:
        "Experienced mentors provide continuous feedback, clear explanations, and constant support throughout the journey.",
      image: "/asset/expert_mentors.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 16,
      course: "Python/ML",
      image: "/asset/student1.jpg",
      content:
        "STEMxLearning helped me build my first chatbot using python concepts. The mentors are amazing.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      age: 14,
      course: "Web Development",
      image: "/asset/student2.jpg",
      content:
        "I learned to code websites and even won a hackathon! Best learning experience ever.",
      rating: 4.7,
    },
    {
      name: "Zara Khan",
      age: 17,
      course: "Game Design",
      image: "/asset/student3.jpg",
      content:
        "Creating games is so much fun! The instructors make complex concepts simple.",
      rating: 4.9,
    },
    {
      name: "Rohan Mehta",
      age: 15,
      course: "Python",
      image: "/asset/student4.jpg",
      content:
        "Python concepts became so easy and fun to understand. I built my own mini projects.",
      rating: 4.9,
    },
    {
      name: "Ananya Verma",
      age: 13,
      course: "App Development",
      image: "/asset/student5.jpg",
      content:
        "I made my own mobile app in just a few weeks. Learning here is super fun!",
      rating: 4.8,
    },
    {
      name: "Kabir Singh",
      age: 16,
      course: "Python",
      image: "/asset/student6.jpg",
      content:
        "Best learning experience ever. Mentors explain everything very clearly.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 min-h-screen pt-24">
      <BackgroundAnimation activeCourse={activeCourse} />

      <Header />
      <CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Theme Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme_logo.png"
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
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/asset/logo_final1.png"
                  alt="stemxlearning Logo"
                  className="w-[96%] h-[96%] object-contain rounded-full"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              <span className="gradient-text">STEMxLearning</span>
            </h1>

           <p
  className="text-[1.7rem] md:text-[2.1rem] font-extrabold text-blue-500/90
  mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide"
>

              1:1 learning with mastery at its core
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() =>
                  document.getElementById("courses")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="button-primary text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Start Learning
              </button>

              <a
                href="/hackathons"
                className="button-secondary text-lg px-8 py-4 inline-flex items-center"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Join Hackathons
              </a>
            </div>

            <div className="text-gray-600">
              <p className="text-lg mb-4">
                Trusted by 100+ students Nationwide
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">
                    1000+
                  </div>
                  <div className="text-sm">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
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
              Choose from expertly designed courses where mastery comes before
              speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 items-stretch">
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
              Why Choose <span className="gradient-text">STEMxLearning</span>
            </h2>
            <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto text-center mb-4">
              We’re not just teaching coding — we’re building strong foundations
              through personalized 1:1 learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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
      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background (same style as deleted AI section) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme3.jpg"
            alt="FAQ Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
        </div>

        <div className="relative z-10">
          <CourseFAQ courseKey="home" title="Frequently Asked Questions" />
        </div>
      </section>
      <HomeBlogs />

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
              Join Hunderds of students who are already building the future with
              STEMxLearning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <BookDemoButton
                  course="AI & Machine Learning"
                  variant="inline"
                  label="Schedule  Free Demo Classes"
                />
              </div>
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
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/asset/logo_final.png"
                  alt="stemxlearning Logo"
                  className="w-18 h-18 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">STEMxLearning</h3>
              <p className="text-gray-300 mb-4">
                1:1 learning with mastery at its core.
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
                <li>Python & Machine Learning</li>
                <li>Generative AI</li> 
                <li>Web Development</li>
                <li>Game Design</li>
                <li>App-Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@stemxlearning.com</li>
                <li>+91 82890 04978</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 space-y-3">
            <p>
              &copy; 2026 STEMxLearning. All rights reserved. Empowering
              students, building futures.
            </p>

            {/* Legal Links */}
            <div className="flex justify-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

     
    </div>
  );
}
