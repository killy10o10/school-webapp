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
        "slow-float": "float 6s ease-in-out infinite",
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
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
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':"400% 400%",
              'background-position': "left center",
          },
          '50%': {
              'background-size':"200% 200%",
              'background-position': "right center",
          }
      },
      }
      }
    },
  },
  plugins: [],
});