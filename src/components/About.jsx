import React from 'react'
import img from '../assets/images/about.jpg'
import Button from '../layouts/Button'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row bg-gray-50 justify-center gap-8  items-center mt-8 px-5 lg:px-32'>
            <img src={img} alt="abaout-image" className='md:w-1/3 transform hover:scale-110 transition duration-300 ease-in-out" ' />
            <div className='space-y-4'>
            <h1 class='text-center font-semibold text-4xl mt-4 md:text-start md:inline-block overflow-hidden hover:bg-brightColor hover:text-white transition duration-300'>Why Choose Us?</h1>
                <div>
                    <h4 className='font-semibold space-y-8'>1. Fresh and Locally Sourced Ingredients</h4>
                    <p>We prioritize quality by sourcing the freshest, locally sourced ingredients to ensure a delightful and sustainable dining experience.</p>
                </div>
                <div>
                    <h4 className='font-semibold space-y-8'>2. Memorable Dining Moments</h4>
                    <p>We aim to create not just meals but moments, ensuring that each visit to our restaurant is a memorable and cherished experience.</p>
                </div>
                <div className='flex justify-center lg:justify-start'>
                <Button title="Learn More" />
                </div>
            </div>
        </div>
    );
};

export default About
