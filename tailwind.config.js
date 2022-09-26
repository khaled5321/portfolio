module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        'bot': '0px 1px 0px 0px',
      },
      fontFamily: {
        'custom': ['Proxima Nova'],
        'cursive': ['cursive'],
        'hero': ['herofont', 'Proxima Nova']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}