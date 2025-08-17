'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi'

interface Screen {
  name: string
  image: string
  category: 'auth' | 'main' | 'task' | 'profile'
}

interface DeviceMockupCarouselProps {
  screens: Screen[]
  title: string
  autoPlay?: boolean
  interval?: number
}

export default function DeviceMockupCarousel({ 
  screens, 
  title,
  autoPlay = true,
  interval = 3000 
}: DeviceMockupCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, screens.length, interval])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screens.length)
    setIsPlaying(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length)
    setIsPlaying(false)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrev()
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'auth': return 'from-purple-500 to-pink-500'
      case 'main': return 'from-emerald-500 to-teal-500'
      case 'task': return 'from-blue-500 to-indigo-500'
      case 'profile': return 'from-orange-500 to-red-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '680px' }}>
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3.5rem] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Screen */}
        <div className="absolute inset-6 bg-black rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 inset-x-0 h-8 bg-black/80 backdrop-blur z-10 flex items-center justify-between px-8">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-white/60 rounded-sm">
                <div className="w-2 h-1.5 bg-white rounded-sm m-0.5" />
              </div>
              <div className="w-1 h-3 bg-white/60 rounded-sm" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="absolute inset-0 top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full h-full relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Category Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(screens[currentIndex].category)} opacity-10`} />
                
                {/* Screen Image */}
                <div className="relative w-full h-full bg-gray-50">
                  <Image
                    src={screens[currentIndex].image}
                    alt={screens[currentIndex].name}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    quality={75}
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </div>

                {/* Screen Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{screens[currentIndex].name}</p>
                  <p className="text-white/60 text-xs capitalize">{screens[currentIndex].category}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
        </div>

        {/* Volume Buttons */}
        <div className="absolute left-0 top-32">
          <div className="w-1 h-8 bg-gray-700 rounded-r-full mb-2" />
          <div className="w-1 h-8 bg-gray-700 rounded-r-full" />
        </div>

        {/* Power Button */}
        <div className="absolute right-0 top-40 w-1 h-12 bg-gray-700 rounded-l-full" />
      </div>

      {/* Controls */}
      <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-all backdrop-blur border border-gray-200 dark:border-transparent"
          aria-label="Previous screen"
        >
          <FiChevronLeft className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-emerald-neon/10 dark:bg-emerald-neon/20 hover:bg-emerald-neon/20 dark:hover:bg-emerald-neon/30 rounded-full transition-all backdrop-blur border border-emerald-200 dark:border-transparent"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <FiPause className="w-5 h-5 text-emerald-neon" />
          ) : (
            <FiPlay className="w-5 h-5 text-emerald-neon" />
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-all backdrop-blur border border-gray-200 dark:border-transparent"
          aria-label="Next screen"
        >
          <FiChevronRight className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute -bottom-24 left-0 right-0 flex items-center justify-center gap-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsPlaying(false)
            }}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-2 bg-emerald-neon rounded-full'
                : 'w-2 h-2 bg-gray-400 dark:bg-white/30 hover:bg-gray-500 dark:hover:bg-white/50 rounded-full'
            }`}
            aria-label={`Go to screen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}