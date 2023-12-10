import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "black-100": "#2B2C35",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59, 60, 152, 0.02)"
        },
        grey: "#747A88"
      },
      backgroundImage: {
        'hero-bg': "url('/assets/hero-bg.png')",
        'pattern': "url('/assets/pattern.png')"
      }
    },
  },
  plugins: [],
}
export default config
