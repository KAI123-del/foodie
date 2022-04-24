import Header from './Components/Layouts/Header.js';
import React,{useState} from 'react';
import Meals from './Components/Meals/Meals.js';
import About from './Components/Layouts/About.js';
import Footer from './Components/Layouts/Footer.js';
import Cart from './Components/Cart/Cart.js';
import CartProvider from './Store/CartProvider.js';




// import './index.css';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider className="">
     
      <Header onShow={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      
      <Meals/>
      <About/>
      <Footer/>
     
     
    </CartProvider>
  );
}

export default App;
