import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['var(--font-audiowide)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
