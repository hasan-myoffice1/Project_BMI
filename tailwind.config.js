/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#CDE9E5',
        brand: '#078BCB',
        cyanline: '#19A9E8',
        ink: '#202124',
        muted: '#78879A',
        field: '#F4F7FA',
        slate: { footer: '#64758E' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(32, 33, 36, 0.06)',
        card: '0 4px 20px rgba(32, 33, 36, 0.05)',
      },
    },
  },
  plugins: [],
};
