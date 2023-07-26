/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
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
        'quizspecifics':'#F3C5C5',
        'startquiz':'#EA8FEA',
        'interfaceqn':'#D9D9D9',
        'help':'#B8E8FC',
        'question':'#DBDFEA',
        'sidebar':'#EEF1FF',
        'options':'#F9F5E7',
        'qnnavbtn':'#EA8FEA',
        'unvisited':'#FFFFFF',
        'markedforreview':'#967BB6',
        'answered':'#90EE90',
        'notanswered':'#FFCCCB',
        'section':'#B2C8DF',
        'leaderboard':'#4942E4',
        'leaderboarddata':'#ECCDB4',
        'createquiz':'#40128B',
        'createquizprimary':'#ECE5C7',
        'createsection':'#D9D9D9',
        'createquestion':'#AAAAAA',
        'addquestion':'#D9D9D9'
      },
      maxHeight:{
        'ideal':'60vh',
        'interface':'60vh',
        'question':'27vh'
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}
