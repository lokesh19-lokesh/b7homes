/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F8F5EF', // Warm ivory
          200: '#F3EFE6',
          300: '#EDE7DC', // Soft cream
          400: '#E4DC CE',
        },
        cream: {
          DEFAULT: '#EDE7DC',
          light: '#F4EFE6',
          dark: '#E2D7C7',
        },
        walnut: {
          DEFAULT: '#49362B', // Dark walnut
          light: '#654C3D',
          dark: '#35271F',
          deep: '#281D17',
        },
        charcoal: {
          DEFAULT: '#252523', // Deep charcoal
          soft: '#3A3A37',
          muted: '#5A5A55',
          light: '#7A7A73',
        },
        bronze: {
          DEFAULT: '#A8875B', // Muted bronze
          light: '#BD9E74',
          dark: '#8E6F45',
          pale: '#CBB291',
        },
        beige: {
          DEFAULT: '#D8CBB9', // Light beige
          light: '#E6DDD0',
          dark: '#C7B7A1',
        },
        sand: '#EFECE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'DM Sans', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(37, 37, 35, 0.07)',
        'luxury-lg': '0 30px 60px -20px rgba(37, 37, 35, 0.12)',
        'subtle': '0 2px 10px rgba(37, 37, 35, 0.04)',
        'card': '0 4px 20px -2px rgba(73, 54, 43, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'editorial': '0.15em',
      },
    },
  },
  plugins: [],
}
