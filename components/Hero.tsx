'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Intro */}
          <motion.p 
            className="text-brand-primary font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ismail Amor
          </motion.h1>

          {/* Title with gradient */}
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I build{' '}
            <span className="gradient-text">exceptional</span>
            {' '}mobile experiences
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Flutter Engineer with 3+ years crafting secure, scalable applications 
            for healthcare and enterprise. Currently building Germany&apos;s first 
            gematik-certified medical messenger at{' '}
            <span className="text-brand-primary font-semibold">Famedly GmbH</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/smailosk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ismail-amor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ismailamor93@gmail.com"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-light-text-secondary dark:text-dark-text-secondary"
            >
              <FiArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}