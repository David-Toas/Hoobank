import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #DEF9FA, #BEF3F5, #9DEDF0, #7DE7EB, #5CE1E6, #33BBCF)",
        "custom-gradient-left":
          "linear-gradient(to left, #DEF9FA, #BEF3F5, #9DEDF0, #7DE7EB, #5CE1E6, #33BBCF)",
        "shield": "linear-gradient(to bottom, #312e39, #1a1622)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
