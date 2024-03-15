import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray':'rgb(246, 246, 246)',
        'primary-white': 'rgba(255, 255, 255, 1)',
        'primary-dark-blue': 'rgba(3, 37, 65, 1)',
        'secondary-light-blue': 'rgba(135, 206, 235, 1)',
        'secondary-purple': 'rgba(138, 43, 226, 1)',
        'gradient-blue-start': 'rgba(41, 128, 185, 1)',
        'gradient-blue-end': 'rgba(109, 213, 237, 1)',
        'gradient-purple-start': 'rgba(142, 68, 173, 1)',
        'gradient-purple-end': 'rgba(155, 89, 182, 1)',
      },
      maxWidth: {
        'custom': '936px',
        'main': '430px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
