const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        disabled: colors.stone[400],
        'disabled-light': colors.stone[400],
        'disabled-dark': colors.stone[500],
        primary: colors.violet[800],
        'primary-light': colors.violet[600],
        secondary: colors.sky[600],
        'secondary-light': colors.sky[500],
        success: colors.green[700],
        'success-light': colors.green[600],
        error: colors.pink[700],
        'error-light': colors.pink[500],
        danger: colors.red[700],
        'danger-light': colors.red[500],
        warning: colors.amber[500],
        'warning-light': colors.amber[400],
      },
      minWidth: {
        '14': '56px',
        '20': '80px',
        '24': '96px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
