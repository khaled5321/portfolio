module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        'bot': '0px 1px 0px 0px',
      },
      fontFamily: {
        'custom': ['Proxima Nova'],
        'cursive': ['cursive']
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}