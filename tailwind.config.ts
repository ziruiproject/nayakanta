import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors : {
      "yellow" : "#FFB700",
      "green" : "#079269",
      "pink" : "#E47BE5",
      "orange" : "#FF7917",
      "purple" : "#3131BC",
      "blue" : "#0D82F9",
      "silver-blue" : "#9FB8F4",
      "black" : "#0B0A0A",
      "gray" : "#18191E",
      "light-gray" : "#222528"
    },
    extend: {
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
