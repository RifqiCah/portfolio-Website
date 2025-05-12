/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#222831", // Background utama
        "secondary-bg": "#393E46", // Navbar & footer
        "accent": "#00ADB5", // Warna aksen (link, tombol, dll.)
        "color-text": "#EEEEEE", // Warna teks utama
      },
      scrollBehavior: ['responsive'], // Menambahkan kemampuan scrollBehavior
    },
  },
  variants: {
    extend: {
      scrollBehavior: ['hover', 'focus'], // Menambahkan varian untuk hover dan focus pada scrollBehavior
    },
  },
  plugins: [],
};
