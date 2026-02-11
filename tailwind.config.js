/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#f2e2e2',     // Fondo general (el más claro)
          glass: '#e5c5c5',    // Para capas de vidrio
          light: '#d7a9a9',    // Detalles sutiles / Bordes
          medium: '#c88e83',   // Acentos secundarios
          primary: '#ba7b7c',  // Botones y textos fuertes
          dark: '#8a5a5b',     // (Opcional) Una versión más oscura para textos de lectura
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}