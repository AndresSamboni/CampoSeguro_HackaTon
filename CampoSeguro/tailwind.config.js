const flowbite = require("flowbite-react/tailwind");
// import flowbite from  'flowbite-react/tailwind' 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#3DBFF2',      // Azul Brillante
        successGreen: '#81D959',     // Verde Brillante
        ctaOrange: '#F28705',        // Naranja Brillante
        lightGray: '#F2F2F2',        // Gris Claro
        darkText: '#0D0D0D',         // Casi Negro
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

