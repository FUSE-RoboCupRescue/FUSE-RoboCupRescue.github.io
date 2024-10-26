import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
          white: '#d5cdd4',
          black: '#010101',
          grey_light: '#aba4aa',
          grey: '#807b80',
          grey_medium: '#565255',
          grey_dark: '#2b2a2b',
        }
      },
      fontFamily: {
        sans: ['aileron'],
        serif: ['Helvetica']
      },
    },
  },
  plugins: [],
};
export default config;
