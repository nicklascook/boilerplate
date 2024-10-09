import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        header: ["var(--font-header)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
