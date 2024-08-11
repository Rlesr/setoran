import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
          "secondary": colors.neutral[200], // Custom secondary color
          "accent": colors.blue[600],
          "neutral": colors.neutral[500], // Custom neutral color
          "base-100": colors.white,
          "info": colors.blue[300],
          "success": colors.green[500],
          "warning": colors.yellow[500],
          "error": colors.red[500],
        },
      },
      // Optionally, you can include DaisyUI's default themes
      'light',
      'dark',
    ],
  },
};
