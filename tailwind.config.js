/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '986px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1024px) { ... }

      xl: '1500px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        bleed: {
          '0%': {
            color: '#ef4444',
            textShadow: '0 0 5px rgba(255, 0, 0, 0.8)',
          },
          '50%': {
            color: '#b91c1c',
            textShadow: '0 0 5px rgba(255, 0, 0, 0.8)',
          },
          '100%': {
            color: '#ef4444',
            textShadow: '0 0 5px rgba(255, 0, 0, 0.8)',
          },
        },
        victory: {
          '0%': {
            color: 'gray',
            textShadow: '1px 1px 2px pink',
          },
          '50%': {
            color: 'white',
            textShadow: '1px 1px 2px pink',
          },
          '100%': {
            color: 'gray',
            textShadow: '1px 1px 2px pink',
          },
        },
      },
      animation: {
        bleed: 'bleed 2s ease-in-out infinite',
        victory: 'victory 2s ease-in-out infinite',
      },
    },
    fontFamily: {
      display: ['"Protest Guerrilla"', ' sans-serif'],
    },
  },
  plugins: [],
};
