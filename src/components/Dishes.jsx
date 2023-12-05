import React from 'react'
import DishesCard from '../layouts/DishesCard'
import dish1 from '../assets/images/Carrot&BeefBrisketCasserole.png'
import dish2 from '../assets/images/Chickennuggetsandsauce.jpg'
import dish3 from '../assets/images/Mexicantacoswithmeat.jpg'
import dish4 from '../assets/images/fettuccinepastawithmeatballs.jpg'
import dish5 from '../assets/images/ChickenSkewerswithslicespeppers.png'
import dish6 from '../assets/images/friedtubtimfishsalad.png'

const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center mt-8 px-5 lg:px-32 '>
      <h1 className='text-center font-semibold text-4xl mb-8 md:text-start inline-block overflow-hidden hover:bg-brightColor hover:text-white transition duration-300'>Our Dishes</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={dish1} title="Carrot & Beef Brisket Casserole" price="N5,000" />
        <DishesCard img={dish2} title="Chicken nuggets & Sauce" price="N5,000" />
        <DishesCard img={dish3} title="Mexican Tacos with meat" price="N5,000" />
        <DishesCard img={dish4} title="Fettuccine Pasta with Meatballs " price="N5,000" />
        <DishesCard img={dish5} title="Chicken Skewers with slicespeppers & dill" price="N5,000" />
        <DishesCard img={dish6} title="Fried Tubtim Fish Salad" price="N5,000" />
      </div>
    </div>
  );
};

export default Dishes
