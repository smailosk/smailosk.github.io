'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiCalendar, FiClock, FiVideo, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'mobile-app',
    budget: '5k-10k',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Using Formspree (free tier available)
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'mobile-app',
          budget: '5k-10k',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  // Calendly link - replace with your actual Calendly URL
  const calendlyUrl = "https://calendly.com/ismailamor/15min"
  
  return (
    <section id="contact" className="section">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-brand-primary font-mono text-xl mr-2">05.</span>
              Let's Work Together
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              I'm currently taking on select freelance projects. Whether you need a mobile app, 
              consultation, or just want to discuss your ideas, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="Acme Inc. (optional)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    >
                      <option value="mobile-app">Mobile App</option>
                      <option value="web-app">Web Application</option>
                      <option value="consultation">Consultation</option>
                      <option value="maintenance">App Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors"
                    >
                      <option value="<5k">Less than €5k</option>
                      <option value="5k-10k">€5k - €10k</option>
                      <option value="10k-25k">€10k - €25k</option>
                      <option value="25k-50k">€25k - €50k</option>
                      <option value="50k+">€50k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:border-brand-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-500/10 px-4 py-2 rounded-lg"
                  >
                    <FiCheck />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-500/10 px-4 py-2 rounded-lg"
                  >
                    <FiAlertCircle />
                    <span>Something went wrong. Please try again or book a call instead.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Book a Call Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick Call Card */}
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <FiCalendar className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Book a Quick Call</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                      Prefer to talk? Schedule a free 15-minute discovery call to discuss your project.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    <FiClock className="text-brand-primary" />
                    <span>15 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    <FiVideo className="text-brand-primary" />
                    <span>Video call via Google Meet</span>
                  </div>
                </div>

                <motion.a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiCalendar />
                  Schedule a Call
                </motion.a>
              </div>

              {/* Availability Status */}
              <div className="card">
                <h4 className="font-semibold mb-3">Current Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm">Available for new projects</span>
                  </div>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Response time: Within 24 hours
                  </p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    Current capacity: 20 hours/week for freelance
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="card">
                <h4 className="font-semibold mb-3">What to Expect</h4>
                <ul className="space-y-2">
                  {[
                    'Free consultation & project assessment',
                    'Detailed proposal within 48 hours',
                    'Transparent pricing & timeline',
                    'Regular progress updates',
                    'Post-launch support included'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-brand-primary mt-0.5">✓</span>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}