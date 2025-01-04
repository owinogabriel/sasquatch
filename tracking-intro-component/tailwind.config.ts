import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      extend: {
        backgroundImage: {
          'devices': "url('/devices.svg')",
        },
      },
      
      backgroundSize: {
        '40%': '40%',
        '120%': '120%',
      },
    },
  },
  plugins: [],
} satisfies Config;
