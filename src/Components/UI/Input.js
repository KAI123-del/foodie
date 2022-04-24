import '../../index.css';

import React, { forwardRef } from 'react'

const Input=React.forwardRef((props,ref) =>{
  return (
    <React.Fragment>
        <div className='flex justify-center space-x-4 items-center'>
        <label htmlFor='props.input.id' className='text-xl'>{props.label}</label>
        <input ref={ref} {...props.input} className="text-xl hover:border-green-500 border-b-4 outline-none transition duration-300   w-8 border-rose-500 "/>
        </div>
    </React.Fragment>
  )
});

export default Input