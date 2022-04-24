import React from 'react'

function Order(props) {
  const orderHandler =()=>{
    
  }
  return (
    <React.Fragment>
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>


          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


          <div className="inline-block  align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white tracking-widest hover:bg-green-700 focus:outline-none  sm:col-start-2 sm:text-sm" onClick={orderHandler}>
                Order
              </button>


            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">


          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Order