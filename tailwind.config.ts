import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: "#E9ECFF",
      accent: "#808CFD",
    },
    extend: {
      fontFamily: {
        geist: ['"Geist"', 'sans-serif'],
        'geist-mono': ['"GeistMono"', 'monospace'],
        'anek-tamil': ['"AnekTamil"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config