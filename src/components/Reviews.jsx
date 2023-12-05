import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import reviewer1 from '../assets/images/loyablaise.jpg'

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col  bg-gray-50 items-center justify-center px-5 mt-8 md:px-32 '>
      <h1 className='text-center font-semibold text-4xl mb-8 md:text-start inline-block overflow-hidden hover:bg-brightColor hover:text-white transition duration-300 '>What Our Customers Are Saying</h1>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewCard img={reviewer1} name="Loya Blaise" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, facilis totam. 
                    Maiores minus cumque dolorum consequatur commodi, nesciunt aspernatur nostrum ipsum veritatis 
                    reprehenderit dolores earum pariatur iure odit minima nemo!"/>
        <ReviewCard img={reviewer1} name="Loya Blaise" message="I love buying with them amet consectetur adipisicing elit. Dicta, facilis totam. 
                    Maiores minus cumque dolorum consequatur commodi, nesciunt aspernatur nostrum ipsum veritatis"/>
        <ReviewCard img={reviewer1} name="Loya Blaise" message="Totam dolorum, molestiae in libero necessitatibus deleniti quod inventore cum odio explicabo quasi ab. nesciunt aspernatur nostrum ipsum veritatis 
                    reprehenderit dolores earum pariatur iure odit minima nemo!"/>
      </div>
    </div>
  );
};



export default Reviews
