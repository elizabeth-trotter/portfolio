import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['JosefinSans', 'sans-serif'],
        'josefin-slab': ['JosefinSlab', 'serif']
      },
      screens: {
        'xs': '575px',
        '2xs': '480px',
        '3xs': '400px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
