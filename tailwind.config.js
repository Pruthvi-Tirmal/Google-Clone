module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DarkBg: '#202124',
        btnBg: '#303134',
        footerBg: '#171717',
        footerTextCol: '#999DA2'
      },
      width: {
        '75': '75%',
        '90': '90%'
      },
      boxShadow: {
        'google': '1px 3px 27px 4px rgba(0,0,0,0.75)',
      },
      bottom: {
        'bottom-5.2': '1.20rem'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
