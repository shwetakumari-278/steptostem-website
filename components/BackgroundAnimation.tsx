'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface BackgroundAnimationProps {
  activeCourse: string | null
}

export default function BackgroundAnimation({ activeCourse }: BackgroundAnimationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getCourseTheme = () => {
    switch (activeCourse) {
      case 'ai-ml':
        return {
          primary: 'from-purple-500/20',
          secondary: 'to-pink-500/20',
          accent: 'from-purple-400/30',
          elements: 'purple'
        }
      case 'web-dev':
        return {
          primary: 'from-blue-500/20',
          secondary: 'to-cyan-500/20',
          accent: 'from-blue-400/30',
          elements: 'blue'
        }
      case 'game-design':
        return {
          primary: 'from-green-500/20',
          secondary: 'to-emerald-500/20',
          accent: 'from-green-400/30',
          elements: 'green'
        }
      case 'arduino':
        return {
          primary: 'from-orange-500/20',
          secondary: 'to-red-500/20',
          accent: 'from-orange-400/30',
          elements: 'orange'
        }
      default:
        return {
          primary: 'from-primary-500/20',
          secondary: 'to-secondary-500/20',
          accent: 'from-primary-400/30',
          elements: 'blue'
        }
    }
  }

  const theme = getCourseTheme()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Background Gradient */}
      <motion.div
        animate={{
          background: activeCourse 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.primary}, ${theme.secondary})`
            : 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), rgba(217, 70, 239, 0.1))'
        }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 opacity-60"
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br ${theme.accent} blur-xl`}
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-br ${theme.accent} blur-xl`}
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-32 left-32 w-40 h-40 rounded-full bg-gradient-to-br ${theme.accent} blur-xl`}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
          className={`absolute w-2 h-2 rounded-full bg-${theme.elements}-400`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Course-specific floating elements */}
      {activeCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {activeCourse === 'ai-ml' && (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-purple-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-pink-400/30 rounded-full"
              />
            </>
          )}
          
          {activeCourse === 'web-dev' && (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 left-1/3 w-12 h-12 border-2 border-blue-400/30 transform rotate-45"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-cyan-400/30 transform rotate-45"
              />
            </>
          )}
          
          {activeCourse === 'game-design' && (
            <>
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 w-14 h-14 border-2 border-green-400/30 transform rotate-45"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/2 right-1/4 w-18 h-18 border-2 border-emerald-400/30 transform rotate-45"
              />
            </>
          )}
          
          {activeCourse === 'arduino' && (
            <>
              <motion.div
                animate={{ rotate: 360, x: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/2 w-16 h-16 border-2 border-orange-400/30 rounded-lg"
              />
              <motion.div
                animate={{ rotate: -360, y: [0, -20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/2 w-20 h-20 border-2 border-red-400/30 rounded-lg"
              />
            </>
          )}
        </motion.div>
      )}

      {/* Subtle wave effect */}
      <motion.div
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"
      />
    </div>
  )
}
