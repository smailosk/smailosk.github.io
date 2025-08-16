'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiMail, FiPhone } from 'react-icons/fi'

export default function BookingSection() {
  return (
    <section id="booking" className="section theme-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-emerald-neon font-mono text-sm mb-2">{'<BookACall />'}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Book a 30-minute call to discuss your Flutter project. Pick a time that works for you.
            </p>
          </div>

          {/* Google Calendar Iframe */}
          <div className="max-w-5xl mx-auto">
            <div className="theme-card rounded-2xl p-4 lg:p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bxmXjmmahB-WRj4IwE_p3cXSXT-cuZQiq41eklfv1aEs7H4TqZY61p8VQ8aC20-tCDhyl5svG?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                className="rounded-lg"
                title="Book an appointment with Ismail Amor"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="theme-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-emerald-neon/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiClock className="w-6 h-6 text-emerald-neon" />
              </div>
              <h3 className="font-semibold mb-2 theme-text">Availability</h3>
              <p className="text-sm theme-text-secondary">
                Monday - Friday<br />
                9:00 AM - 5:00 PM CET<br />
                Germany Time Zone
              </p>
            </motion.div>

            {/* Meeting Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="theme-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-emerald-neon/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiCalendar className="w-6 h-6 text-emerald-neon" />
              </div>
              <h3 className="font-semibold mb-2 theme-text">Meeting Duration</h3>
              <p className="text-sm theme-text-secondary">
                30 minutes<br />
                Free consultation<br />
                No commitment required
              </p>
            </motion.div>

            {/* Alternative Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="theme-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-emerald-neon/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiMail className="w-6 h-6 text-emerald-neon" />
              </div>
              <h3 className="font-semibold mb-2 theme-text">Quick Contact</h3>
              <p className="text-sm theme-text-secondary">
                Prefer instant messaging?<br />
                <a href="mailto:your.email@gmail.com" className="text-emerald-neon hover:underline">
                  Send an email
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}