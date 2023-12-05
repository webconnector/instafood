import React from 'react'
import { PiBowlFoodFill } from 'react-icons/pi'

const Footer = () => {
    return (
        <div className='bg-black text-white mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                {/* about instafood  */}
                <div className='w-full md:w-1/4'>
                    <div className='flex flex-row items-center cursor-pointer hover:text-brightColor pb-4 '>
                        <span>
                            <PiBowlFoodFill size={32} />
                        </span>
                        <h1 className='text-xl font-semibold'>Instafood</h1>
                    </div>
                    <p className='text-sm'>Indulge in a symphony of flavors, where each plate is canvas for culinary excellence</p>
                </div>

                {/* links  */}
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                    <nav className='flex flex-col gap-2'>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">About</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">Premium Menu</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">Our Dishes</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">Review</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">Our Policy</a>
                    </nav>
                </div>

                {/* contact links */}
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Get Intouch</h1>
                    <nav className='flex flex-col gap-2'>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">info@instafood.com</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">+2348145599439</a>
                        <a href="/" className="hover:text-brightColor transition-all cursor-point">Social Media</a>
                    </nav>
                </div>
            </div>

            {/* copyright  */}
            <div>
                <p className='text-center py-4'>@copyright Developed with love by <span className='text-brightColor'><a href="www.faceboo.com/loyablaise">Loya Blaise</a></span> | All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
