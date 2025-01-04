// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // Customize this value
        text: '#333333',      // Customize this value
        primary: '#3b82f6',   // Customize this value
        'primary-dark': '#2563eb', // Customize this value
      },
    },
  },
  plugins: [],
}