import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-Context.js';
import Form from '../UI/Form.js'





const MealItem=(props)=> {
  const CartCtx=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`
    const addAmountHandler=(amount)=>{
      CartCtx.addItem({
        id:props.id,
        key:props.id,
        name:props.name,
        price:props.price,
        amount:amount
      })

    }
    
  return (
    <React.Fragment>
    <div className='text-center  bg-white rounded-xl    text-gray-600 shadow-xl tracking-widest text-3xl'>
        <div  className=''>{props.image}</div>
        <div className='flex justify-center items-center mt-1 '>
            <h1 className='font-gotham text-gray-700 mt-1'>{props.name}</h1>
        </div>
        <div className='flex text-2xl  justify-center items-center font-bold text-green-500 mt-2'><h1 >{price}</h1></div>
        <div className='mb-1 mt-1 text-xl font-semibold'>{props.des}</div>
        <Form id={props.id} addToCart={addAmountHandler}/>
    </div>
    </React.Fragment>
  )
}

export default MealItem;