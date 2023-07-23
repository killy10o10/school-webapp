import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#57D657',
        'dark-blue': '#00296B',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
        mono: "'Space Mono', monospace",
      }
    },
  },
  plugins: [],
});