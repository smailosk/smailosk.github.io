'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: 'Famedly GmbH',
      role: 'Flutter Software Engineer',
      period: 'Apr 2025 - Present',
      location: 'Remote',
      description: [
        'Contributing to Germany\'s first gematik-certified healthcare messenger for secure medical communication',
        'Implementing end-to-end encryption features using Matrix protocol for HIPAA-compliant messaging',
        'Developing real-time communication features for 1000+ healthcare professionals',
        'Ensuring 99.9% uptime and optimal performance across iOS and Android platforms'
      ],
      tech: ['Flutter', 'Dart', 'Matrix SDK', 'E2E Encryption', 'WebRTC']
    },
    {
      company: 'It-Objects',
      role: 'Flutter Software Engineer',
      period: 'Jan 2023 - Mar 2025',
      location: 'Essen, Germany',
      description: [
        'Developed 5+ production Flutter applications using clean architecture and BLoC pattern',
        'Reduced app load times by 40% through strategic optimization and code splitting',
        'Collaborated with cross-functional teams in Agile Scrum environment',
        'Mentored junior developers on Flutter best practices and clean code principles'
      ],
      tech: ['Flutter', 'BLoC', 'Firebase', 'REST APIs', 'CI/CD']
    },
    {
      company: 'Fraunhofer ISST',
      role: 'Web Developer',
      period: 'Feb 2022 - Dec 2022',
      location: 'Dortmund, Germany',
      description: [
        'Developed React-based web applications for research projects',
        'Implemented responsive UI components following Material Design guidelines',
        'Containerized applications using Docker for consistent deployment',
        'Participated in code reviews and technical documentation'
      ],
      tech: ['React.js', 'Node.js', 'Docker', 'TypeScript']
    }
  ]

  return (
    <section id="experience" className="section">
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
              <span className="text-brand-primary font-mono text-xl mr-2">02.</span>
              Where I&apos;ve Worked
            </h2>
            <div className="flex-1 h-[1px] bg-light-border dark:bg-dark-border max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Tab Navigation */}
            <div className="md:col-span-1">
              <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      text-left px-4 py-3 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal
                      transition-all duration-300
                      ${activeTab === index 
                        ? 'border-brand-primary text-brand-primary bg-brand-primary/5' 
                        : 'border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary hover:bg-brand-primary/5'
                      }
                    `}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {exp.company}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="md:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-1">
                  {experiences[activeTab].role}{' '}
                  <span className="text-brand-primary">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                
                <p className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  {experiences[activeTab].period} • {experiences[activeTab].location}
                </p>

                <ul className="space-y-3 mb-6">
                  {experiences[activeTab].description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-brand-primary mt-1.5">▹</span>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}