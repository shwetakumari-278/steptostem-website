'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  image?: string
}

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = feature.icon

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"

    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400" />
      </div>

      {/* Icon Container */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
      >
        <IconComponent className="w-10 h-10 text-white" />
      </motion.div>

      {/* Optional Image */}
      {feature.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-6 overflow-hidden rounded-xl"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={feature.image}
            alt={feature.title}
            className="w-full h-40 object-cover"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">

        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
          {feature.description}
        </p>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-secondary-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-200/30 to-secondary-200/30 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary-200/30 to-primary-200/30 group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  )
}
