module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        card: '#F8FAFC',
        'accent-start': '#6366F1',
        'accent-end': '#F97316',
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        'xl-lg': '14px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      boxShadow: {
        'ssw-lg': '0 10px 30px rgba(15,23,42,0.08)'
      }
    },
  },
  plugins: [],
};
