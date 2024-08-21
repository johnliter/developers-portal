module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      colors: {
        'gradient-blue': {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        'gradient-green': {
          light: '#22c55e',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
        'gradient-pink': {
          light: '#ec4899',
          DEFAULT: '#db2777',
          dark: '#be185d',
        },
        'gradient-purple': {
          light: '#8b5cf6',
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
        },
        'gradient-red': {
          light: '#ef4444',
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
        },
        'gradient-yellow': {
          light: '#f59e0b',
          DEFAULT: '#d97706',
          dark: '#b45309',
        },
        'gradient-teal': {
          light: '#14b8a6',
          DEFAULT: '#0d9488',
          dark: '#0f766e',
        },
        'gradient-indigo': {
          light: '#6366f1',
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
      },
    },
  },
  plugins: [],
}
