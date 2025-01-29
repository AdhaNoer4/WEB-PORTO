/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      padding: {
        "9%": "9%",
      },
      width: {
        "32vw": "32vw",
        calc: "calc(100%+8px)",
      },
      boxShadow: {
        boxShadow: "0 0 25px solid rgba(0,0,0,0.1)",
      },
      letterSpacing: {
        btnsps: ".3em",
      },
      keyframes: {
        cursor: {
          to: { "border-left": "3px solid #f87171" },
        },
        words: {
          "0%, 20%": { content: "Web Developer" },
          "21%, 40%": { content: "Gamer" },
          "41%, 60%": { content: "Content Creator" },
          "61%, 80%": { content: "Web Designer" },
          "81%, 100%": { content: "Front-End Developer" },
        },
      },
      animation: {
        words: "words 20s ease-out infinite",
        cursor: "cursor .6s linear infinite alternate",
      },
    },
    plugins: [],
  },
};
