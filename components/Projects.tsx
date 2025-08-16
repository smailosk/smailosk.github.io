'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Famedly TI-Messenger',
      description: 'Germany\'s first gematik-certified secure messenger for healthcare professionals. Implementing end-to-end encryption with Matrix protocol for HIPAA-compliant medical communication.',
      tech: ['Flutter', 'Matrix SDK', 'E2E Encryption', 'WebRTC'],
      github: null,
      external: 'https://famedly.com',
      featured: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task-Flow',
      description: 'Comprehensive task management mobile app with customizable workflows. Built as my Bachelor thesis project, featuring smart reminders and gesture controls. Scored 1.3 (A) grade.',
      tech: ['Flutter', 'Clean Architecture', 'BLoC', 'Figma'],
      github: 'https://github.com/smailosk',
      external: null,
      featured: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Change4Charity',
      description: 'Mobile app helping users break bad habits while supporting charities. Led 4-person team in collaboration with Adesso. Features habit tracking, donation integration, and gamification.',
      tech: ['Flutter', 'Firebase', 'Payment APIs', 'Agile'],
      github: 'https://github.com/smailosk',
      external: null,
      featured: true,
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const otherProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Developed multiple Shopify stores with custom themes and integrations.',
      tech: ['Shopify', 'JavaScript', 'Photoshop'],
      github: null,
      external: null
    },
    {
      title: 'Healthcare Dashboard',
      description: 'React-based dashboard for medical data visualization at Fraunhofer ISST.',
      tech: ['React', 'D3.js', 'Node.js'],
      github: null,
      external: null
    },
    {
      title: 'Expense Tracker',
      description: 'Personal finance management app with charts and budget tracking.',
      tech: ['Flutter', 'SQLite', 'Charts'],
      github: 'https://github.com/smailosk',
      external: null
    }
  ]

  return (
    <section id="projects" className="section">
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
              <span className="text-brand-primary font-mono text-xl mr-2">03.</span>
              Some Things I&apos;ve Built
            </h2>
            <div className="flex-1 h-[1px] bg-light-border dark:bg-dark-border max-w-xs"></div>
          </div>

          {/* Featured Projects - Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bento-item group ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Gradient Bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex justify-between items-start mb-4">
                  <FiFolder className="text-brand-primary w-10 h-10" />
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.external && (
                      <motion.a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <FiFolder className="text-brand-primary w-8 h-8" />
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}