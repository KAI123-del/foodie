import React from 'react';
import '../../index.css';
import Barbecue from '../../Images/BarbecueBurger.jpg';
import Cheese from '../../Images/cheeseBurger.jpg';
import Green from '../../Images/greenBowl.jpg';
import Schnitzel from '../../Images/Schnitzel.jpg';
import Sushi from '../../Images/sushi.jpg';
import MealItem from './MealItem';
import Pizza from '../../Images/pizza-1.png';
import Chicken from '../../Images/Chicken.png'
import Dessert from '../../Images/Dessert.jpg'
import Noodles from '../../Images/Noodles.png'





var sushi = <img className='rounded-t-xl' src={Sushi}/>
var cheese = <img className='rounded-t-xl' src={Cheese}/>
var green = <img className='rounded-t-xl' src={Green}/>
var schnitzel = <img className='rounded-t-xl' src={Schnitzel}/>
var pizza = <img className='rounded-t-xl mt-6' src={Pizza}/>
var chicken = <img className='rounded-t-xl' src={Chicken}/>
var dessert = <img className='rounded-t-xl' src={Dessert}/>
var noodles = <img className='rounded-t-xl' src={Noodles}/>
var barbecue = <img className='rounded-t-xl' src={Barbecue}/>

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      img:sushi
    
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      img:schnitzel
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      img:barbecue
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      img:green
    },
    {
        id:'m5',
        name:'Cheese Burger',
        description:'American,raw with alott of Cheese',
        price:15.67,
        img:cheese
    },
    {
      id:'m6',
      name:'Dessert',
      description:'sweet,cool and tasty',
      price:15.68,
      img:dessert
    },
    {
      id:'m7',
      name:'Spicy Chicken',
      description:'All in one Masala Chicken',
      price:20.85,
      img:chicken
    },
    {
      id:'m8',
      name:'Noodles',
      description:'Italian special baked with love',
      price:16.28,
      img:noodles
    },
    {
      id:'m9',
      name:'Pizza',
      description:'your favorite Mexican pizza',
      price:18.25,
      img:pizza
    },
   
  ];




const AvailableMeals=()=> {
    const mealsList = DUMMY_MEALS.map(meals=><MealItem image={meals.img}   key={meals.id} id={meals.id} des={meals.description} name={meals.name} price={meals.price}/>)
    
  return (
    <div className='  bg-gray-200 px-8 pb-12' >
        {/* <div className='bg-gradient-to-r translate-y-16 translate-x-8  from-red-500 to-pink-400 via-pink-300 bg-clip-text text-transparent'><h1 className='text-4xl   font-gotham tracking-widest '>Menu</h1></div> */}
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl font-medium tracking-wide mt-12 text-red-400'>Our Menu</h1>
          
        </div>
        <div className='flex justify-center items-center'>
        <p className='text-5xl text-gray-700 font-semibold mt-3 mb-6'>TODAY'S SPECIALITY</p>
        </div>
         
        <div className='grid grid-cols-3 bg-gradient-to-b from-gray-200 to-gray-500 via-gray-400 pt-4 gap-y-8 gap-x-8  px-4  rounded-xl pb-8  '>
            
          {mealsList}


        </div>
    </div>
  )
}

export default AvailableMeals;