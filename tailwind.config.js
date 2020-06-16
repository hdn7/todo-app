module.exports = {
  purge: [],
  theme: {
    extend: {
      inset: {
        '-16': '-4rem',
        '-8': '-2rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
