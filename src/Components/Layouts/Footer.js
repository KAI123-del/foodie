import '../../index.css';
import FootUi from '../UI/FootUi.js';
import { ImGithub } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'


import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <div className='relative  '>
                <FootUi className="absolute w-full  top-0 " />
                <div className='relative px-16 py-4 '>
                    <div className=' flex justify-start items-center text-white'>
                        
                       <div>
                       <div className=' font-gotham  tracking-widest  text-9xl'>
                            <span className='opacity-72'>F</span><span className='text-amber-400 opacity-30'>OO</span><span className='opacity-40 text-gray-500 '>D</span><span className='opacity-30 text-gray-500'>I</span><span className='text-gray-600 opacity-30'>E</span><span className='text-gray-600 opacity-20'>S</span>

                        </div>
                       </div>

                    </div>
                    <div className='relative '>
                        <div className="lg:flex justify-between items-center px-24 border-b    pb-20   ">
                            <div className='  flex items-center justify-between px-20'>
                                <div className=' pt-16 '>
                                    <div className='translate rotate-45 '>
                                        <div className='flex  space-x-12 justify-center items-center' >
                                            <a href='https://github.com/KAI123-del'><ImGithub className='text-green-500 hover:text-white transition duration-300 text-5xl  -rotate-45' /></a>
                                            <a href="https://www.linkedin.com/in/kailash-bhatt-7571991b4/"> <ImLinkedin2 className='text-sky-600 text-5xl hover:text-white transition duration-300  -rotate-45' /> </a>
                                        </div>
                                        <div className='flex space-x-12 mt-12 justify-center items-center'>
                                            <a href="https://www.instagram.com/bhatt.kailash/"> <GrInstagram className='text-pink-500 text-5xl hover:text-white transition duration-300  -rotate-45' /> </a>
                                            <a href="https://www.facebook.com/BHATT.KAI/"> <FaFacebookF className='text-blue-300 text-5xl hover:text-white transition duration-300 -rotate-45' /> </a>
                                        </div>
                                    </div>
                                    <div className='transform opacity-40 -translate-y-20 '>
                                        <div className='border-b  -rotate-45'></div>
                                        <div className='border-b rotate-45'></div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex col-span-5 items-center  text-gray-400 text-right  justify-center md:space-x-12 space-x-6 lg:space-x-32 ">
                                <div className="lg:space-y-6 space-y-2" >
                                    <h3 className="lg:text-lg text-sm md:text-lg font-gotham tracking-widest font-bold text-gray-100 "> COMPANY</h3>
                                    <p className='hover:text-white transition duration-300'>About</p>
                                    <p className='hover:text-white transition duration-300'>Blog</p>
                                    <p className='hover:text-white transition duration-300'>Careers</p>
                                </div>
                                <div className="lg:space-y-6 space-y-2">
                                    <h3 className="lg:text-lg text-sm md:text-lg font-gotham tracking-widest font-bold text-gray-100">PRODUCT</h3>
                                    <p className='hover:text-white transition duration-300'>Pricing</p>
                                    <p className='hover:text-white transition duration-300'>Documentation</p>
                                    <p className='hover:text-white transition duration-300'>Guides</p>
                                </div>
                                <div className="lg:space-y-6 space-y-2">
                                    <h3 className="lg:text-lg text-sm md:text-lg font-gotham tracking-widest font-bold text-gray-100">LEGAL STUFF</h3>
                                    <p className='hover:text-white transition duration-300'>Terms</p>
                                    <p className='hover:text-white transition duration-300'>Privacy</p>
                                    <p className='hover:text-white transition duration-300'>Rules</p>
                                </div>

                            </div>
                        </div>
                    </div >

                    <div className="flex justify-center   tracking-widest text-xl  lg:space-x-0 text-gray-200 items-center mt-16">
                        <div className="pb-12 lg:pb-0  ">Copyright © 2022-infinity <span className="hidden font-gotham lg:inline-block">Kailash Bhatt</span></div>




                    </div>
                </div>


            </div>





        </React.Fragment>
    )
}

export default Footer