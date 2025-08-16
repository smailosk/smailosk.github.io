'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink, FiCode, FiLayout, FiUsers } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Flutter Software Engineer',
    company: 'Famedly GmbH',
    companyUrl: 'https://famedly.com',
    duration: 'Apr 2025 - Present',
    location: 'Remote',
    current: true,
    description: [
      'Contributing to Germany\'s first gematik-certified healthcare messenger for secure medical communication',
      'Implementing end-to-end encryption features using Matrix protocol for HIPAA-compliant messaging',
      'Developing real-time communication features for 1000+ healthcare professionals',
      'Ensuring 99.9% uptime and optimal performance across iOS and Android platforms'
    ],
    skills: ['Flutter', 'Dart', 'Matrix SDK', 'E2E Encryption', 'WebRTC', 'Healthcare Tech'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    role: 'Flutter Software Engineer',
    company: 'It-Objects',
    companyUrl: 'https://it-objects.de',
    duration: 'Jan 2023 - Mar 2025',
    location: 'Essen, Germany',
    current: false,
    description: [
      'Developed cross-platform applications using Flutter to deliver intuitive, user-friendly, and high-performing solutions',
      'Leveraged BLoC and clean architecture principles to create scalable and maintainable applications',
      'Managed local data storage and seamlessly integrated external services via API endpoints',
      'Collaborated closely with designers and developers in an Agile Scrum environment'
    ],
    skills: ['Flutter', 'BLoC', 'Clean Architecture', 'REST APIs', 'Agile/Scrum'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    role: 'Web Development',
    company: 'Fraunhofer ISST',
    companyUrl: 'https://www.isst.fraunhofer.de',
    duration: 'Feb 2022 - Dec 2022',
    location: 'Dortmund, Germany',
    type: 'Working Student',
    current: false,
    description: [
      'Developed and maintained web applications using ReactJs',
      'Created interactive data visualizations for healthcare applications',
      'Worked on responsive and accessible web interfaces',
      'Collaborated with research teams on innovative healthcare solutions'
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Healthcare Tech'],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    role: 'UX/UI Design Bootcamp',
    company: 'The Space Academy',
    companyUrl: '#',
    duration: 'Mar 2022 - Jun 2022',
    location: 'Remote',
    type: 'Training',
    current: false,
    description: [
      'Completed comprehensive UX/UI design bootcamp mastering research, brainstorming, and prototyping',
      'Collaborated in a team to execute a real project from ideation to final prototype',
      'Designed and delivered polished projects using Figma',
      'Demonstrated expertise across all stages of the UX/UI process'
    ],
    skills: ['Figma', 'UX Research', 'Prototyping', 'User Mapping', 'Design Systems'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    role: 'Frontend Development',
    company: 'Ausbildung.de',
    companyUrl: 'https://www.ausbildung.de',
    duration: 'Dec 2020 - Dec 2021',
    location: 'Bochum, Germany',
    type: 'Working Student',
    current: false,
    description: [
      'Focused on frontend development using modern technologies',
      'Built responsive web applications with modern JavaScript frameworks',
      'Collaborated with the design team to implement pixel-perfect interfaces',
      'Optimized web performance and accessibility'
    ],
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    role: 'Frontend Development',
    company: 'Isopedia GmbH',
    companyUrl: '#',
    duration: 'Apr 2019 - Dec 2019',
    location: 'Dortmund, Germany',
    type: 'Working Student',
    current: false,
    description: [
      'Worked with HTML5, CSS, and JavaScript for frontend development',
      'Developed interactive web components and user interfaces',
      'Participated in code reviews and quality assurance',
      'Assisted in maintaining and updating existing web applications'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Development'],
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(0)

  return (
    <section id="experience" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-neon font-mono text-sm mb-2">{'<Experience />'}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              My professional journey through various roles in software development, from healthcare tech to e-commerce
            </p>
          </div>

          {/* Timeline View for Desktop */}
          <div className="hidden lg:block relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-neon via-emerald-500 to-emerald-neon opacity-30" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-end pr-8 md:pr-16' : 'justify-start pl-8 md:pl-16'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-neon rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.3,
                    type: 'spring',
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="absolute inset-0 bg-emerald-neon rounded-full animate-ping opacity-75" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className={`relative w-full md:w-5/12 group ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="theme-card rounded-2xl p-6 theme-border border hover:border-emerald-neon/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-neon/10">
                    {/* Header with gradient line */}
                    <div className={`h-1 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4 opacity-60 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold theme-text group-hover:text-emerald-neon transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-emerald-neon hover:underline inline-flex items-center gap-1"
                          >
                            {exp.company}
                            {exp.companyUrl !== '#' && <FiExternalLink className="w-4 h-4" />}
                          </a>
                          {exp.type && (
                            <span className="text-xs px-2 py-1 bg-emerald-neon/10 text-emerald-neon rounded-full">
                              {exp.type}
                            </span>
                          )}
                          {exp.current && (
                            <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-emerald-neon">
                        <FiBriefcase className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className={`flex items-center gap-4 text-sm theme-text-secondary mb-4 flex-wrap ${
                      index % 2 === 0 ? 'justify-end' : ''
                    }`}>
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {exp.description.slice(0, 2).map((item, i) => (
                        <li key={i} className="theme-text-secondary text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      {exp.skills.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-emerald-neon/10 text-emerald-neon rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 4 && (
                        <span className="text-xs px-2 py-1 theme-text-muted">
                          +{exp.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(index)}
                  className={`px-4 py-2 whitespace-nowrap border-b-2 transition-all duration-300 ${
                    selectedExp === index
                      ? 'border-emerald-neon text-emerald-neon'
                      : 'border-transparent theme-text-secondary hover:text-emerald-neon'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Selected Experience Details */}
            <motion.div
              key={selectedExp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="theme-card rounded-2xl p-6 theme-border border"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${experiences[selectedExp].color} rounded-full mb-6`} />
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold theme-text mb-2">
                  {experiences[selectedExp].role}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={experiences[selectedExp].companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-emerald-neon hover:underline inline-flex items-center gap-1"
                  >
                    {experiences[selectedExp].company}
                    {experiences[selectedExp].companyUrl !== '#' && <FiExternalLink className="w-4 h-4" />}
                  </a>
                  {experiences[selectedExp].type && (
                    <span className="text-xs px-2 py-1 bg-emerald-neon/10 text-emerald-neon rounded-full">
                      {experiences[selectedExp].type}
                    </span>
                  )}
                  {experiences[selectedExp].current && (
                    <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full animate-pulse">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm theme-text-secondary mb-6">
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  {experiences[selectedExp].duration}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4" />
                  {experiences[selectedExp].location}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {experiences[selectedExp].description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-neon mt-1">▹</span>
                    <span className="theme-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experiences[selectedExp].skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-emerald-neon/10 text-emerald-neon rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}