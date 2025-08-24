'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Twitter, Linkedin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        {/* Large Contact Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-12 py-8 lg:px-16 lg:py-12 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <span className="text-4xl lg:text-6xl font-light text-white/70 group-hover:text-white transition-colors">
                Contact Me
              </span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 text-white/70 group-hover:text-white transition-colors" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              <p>Copyright (c) Daniel Orubo 2023.</p>
              <p>All Rights Reserved.</p>
            </div>

            {/* Built with credit */}
            <div className="text-white/40 text-sm text-center">
              <p>
                Built with{' '}
                <span className="text-red-400">♥</span>
                {' '}by{' '}
                <a href="#" className="underline hover:text-white transition-colors">
                  ai
                </a>
                {' '}+{' '}
                <a href="#" className="underline hover:text-white transition-colors">
                  Goody
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://twitter.com/NerdEfiko"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://uk.linkedin.com/in/daniel-orubo-a5b104a9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
