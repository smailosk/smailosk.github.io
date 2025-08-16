'use client'

import { motion } from 'framer-motion'
import { 
  SiFlutter, SiDart, SiFirebase, SiReact, SiTypescript, SiJavascript, 
  SiNodedotjs, SiHtml5, SiCss3, SiFigma, SiGit, SiDocker, SiShopify,
  SiAdobephotoshop, SiAdobexd, SiRubyonrails, SiExpress, SiKotlin,
  SiCplusplus, SiPython
} from 'react-icons/si'
import { FiCode, FiSmartphone, FiLayout, FiDatabase, FiTool, FiGlobe } from 'react-icons/fi'
import { TbBrandCpp } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'

const skillCategories = [
  {
    id: 1,
    title: 'Mobile Development',
    icon: <FiSmartphone className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Flutter', icon: <SiFlutter />, level: 95, years: '3+' },
      { name: 'Dart', icon: <SiDart />, level: 90, years: '3+' },
      { name: 'Kotlin', icon: <SiKotlin />, level: 60, years: '1' },
      { name: 'Clean Architecture', icon: <FiCode />, level: 85, years: '2+' },
      { name: 'BLoC Pattern', icon: <FiCode />, level: 85, years: '2+' },
    ]
  },
  {
    id: 2,
    title: 'Web Technologies',
    icon: <FiGlobe className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 80, years: '2+' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85, years: '4+' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 70, years: '1+' },
      { name: 'HTML5', icon: <SiHtml5 />, level: 90, years: '5+' },
      { name: 'CSS3', icon: <SiCss3 />, level: 85, years: '5+' },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 70, years: '2+' },
    ]
  },
  {
    id: 3,
    title: 'Design & UI/UX',
    icon: <FiLayout className="w-5 h-5" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', icon: <SiFigma />, level: 85, years: '2+' },
      { name: 'Adobe XD', icon: <SiAdobexd />, level: 75, years: '2+' },
      { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 80, years: '3+' },
      { name: 'UX Research', icon: <FiLayout />, level: 75, years: '1+' },
      { name: 'Prototyping', icon: <FiLayout />, level: 80, years: '2+' },
    ]
  },
  {
    id: 4,
    title: 'Backend & Tools',
    icon: <FiDatabase className="w-5 h-5" />,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Firebase', icon: <SiFirebase />, level: 85, years: '3+' },
      { name: 'Express.js', icon: <SiExpress />, level: 70, years: '1+' },
      { name: 'Ruby on Rails', icon: <SiRubyonrails />, level: 60, years: '1' },
      { name: 'Docker', icon: <SiDocker />, level: 65, years: '1+' },
      { name: 'Git', icon: <SiGit />, level: 85, years: '4+' },
    ]
  },
  {
    id: 5,
    title: 'Programming Languages',
    icon: <FiCode className="w-5 h-5" />,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Java', icon: <DiJava />, level: 75, years: '3+' },
      { name: 'C++', icon: <TbBrandCpp />, level: 70, years: '2+' },
      { name: 'C', icon: <FiCode />, level: 70, years: '2+' },
      { name: 'C#', icon: <FiCode />, level: 65, years: '1+' },
      { name: 'Python', icon: <SiPython />, level: 60, years: '1+' },
    ]
  }
]

// Featured skills for hero display
const featuredSkills = [
  'Flutter', 'React', 'TypeScript', 'Figma', 'Firebase', 'Node.js'
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-neon font-mono text-sm mb-2">{'<Skills />'}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit built over years of hands-on development experience
            </p>
          </div>

          {/* Minimalist Skill Display */}
          <div className="max-w-6xl mx-auto">
            {/* Featured Skills Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-neon/30 rounded-full"
                >
                  <span className="text-emerald-neon font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Modern Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="theme-card rounded-2xl p-6 h-full theme-border border hover:border-emerald-neon/50 transition-all duration-300">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold theme-text">{category.title}</h3>
                    </div>

                    {/* Skills List - Simple and Clean */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.08,
                            type: 'spring',
                            stiffness: 150
                          }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-neon text-lg">{skill.icon}</span>
                              <span className="theme-text font-medium">{skill.name}</span>
                            </div>
                            <span className="text-xs theme-text-muted">{skill.years} years</span>
                          </div>
                          
                          {/* Simple Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.2, 
                                delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Cloud */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="text-xl font-bold theme-text mb-6">Also Familiar With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['SAP', 'Microsoft Office', 'Shopify', 'Liquid', 'REST APIs', 'GraphQL', 'Agile/Scrum', 'JIRA', 'Slack', 'VS Code', 'Android Studio', 'Xcode'].map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 theme-card rounded-lg theme-border border text-sm theme-text-secondary hover:text-emerald-neon hover:border-emerald-neon/50 transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-xl font-bold theme-text text-center mb-8">Languages</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: 'Arabic', level: 'Native', flag: '🇹🇳' },
                  { name: 'English', level: 'Fluent', flag: '🇬🇧' },
                  { name: 'German', level: 'Professional', flag: '🇩🇪' },
                  { name: 'French', level: 'Intermediate', flag: '🇫🇷' },
                ].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2">{lang.flag}</div>
                    <p className="font-medium theme-text">{lang.name}</p>
                    <p className="text-sm theme-text-secondary">{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}