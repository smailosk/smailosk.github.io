import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-3 left-3 z-[10002] rounded-lg bg-emerald-neon px-4 py-2 font-semibold text-white shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="relative overflow-hidden" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
    </>
  )
}
