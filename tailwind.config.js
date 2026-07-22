/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0F5C56',      // primary buttons, headline accents
          tealDark: '#0B4741',  // hover states
          tealLight: '#1B7A72', // secondary accents, icons
          mint: '#EAF6F1',      // section backgrounds
          mintBadge: '#DCEFEA', // badge / pill backgrounds
          navy: '#122A26',      // body / heading text
          slate: '#5B716C',     // muted text
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
}
