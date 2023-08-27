/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deh-main":"rgba(84, 97, 242, 1)",
        "deh-black":"rgba(0, 0, 0, 0.85)",
        "deh-white":"rgba(255, 255, 255, 0.85)",
        "deh-second":"rgba(117, 128, 255, 0.75)",
        "deh-second-hover":"rgba(117, 128, 255, 0.95)",
        "deh-border":"rgba(109, 110, 126, 0.75)",
        "deh-border-hover":"rgba(109, 110, 126, 0.95)",
        "deh-server-slider":"rgba(25, 25, 25, 1)",
        "deh-footer":"#22211f"
      },
    },
  },
  plugins: [],
};
