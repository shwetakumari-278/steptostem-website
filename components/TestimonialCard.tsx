'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  age: number
  course: string
  content: string
  rating: number
  image: string
}


interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1

    // full star
    if (rating >= starValue) {
      return (
        <Star
          key={i}
          className="w-5 h-5 text-yellow-500 fill-current"
        />
      )
    }

    // half star
    if (rating >= starValue - 0.5) {
      return (
        <div key={i} className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 text-gray-300" />
          <Star
            className="absolute w-5 h-5 text-yellow-500 fill-current"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )
    }

    // empty star
    return (
      <Star
        key={i}
        className="w-5 h-5 text-gray-300"
      />
    )
  })
}


  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Quote className="w-6 h-6 text-primary-600" />
      </motion.div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
        <span className="ml-2 text-sm text-gray-500">
  ({testimonial.rating.toFixed(1)})
</span>

      </div>

      {/* Content */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-700 leading-relaxed mb-6 text-lg italic"
      >
        "{testimonial.content}"
      </motion.p>

      {/* Student Info */}
      <div className="flex items-center space-x-4">
       <motion.img
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  src={testimonial.image}
  alt={testimonial.name}
  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
/>

        
        <div>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-semibold text-gray-900"
          >
            {testimonial.name}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            Age {testimonial.age} • {testimonial.course}
          </motion.p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200" />
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-secondary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary-200/30 to-secondary-200/30 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-secondary-200/30 to-primary-200/30 group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  )
}
