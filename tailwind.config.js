// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dv: {
          primary: '#002a5c',      // Azul marino oscuro (camión)
          secondary: '#00bcd4',    // Turquesa/Cyan (pez)
          accent: '#ff6b6b',       // Coral/Salmón (olas)
          light: '#f5f5f5',
          dark: '#1f1f1f',
          base: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}