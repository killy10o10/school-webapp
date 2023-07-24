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
      },
      animation: {
        "slow-float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        
      float: { 
         "0%": {
          transform: "translatey(0px)"
        },
        "50%": {
          transform: "translatey(-20px)"
        },
        "100%": {
          transform: "translatey(0px)"
        },
      }
      }
    },
  },
  plugins: [],
});