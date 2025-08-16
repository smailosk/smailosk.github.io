'use client'

import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiTarget, FiDownload } from 'react-icons/fi'

export default function AboutSection() {
  const highlights = [
    { 
      icon: <FiCode className="w-6 h-6" />, 
      title: 'Clean Code', 
      description: 'Writing maintainable, scalable code with best practices' 
    },
    { 
      icon: <FiUsers className="w-6 h-6" />, 
      title: 'Team Player', 
      description: 'Collaborative approach with designers and developers' 
    },
    { 
      icon: <FiTarget className="w-6 h-6" />, 
      title: 'Goal Oriented', 
      description: 'Focused on delivering value to end users' 
    },
  ]

  const techStack = [
    'Flutter', 'Dart', 'Firebase', 'React', 'TypeScript', 
    'BLoC', 'Clean Architecture', 'REST APIs', 'Git'
  ]

  return (
    <section id="about" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.p className="text-emerald-neon font-mono text-sm mb-2">{'<About />'}</motion.p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Introduction */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xl theme-text-secondary leading-relaxed mb-6">
                I'm a <span className="text-emerald-neon font-semibold">Flutter Developer</span> with{' '}
                <span className="text-emerald-neon font-semibold">3+ years</span> of experience building 
                cross-platform mobile applications. I transform ideas into polished, 
                user-friendly apps that work seamlessly on both iOS and Android.
              </p>
              
              <p className="text-lg theme-text-secondary leading-relaxed">
                Currently working at <span className="text-emerald-neon font-semibold">Famedly GmbH</span>, 
                developing secure healthcare communication solutions used by thousands of medical professionals across Germany.
              </p>
            </motion.div>

            {/* What I Do Best */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-neon/10 text-emerald-neon rounded-xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold theme-text mb-2">{item.title}</h3>
                  <p className="text-sm theme-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h3 className="text-lg font-semibold theme-text mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-emerald-neon/10 text-emerald-neon rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <motion.a
                href="/Ismail_Amor_CV.pdf"
                download="Ismail_Amor_Flutter_Developer_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download My CV</span>
              </motion.a>
              
              <p className="text-sm theme-text-secondary mt-4">
                Want to know more? Download my CV for a detailed overview of my experience and skills.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}