import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors - softer for better readability
        'light-bg': '#FAFAFA',
        'light-surface': '#F3F4F6',
        'light-card': '#FFFFFF',
        'light-border': '#E5E7EB',
        'light-text': '#1F2937',
        'light-text-secondary': '#4B5563',
        'light-text-muted': '#6B7280',
        
        // Dark theme colors
        'dark': '#0A0A0A',
        'dark-lighter': '#111111',
        'dark-card': '#181D27',
        'dark-border': '#1F2937',
        
        // Emerald accent colors (used in both themes)
        'emerald-400': '#34D399',
        'emerald-500': '#10B981',
        'emerald-600': '#059669',
        'emerald-neon': '#1DB26A',
        
        // Text colors for dark theme
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 50%'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'text-reveal': {
          '0%': {
            transform: 'translate(0, 100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          }
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(29, 178, 106, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 40px rgba(29, 178, 106, 0.8), 0 0 60px rgba(29, 178, 106, 0.6)',
          }
        },
        shimmer: {
          '0%': {
            'background-position': '-1000px 0',
          },
          '100%': {
            'background-position': '1000px 0',
          }
        },
        morph: {
          '0%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #1DB26A 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #111111 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFB 100%)',
      },
    },
  },
  plugins: [],
}
export default config