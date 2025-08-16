'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-brand-primary font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="flex-1 h-[1px] bg-light-border dark:bg-dark-border max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Text Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Hello! I&apos;m Ismail, a passionate Flutter developer based in Dortmund, Germany. 
                I enjoy creating exceptional mobile experiences that live at the intersection of 
                design and technology.
              </p>
              
              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                My journey in software development started during my computer science studies at 
                Fachhochschule Dortmund. Since then, I&apos;ve had the privilege of working at a 
                research institute, a software consultancy, and currently at a healthcare startup.
              </p>

              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Today, my main focus is building secure, scalable applications at{' '}
                <a href="https://famedly.com" target="_blank" rel="noopener noreferrer" 
                   className="text-brand-primary hover:underline">
                  Famedly GmbH
                </a>
                , where I contribute to Germany&apos;s first gematik-certified healthcare messenger, 
                ensuring medical professionals can communicate securely and efficiently.
              </p>

              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Here are a few technologies I&apos;ve been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {[
                  'Flutter & Dart',
                  'Clean Architecture',
                  'BLoC Pattern',
                  'Firebase',
                  'Matrix Protocol',
                  'E2E Encryption'
                ].map((tech) => (
                  <motion.div
                    key={tech}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-brand-primary">▹</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary font-mono text-sm">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="relative group">
              <motion.div
                className="relative w-full aspect-square max-w-xs mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative w-full h-full bg-light-surface dark:bg-dark-surface rounded-2xl border-2 border-brand-primary/20 group-hover:border-brand-primary/40 transition-colors flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-brand-primary font-mono text-sm">Flutter Developer</p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs mt-1">3+ Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}