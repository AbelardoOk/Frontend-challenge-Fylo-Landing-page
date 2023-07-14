/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        alt: 'var(--font-raleway)',
        sans: 'var(--font-open-sans)',
      },

      colors: {
        primary: {
          intro: 'hsl(217, 28%, 15%)',
          main: 'hsl(218, 28%, 13%)',
          footer: 'hsl(216, 53%, 9%)',
          testimonials: 'hsl(219, 30%, 18%)',
        },

        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          red: 'hsl(0, 100%, 63%)',
        },

        neutral: {
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}
