'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useIsMobile'

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  x: (index * 47) % 100,
  delay: (index * 13) % 25,
}))

export default function ParticlesBackground() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated gradient blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-neon/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-1/2 -right-4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow animation-delay-400"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-800"></div>
      
      {/* Floating particles - optimized */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-emerald-neon rounded-full opacity-20"
          initial={{
            x: `${particle.x}vw`,
            y: '110vh',
          }}
          animate={{
            y: '-10vh',
          }}
          transition={{
            duration: 30,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${particle.x}%`,
            willChange: 'transform',
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#1DB26A 1px, transparent 1px),
            linear-gradient(90deg, #1DB26A 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
