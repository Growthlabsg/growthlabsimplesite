import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f7377',
          50: '#e6f5f6',
          100: '#b3e1e3',
          200: '#80cdd0',
          300: '#4db9bd',
          400: '#1aa5aa',
          500: '#0f7377',
          600: '#0c5d61',
          700: '#09474a',
          800: '#063134',
          900: '#031b1d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

