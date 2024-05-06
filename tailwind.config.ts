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
      colors: {
        javascriptYellow: '#f7df1e',
        typescriptBlue: '#007acc',
        csharpPurple: '#682876',
        htmlRed: '#e34c26',
        cssBlue: '#264de4',
        sqlBlack: '#000000',
        dotnetBlue: '#512bd4',
        reactBlue: '#61DBFB',
        nextjsPurple: '#682876',
        angularRed: '#e34c26',
        bootstrapIndigo: '#264de4',
        tailwindBlack: '#000000',
        azureBlue: '#007fff',
        vscodeBlue: '#007acc',
        figmaPink: '#f24e1e',
        postmanOrange: '#ff6c37',
        jiraGreen: '#0052cc',
        gitBlack: '#000000'
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
