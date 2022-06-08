module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-black": "#333333",
        "theme-gray": "#9d9d9c",
        "theme-gray-2": "#666666",
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
      },
      backgroundColor: {
        "theme-gray": "#9d9d9c",
        "theme-gray-2": "#666666",
        "theme-gray-3": "#333333",
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
        "user-input": "#f5f5f5",
        "farbe-beige": "#CBA863",
        "farbe-blue": "#285EC9",
        "farbe-green": "#1E9411",
        "farbe-orange": "#FF5700",
        "farbe-red": "#FF1414",
        "farbe-golden": "#E5A000",
        "farbe-brown": "#734614",
        "farbe-silver": "#F3F3F3",
        "farbe-yellow": "#FFEE00",
        "farbe-bronze": "#EBB957",
        "farbe-violet": "#991DCC",
        "farbe-gray": "#BCBCBC",
      },
      width: {
        49: "49%",
        55: "55%",
        '300': '300px',
        224: '224px'
      },
      maxWidth: {
        'ag-container': '1140px'
      },
      fontSize: {
        15: '15px',
        8: '8px',
        10: '10px',
        14: '14px',
        100: '100px',
      },
      lineHeight: {
        100: '122px'
      },
      borderColor: {
        "theme-gray": "#808080",
        "theme-slate": "#cccccc",
        "footer-border": "#ffffffb3",
        "farbe-beige": "#CBA863",
        "farbe-blue": "#285EC9",
        "farbe-green": "#1E9411",
        "farbe-orange": "#FF5700",
        "farbe-red": "#FF1414",
        "farbe-golden": "#E5A000",
        "farbe-brown": "#734614",
        "farbe-silver": "#F3F3F3",
        "farbe-yellow": "#FFEE00",
        "farbe-bronze": "#EBB957",
        "farbe-violet": "#991DCC",
        "farbe-gray": "#BCBCBC",
      },
      fill: {
        "theme-yellow": "#f9b000",
        "theme-yellow-2": "#fbb900",
      },
      screens: {
        sm: { max: "539px" },
        // => @media (max-width: 639px) { ... }
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
      },
    },
  },
  plugins: [],
};
