import React from 'react'
import DishesCard from '../layouts/DishesCard'
// import menu1 from '../assets/images/JollofRicewithChicken.jpg'
import menu2 from '../assets/images/EfoRirowithPoundedYam.jpg'
import menu3 from '../assets/images/chicken-tandoori.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-center font-semibold text-4xl mb-8 md:text-start inline-block overflow-hidden hover:bg-brightColor hover:text-white transition duration-300 '>Premium Menus</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={menu3} title="Chicken Tandoori" price="N3,000" />
        <DishesCard img={menu2} title="Efo Riro/Pounded Yam" price="N2,500" />
        <DishesCard img={menu3} title="Chicken Tandoori" price="N3,000" />
      </div>
    </div>
  )
}

export default Menu
