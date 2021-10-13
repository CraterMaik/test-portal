module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
