/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        border: "var(--color-border)",
        "border-subtle": "var(--color-border-subtle)",
        primary: "var(--color-primary)",
        "primary-soft": "var(--color-primary-soft)",
        "primary-dark": "var(--color-primary-dark)",
        "on-primary": "var(--color-on-primary)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        "on-accent": "var(--color-on-accent)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-surface": "var(--gradient-surface)",
        "gradient-accent": "var(--gradient-accent)",
      },
      boxShadow: {
        "neo-sm": "var(--shadow-neo-sm)",
        neo: "var(--shadow-neo)",
        "neo-lg": "var(--shadow-neo-lg)",
      },
      fontFamily: {
        heading: ["Epilogue", "sans-serif"],
        sans: ["Epilogue", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        popUp: "popUp 0.18s ease-out",
      },
    },
  },
  plugins: [],
};
