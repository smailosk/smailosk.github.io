'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const particleArray = []
    // Reduced particles for better performance
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 25,
      })
    }
    setParticles(particleArray)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
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