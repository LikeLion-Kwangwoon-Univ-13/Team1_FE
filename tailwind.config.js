/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue
        secondary: "#F59E0B", // Yellow
        accent: "#10B981", // Green
        background: "#F3F4F6", // Light Gray
        text: "#111827", // Dark Gray
    },
      fontFamily: {
        sans: ['"Kakao Big Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

