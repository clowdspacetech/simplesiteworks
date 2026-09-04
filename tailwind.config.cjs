module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090b",
        muted: "#a1a1aa",
        card: "#18181b",
        accent: "#818cf8",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ssw: "0 20px 50px rgba(0,0,0,0.28)",
        "ssw-lg": "0 0 42px rgba(99,102,241,0.22)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "float-a": {
          "0%, 100%": { transform: "translate3d(0, 8px, 0) rotate(-0.5deg)" },
          "50%": { transform: "translate3d(0, -8px, 0) rotate(0.5deg)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translate3d(0, -8px, 0) rotate(0.5deg)" },
          "50%": { transform: "translate3d(0, 8px, 0) rotate(-0.5deg)" },
        },
        "float-c": {
          "0%, 100%": { transform: "translate3d(0, 6px, 0) rotate(0.35deg)" },
          "50%": { transform: "translate3d(0, -8px, 0) rotate(-0.35deg)" },
        },
        "float-d": {
          "0%, 100%": { transform: "translate3d(0, -6px, 0) rotate(-0.45deg)" },
          "50%": { transform: "translate3d(0, 8px, 0) rotate(0.45deg)" },
        },
      },
      animation: {
        "float-a": "float-a 7s ease-in-out infinite",
        "float-b": "float-b 6s ease-in-out 0.35s infinite",
        "float-c": "float-c 8s ease-in-out 0.7s infinite",
        "float-d": "float-d 9s ease-in-out 0.2s infinite",
      },
    },
  },
  plugins: [],
};
