module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']        
      },
      height:{
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '425': '425px',
        '450': '450px',
        '500': '500px'
      
      },
      width:{
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px'
      },
      colors:{
        'oceanBlue': '#19234c'
      },
      zIndex:{
        '-10': '-10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
