/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      md: "0.3125rem",
      lg: "0.625rem",
    },
    colors: {
      "brand-1": "hsl(0, 100%, 74%)",
      "brand-1-a11y": "hsl(4, 49%, 52%)",
      "brand-2": "hsl(154, 59%, 51%)",
      "brand-2-a11y": "hsl(149, 50%, 43%)",
      "brand-accent": "hsl(248, 32%, 49%)",
      "neutral-1": "hsl(249, 10%, 26%)",
      "neutral-1-opaque": "hsla(249, 10%, 26%, 0.7)",
      "neutral-2": "hsl(246, 25%, 77%)",
      "neutral-2-a11y": "hsl(242, 28%, 56%)",
      grey: "hsla(0, 0%, 87%, 1)",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Poppins", "system-ui", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    screens: {
      sm: "36rem",
      md: "58rem",
      lg: "80rem",
    },
    extend: {
      aria: {
        invalid: 'invalid="true"',
      },
      backgroundImage: {
        landing: "url(assets/images/bg-intro-mobile.png)",
        "landing-desktop": "url(assets/images/bg-intro-desktop.png)",
        "field-error": "url(assets/images/icon-error.svg)",
      },
      backgroundPosition: {
        "field-error-img": "right 1em center",
      },
      backgroundColor: {
        "opaque-dark": "hsla(246, 10%, 20%, 0.5)",
      },
      boxShadow: {
        "inner-button": "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
        card: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
      },
      fontSize: {
        h1: "clamp(1.75rem, calc(8vw + 0.01rem), 3.125rem)",
        largeprint: "1.1875rem",
      },
      gridTemplateColumns: {
        "auto-1-2": "repeat(auto-fit, minmax(25ch,1fr))",
      },
      listStyleType: {
        revert: "revert",
      },
      minHeight: {
        "vh-screen": "100vh",
        "dvh-screen": "100dvh",
        inherit: "inherit",
      },
      maxWidth: {
        heading: "15ch",
        md: "32rem",
      },
      spacing: {
        15: "0.9375em",
      },
    },
  },
  plugins: [],
};
