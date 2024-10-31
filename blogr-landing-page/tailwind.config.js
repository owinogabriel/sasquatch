module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', 
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('/assets/bg.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
};