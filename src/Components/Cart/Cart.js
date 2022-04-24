import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-Context';
import CartItems from './CartItems';


function Cart(props) {
   const CartCtx = useContext(CartContext);
   const totalAmount =`$${CartCtx.totalAmount.toFixed(2)}`;
   const hasItems=CartCtx.items.length>0;
   const cartItemRemoveHandler = (id) => {
       CartCtx.removeItem(id)
   };

  const cartItemAddHandler = (item) => {
      CartCtx.addItem(item)
  };
  

  

   const CartItem=<div>{CartCtx.items.map((item)=><CartItems price={item.price} amount={item.amount} name={item.name} onRemove={cartItemRemoveHandler.bind(null, item.id)}
   onAdd={cartItemAddHandler.bind(null, item)}/>)
   }</div>
    return (
        <React.Fragment>


            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>


                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block  align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div>

                            <div className=" text-center lg:mt-2 sm:mt-5">
                                <h3 className="text-2xl  font-semibold font-gotham border-b-2 border-green-500  tracking-widest  text-gray-600" id="modal-title">
                                    Order Summary
                                </h3>
                                <div className="mt-8">
                                    <h1 className=''>{CartItem}</h1>
                                    <h1 className=" text-gray-600  text-2xl font-semibold">Total Amount : {totalAmount}</h1>

                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                       {hasItems &&  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white tracking-widest hover:bg-green-700 focus:outline-none  sm:col-start-2 sm:text-sm" onClick={props.onClose}>
                            Order
                        </button>}
                        <button type="button" className="mt-3 w-full  inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium tracking-widest  text-gray-700 hover:bg-gray-200 focus:outline-none  sm:mt-0 sm:col-start-1 sm:text-sm" onClick={props.onClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>


        </React.Fragment >
    )
}

export default Cart