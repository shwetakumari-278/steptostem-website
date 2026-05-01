"use client";

import { motion } from "framer-motion";

export default function AISummerCampFloating() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed bottom-6 left-6 z-50
        flex items-center gap-4
        px-5 py-4
        rounded-2xl
        bg-gradient-to-r from-violet-600 to-pink-500
        text-white
        shadow-2xl
        hover:scale-[1.03]
        transition-all
      "
    >
      {/* TEXT */}
      <div>
        <p className="font-semibold">
          🌞 AI Summer Camp
        </p>
        <p className="text-xs opacity-90">
          Build real AI projects
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => window.dispatchEvent(new Event("open-demo"))}
        className="
          bg-white text-black
          px-3 py-1.5
          rounded-full
          text-xs font-semibold
          hover:scale-105
          transition
        "
      >
        Book Demo
      </button>
    </motion.div>
  );
}