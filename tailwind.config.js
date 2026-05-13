module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        summer: "0 18px 50px rgba(255, 132, 0, 0.16)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: "#ff7a18",
          secondary: "#00b8a9",
          accent: "#ffd166",
          neutral: "#213547",
          "base-100": "#fffaf0",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444"
        }
      }
    ]
  }
};
