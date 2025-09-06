'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface Project {
  title: string
  subtitle?: string
  description: string
  stats?: { label: string; value: string }[]
  review?: { text: string; source: string }
  roles: string[]
  image: string
  imageMobile?: string
  link: string
  icon: string
}

const projects: Project[] = [
  {
    title: 'Daily30+',
    subtitle: 'Intro Video',
    description: 'This video, the centerpiece of the landing page, features ZOE\'s key spokespeople introducing the company\'s flagship supplement, Daily30+.',
    stats: [{ label: 'Views', value: '100k+' }],
    roles: ['PRODUCER', 'SCRIPT WRITER'],
    image: 'https://ext.same-assets.com/4101750110/2370809556.webp',
    link: 'https://zoe.com/daily30',
    icon: 'https://ext.same-assets.com/4101750110/3120082475.svg'
  },
  {
    title: 'The Piggyvest Savings Report \'23',
    description: 'The PiggyVest Savings Report 2023 is a comprehensive report offering insights into how Nigerians earned, spent and saved money in 2023.',
    stats: [
      { label: 'Visits', value: '100k+' },
      { label: 'Signups', value: '11k+' }
    ],
    review: {
      text: 'This report is a breath of fresh air.',
      source: 'Akintunde Oyebode, Commissioner of Finance, Ekiti State, Nigeria'
    },
    roles: ['PRODUCER', 'EDITOR'],
    image: 'https://ext.same-assets.com/4101750110/3623129531.png',
    imageMobile: 'https://ext.same-assets.com/4101750110/1179096356.png',
    link: 'https://www.piggyvest.com/reports/2023',
    icon: 'https://ext.same-assets.com/4101750110/1521910953.svg'
  },
  {
    title: 'HANKY PANKY:',
    subtitle: 'AN ANIMATED SHORT',
    description: 'Hanky Panky follows Osas and her friends, who, while stuck in Falomo traffic, receive an unexpected phone call that throws a wrench in their day.',
    review: {
      text: 'Builds genuine tension and emotional investment [...] The results are impressive.',
      source: 'Animation Obsessive'
    },
    roles: ['DIRECTOR', 'SCRIPT EDITOR'],
    image: 'https://ext.same-assets.com/4101750110/2992820694.png',
    imageMobile: 'https://ext.same-assets.com/4101750110/296773426.png',
    link: 'https://www.youtube.com/watch?v=wVrJhlW4Uw4',
    icon: 'https://ext.same-assets.com/4101750110/34546130.svg'
  },
  {
    title: 'FEEL GOOD',
    subtitle: 'BOOK',
    description: 'Feel Good is an anthology of 8 short stories that centre and celebrate queer joy, written by some of Nigeria\'s most gifted storytellers.',
    review: {
      text: 'The stories here will hold you [and] sit with you.',
      source: 'Teen Vogue'
    },
    roles: ['PRODUCER', 'EDITOR-IN-CHIEF'],
    image: 'https://ext.same-assets.com/4101750110/2550814817.png',
    imageMobile: 'https://ext.same-assets.com/4101750110/204709971.png',
    link: 'https://www.afeelgoodbook.com/',
    icon: 'https://ext.same-assets.com/4101750110/2112406408.svg'
  }
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="experience-text text-6xl lg:text-7xl text-white mb-8">
            FEaTURED{' '}
            <span className="italic">_</span>
            PRoJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Details Button */}
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      DETAILS
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-black p-8 rounded-2xl">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Project details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {project.title}
                        {project.subtitle && (
                          <div className="text-2xl lg:text-3xl">{project.subtitle}</div>
                        )}
                      </h3>

                      <div className="flex gap-4 mb-4">
                        {project.roles.map((role) => (
                          <span
                            key={role}
                            className="bg-white/10 text-white/80 px-3 py-1 rounded text-sm font-medium"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">
                          OVERVIEW
                        </h4>
                        <p className="text-white/80 leading-relaxed">{project.description}</p>
                      </div>

                      {project.review && (
                        <div>
                          <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">
                            REVIEW
                          </h4>
                          <p className="text-white/80 leading-relaxed italic">
                            "{project.review.text}"
                            <span className="block mt-2 text-sm text-white/60">
                              — {project.review.source}
                            </span>
                          </p>
                        </div>
                      )}

                      {project.stats && (
                        <div>
                          <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">
                            STATS
                          </h4>
                          <div className="space-y-2">
                            {project.stats.map((stat) => (
                              <div key={stat.label} className="flex justify-between">
                                <span className="text-white/60">{stat.label}</span>
                                <span className="text-white font-semibold">{stat.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right - Visit button */}
                  <div className="flex lg:justify-end lg:items-center">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full group-hover:bg-white/90 transition-colors"
                    >
                      <ArrowUpRight className="w-6 h-6 text-black" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-none font-medium hover:bg-white/20 transition-colors mx-auto"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
