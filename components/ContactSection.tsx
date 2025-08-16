'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiCalendar, FiClock, FiVideo, FiCheck, FiAlertCircle, FiMail, FiMessageSquare, FiUser, FiBriefcase, FiDollarSign, FiFileText, FiCheckCircle, FiX } from 'react-icons/fi'

export default function ContactSection() {
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
  const [showCalendarModal, setShowCalendarModal] = useState(false)

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

  // Google Calendar URL
  const googleCalendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bxmXjmmahB-WRj4IwE_p3cXSXT-cuZQiq41eklfv1aEs7H4TqZY61p8VQ8aC20-tCDhyl5svG?gv=true"
  
  return (
    <section id="contact" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-neon font-mono text-sm mb-2">{'<Contact />'}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              I'm currently taking on select freelance projects. Whether you need a mobile app, 
              consultation, or just want to discuss your ideas, I'd love to hear from you.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="theme-card rounded-2xl p-8 h-full theme-border border">
                  {/* Form Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-emerald-neon/10 rounded-xl">
                      <FiMail className="w-6 h-6 text-emerald-neon" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text">Send a Message</h3>
                      <p className="text-sm theme-text-secondary">Fill out the form and I'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                          <FiUser className="inline w-4 h-4 mr-1" />
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                          <FiMail className="inline w-4 h-4 mr-1" />
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                          placeholder="john@company.com"
                        />
                      </div>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium theme-text mb-2">
                        <FiBriefcase className="inline w-4 h-4 mr-1" />
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                        placeholder="Acme Inc. (optional)"
                      />
                    </motion.div>

                    {/* Project Type & Budget Row */}
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                          <FiFileText className="inline w-4 h-4 mr-1" />
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                        >
                          <option value="mobile-app">Mobile App</option>
                          <option value="web-app">Web Application</option>
                          <option value="consultation">Consultation</option>
                          <option value="maintenance">App Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium theme-text mb-2">
                          <FiDollarSign className="inline w-4 h-4 mr-1" />
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                        >
                          <option value="<5k">Less than €5k</option>
                          <option value="5k-10k">€5k - €10k</option>
                          <option value="10k-25k">€10k - €25k</option>
                          <option value="25k-50k">€25k - €50k</option>
                          <option value="50k+">€50k+</option>
                        </select>
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium theme-text mb-2">
                        <FiMessageSquare className="inline w-4 h-4 mr-1" />
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-none focus:ring-2 focus:ring-emerald-neon/20 transition-all resize-none theme-text"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
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
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-500/10 px-4 py-3 rounded-xl"
                      >
                        <FiCheck className="w-5 h-5" />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-500/10 px-4 py-3 rounded-xl"
                      >
                        <FiAlertCircle className="w-5 h-5" />
                        <span>Something went wrong. Please try again or book a call instead.</span>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Right Column - Book a Call & Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Book a Call Card */}
                <div className="theme-card rounded-2xl p-8 theme-border border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-neon/10 rounded-xl">
                      <FiCalendar className="w-6 h-6 text-emerald-neon" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text">Book a Quick Call</h3>
                      <p className="text-sm theme-text-secondary">Free 15-minute discovery call</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <FiClock className="w-5 h-5 text-emerald-neon" />
                      <span className="theme-text-secondary">15 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiVideo className="w-5 h-5 text-emerald-neon" />
                      <span className="theme-text-secondary">Video call via Google Meet</span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setShowCalendarModal(true)}
                    className="w-full btn-outline flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiCalendar className="w-4 h-4" />
                    Schedule a Call
                  </motion.button>
                </div>

                {/* What to Expect */}
                <div className="theme-card rounded-2xl p-6 theme-border border">
                  <h4 className="font-bold theme-text mb-4">What to Expect</h4>
                  <ul className="space-y-3">
                    {[
                      'Free consultation & project assessment',
                      'Detailed proposal within 48 hours',
                      'Transparent pricing & timeline',
                      'Regular progress updates',
                      'Post-launch support included'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <FiCheckCircle className="w-5 h-5 text-emerald-neon mt-0.5 flex-shrink-0" />
                        <span className="theme-text-secondary text-sm">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Google Calendar Modal */}
      <AnimatePresence>
        {showCalendarModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalendarModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="w-full max-w-3xl h-[70vh] theme-card rounded-2xl shadow-2xl pointer-events-auto flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b theme-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-neon/10 rounded-full flex items-center justify-center">
                      <FiCalendar className="w-5 h-5 text-emerald-neon" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold theme-text">Schedule Your Free Consultation</h2>
                      <p className="text-sm theme-text-secondary mt-1">Book a 15-minute call to discuss your Flutter project</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCalendarModal(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <FiX className="w-6 h-6 theme-text" />
                  </button>
                </div>

                {/* Google Calendar iframe */}
                <div className="flex-1 p-4 overflow-hidden relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe 
                      src={googleCalendarUrl}
                      style={{ 
                        border: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'calc(100% + 100px)',
                        marginBottom: '-100px'
                      }}
                      frameBorder="0"
                      className="rounded-lg"
                      title="Google Calendar Appointment Scheduling"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}