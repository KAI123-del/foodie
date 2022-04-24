import '../../index.css';

import React from 'react'

const MealsSummary=()=> {
  return (
    <React.Fragment>
     <div className='flex justify-center items-center bg-gray-200 '>
          <section className='text-center text-xl rounded-lg  -translate-y-12 text-white  leading-6 shadow-xl  pb-6 pt-4 bg-gradient-to-r from-sky-400 to-teal-400 via-teal-500 w-3/4' >
               <h2 className='tracking-widest mb-3 text-3xl font-gotham'>Delicious Food, Delivered To You</h2>
               <p>
               Choose your favorite meal from our broad selection of available meals
               and enjoy a delicious lunch or dinner at home.
              </p>
              <p>
               All our meals are cooked with high-quality ingredients, just-in-time and
               of course by experienced chefs!
              </p>
           </section>
    </div>
    </React.Fragment>
  )
}

export default MealsSummary;