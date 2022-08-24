/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens :{  
      'xsm' : '400px' ,
      'sm' : '500px' , 
      'md' : '1000px' ,
      'lg' : '1200px' ,
    } , 
    extend: {
      backgroundImage: {
        'backsidecard' : "url('/public/images/bg-card-back.png') " , 
        'frontsidecard' : "url('/public/images/bg-card-front.png') " , 
        'mobile' : "url('/public/images/bg-main-mobile.png') " , 
      },
      borderRadius : {
        '1rem' : '1rem' , 
      } , 
      gridTemplateColumns : {
        '1fr2fr' : '1fr 2fr' , 
        '1fr1fr' : '1fr 1fr' , 
      },
      height : {
        '3' : '3rem' , 
        '2' : '2rem' , 
        '50vh' : '50vh' ,
        '20' : '12rem' ,
      } , 
      width : {
        '3' : '3rem' , 
        '2' : '2rem' , 
      },
      spacing : {
        '8%' : '6rem' ,
        '5%' : '10%' , 
        '1%' : '1%' , 
      }
    },
  },
  plugins: [],
}
