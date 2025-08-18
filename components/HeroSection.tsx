'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiArrowDown, FiMapPin } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import CountUp from './CountUp'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function HeroSection() {
  const isMobile = useIsMobile()
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative theme-bg">
      {/* Static background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-neon/10 rounded-full blur-3xl dark:opacity-100 opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl dark:opacity-100 opacity-50" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-emerald-neon font-mono text-sm mb-4"
            >
              {'<'} Hello World {'/>'} 
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 theme-text"
            >
              I'm <span className="gradient-text">Ismail Amor</span>
            </motion.h1>

            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl theme-text-secondary mb-6 h-10"
            >
              {isMobile ? (
                <span className="text-emerald-neon">Flutter Developer</span>
              ) : (
                <TypeAnimation
                  sequence={[
                    'Flutter Developer',
                    2000,
                    'Mobile App Architect',
                    2000,
                    'Healthcare Tech Specialist',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-emerald-neon"
                />
              )}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg theme-text-secondary mb-8 leading-relaxed"
            >
              Based in <span className="text-emerald-neon font-semibold">Germany</span>, serving clients across <span className="text-emerald-neon font-semibold">Europe</span>. 
              Currently building Germany's first gematik-certified healthcare messenger at{' '}
              <span className="text-emerald-neon font-semibold">Famedly GmbH</span>. Available for EU projects.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-8 mb-8"
            >
              <div>
                <p className="text-3xl font-bold gradient-text">
                  <CountUp end={5} suffix="+" duration={1.5} />
                </p>
                <p className="text-sm theme-text-secondary">Production Apps</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">
                  <CountUp end={1000} suffix="+" duration={2} />
                </p>
                <p className="text-sm theme-text-secondary">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">
                  <CountUp end={3} suffix="+" duration={1} />
                </p>
                <p className="text-sm theme-text-secondary">Years Experience</p>
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-neon/10 border border-emerald-neon/30 rounded-full text-sm theme-text">
                <FiMapPin className="w-4 h-4 text-emerald-neon" />
                <span>🇩🇪 Germany</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
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
            <div className="relative w-full max-w-md mx-auto">
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
                  priority={!isMobile}
                  quality={isMobile ? 60 : 85}
                  sizes="(max-width: 768px) 300px, 500px"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-30 dark:opacity-60" />
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-neon cursor-pointer"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}