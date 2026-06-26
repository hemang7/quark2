module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          50: "#E8EFF6",
          100: "#C5D5E8",
          600: "#0A2540",
          700: "#081D33",
          800: "#061626",
        },
        "royal-blue": "#1E6FD9",
        "electric-blue": "#2563EB",
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"DM Serif Display"', "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
        "cta": "0 4px 14px rgba(37, 99, 235, 0.35)",
        "cta-hover": "0 8px 24px rgba(37, 99, 235, 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
