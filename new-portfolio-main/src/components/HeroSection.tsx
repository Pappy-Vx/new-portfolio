'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedBadges from './AnimatedBadges'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#191919]" />

      {/* Animated badges */}
      <AnimatedBadges />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Main typography */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-text text-7xl lg:text-8xl xl:text-9xl text-white leading-none">
              DANIeL{' '}
              <span className="italic">_</span>
              OrUBo
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              I am a London-based content strategist and marketer with a decade's experience ideating and executing unconventional marketing strategies across various industries.
            </p>

            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              I have successfully built and managed multiple high-performing content teams, and utilising dynamic and optimised content, I have helped multiple B2B and B2C companies achieve their business goals.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-none font-medium hover:bg-white/90 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Right side - Services */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
              AVAILABLE FOR:
            </h3>

            <div className="space-y-3">
              {[
                'Content Strategy',
                'Speaking Engagements',
                'Content Workshops',
                'Consultations'
              ].map((service) => (
                <div key={service} className="text-lg text-white font-medium">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
