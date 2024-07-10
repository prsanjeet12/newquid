import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '6xl': '4rem', 
      },
      colors: {
        baseColor: '#00A991', 
        blackColor: '#133039',
        grayColor:'#95A2A6',
        textColor:'#5A6873',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Updated to use Poppins
      },
    },
  },
  plugins: [],
};

export default config;