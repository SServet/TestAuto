module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-gray': '#9d9d9c',
        'theme-gray-2': '#666666',
        'theme-yellow': '#f9b000',
        'theme-yellow-2': '#fbb900'
      },
      backgroundColor: {
        'theme-gray': '#9d9d9c',
        'theme-gray-2': '#666666',
        'theme-gray-3': '#333333',
        'theme-yellow': '#f9b000',
        'theme-yellow-2': '#fbb900',
        'user-input': '#f5f5f5'
      },
      width: {
        '49': '49%',
        '55': '55%',
      },
      borderColor: {
        'theme-gray': '#808080'
      },
      fill: {
        'theme-yellow': '#f9b000',
        'theme-yellow-2': '#fbb900'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}