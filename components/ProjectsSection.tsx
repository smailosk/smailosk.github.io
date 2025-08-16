'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiFolder, FiCode, FiSmartphone, FiMonitor, FiUsers, FiAward, FiShoppingCart, FiHeart } from 'react-icons/fi'
import { SiFlutter, SiFigma, SiFirebase, SiReact, SiShopify, SiDart, SiTypescript, SiJavascript, SiNodedotjs } from 'react-icons/si'

const featuredProjects = [
  {
    id: 1,
    title: 'Task-Flow - Complete Project',
    description: 'Bachelor\'s Thesis Project: From UX/UI design to fully functional Flutter app. Comprehensive task management with customizable workflows, scoring 1.3 (A) grade.',
    longDescription: 'A complete project lifecycle from ideation to implementation. Started with extensive UX research, user mapping, and Figma prototyping (Phase 1), then developed into a fully functional Flutter mobile app with clean architecture (Phase 2).',
    image: '/projects/taskflow.png',
    mockupType: 'phone',
    technologies: ['Flutter', 'Figma', 'Clean Architecture', 'BLoC', 'Firebase', 'UX/UI Design'],
    github: 'https://github.com/smailosk/task-flow',
    external: null,
    featured: true,
    category: 'Productivity',
    highlights: [
      'Bachelor thesis project - Grade 1.3 (Excellent)',
      'Phase 1: Complete UX/UI design in Figma with user research',
      'Phase 2: Flutter development with clean architecture',
      'Features: Task creation, workflows, reminders, progress tracking',
      'Gesture-based controls and smart notifications'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: <FiFolder className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Change4Charity',
    description: 'University project with Adesso Dortmund: Mobile app helping users break bad habits while supporting charities. Led 4-person team through complete development cycle.',
    longDescription: 'An innovative mobile application that transforms personal growth into charitable impact. Users can track their habits (smoking, overeating), set goals, and automatically donate saved money to chosen charities. Built from scratch using Flutter.',
    image: '/projects/change4charity.png',
    mockupType: 'phone',
    technologies: ['Flutter', 'Firebase', 'Payment APIs', 'Figma', 'GitHub', 'Agile'],
    github: 'https://github.com/smailosk/change4charity',
    external: null,
    featured: true,
    category: 'Social Impact',
    highlights: [
      'Collaboration with Adesso Dortmund',
      'Led 4-person development team for one semester',
      'Complete development cycle: brainstorming to deployment',
      'UML diagrams, wireframing, and Figma design',
      'Habit tracking with donation integration',
      'iOS version focus with team collaboration via GitHub'
    ],
    color: 'from-green-500 to-teal-500',
    icon: <FiHeart className="w-6 h-6" />
  }
]

const otherProjects = [
  {
    id: 3,
    title: 'E-Commerce Shops',
    description: 'Designed and developed multiple Shopify e-commerce stores with custom themes using Photoshop and Shopify tools.',
    technologies: ['Shopify', 'JavaScript', 'Photoshop', 'Liquid', 'CSS'],
    github: null,
    external: null,
    icon: <FiShoppingCart className="w-5 h-5" />,
    category: 'E-Commerce'
  },
  {
    id: 4,
    title: 'Task-Flow UX/UI Design',
    description: 'Phase 1 of Bachelor Thesis: Comprehensive UX/UI design including user research, brainstorming, user mapping, and prototyping.',
    technologies: ['Figma', 'UX Research', 'Prototyping', 'User Mapping'],
    github: null,
    external: null,
    icon: <FiMonitor className="w-5 h-5" />,
    category: 'Design'
  },
  {
    id: 5,
    title: 'Healthcare Web Apps',
    description: 'Developed and maintained web applications using ReactJs at Fraunhofer ISST for healthcare data visualization.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    github: null,
    external: null,
    icon: <FiCode className="w-5 h-5" />,
    category: 'Healthcare'
  }
]

// Mock device frames for project showcases
const PhoneMockup = ({ image, title }: { image: string, title: string }) => (
  <div className="relative mx-auto" style={{ width: '280px', height: '580px' }}>
    {/* Phone Frame */}
    <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
      {/* Screen */}
      <div className="absolute inset-4 bg-gray-800 rounded-[2.5rem] overflow-hidden">
        {/* Status Bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black/50 flex items-center justify-center">
          <div className="w-20 h-4 bg-black rounded-full" />
        </div>
        {/* Screen Content */}
        <div className="absolute inset-0 top-6 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
          <div className="text-center p-4">
            <FiSmartphone className="w-16 h-16 text-emerald-neon mx-auto mb-4" />
            <p className="text-white font-semibold">{title}</p>
            <p className="text-gray-400 text-sm mt-2">Mobile App</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LaptopMockup = ({ image, title }: { image: string, title: string }) => (
  <div className="relative mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
    {/* Laptop Screen */}
    <div className="relative bg-gray-900 rounded-t-xl shadow-2xl p-3">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
          {title.toLowerCase().replace(/\s+/g, '-')}.com
        </div>
      </div>
      {/* Screen Content */}
      <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded h-64 flex items-center justify-center">
        <div className="text-center">
          <FiMonitor className="w-16 h-16 text-emerald-neon mx-auto mb-4" />
          <p className="text-white font-semibold">{title}</p>
          <p className="text-gray-400 text-sm mt-2">Web Application</p>
        </div>
      </div>
    </div>
    {/* Laptop Base */}
    <div className="bg-gray-800 h-4 rounded-b-xl shadow-lg" />
    <div className="bg-gray-700 h-2 mx-auto w-4/5 rounded-b-sm" />
  </div>
)

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Productivity', 'Social Impact', 'E-Commerce', 'Design', 'Healthcare']

  return (
    <section id="projects" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-neon font-mono text-sm mb-2">{'<Projects />'}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Some Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in mobile and web development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-neon text-white'
                    : 'theme-card theme-border border hover:border-emerald-neon/50 theme-text-secondary hover:text-emerald-neon'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-32 mb-20">
            {featuredProjects
              .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
              .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Project Info */}
                  <motion.div
                    className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="space-y-4">
                      {/* Project Label */}
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                          {project.icon}
                        </div>
                        <span className="text-emerald-neon font-mono text-sm">Featured Project</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold theme-text group-hover:text-emerald-neon transition-colors">
                        {project.title}
                      </h3>

                      {/* Description Card */}
                      <div className="theme-card rounded-xl p-6 backdrop-blur-lg theme-border border">
                        <p className="theme-text-secondary leading-relaxed mb-4">
                          {project.longDescription}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-4">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-neon mt-1">▹</span>
                              <span className="theme-text-secondary text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-mono bg-emerald-neon/10 text-emerald-neon rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-neon hover:text-emerald-500 transition-colors"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiGithub className="w-6 h-6" />
                            </motion.a>
                          )}
                          {project.external && (
                            <motion.a
                              href={project.external}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-neon hover:text-emerald-500 transition-colors"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiExternalLink className="w-6 h-6" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Mockup */}
                  <motion.div
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 blur-3xl`} />
                      
                      {/* Mockup */}
                      {project.mockupType === 'phone' ? (
                        <PhoneMockup image={project.image} title={project.title} />
                      ) : (
                        <LaptopMockup image={project.image} title={project.title} />
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 theme-text">
              Other Noteworthy Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects
                .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
                .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <div className="theme-card rounded-xl p-6 h-full theme-border border hover:border-emerald-neon/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-emerald-neon/10 text-emerald-neon group-hover:bg-emerald-neon group-hover:text-white transition-all duration-300">
                        {project.icon}
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-text-secondary hover:text-emerald-neon transition-colors"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-text-secondary hover:text-emerald-neon transition-colors"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-semibold mb-2 theme-text group-hover:text-emerald-neon transition-colors">
                      {project.title}
                    </h4>
                    <p className="theme-text-secondary text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs bg-emerald-neon/10 text-emerald-neon rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono theme-text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/smailosk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More on GitHub
              <FiGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}