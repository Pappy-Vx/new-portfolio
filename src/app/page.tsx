import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#191919]">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}