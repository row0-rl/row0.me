import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hermit": ["hermit", "font-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        // 'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 32px rgba(255, 255, 255, 0.35)', 
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
