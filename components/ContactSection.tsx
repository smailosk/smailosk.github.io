'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { FiSend, FiCalendar, FiClock, FiVideo, FiCheck, FiAlertCircle, FiMail, FiMessageSquare, FiUser, FiBriefcase, FiDollarSign, FiFileText, FiCheckCircle, FiX } from 'react-icons/fi'
import { useAccessibleDialog } from '@/hooks/useAccessibleDialog'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'not-sure',
    budget: 'not-sure',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showCalendarModal, setShowCalendarModal] = useState(false)
  const closeCalendar = () => setShowCalendarModal(false)
  const { triggerRef: calendarTriggerRef, closeButtonRef: calendarCloseRef } = useAccessibleDialog(
    showCalendarModal,
    closeCalendar,
    'calendar-dialog'
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Web3Forms - FREE and hides your email completely
      // Your email is encrypted and never exposed in the code
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '666b2885-efc7-465b-9ccf-8d12ad8e86c1', // This is a public key - your email is hidden
          name: formData.name,
          email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'not-sure',
          budget: 'not-sure',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const googleCalendarUrl = `https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bxmXjmmahB-WRj4IwE_p3cXSXT-cuZQiq41eklfv1aEs7H4TqZY61p8VQ8aC20-tCDhyl5svG?gv=true&color=%231DB26A`

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
              Have an app to build <span className="gradient-text">or improve?</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Tell me what you are trying to ship, where the product is today, and what you need next.
              I’m available for select mobile development and consultation projects.
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
                <div id="contact-form" className="theme-card rounded-2xl p-6 md:p-8 h-full theme-border border scroll-mt-28">
                  {/* Form Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-emerald-neon/10 rounded-xl">
                      <FiMail className="w-6 h-6 text-emerald-neon" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text">Send a Message</h3>
                      <p className="text-sm theme-text-secondary">Share the essentials and I’ll follow up with clear next steps.</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5" aria-busy={isSubmitting}>
                    {/* Name & Email Row */}
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium theme-text mb-2">
                          <FiUser className="inline w-4 h-4 mr-1" />
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium theme-text mb-2">
                          <FiMail className="inline w-4 h-4 mr-1" />
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
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
                      <label htmlFor="contact-company" className="block text-sm font-medium theme-text mb-2">
                        <FiBriefcase className="inline w-4 h-4 mr-1" />
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
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
                        <label htmlFor="contact-project-type" className="block text-sm font-medium theme-text mb-2">
                          <FiFileText className="inline w-4 h-4 mr-1" />
                          Project Type
                        </label>
                        <select
                          id="contact-project-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                        >
                          <option value="not-sure">Not sure yet</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="web-app">Web Application</option>
                          <option value="ai-product">AI-Powered Product</option>
                          <option value="consultation">Consultation</option>
                          <option value="maintenance">App Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="contact-budget" className="block text-sm font-medium theme-text mb-2">
                          <FiDollarSign className="inline w-4 h-4 mr-1" />
                          Budget Range
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all theme-text"
                        >
                          <option value="not-sure">Not sure yet</option>
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
                      <label htmlFor="contact-message" className="block text-sm font-medium theme-text mb-2">
                        <FiMessageSquare className="inline w-4 h-4 mr-1" />
                        Project Details *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 theme-bg theme-border border rounded-xl focus:border-emerald-neon focus:outline-hidden focus:ring-2 focus:ring-emerald-neon/20 transition-all resize-none theme-text"
                        placeholder="What are you building, what stage is it at, and where would help make the biggest difference?"
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
                      aria-disabled={isSubmitting}
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
                        role="status"
                        aria-live="polite"
                        className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-500/10 px-4 py-3 rounded-xl"
                      >
                        <FiCheck className="w-5 h-5" />
                        <span>Message sent successfully! I’ll get back to you soon.</span>
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        role="alert"
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
                      <h3 className="text-2xl font-bold theme-text">Talk Through Your Project</h3>
                      <p className="text-sm theme-text-secondary">A focused 15-minute discovery call</p>
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
                    ref={calendarTriggerRef}
                    onClick={() => setShowCalendarModal(true)}
                    aria-haspopup="dialog"
                    aria-expanded={showCalendarModal}
                    aria-controls="calendar-dialog"
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
                  <h4 className="font-bold theme-text mb-4">What We Can Cover</h4>
                  <ul className="space-y-3">
                    {[
                      'The product goal and current stage',
                      'Technical or delivery constraints',
                      'Where Flutter expertise could help',
                      'A practical next step if there is a fit'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <FiCheckCircle className="w-5 h-5 text-emerald-neon mt-0.5 shrink-0" />
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
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCalendar}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center md:p-6 lg:p-8 pointer-events-none"
            >
              <div
                id="calendar-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="calendar-dialog-title"
                className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-full md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] theme-card md:rounded-2xl shadow-2xl pointer-events-auto flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b theme-border">
                  <div className="flex items-center gap-2 md:gap-3 flex-1">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-neon/10 rounded-full flex items-center justify-center shrink-0">
                      <FiCalendar className="w-4 h-4 md:w-5 md:h-5 text-emerald-neon" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 id="calendar-dialog-title" className="text-lg md:text-2xl font-bold theme-text truncate">Schedule a Consultation</h2>
                      <p className="text-xs md:text-sm theme-text-secondary mt-0.5 md:mt-1 hidden sm:block">Book a 15-minute call to discuss your Flutter project</p>
                    </div>
                  </div>
                  <button
                    ref={calendarCloseRef}
                    onClick={closeCalendar}
                    className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ml-2"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5 md:w-6 md:h-6 theme-text" />
                  </button>
                </div>

                {/* Google Calendar iframe */}
                <div className="flex-1 overflow-hidden relative bg-white dark:bg-gray-800">
                  <div className="absolute inset-0 p-2 md:p-4">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-white relative">
                      <iframe 
                        src={googleCalendarUrl}
                        style={{ 
                          width: '100%',
                          height: 'calc(100% + 120px)',
                          border: 0,
                          borderRadius: '8px',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          marginBottom: '-120px'
                        }}
                        frameBorder="0"
                        title="Google Calendar Appointment Scheduling"
                        allowFullScreen
                      />
                    </div>
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
