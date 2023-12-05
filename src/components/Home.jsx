import React from 'react'
import Button from '../layouts/Button'
// import NavBar from '/components/NavBar'

const Home = () => {
    return (
        // <div className="relative min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/images/bg.jpg')] bg-cover bg-no-repeat">
        //     {/* Dark overlay */}
        //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        //     <div className='w-full lg:w-2/3 space-y-5 z-10'>
        //         <h1 className='text-white font-semibold text-6xl'>Satisfy Your Cravings, Ignite Your Senses.</h1>
        //         <p className='text-white'>Join us on a culinary exploration, where each dish is a work of art and every meal is an event.
        //         Elevate your dining adventure with our curated menu of culinary delights.</p>
        //         <div className=''>
        //             <Button title="Order Now" />
        //         </div>
        //     </div>
        // </div>

        <div className="relative min-h-screen flex flex-row justify-between items-center mb-8 lg:px-32 px-5 ">
            {/* Content */}
            <div className='w-full lg:w-2/3 space-y-5 text-white relative z-10'>
                <h1 className='font-semibold text-6xl'>Satisfy Your Cravings, Ignite Your Senses.</h1>
                <p>Join us on a culinary exploration, where each dish is a work of art and every meal is an event. Elevate your dining adventure with our curated menu of culinary delights.</p>
                <div className=''>
                    <Button title="Order Now" />
                </div>
            </div>

            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-no-repeat">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            {/* Navigation Bar
            <NavBar /> */}
        </div>



    );
};

export default Home

