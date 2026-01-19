"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBlock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 px-6 py-12 text-center rounded-2xl
                 bg-white/40 backdrop-blur-md shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Contact Us
      </h2>

      <p className="text-gray-700 mb-6">
        Have questions or want to get started? Reach out to us anytime.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
        <div className="flex items-center gap-3">
          <Phone className="text-blue-500" />
          <a href="tel:+918289004978" className="font-medium hover:underline">
            +91 8289004978
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-purple-500" />
          <a
            href="mailto:info@stemxlearning.com"
            className="font-medium hover:underline"
          >
            info@stemxlearning.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
