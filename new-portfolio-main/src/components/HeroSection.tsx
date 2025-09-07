'use client'

import { motion } from 'framer-motion'
import AnimatedBadges from './AnimatedBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#191919]" />

      {/* Animated badges */}
      <AnimatedBadges />

      <div className="text-white relative z-10 max-w-7xl mx-auto items-center">
        {/* Left side - Main typography */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-text text-7xl lg:text-8xl xl:text-8xl text-white leading-none">
              KOLaPO{' '}KOlAWOLe
            </h1>
          </motion.div>

         </div>
      </div>
    </section>
  )
}
