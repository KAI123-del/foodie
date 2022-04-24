import '../../index.css';
import { ImCart } from 'react-icons/im';
import React,{useContext,useState,useEffect} from 'react';

import CartContext from '../../Store/Cart-Context';

const Button=(props)=>{
    const [btnIsHighLighted,setBtnIsHighLighted]=useState(false)
    const CartCtx=useContext(CartContext);
    const {items}=CartCtx
    useEffect(()=>{
        if(items.length===0){
            return;
        }else{
            setBtnIsHighLighted(true)
        }
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300);
        return () =>{
            clearTimeout(timer)
        }
        
    },[items])
    const numberOfCartItems=CartCtx.items.reduce((curNumber,item)=>{return curNumber+item.amount},0)
    return (
        <button className='text-white shadow  shadow-lime-100 group-hover:shadow-red-100  group-hover:border-purple-500 px-6 py-1 border-2 border-sky-300 rounded-full flex justify-center items-center  font-semibold tracking-wide text-xl transition duration-500' onClick={props.onClick}>
                 <ImCart className='mr-2 '/>
                 <h1>Cart</h1>
                 <span className='   rounded-full  py-1   px-5 '>{numberOfCartItems}</span>
         </button>

    )
}

export default Button ;