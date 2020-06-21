module.exports = {
  purge: [],
  theme: {
    extend: {
      height: {
        '80': '24rem',
      },
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
