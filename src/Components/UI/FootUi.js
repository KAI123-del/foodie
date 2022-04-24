import '../../index.css';
import Foot from '../../Images/footer.jpg';
import React from 'react';


function FootUi() {
  return (
    <React.Fragment>
        
    {/* ==================Background Image================ */}
    <div className='absolute'>
       <div className='relative'>
          <img src={Foot} alt=" delicious food" className='relative opacity-90  w-full '/>
          
          <div className=' w-full  absolute top-0 h-full bg-gradient-to-br from-gray-900 to-gray-800   opacity-90'/>
       </div>
    </div>
   
</React.Fragment>
  )
}

export default FootUi;