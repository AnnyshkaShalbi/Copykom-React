import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1E3A8F",
        'primary-light': "#F0F6FB",
        'border': "#EDEFF5",
        'gray': "#464F6A",
        'green': "#48C95F",
        'grey-light': '#BEC7E2',
        'red-dark': "#AD0019",
        'background': "var(--background)",
        'foreground': "var(--foreground)",
      },
      animation: {
        'preloader-square': 'preloaderAnimation 1.2s infinite ease-in-out',
      },
      keyframes: {
        preloaderAnimation: {
          '0%, 100%': { opacity: '0.1' },
          '40%': { opacity: '1' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    function({ addComponents }: { addComponents: any }) {
      addComponents({
        '.link': {
          '@apply text-primary border-b border-solid border-transparent': {},
          '&:hover': {
            '@apply border-primary transition-all duration-300 ease-in-out': {},
          }
        }
      })
    }
  ],
} satisfies Config;


