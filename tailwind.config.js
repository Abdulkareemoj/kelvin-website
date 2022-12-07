module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
    './src/**/*.jsx',
    './src/index.html'
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class'
  };
