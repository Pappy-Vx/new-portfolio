'use client'

import { motion } from 'framer-motion'

interface Badge {
  text: string
  className: string
  position: { x: string; y: string }
  delay: number
}

const badges: Badge[] = [
  {
    text: 'copywriter',
    className: 'badge-copywriter',
    position: { x: '5%', y: '20%' },
    delay: 0
  },
  {
    text: 'content strategist',
    className: 'badge-content-strategist',
    position: { x: '25%', y: '35%' },
    delay: 0.5
  },
  {
    text: 'writer & editor',
    className: 'badge-writer-editor',
    position: { x: '15%', y: '55%' },
    delay: 1
  },
  {
    text: 'product marketer',
    className: 'badge-product-marketer',
    position: { x: '30%', y: '75%' },
    delay: 1.5
  },
  {
    text: 'director',
    className: 'badge-director',
    position: { x: '45%', y: '25%' },
    delay: 2
  },
  {
    text: 'producer',
    className: 'badge-producer',
    position: { x: '55%', y: '45%' },
    delay: 0.8
  },
  {
    text: 'email marketer',
    className: 'badge-email-marketer',
    position: { x: '75%', y: '30%' },
    delay: 1.2
  },
  {
    text: 'SEO specialist',
    className: 'badge-seo-specialist',
    position: { x: '65%', y: '60%' },
    delay: 1.8
  },
  {
    text: 'storyteller',
    className: 'badge-storyteller',
    position: { x: '80%', y: '50%' },
    delay: 2.2
  }
]

export default function AnimatedBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.text}
          className={`absolute px-3 py-1.5 rounded-full text-sm font-medium text-white ${badge.className}`}
          style={{
            left: badge.position.x,
            top: badge.position.y,
          }}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{
            y: [-10, 10, -10],
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: badge.delay,
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.8
            },
            scale: {
              duration: 0.8
            }
          }}
        >
          {badge.text}
        </motion.div>
      ))}
    </div>
  )
}
