// Tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a73e8",  // Azul Google
          light: "#4d90fe",
          dark: "#1558c0",
        },
        secondary: {
          DEFAULT: "#fbbc04", // Amarillo Google
          light: "#ffcd4e",
          dark: "#c28a00",
        },
        accent: {
          DEFAULT: "#34a853", // Verde Google
          light: "#5fd38a",
          dark: "#267c3e",
        },
        danger: {
          DEFAULT: "#ea4335", // Rojo Google
          light: "#f36c60",
          dark: "#b22e25",
        },
        neutral: {
          DEFAULT: "#202124",
          light: "#5f6368",
          bg: "#f8f9fa",
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        heading: ["'Poppins'", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.05)",
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
