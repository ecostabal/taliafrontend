module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        exo2: ['Exo2', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)',
          },
          '50%': {
            transform: 'rotate(1deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
