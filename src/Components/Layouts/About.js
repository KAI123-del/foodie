import '../../index.css';
import Aboutimg from '../../Images/aboutImg.png';
import {FaDollarSign} from 'react-icons/fa'
import {ImTruck} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'


import React from 'react'

function About() {
  return (
    <React.Fragment>
        
           <div className='flex text-center pt-12 justify-center items-center'>
               <div>
                  <h1 className='text-xl text-green-500 font-bold tracking-wide'>About Us</h1>
                  <h1 className='text-4xl font-bold mb-4 tracking-widest pt-2'>WHY CHOOSE US?</h1>
               </div>
           </div>
           <div className='flex justify-center '>
              <img src={Aboutimg} className='pt-12 w-1/2'/>
              <div className='px-16  pt-20'>
                  <p className='text-start text-3xl font-bold mb-4'>Quality Food Delevired To Your Doorstep</p>
                  <p className='text-xl text-gray-500 font-medium leading-8 mb-8'>Hey there, Im Kailash bhatt (owner of this small project/react developer) . Foodies is actually just a concept right now on which Im going to work on someday . For now I have just created this website in order to practice my advanced react.js skills .Its been fun creating the user-interface for this not so big project .The styling part of this website is carried out using a well-known CSS library 'TailwindCss'. If in case anyone wants to use the source code for this website then click on the link on the right side : </p>
                  <div className='grid grid-cols-2 gap-x-2 gap-y-2 text-gray-600 font-semibold text-2xl'>
                      <div className='flex border justify-center items-center space-x-4 h-16 bg-gray-200 rounded-lg' ><ImTruck className='text-green-500'/> <h1>Free Delivery</h1></div>
                      <div className='flex border justify-center items-center space-x-2 bg-gray-200 rounded-lg'><FaDollarSign className='text-green-500'/> <h1>Easy Payments</h1></div>
                      <div className='col-span-2 border flex justify-center items-center h-16 space-x-6 bg-gray-200 rounded-lg'><FaHandsHelping className='text-green-500'/> <h1>24/7 Service</h1></div>
                  </div>
              </div>
            </div>

        
        
    </React.Fragment>
  )
}

export default About;