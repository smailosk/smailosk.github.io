'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiCode } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Track active section for nav highlighting
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/80 dark:bg-dark/80 shadow-lg py-3' 
            : 'py-5'
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-3xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="gradient-text neon-glow">IA</span>
            </motion.a>

            {/* Desktop Navigation with improved styling */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'text-white font-semibold' 
                          : 'theme-text hover:text-emerald-neon'
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 font-medium text-sm">
                        {item.name}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Right Section with better spacing */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle with better design */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* CTA Button with gradient */}
              <motion.a
                href="#contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Talk</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </motion.a>

              {/* Mobile Menu Toggle with animation */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Improved Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="px-6 py-8">
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg font-semibold'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 theme-text'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </motion.a>
                    )
                  })}
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 mt-8 w-full px-5 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let's Talk</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </motion.a>

                {/* Theme toggle for mobile */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm theme-text-secondary">Theme</span>
                    <motion.button
                      onClick={toggleTheme}
                      className="relative w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AnimatePresence mode="wait">
                        {theme === 'light' ? (
                          <motion.div
                            key="moon"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                          >
                            <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="sun"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                          >
                            <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}