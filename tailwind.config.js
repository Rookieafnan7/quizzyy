/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif']
      },
      colors:{
        'navbar':'#554994',
        'title':'#98A8F8',
        'description':'#E5E0FF',
        'createdby':'#FFE6E6',
        'quizspecifics':'#F3C5C5'
      },
      maxHeight:{
        'ideal':'60vh'
      }
    },
  },
  plugins: [],
}
