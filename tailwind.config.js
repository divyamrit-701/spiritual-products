/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spiritual: {
          bg: '#FAF7F2',
          card: '#FFFFFF',
          cream: '#F4ECE1',
          gold: {
            50: '#FDF8EC',
            100: '#F9ECCB',
            200: '#F3D995',
            300: '#EBC45F',
            400: '#DDAA32',
            500: '#C88A2E',
            600: '#A96E1D',
            700: '#875316',
            800: '#693F14',
            900: '#4E2E10',
          },
          saffron: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#EA580C',
            600: '#C2410C',
            700: '#9A3412',
          },
          maroon: {
            50: '#FDF2F4',
            100: '#FCE7EB',
            500: '#9E2A2B',
            700: '#6B1D2F',
            800: '#4D121F',
            900: '#340A13',
          },
          tulsi: {
            50: '#F2F7F4',
            100: '#E1EFE7',
            300: '#8CB89B',
            500: '#3F6E50',
            700: '#254B34',
            800: '#183424',
          },
          earth: {
            50: '#F8F6F4',
            100: '#EFEAE5',
            200: '#DDD3CA',
            300: '#C3B3A5',
            400: '#9F8A79',
            500: '#7B6655',
            600: '#5F4D3F',
            700: '#47392E',
            800: '#2E241D',
            900: '#1C1510',
          },
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        devanagari: ['"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'spiritual': '0 4px 20px -2px rgba(46, 36, 29, 0.06), 0 2px 6px -1px rgba(46, 36, 29, 0.04)',
        'spiritual-hover': '0 10px 30px -4px rgba(46, 36, 29, 0.12), 0 4px 10px -2px rgba(46, 36, 29, 0.06)',
        'gold-glow': '0 0 25px rgba(200, 138, 46, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
