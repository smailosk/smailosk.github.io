'use client'

import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'
import { MotionConfig } from 'motion/react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'dark',
  toggleTheme: () => {},
})

const themeChangeEvent = 'portfolio-theme-change'

function getThemeSnapshot(): Theme {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getServerThemeSnapshot(): Theme {
  return 'dark'
}

function subscribeToTheme(onStoreChange: () => void) {
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
  colorScheme.addEventListener('change', onStoreChange)
  window.addEventListener('storage', onStoreChange)
  window.addEventListener(themeChangeEvent, onStoreChange)

  return () => {
    colorScheme.removeEventListener('change', onStoreChange)
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener(themeChangeEvent, onStoreChange)
  }
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    window.dispatchEvent(new Event(themeChangeEvent))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  )
}
