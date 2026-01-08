"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Trophy, Sparkles } from "lucide-react";

export default function HackathonsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />

      {/* Background (SAME STYLE AS HOME) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/asset/theme_halo.png"
          alt="Hackathons Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/75 to-purple-50/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-100"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Hackathons Are <span className="gradient-text">Coming Soon</span>
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We’re building an exciting hackathon ecosystem where students can
            participate in real challenges, collaborate with peers, and showcase
            their projects on a national stage.
          </p>

          <p className="text-gray-600 mb-10">
            From beginner-friendly coding challenges to advanced AI and game
            design hackathons — everything is being carefully crafted.
          </p>

          <div className="flex items-center justify-center gap-3 text-primary-600 font-semibold">
            <Sparkles className="w-5 h-5" />
            Launching very soon. Stay tuned!
          </div>
        </motion.div>
      </div>
    </div>
  );
}
