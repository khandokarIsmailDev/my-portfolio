/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Roboto replaces Syne/DM Sans — single clean font family
        sans:    ["'Roboto'", "sans-serif"],
        display: ["'Roboto'", "sans-serif"],
        body:    ["'Roboto'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg:           "#050a12",
        surface:      "#0a1220",
        surfaceHigh:  "#0f1c2e",
        border:       "#1a2d45",
        accent:       "#3b82f6",
        accentGreen:  "#10b981",
        accentPurple: "#8b5cf6",
        textPrimary:  "#e8f0fe",
        textSecondary:"#7a9cc0",
        textMuted:    "#3d5a7a",
      },
      animation: {
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":       "float 6s ease-in-out infinite",
        "neon-pulse":  "neonPulse 3s ease-in-out infinite",
        "spin-slow":   "spin 16s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)"  },
          "50%":     { transform: "translateY(-14px)" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.02em",
      },
    },
  },
  plugins: [],
};
