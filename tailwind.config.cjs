module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090b",
        muted: "#71717a",
        card: "#fafafa",
        accent: "#3F51B5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ssw: "0 8px 30px rgb(0,0,0,0.04)",
        "ssw-lg": "0 12px 40px rgb(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
