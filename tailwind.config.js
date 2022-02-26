module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      @keyframes fadeIn {
        0% {
        opacity: 0;
      }

      100% {
      opacity: 1;
    }
  }

      .animate-fadeIn {
  animation: fadeIn 2s ease-in forwards;
}
    },
  },
  plugins: [],
}

