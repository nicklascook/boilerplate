import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff3fe",
          "100": "#e2eafd",
          "200": "#cad8fb",
          "300": "#aabdf7",
          "400": "#8093f1",
          "500": "#6a77ea",
          "600": "#4e51dd",
          "700": "#4041c2",
          "800": "#36389d",
          "900": "#32357d",
          "950": "#1e1f48",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
      },
      borderRadius: {
        base: "0.3rem",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        header: ["var(--font-header)"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
