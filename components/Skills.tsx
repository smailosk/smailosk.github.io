'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Dart', 'JavaScript', 'TypeScript', 'Java', 'Python', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Flutter', 'React.js', 'Node.js', 'Express', 'Firebase', 'BLoC']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Figma', 'VS Code', 'Android Studio', 'Xcode']
    },
    {
      title: 'Concepts',
      skills: ['Clean Architecture', 'SOLID Principles', 'REST APIs', 'CI/CD', 'Agile', 'TDD']
    }
  ]

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'German', level: 'Professional' },
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Intermediate' }
  ]

  return (
    <section id="skills" className="section">
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
              <span className="text-brand-primary font-mono text-xl mr-2">04.</span>
              Skills & Technologies
            </h2>
            <div className="flex-1 h-[1px] bg-light-border dark:bg-dark-border max-w-xs"></div>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold mb-4 text-brand-primary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-brand-primary text-sm">▹</span>
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-lg font-semibold mb-6">Languages I Speak</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">
                      {lang.name[0]}
                    </span>
                  </div>
                  <p className="font-semibold">{lang.name}</p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {lang.level}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}