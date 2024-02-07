/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
     
      {
        light: {
          "primary": "rgba(123, 123, 123, 0.5)",   
          "primary-content": "EEEEEE",              
          "secondary": "#49B618",                
          "accent": "#C9D72E",                
          "neutral": "#4ade80",                
          "base-100": "#FFFFFF",                
          "info": "#0086ff",                
          "success": "#64cb00",                
          "warning": "#f59e0b",                
          "error": "#be123c",
          "base-content": "#000000",
        },
      },
      {
        dark: {
          "primary": "rgba(123, 123, 123, 0.5)",   
          "primary-content": "EEEEEE",              
          "secondary": "#49B618",                
          "accent": "#C9D72E",                
          "neutral": "#4ade80",                
          "base-100": "#111",                
          "info": "#0086ff",                
          "success": "#64cb00",                
          "warning": "#f59e0b",                
          "error": "#be123c",
          "base-content": "#FFFFFF",
        },
      },
        "cupcake", "synthwave"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "rgba(123, 123, 123, 0.15)",
        "primary-light": "rgba(140, 140, 140, 0.2)",
      }
    },
  },
  plugins: [require("daisyui")],
};
