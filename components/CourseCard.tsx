"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Clock, Star } from "lucide-react";
import { StaticImageData } from "next/image";

interface Course {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  image: string | StaticImageData;
  features: string[];
  rating: number;
}

interface CourseCardProps {
  course: Course;
  showPlay?: boolean;
}

export default function CourseCard({
  course,
  showPlay = false,
}: CourseCardProps) {
  const IconComponent = course.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group cursor-pointer ${course.bgColor}
  rounded-2xl p-6 shadow-lg hover:shadow-2xl
  transition-all duration-500 overflow-hidden
  flex flex-col h-full`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`w-full h-full bg-gradient-to-br ${course.color}`} />
      </div>

      {/* Course Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg
  ${
    course.id === "app-development"
      ? "bg-gradient-to-br from-orange-600 to-amber-600"
      : `bg-gradient-to-br ${course.color}`
  }`}
      >
        <IconComponent className="w-8 h-8 text-white stroke-[2.5]" />
      </motion.div>

      {/* Course Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={
            typeof course.image === "string" ? course.image : course.image.src
          }
          alt={course.title}
          className="w-full h-32 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        {showPlay && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Play className="w-5 h-5 text-gray-700" />
          </motion.div>
        )}
      </div>

      {/* Course Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Course Features */}
        <div className="space-y-2 mb-6">
          {course.features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.color}`}
              />
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Course Stats – ONLY for Python & ML */}
        {course.id === "ai-ml" && (
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>70+ students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>6 Months</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{course.rating}</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
    w-full py-3 px-4 rounded-xl font-semibold
    flex items-center justify-center space-x-2
    text-white shadow-lg  mt-auto
    ${
      course.id === "app-development"
        ? "bg-gradient-to-r from-orange-600 to-amber-600 hover:shadow-orange-300/50"
        : `bg-gradient-to-r ${course.color}`
    }
  `}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Hover Effect Overlay */}
    </motion.div>
  );
}
