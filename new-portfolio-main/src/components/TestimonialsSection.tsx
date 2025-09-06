'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  name: string
  title: string
  company: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Seyi Taylor',
    title: 'Co-founder',
    company: 'Big Cabal Media',
    text: 'Daniel is one of the most talented and effective creatives I\'ve ever had the pleasure of working with. He has an abundance of taste and empathy, and channels that through very high standards to deliver work that stands out on multiple levels. He\'s a great team player, demanding excellence of himself first, and then his teammates. More than that, he leads from the front — Daniel was an out-performer when we worked together and it\'s been a complete joy to watch his career blossom.',
    avatar: 'https://ext.same-assets.com/4101750110/1461568290.png'
  },
  {
    name: 'Sara Gordon',
    title: 'General Manager',
    company: 'ZOE',
    text: 'Daniel worked with me on the Daily30+ launch to ensure we had great content that reflected our science and product story across the website, app and other channels. I\'d recommend him for content ideation and planning.',
    avatar: 'https://ext.same-assets.com/4101750110/3477131215.svg'
  },
  {
    name: 'Damilola Odufuwa',
    title: 'CEO',
    company: 'Backdrop',
    text: 'I\'ve had the pleasure of working with Daniel for over four years and across three different companies (Zikoko, Konbini and Backdrop). In each role, Daniel continued to showcase his innovative skills in content strategy, as well as his ability to produce high-quality work quickly and efficiently. He\'s also a great team player and brilliant storyteller.',
    avatar: 'https://ext.same-assets.com/4101750110/1666064633.png'
  },
  {
    name: 'Dolapo R. Ojelabi',
    title: 'Product Member of the Year (2023)',
    company: 'ConTech Africa',
    text: 'Being part of ConTech Africa has been an enriching experience. We\'re not just disruptors, we\'re dreamers, builders, and changemakers. Big thanks to Daniel Orubo for creating a community where African creators can learn, dream big, collaborate fiercely, and build the future of tech.',
    avatar: 'https://ext.same-assets.com/4101750110/177577932.png'
  },
  {
    name: 'Joshua Chibueze',
    title: 'CMO',
    company: 'PiggyVest',
    text: 'I\'ve worked with Daniel for almost three years, and his performance has been nothing short of amazing. He consistently demonstrates an eagerness to push boundaries and exceed targets. Daniel is the perfect content strategist and an exceptional leader. His approach is innovative, and his work ethic reflects a commitment to excellence.',
    avatar: 'https://ext.same-assets.com/4101750110/4062057975.png'
  },
  {
    name: 'Timi Odueso',
    title: 'Senior Editor',
    company: 'TechCabal',
    text: 'Daniel is one of the go-to people for content development on the continent. If you have a question about content, Daniel has the answer.',
    avatar: 'https://ext.same-assets.com/4101750110/1661560191.png'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-white text-2xl">★</span>
            ))}
          </div>
          <h2 className="experience-text text-6xl lg:text-7xl text-white">
            TeSTiMONIALS
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl text-white/90 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white/60 text-sm">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
