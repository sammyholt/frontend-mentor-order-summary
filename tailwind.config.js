module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
        primary: {
          pale: '#e0e8ff',
          bright: '#3829e0'
        },
        neutral: {
          pale: '#f5f7ff',
          desaturated: '#7280a7',
          dark: '#1f2f56'
        }
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'desktop': "url('~@/assets/images/pattern-background-desktop.svg')",
        'mobile': "url('~@/assets/images/pattern-background-mobile.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
