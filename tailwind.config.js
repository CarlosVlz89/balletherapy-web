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
          base: '#FAF7F5',       // Lienzo lino / alabastro limpio
          linen: '#EADFD9',      // Borde sutil lino
          surface: '#FFFFFF',    // Blanco superficie
          glass: 'rgba(255, 255, 255, 0.85)', // Capas de vidrio
          light: '#EADFD9',      // Detalles sutiles / Bordes lino
          medium: '#8E4A49',     // Terracota profundo / Acentos secundarios
          primary: '#A05255',    // Terracota / Borgoña exclusivo para CTAs primarios y badges
          secondary: '#8E4A49',  // Borgoña profundo
          dark: '#2A2421',       // Carbón / espresso profundo
          text: '#2A2421',       // Tipografía de lectura
          muted: '#685D57',      // Texto secundario con contraste WCAG AA
        }
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.03)',
        glass: '0 8px 30px rgba(42, 36, 33, 0.04)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}