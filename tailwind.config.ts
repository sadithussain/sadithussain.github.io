// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  // This 'content' array is the only reason we are creating this file.
  // It tells Tailwind to scan for classes inside your 'src' directory.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
