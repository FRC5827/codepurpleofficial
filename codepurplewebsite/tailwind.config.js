/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cooper: ['"Cooper Hewitt"', 'sans-serif'],
        kode: ['Kode Mono', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        book: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
      },
      colors: {
        codePurple: "#7E44CE",
        
        build: "#FBEF4B",
        code: "#FF963E",
        design: "#FF515C",
        safety: "#ED68D5",
        electronics: "#9660EA",
        drive: "#649FF1",
        marketing: "#55D0F8",
        finance: "#56EFFD",
        strategy: "#57FEDA",
      },
    },
  },
  plugins: [],
}

