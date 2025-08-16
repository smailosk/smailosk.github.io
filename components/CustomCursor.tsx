'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Mouse move handler - direct, no delay
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    // Mouse enter/leave window
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)
      document.addEventListener('mouseover', handleMouseOver)
      document.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor - follows instantly */}
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
          backgroundColor: isHovering ? 'rgba(29, 178, 106, 0.08)' : 'transparent',
          border: `2px solid ${isHovering ? 'rgba(29, 178, 106, 1)' : 'rgba(29, 178, 106, 0.7)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, border-color 0.2s ease',
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovering ? '0 0 20px rgba(29, 178, 106, 0.3)' : 'none',
        }}
      />
      
      {/* Center dot - follows instantly */}
      <div
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          backgroundColor: 'rgba(29, 178, 106, 1)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}