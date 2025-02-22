/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteBg: '#f0f4f9', // Add your custom color 
        bgColor2:'#e6eaf1'
      },
      width:{
        '20px':'20px' // Custom Width Setting
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(16deg, #4b90ff, #ff5546)',
      },
      gridTemplateColumns: {
        'customGrid': 'repeat(auto-fill, minmax(180px, 1fr))', // Adjust the minmax value as needed
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        }
      },
      animation: {
        'gradient-loading': 'loading 2s ease infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

