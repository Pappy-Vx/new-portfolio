'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ExperienceItem {
  company: string
  year: string
  role: string
  description: string
  logo: string
  link: string
  companyBio: string
}

const experiences: ExperienceItem[] = [
  {
    company: 'ZOE',
    year: '2024',
    role: 'Content Strategist',
    description: 'I ideated and managed the production of multi-format content for campaigns, organic social, and paid channels, resulting in increased engagement, lead conversions, and sales.',
    logo: 'https://ext.same-assets.com/4101750110/2851986663.png',
    link: 'https://zoe.com/',
    companyBio: 'ZOE is a healthtech company combining world-leading research with cutting-edge AI to improve the health of millions.'
  },
  {
    company: 'PiggyVest',
    year: '2021 to 2024',
    role: 'Head of Content + Content Strategy',
    description: 'I founded and managed PiggyVest\'s content department, producing multiple content initiatives — ranging from a finance blog to a savings report — that resulted in 750k+ new users.',
    logo: 'https://ext.same-assets.com/4101750110/2242964250.png',
    link: 'https://www.piggyvest.com/',
    companyBio: 'PiggyVest is Africa\'s leading savings & investment platform with over 5 million users.'
  },
  {
    company: 'Splice',
    year: '2023',
    role: 'Content Strategist',
    description: 'I ideated Splice\'s first content strategy, handled hiring for the content team, and kicked off the content execution',
    logo: 'https://ext.same-assets.com/4101750110/3821279196.png',
    link: 'https://www.withsplice.com/',
    companyBio: 'Splice is an all-in-one appointment booking, payments, and business management solution for Africa.'
  },
  {
    company: 'Backdrop',
    year: '2021 to 2023',
    role: 'Content Lead, Product Marketer, Editor, Copywriter',
    description: 'I founded Backdrop\'s content department, tripled the website\'s organic traffic, and led product marketing for new and existing Backdrop features.',
    logo: 'https://ext.same-assets.com/4101750110/3751406902.png',
    link: 'https://backdrop.photo/',
    companyBio: 'Backdrop is a travel and social networking app for people looking to discover the world.'
  },
  {
    company: 'Zikoko',
    year: '2015 to 2016; 2019 to 2021',
    role: 'Editor-in-Chief, Content Strategist, Writer, Producer, Director, Copywriter',
    description: 'I ideated and refined Zikoko\'s content strategy, managed its 12-person production team, worked on content partnerships with clients, and grew its audience by 1,500%.',
    logo: 'https://ext.same-assets.com/4101750110/1420405490.png',
    link: 'https://www.zikoko.com/',
    companyBio: 'Zikoko is Nigeria\'s leading youth culture publication.'
  },
  {
    company: 'Maggi',
    year: '2020',
    role: 'Content Strategist, Writer, Producer',
    description: 'I worked with multiple Nigerian chefs to create viral recipe videos for a Maggi x Konbini collaboration.',
    logo: 'https://ext.same-assets.com/4101750110/2154618005.png',
    link: 'https://www.maggi.ng/',
    companyBio: 'Maggi is a brand of seasonings, soups and stocks, owned by Nestlé.'
  },
  {
    company: 'MTN',
    year: '2019',
    role: 'Content Strategist, Writer',
    description: 'I ideated and produced native adverts that successfully pushed MTN\'s new products to Zikoko\'s audience.',
    logo: 'https://ext.same-assets.com/4101750110/2056922010.png',
    link: 'https://www.mtn.ng/',
    companyBio: 'MTN is Africa\'s largest mobile network operator.'
  },
  {
    company: 'Jameson',
    year: '2019',
    role: 'Content Strategist, Producer',
    description: 'I ideated and produced multiple viral videos for Jameson\'s World Beard Day campaign.',
    logo: 'https://ext.same-assets.com/4101750110/1741271396.png',
    link: 'https://www.jamesonwhiskey.com/en/',
    companyBio: 'Jameson is the best-selling Irish whiskey in the world.'
  },
  {
    company: 'Nescafé',
    year: '2017',
    role: 'Content Strategist, Writer, Producer, Director',
    description: 'I led Nescafé\'s year-long #GetStarted campaign for Konbini, creating articles and videos that led to a 30% uptick in coffee sales.',
    logo: 'https://ext.same-assets.com/4101750110/1690174006.png',
    link: 'https://www.nescafe.com/cwa/en-cwa/',
    companyBio: 'Nescafé is a world-famous brand of instant coffee made by Nestlé.'
  },
  {
    company: 'Konbini',
    year: '2016 to 2019',
    role: 'Editor-in-Chief, Writer, Editor, Producer, Director',
    description: 'I led and scaled Konbini Nigeria\'s editorial team, wrote over 1,000 articles, produced over 100 videos and created native adverts for multiple partner brands.',
    logo: 'https://ext.same-assets.com/4101750110/1255667184.png',
    link: 'https://www.konbini.com/',
    companyBio: 'Konbini is a pop culture publication from France.'
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="experience-text text-6xl lg:text-7xl text-white mb-4">
            10 YEaRS OF{' '}
            <span className="italic">_</span>
            EXPeRIENCE
          </h2>
          <p className="text-lg text-white/60">working with 30+ brands</p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="bg-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 items-start"
              >
                {/* Left side - Company info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-sm text-white/60">{exp.year}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 italic">{exp.companyBio}</p>
                </div>

                {/* Right side - Role and description */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider">
                    {exp.role}
                  </h4>
                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
