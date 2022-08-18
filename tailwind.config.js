/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
      },
      fontSize: {
        "medium": "1.13rem",
        "2xs": "0.65rem",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'hero': 'url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
        'pattern': 'linear-gradient(30deg, #3c3d3e 12%, transparent 12.5%, transparent 87%, #3c3d3e 87.5%, #3c3d3e), linear-gradient(150deg, #3c3d3e 12%, transparent 12.5%, transparent 87%, #3c3d3e 87.5%, #3c3d3e), linear-gradient(30deg, #3c3d3e 12%, transparent 12.5%, transparent 87%, #3c3d3e 87.5%, #3c3d3e), linear-gradient(150deg, #3c3d3e 12%, transparent 12.5%, transparent 87%, #3c3d3e 87.5%, #3c3d3e), linear-gradient(60deg, rgba(60,61,62,0.5) 25%, transparent 25.5%, transparent 75%, rgba(60,61,62,0.5) 75%, rgba(60,61,62,0.5)), linear-gradient(60deg, rgba(60,61,62,0.5) 25%, transparent 25.5%, transparent 75%, rgba(60,61,62,0.5) 75%, rgba(60,61,62,0.5))',
        'pattern-2': 'url("./pages/assets/cinephile/cinephile-pattern.svg")',
        'wkn-pattern': 'url("./pages/assets/wkn/workana-pattern.svg")',
        'rentx-pattern': 'url(./pages/assets/rentx/rentx-pattern.svg)',
      },
      backgroundSize: {
        'pattern': '98px 171.5px;',
        'wkn-pattern': '98px',
        'rentx-pattern': '98px',
      },
      backgroundPosition: {
        'pattern': '0 0, 0 0, 49px 85.75px, 49px 85.75px, 0 0, 49px 85.75px;',
        'pattern-2': '0 0, 0 0, 49px 85.75px, 49px 85.75px, 0 0, 49px 85.75px;',
      },
      keyframes: {
        'slip-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-75%)',
          }
        },
        'scale-up': {
          '0%': {
            transform: 'scale(.5)',
          },
          '100%': {
            transform: 'scale(1)',
          }
        },
        appear: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        },
        'profile-pic': {
          '0%': {
            transform: 'scale(.40) translateX(0)',
          },
          '100%': {
            transform: 'scale(1) translateX(-25%)',
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "66%": {
            transform: "translate(0, 1px) scale(0.98)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        mark: {
          "0%": {
            scaleX: 0,
            // width: "0px",
          },
          "33%": {
            scaleX: .33,
            // width: "20px",
          },
          "66%": {
            scaleX: .66,
            // width: "40px",
          },
          "100%": {
            scaleX: 1,
            // width: "60px",
          }
        },
        'scale-rotate': {
            '0%': {
                transform: 'scale(1) rotate(0deg)',
            },
            '100%': {
                transform: 'scale(1.3) rotate(360deg)',
            }
        }
      },
      animation: {
        'slip-left': 'slip-left 600ms linear',
        'scale-up': 'scale-up 1s ease-in-out',
        'profile-pic': 'profile-pic 600ms linear',
        blob: 'blob 7s ease-in-out infinite',
        appear: 'appear 1600ms ease-in-out',
        float: 'float 5s ease-in-out infinite',
        mark: 'mark 1s ease-in-out linear',
        'scale-rotate': 'scale-rotate 400ms ease-in-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
