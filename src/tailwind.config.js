// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2a4365',
            light: '#4a69bb',
            dark: '#1a365d',
          },
          secondary: {
            DEFAULT: '#4299e1',
            light: '#63b3ed',
            dark: '#2b6cb0',
          },
        },
      },
    },
    plugins: [],
  }
  