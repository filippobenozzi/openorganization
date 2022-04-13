const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans]
    },
    fontWeight: {
      regular: '400',
      medium: '600',
      bold: '800'
    },
    maxWidth: {
      lg: '800px',
      md: '600px'
    }
  },
  variants: {},
  plugins: []
};
