import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        entering: "entering .5s ease-in-out",
        image: "image 1s ease-in-out",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        entering: {
          "0%": { 
            opacity: 0, 
            scale: 0.5,
            transform: "translateY(50px)"
          },
          "100%": { 
            opacity: 1,
            scale: 1,
            transform: "translateY(0)"
           },
        },
        image: {
          "0": {
            opacity: 0,
            scale: 0.5,
          },
          "100%": {
            opacity: 1,
            scale: 1,
          },
        }
      },
    },
  },
  plugins: [],
};
