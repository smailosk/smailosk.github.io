'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/smailosk', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/ismail-amor', label: 'LinkedIn' }
  ]

  return (
    <footer className="py-8 border-t theme-border">
      <div className="container-width">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-secondary hover:text-emerald-neon transition-colors"
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm theme-text-secondary">
            © 2025 Ismail Amor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}