import '../../index.css';
import Input from './Input.js'
import { ImCart } from 'react-icons/im';
import React,{useRef , useState} from 'react';

function Form(props) {
  const [AmountIsValid,setAmountIsValid]=useState(true);
  const amountInputRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountToNumber= +enteredAmount;

    if(enteredAmount.trim().length===0||enteredAmountToNumber <1||enteredAmountToNumber >5){
      setAmountIsValid(false);
      return;
    }
    props.addToCart(enteredAmountToNumber)

  }
  return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <div className='flex justify-between items-center p-4'>
            <Input
            ref={amountInputRef } 
            label='Amount :'
            input={{
                id:'amount_' + props.id,
                type:'number',
                min:'1',
                max:'10',
                step:'1',
                defaultValue:'1'
            }}
              
            />
            <button type="submit" className='flex space-x-4 px-6 py-2 bg-green-500 transition duration-500 shadow-xl hover:shadow-3xl hover:bg-rose-600 hover:text-rose-200 rounded-full text-green-100  justify-between items-center '>
            <ImCart className=' '/>
            <h1 className='text-xl'>Add</h1>
            </button>
           
            </div>
            {!AmountIsValid && <p className=' p-4 text-lg tracking-wide text-red-500'>Please enter a valid amount (1-5).</p>}
        </form>
    </React.Fragment>
  )
}

export default Form;