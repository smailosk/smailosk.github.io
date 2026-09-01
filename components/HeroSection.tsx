'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiArrowDown, FiMapPin } from 'react-icons/fi'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function HeroSection() {
  const isMobile = useIsMobile()
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative theme-bg">
      {/* Static background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-neon/10 rounded-full blur-3xl dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl dark:opacity-100 opacity-50" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Positioning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 flex flex-wrap items-center gap-2"
            >
              <span className="font-mono text-sm text-emerald-neon">Ismail Amor · Flutter Software Engineer</span>
              <span className="inline-flex rounded-full border border-emerald-neon/40 bg-emerald-neon/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-emerald-neon">
                AI-powered apps &amp; integrations
              </span>
            </motion.div>

            {/* Value proposition */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5 text-[2.75rem] font-bold leading-[1.05] tracking-tight theme-text sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Flutter apps built for <span className="gradient-text">real-world products.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-5 max-w-2xl text-lg leading-7 theme-text-secondary md:text-xl md:leading-relaxed"
            >
              I build polished web and mobile products from complex requirements—from architecture and UX through reliable Flutter delivery.
              I also <span className="font-semibold text-emerald-neon">create AI-powered products and integrate useful AI features</span> into existing apps, workflows, and customer experiences.
            </motion.p>

            {/* Proof points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6 flex flex-wrap gap-2"
            >
              {['Flutter & Dart', 'Product design to delivery', 'Healthcare & enterprise'].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-2 rounded-full theme-card theme-border border text-sm theme-text-secondary"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mb-5 flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-neon/10 border border-emerald-neon/30 rounded-full text-sm theme-text">
                <FiMapPin className="w-4 h-4 text-emerald-neon" />
                <span>Germany-based · Available for select projects</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact-form"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a project
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold text-emerald-neon transition-colors hover:text-emerald-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View selected work <FiArrowDown className="h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/smailosk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Ismail Amor on GitHub"
                className="w-12 h-12 border border-emerald-neon/30 rounded-lg flex items-center justify-center text-emerald-neon hover:bg-emerald-neon hover:text-white dark:hover:text-dark transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ismail-amor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Ismail Amor on LinkedIn"
                className="w-12 h-12 border border-emerald-neon/30 rounded-lg flex items-center justify-center text-emerald-neon hover:bg-emerald-neon hover:text-white dark:hover:text-dark transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Animated border - disabled on mobile for performance */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-emerald rounded-2xl animate-spin-slow opacity-75 blur-xl" />
              )}
              
              {/* Image container */}
              <div className="relative theme-card rounded-2xl overflow-hidden border-2 border-emerald-neon/20 hover:border-emerald-neon/50 transition-all duration-500">
                <Image
                  src="/profile.png"
                  alt="Ismail Amor"
                  width={isMobile ? 300 : 500}
                  height={isMobile ? 300 : 500}
                  className="w-full h-auto object-cover"
                  preload={!isMobile}
                  sizes="(max-width: 768px) 300px, 500px"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-30 dark:opacity-60" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-neon/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:block absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#projects"
            aria-label="Scroll to selected projects"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-neon cursor-pointer"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
