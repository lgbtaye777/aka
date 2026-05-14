export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E31E4A',
          navy: '#1A1A2E',
          dark: '#0A0A1A',
          cyan: '#00D4FF',
          surface: '#16213E',
          gray: '#9CA3AF',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Google Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Google Sans', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        manrope: ['Google Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A2E 0%, #0A0A1A 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(22, 33, 62, 0.8) 0%, rgba(22, 33, 62, 0.4) 100%)',
      },
      animation: {
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 7s ease-in-out infinite alternate',
        'float-3': 'float3 8s ease-in-out infinite alternate-reverse',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-move': 'gradientMove 8s linear infinite',
        'scroll-drop': 'scrollDrop 1.5s ease-in-out infinite',
        shimmer: 'shimmer 1.4s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) translateX(10px) rotate(1deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.35', transform: 'scale(1)' },
          '50%': { opacity: '.65', transform: 'scale(1.08)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '300% center' },
        },
        scrollDrop: {
          '0%': { transform: 'translateY(-110%)', opacity: 0 },
          '40%': { opacity: 1 },
          '100%': { transform: 'translateY(210%)', opacity: 0 },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
};
