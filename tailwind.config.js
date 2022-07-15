module.exports = {
  content: ['./*.html'],
  theme: {

    backgroundImage: {
      'hero-desktop': "url('../images/bg-header-desktop.png')",
      'hero-mobile': "url('../images/bg-header-mobile.png')",
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
