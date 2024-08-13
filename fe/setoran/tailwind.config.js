import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
          background: "rgba(var(--background))",
          border: "rgba(var(--border))",
          card: "rgba(var(--card))",
          "copy-primary": "rgba(var(--copy-primary))",
          "copy-secondary": "rgba(var(--copy-secondary))",
          cta: "rgba(var(--cta))",
          "cta-active": "rgba(var(--cta-active))",
          "cta-text": "rgba(var(--cta-text))",
  
          grape: "rgba(var(--grape))",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": colors.blue[500],
          "secondary": colors.neutral[200], 
          "accent": colors.blue[600],
          "neutral": colors.neutral[500], // Custom neutral color
          "base-100": colors.white,
          "info": colors.blue[300],
          "success": colors.green[500],
          "warning": colors.yellow[500],
          "error": colors.red[500],
        },
      },
      'light',
      'dark',
    ],
  },
};
