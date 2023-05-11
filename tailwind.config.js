/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        G1: '#E7E7E7',
        G2: '#C2C2C2',
        G3: '#D8D8D8',
        D1: '#000000',
        P1: '#603EBE',
        P2: '#5E3DB3',
        P3: '#8F6BE8',
        P4: '#F5F4F9',
        W1: '#FFFFFF',
        W2: '#F2F2F2',
        B1: '#090C35',
      },
    },
  },
  plugins: [],
}
