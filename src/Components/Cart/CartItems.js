import React from 'react';

function CartItems(props) {
    const price = `$${props.price.toFixed(2)}`
  return (
    <div className='flex justify-between py-3 px-2 border-b-4  rounded-lg hover:scale-105 mb-4 hover:border-green-500 transition duration-500 bg-gray-100 border-rose-500 items-center '>
        <div className='flex-col flex  items-start justify-start'>
        <div className='text-gray-600 font-semibold tracking-wide text-xl'>item: {props.name}</div>
        <div className='text-gray-600 font-semibold tracking-wide text-lg'>Quantity: {props.amount}</div>
        <div className='text-gray-600 font-semibold tracking-wide text-lg'>price: {price}</div>
        </div>
        <div className='flex justify-between items-center text-2xl   space-x-2 '>
        <button className=' px-6 text-center rounded-xl bg-gray-700 text-gray-100 shadow-lg font-bold transition duration-300 hover:bg-rose-700' onClick={props.onRemove}><span>-</span></button>
        <button className=' px-6 rounded-xl bg-green-500  text-green-200 shadow-lg flex justify-center transition duration-300 items-center font-bold hover:shadow-3xl hover:bg-green-600' onClick={props.onAdd}><span className=''>+</span></button>
        </div>
    </div>
  )
}

export default CartItems