/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        'xs': ['var(--fs-xs)', {lineHeight: 'var(--lh-xs)'}],
        "sm": ["var(--fs-sm)", { lineHeight: "var(--lh-sm)" }],
        "base": ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
        "lg": ["var(--fs-lg)", { lineHeight: "var(--lh-lg)" }],
        "xl": ["var(--fs-xl)", { lineHeight: "var(--lh-xl)" }],
        "2xl": ["var(--fs-2xl)", { lineHeight: "var(--lh-2xl)" }],
        "3xl": ["var(--fs-3xl)", { lineHeight: "var(--lh-3xl)" }],
        "4xl": ["var(--fs-4xl)", { lineHeight: "var(--lh-4xl)" }],
        "5xl": ["var(--fs-5xl)", { lineHeight: "var(--lh-5xl)" }],
        "6xl": ["var(--fs-6xl)", { lineHeight: "var(--lh-6xl)" }],
      }
    },
  },
  plugins: [],
}

