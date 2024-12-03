/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#3692FA",
        navyBlue: "#000C3F",
        defaultBlack: "#172030",
      },
    },
  },
  plugins: [require("daisyui")],
};
