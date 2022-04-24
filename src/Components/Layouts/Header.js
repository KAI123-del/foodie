import React from 'react';
import mealsImage from '../../Images/HeadImg.jpg'
import '../../index.css'


import Button from '../UI/Button.js'



const Header=(props) => {
  return (
    <React.Fragment>
        
        {/* ==================Background Image================ */}
        <div className='relative'>
              <img src={mealsImage} alt=" delicious food" className='relative opacity-90  w-full '/>
              
              <div className=' w-full  absolute top-0 h-full bg-gradient-to-br from-gray-900 to-gray-800   opacity-50'/>
        </div>


        {/* ====================Cart/Button==================== */}

        <div className='group absolute  top-6 right-12 '>

            <Button onClick={props.onShow} />
             
        </div>


        {/* ==========================Hero===================== */}

        
          
             {/* <img src={pizzaIcon} alt="pizza logo" className='h-20 w-24'/> */}
            
             <div className='flex items-center justify-center'>
                  
                  <div className='absolute  top-52 text-center  '>
                     
                     <h1 className='mb-3'>
                     <strong className='mr-2 text-9xl font-bold  tracking-widest  font-gotham text-white'>F<span className='text-amber-400'>oo</span><span>dies</span></strong>
             
                     </h1>
                    
                     <span className='text-3xl tracking-widest  text-white font-gotham '>A place where your food search ends . </span>
                    
                  </div>
             </div>
          
          
           
           
           
           
        
    </React.Fragment>
  )
}

export default Header;